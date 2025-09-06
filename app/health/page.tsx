export const dynamic = "force-static";

export default function Health() {
  return (
    <main className="p-6 text-sm">
      <h1 className="text-xl font-semibold mb-1">✅ Next.js is running in Lovable</h1>
      <p className="text-zinc-400 mb-4">Time: {new Date().toLocaleString()}</p>
      <p className="text-zinc-400">Try editing this file and confirm hot refresh.</p>

      <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
        <h3 className="font-medium text-zinc-200 mb-2">Quick Links:</h3>
        <ul className="space-y-1">
          <li><a className="text-emerald-400 hover:underline" href="/">Home</a></li>
          <li><a className="text-emerald-400 hover:underline" href="/ops">Ops Dashboard</a></li>
          <li><a className="text-emerald-400 hover:underline" href="/dashboard">Main Dashboard</a></li>
          <li><a className="text-emerald-400 hover:underline" href="/design-system">Design System</a></li>
        </ul>
      </div>
    </main>
  );
}
