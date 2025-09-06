import type { NextPage } from "next";
import Main from "@/templates/WorkspacePage/Main";

type Props = { params: { id: string } };

const WorkspaceById: NextPage<Props> = ({ params }) => {
    return <Main />;
};

export default WorkspaceById;

