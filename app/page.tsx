import type { NextPage } from "next";
import Main from "@/templates/HomePage/Main";
import dynamic from "next/dynamic";

const ChatPanel = dynamic(() => import("@/components/ai/ChatPanel"), {
    ssr: false,
});

const Home: NextPage = () => {
    return (
        <>
            <Main />
            <div style={{ padding: 24 }}>
                <ChatPanel />
            </div>
        </>
    );
};

export default Home;
