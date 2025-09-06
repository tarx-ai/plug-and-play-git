'use client';

import * as React from 'react';

type Msg = { role: 'user'|'assistant'|'system'; content: string };

export default function ChatPanel({ placeholder = 'Ask TARX...' }:{
  placeholder?: string;
}) {
  const [messages, setMessages] = React.useState<Msg[]>([]);
  const [input, setInput] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  async function onSend(e?: React.FormEvent) {
    e?.preventDefault();
    if (!input.trim() || loading) return;

    const next = [...messages, { role: 'user', content: input.trim() } as Msg];
    setMessages(next);
    setInput('');
    setLoading(true);

    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ messages: next }),
      headers: { 'content-type': 'application/json' },
    });

    if (!res.ok || !res.body) {
      setLoading(false);
      setMessages(m => [...m, { role: 'assistant', content: '⚠️ AI error' }]);
      return;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let acc = '';
    setMessages(m => [...m, { role: 'assistant', content: '' }]);

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      acc += decoder.decode(value, { stream: true });
      setMessages(m => {
        const last = m[m.length - 1];
        if (!last || last.role !== 'assistant') return m;
        const copy = m.slice();
        copy[copy.length - 1] = { ...last, content: acc };
        return copy;
      });
    }

    setLoading(false);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-xl border border-white/10 p-3 min-h-[180px] bg-black/20">
        {messages.length === 0 ? (
          <div className="opacity-60 text-sm">No messages yet.</div>
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

      <form onSubmit={onSend} className="flex gap-2">
        <input
          className="flex-1 rounded-lg border border-white/10 bg-black/30 px-3 py-2 outline-none"
          placeholder={placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg border border-white/10 px-3 py-2 hover:bg-white/5 disabled:opacity-50"
        >
          {loading ? '…' : 'Send'}
        </button>
      </form>
    </div>
  );
}

