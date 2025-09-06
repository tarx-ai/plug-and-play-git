"use client";

export default function McpToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">MCP Tools Integration</h1>
          <p className="text-zinc-400">
            Chat with AI that can call tools, or use tools directly from the UI.
          </p>
        </div>

        <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-6">
          <div className="text-center text-zinc-400">
            <p>MCP Tools integration coming soon...</p>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-zinc-900/30 rounded-xl border border-zinc-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-3">Available Tools</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-300">supabase.schema</span>
                <span className="text-zinc-500">Database schema</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-300">supabase.sql</span>
                <span className="text-zinc-500">Run SQL queries</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-300">apollo.introspect</span>
                <span className="text-zinc-500">GraphQL schema</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-300">github.repos</span>
                <span className="text-zinc-500">List repositories</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-300">github.issues</span>
                <span className="text-zinc-500">Get issues</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-300">file.read</span>
                <span className="text-zinc-500">Read files</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-300">file.list</span>
                <span className="text-zinc-500">List directory</span>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/30 rounded-xl border border-zinc-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-3">How to Use</h3>
            <div className="space-y-3 text-sm text-zinc-300">
              <div>
                <strong className="text-white">AI Chat:</strong> Ask natural language questions. The AI will automatically call relevant tools.
              </div>
              <div>
                <strong className="text-white">Direct Tools:</strong> Click any tool button to execute it directly and see results.
              </div>
              <div>
                <strong className="text-white">Results Panel:</strong> Structured data appears in the right panel for easy viewing.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
