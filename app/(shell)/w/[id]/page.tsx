type Props = { params: { id: string } };

export default function Workspace({ params }: Props) {
  return (
    <main style={{ padding: 24 }}>
      <h2>Workspace: {params.id}</h2>
      <p>This is the {params.id} workspace.</p>
    </main>
  );
}