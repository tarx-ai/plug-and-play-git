"use client";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (u: string) => fetch(u).then(r => r.json());

export default function Ops() {
  const { data, mutate, isLoading } = useSWR<any[]>("/api/variants", fetcher);
  const [slug, setSlug] = useState("home");
  const [title, setTitle] = useState("");

  async function make() {
    await fetch("/api/variants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug: slug === "home" ? "/" : slug, title }),
    });
    setTitle("");
    await mutate();
  }

  async function del(id: string) {
    await fetch(`/api/variants/${id}`, { method: "DELETE" });
    await mutate();
  }

  async function approve(id: string) {
    await fetch(`/api/variants/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "approve" }),
    });
    await mutate();
  }

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">TARX Ops Dashboard</h1>

      <div className="grid gap-3 sm:grid-cols-3 mb-6">
        <input
          className="px-3 py-2 rounded bg-zinc-900 border border-zinc-700"
          placeholder="slug (/, pricing, w/alpha)"
          value={slug}
          onChange={e => setSlug(e.target.value)}
        />
        <input
          className="px-3 py-2 rounded bg-zinc-900 border border-zinc-700"
          placeholder="title (optional)"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button
          onClick={make}
          className="rounded px-3 py-2 bg-emerald-600 hover:bg-emerald-500"
        >
          New Variant
        </button>
      </div>

      <div className="rounded border border-zinc-800 divide-y divide-zinc-800">
        <div className="px-3 py-2 text-xs uppercase tracking-wide text-zinc-400 grid grid-cols-6">
          <div>ID</div><div>Slug</div><div>Title</div><div>Status</div><div>Preview</div><div>Actions</div>
        </div>
        {isLoading ? (
          <div className="p-4">Loading…</div>
        ) : (data ?? []).map(v => (
          <div key={v.id} className="px-3 py-2 grid grid-cols-6 items-center">
            <div className="font-mono text-xs">{v.id}</div>
            <div>{v.slug}</div>
            <div className="truncate">{v.title}</div>
            <div>
              <span className={`text-xs px-2 py-1 rounded ${v.status === "approved" ? "bg-emerald-700" : "bg-zinc-700"}`}>
                {v.status}
              </span>
            </div>
            <div>
              <a className="underline"
                 href={`/_variants/${encodeURIComponent(v.slug)}/${v.id}`}
                 target="_blank" rel="noreferrer">open</a>
            </div>
            <div className="flex gap-2">
              <button onClick={() => approve(v.id)} className="px-2 py-1 text-xs rounded bg-blue-600">Promote</button>
              <button onClick={() => del(v.id)} className="px-2 py-1 text-xs rounded bg-rose-700">Delete</button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-zinc-400 mt-4">
        "Promote" replaces the base page file with this variant (a backup is created).
        You can revert in git if needed.
      </p>
    </main>
  );
}
