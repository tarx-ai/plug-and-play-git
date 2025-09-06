"use client";
import useSWR from "swr";
import Link from "next/link";
import { project } from "@/../dashboard.config";

type Changes = {
  generatedAt: string | null;
  items: { hash: string; date: string; author: string; message: string; files: string[] }[];
};

const fetcher = (url: string) => fetch(url).then(r => r.json());

function Section({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <section className="space-y-3">
      <h3 className="text-sm font-semibold text-zinc-400">{title}</h3>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2">
        {items.map((i) => (
          <Link key={i.href} href={i.href}
            className="rounded-xl border border-zinc-800 p-3 hover:border-zinc-600 transition">
            <div className="text-zinc-100">{i.label}</div>
            <div className="text-xs text-zinc-500 break-all">{i.href}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function DashboardPage() {
  const { data } = useSWR<Changes>("/api/changes", fetcher, { revalidateOnFocus: false });
  const changes = data?.items ?? [];

  return (
    <main className="mx-auto max-w-6xl px-6 py-8 space-y-10">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Project Dashboard · {project.name}</h1>
          <p className="text-sm text-zinc-400">
            Repo: <a className="underline" href={project.repoUrl} target="_blank">{project.repoUrl}</a>
          </p>
        </div>
        <div className="flex gap-2">
          {project.environments.map((e) => (
            <a key={e.href} href={e.href} target="_blank"
               className="rounded-lg border border-zinc-700 px-3 py-1.5 text-sm hover:border-zinc-500">
              {e.label}
            </a>
          ))}
        </div>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Section title="Design System" items={project.links.designSystem} />
          <Section title="Components" items={project.links.components} />
          <Section title="R&D" items={project.links.rAndD} />
          <Section title="Docs" items={project.links.docs} />
        </div>

        <aside className="space-y-4">
          <h3 className="text-sm font-semibold text-zinc-400">Recent Changes</h3>
          <div className="rounded-xl border border-zinc-800 divide-y divide-zinc-800 overflow-hidden">
            {(changes.length ? changes : []).slice(0, 12).map((c) => (
              <div key={c.hash} className="p-3">
                <div className="text-sm text-zinc-100">{c.message}</div>
                <div className="text-xs text-zinc-500">{new Date(c.date).toLocaleString()} · {c.author}</div>
                {c.files.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {c.files.slice(0, 6).map(f => (
                      <span key={f} className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800">{f}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {(!changes || changes.length === 0) && (
              <div className="p-3 text-sm text-zinc-500">No changes yet. Run <code>npm run changes</code>.</div>
            )}
          </div>
          {data?.generatedAt && (
            <div className="text-xs text-zinc-500">Generated: {new Date(data.generatedAt).toLocaleString()}</div>
          )}
        </aside>
      </div>
    </main>
  );
}
