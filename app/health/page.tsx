export const dynamic = "force-static";

export default function Health() {
  return (
    <main style={{ padding: 24 }}>
      <h1>✅ Next.js is running in Lovable</h1>
      <p>Time: {new Date().toLocaleString()}</p>
      <p>Try editing this file and confirm hot refresh.</p>
      <div style={{ marginTop: 20, padding: 16, backgroundColor: '#f0f0f0', borderRadius: 8 }}>
        <h3>Quick Links:</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/ops">Ops Dashboard</a></li>
          <li><a href="/dashboard">Main Dashboard</a></li>
          <li><a href="/design-system">Design System</a></li>
        </ul>
      </div>
    </main>
  );
}
