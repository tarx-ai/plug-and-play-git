export default function Health() {
  return (
    <main style={{padding:24}}>
      <h1>✅ TARX UI Up</h1>
      <p>Build: {process.env.NODE_ENV}</p>
      <p>Time: {new Date().toISOString()}</p>
    </main>
  );
}
