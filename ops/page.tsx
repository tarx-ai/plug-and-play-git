"use client";
import Link from "next/link";

const Item = ({href, label}:{href:string;label:string}) => (
  <li className="py-2 border-t border-zinc-800/60">
    <Link href={href} className="hover:underline">{label}</Link>
  </li>
);

export default function Ops() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">TARX • Ops Dashboard</h1>
      <ul className="text-sm">
        <Item href="/design-system" label="Design System" />
        <Item href="/pagelist" label="Components Gallery" />
        <Item href="/dashboard" label="Project Dashboard" />
        <Item href="/mcp-tools" label="MCP Tools" />
        <Item href="/health" label="Health Check" />
        <Item href="https://github.com/tarx-ai/plug-and-play-git/commits" label="Repo Changelog (GitHub)" />
      </ul>
    </main>
  );
}
