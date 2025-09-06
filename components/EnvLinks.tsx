"use client";
import { useEffect, useState } from "react";

type Row = { name: string; base: string; status: "up" | "down" | "loading"; code?: number; url: string };

async function ping(base: string, path = "/health") {
  const res = await fetch(`/api/ping?url=${encodeURIComponent(base)}&path=${encodeURIComponent(path)}`, {
    cache: "no-store",
  });
  return res.json();
}

export default function EnvLinks() {
  const PROD = process.env.NEXT_PUBLIC_URL_PROD;
  const VERCEL = process.env.NEXT_PUBLIC_URL_VERCEL;
  const LOCAL = process.env.NEXT_PUBLIC_URL_LOCAL || (typeof window !== "undefined" ? window.location.origin : undefined);

  const initial: Row[] = [
    PROD ? { name: "Production", base: PROD, status: "loading", url: PROD } : undefined,
    VERCEL ? { name: "Vercel", base: VERCEL, status: "loading", url: VERCEL } : undefined,
    LOCAL ? { name: "Local", base: LOCAL, status: "loading", url: LOCAL } : undefined,
  ].filter(Boolean) as Row[];

  const [rows, setRows] = useState<Row[]>(initial);

  async function refresh() {
    setRows((prev) => prev.map((r) => ({ ...r, status: "loading", code: undefined })));
    const results = await Promise.all(
      rows.map(async (r) => {
        try {
          const j = await ping(r.base, "/health");
          return { ...r, status: j.ok ? "up" : "down", code: j.status } as Row;
        } catch {
          return { ...r, status: "down" as const, code: 0 } as Row;
        }
      })
    );
    setRows(results);
  }

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (rows.length === 0) return null;

  return (
    <div className="w-full border border-zinc-800 rounded-xl p-4 bg-zinc-900/40">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium">Deploy Targets</h3>
        <button
          onClick={refresh}
          className="px-3 py-1 rounded bg-emerald-600/80 hover:bg-emerald-600 text-sm"
        >
          Recheck
        </button>
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        {rows.map((r) => (
          <a
            key={r.name}
            href={r.url}
            target="_blank"
            rel="noreferrer"
            className="block rounded-lg border border-zinc-800 p-3 hover:border-zinc-600"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-80">{r.name}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  r.status === "loading"
                    ? "bg-zinc-700"
                    : r.status === "up"
                    ? "bg-emerald-700"
                    : "bg-rose-700"
                }`}
              >
                {r.status}
                {r.code !== undefined ? ` · ${r.code}` : ""}
              </span>
            </div>
            <div className="mt-1 text-xs break-all opacity-70">{r.url}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

