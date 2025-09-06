"use client";

export default function Dashboard() {
  const links = [
    { name: "Design System", href: "/design-system" },
    { name: "Components Gallery", href: "/pagelist" },
    { name: "MCP Tools", href: "/mcp-tools" },
    { name: "Health Check", href: "/health" },
    { name: "Ops Dashboard", href: "/ops" },
    { name: "Code Generation", href: "/code-generation" },
    { name: "Photo Editing", href: "/photo-editing" },
    { name: "Video Generation", href: "/video-generation" },
    { name: "Audio Generation", href: "/audio-generation" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 to-black p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">TARX Ops Dashboard</h1>
          <p className="text-zinc-400 text-lg">
            Project management hub for TARX development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block p-6 bg-zinc-800/50 rounded-xl border border-zinc-700 hover:border-zinc-500 transition-colors group"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {link.name}
              </h3>
              <p className="text-sm text-zinc-400">{link.href}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 p-6 bg-zinc-800/30 rounded-xl border border-zinc-700">
          <h2 className="text-xl font-semibold text-white mb-4">Quick Status</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span className="text-zinc-300">Next.js App Running</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span className="text-zinc-300">MCP Tools Integrated</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span className="text-zinc-300">Dashboard Live</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-zinc-300">Lovable Sync Active</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
