type Props = { params: { id: string } };
export default function Workspace({ params }: Props) {
  return <main style={{padding:24}}>Workspace: {params.id}</main>;
}