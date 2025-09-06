import EnvLinks from "@/components/EnvLinks";

export default function Home() {
  return (
    <main className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Welcome to TARX</h1>
        <p className="text-sm text-zinc-400">Your AI-powered workspace is ready.</p>
      </div>
      <EnvLinks />
    </main>
  );
}
