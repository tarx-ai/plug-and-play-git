'use client';

import * as React from 'react';
import { useChat } from 'ai/react';

type Msg = { role: 'user'|'assistant'|'system'; content: string };
type ToolResult = { type: "text"|"json"|"table"|"error"; [k:string]: any };

export default function ChatPanelWithTools({ placeholder = 'Ask TARX...' }:{
  placeholder?: string;
}) {
  const [sideData, setSideData] = React.useState<ToolResult | null>(null);
  const [tools, setTools] = React.useState<any[]>([]);
  const [loadingTools, setLoadingTools] = React.useState(false);

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
    onFinish: (message) => {
      // Check if the message contains tool results
      if (message.toolInvocations && message.toolInvocations.length > 0) {
        const lastTool = message.toolInvocations[message.toolInvocations.length - 1];
        if (lastTool.result) {
          setSideData(lastTool.result);
        }
      }
    },
  });

  // Load available tools
  React.useEffect(() => {
    async function loadTools() {
      setLoadingTools(true);
      try {
        const res = await fetch('/api/tools');
        const toolsData = await res.json();
        setTools(toolsData);
      } catch (error) {
        console.error('Failed to load tools:', error);
      } finally {
        setLoadingTools(false);
      }
    }
    loadTools();
  }, []);

  // Call tool directly
  async function callTool(toolName: string, args: any = {}) {
    try {
      const res = await fetch(`/api/tools/${toolName}`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(args),
      });
      const result: ToolResult = await res.json();
      setSideData(result);
    } catch (error) {
      console.error('Tool call failed:', error);
      setSideData({ type: 'error', message: 'Tool call failed' });
    }
  }

  return (
    <div className="flex gap-4 h-full">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col gap-3">
        <div className="rounded-xl border border-white/10 p-3 min-h-[300px] bg-black/20 flex-1">
          {messages.length === 0 ? (
            <div className="opacity-60 text-sm">No messages yet. Try asking about the database schema or GitHub repos.</div>
          ) : (
            <div className="space-y-3">
              {messages.map((m, i) => (
                <div key={i} className="text-sm">
                  <span className="opacity-60 mr-2">{m.role}:</span>
                  <span className="whitespace-pre-wrap">{m.content}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            className="flex-1 rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none"
            placeholder={placeholder}
            value={input}
            onChange={handleInputChange}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="rounded-lg border border-white/10 px-3 py-2 hover:bg-white/5 disabled:opacity-50"
          >
            {isLoading ? '…' : 'Send'}
          </button>
        </form>
      </div>

      {/* Tool Palette */}
      <div className="w-64 space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-zinc-400 mb-2">Tools</h3>
          <div className="space-y-1">
            {loadingTools ? (
              <div className="text-xs text-zinc-500">Loading tools...</div>
            ) : (
              tools.map((tool) => (
                <button
                  key={tool.name}
                  onClick={() => callTool(tool.name)}
                  className="w-full text-left text-xs p-2 rounded border border-zinc-700 hover:border-zinc-500 transition"
                >
                  <div className="font-medium">{tool.name}</div>
                  <div className="text-zinc-500">{tool.description}</div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Secondary Canvas */}
        <div>
          <h3 className="text-sm font-semibold text-zinc-400 mb-2">Results</h3>
          <div className="rounded-xl border border-zinc-800 p-3 min-h-[200px] bg-black/10">
            <Secondary data={sideData} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Secondary({ data }: { data: ToolResult | null }) {
  if (!data) return <p className="text-zinc-500 text-sm">No structured output yet.</p>;
  
  if (data.type === "table")
    return (
      <div className="overflow-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-zinc-700">
              {data.columns.map((c: string) => (
                <th key={c} className="text-left p-2 font-medium">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((r: any[], i: number) => (
              <tr key={i} className="border-b border-zinc-800">
                {r.map((v, j) => (
                  <td key={j} className="p-2 text-zinc-300">{String(v)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    
  if (data.type === "json") 
    return (
      <pre className="text-xs whitespace-pre-wrap text-zinc-300 overflow-auto">
        {JSON.stringify(data.data, null, 2)}
      </pre>
    );
    
  if (data.type === "text") 
    return <p className="text-sm text-zinc-300">{data.text}</p>;
    
  return <p className="text-red-400 text-sm">Error: {data.message ?? "Tool failed"}</p>;
}
