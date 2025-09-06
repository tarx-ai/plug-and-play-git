"use client";

import { useState } from "react";
import Message from "@/components/Message";
import Menu from "@/components/Menu";
import Tabs, { TabItem } from "@/components/Tabs";

import { navigation } from "@/constants/navigation";

type MainProps = {};

const Main = ({}: MainProps) => {
    const [message, setMessage] = useState<string>("");

    const dashboardTabs: TabItem[] = [
        {
            id: "features",
            label: "Features",
            isClosable: false,
            content: (
                <Menu className="max-w-[30.75rem] mx-auto" items={navigation} />
            ),
        },
        {
            id: "get-started", 
            label: "Get Started",
            isClosable: true,
            content: (
                <div className="max-w-[30.75rem] mx-auto">
                    <div className="space-y-6">
                        <div className="p-6 border border-n-3 rounded-2xl bg-n-1 dark:border-n-5 dark:bg-n-6">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-primary-1/10 rounded-xl flex items-center justify-center mr-3">
                                    <span className="text-primary-1 font-bold">1</span>
                                </div>
                                <h3 className="base1 font-semibold">Install VS Code Extension</h3>
                            </div>
                            <p className="body2 text-n-4">Download and install TARX CODE from the VS Code marketplace or directly from our releases.</p>
                        </div>
                        <div className="p-6 border border-n-3 rounded-2xl bg-n-1 dark:border-n-5 dark:bg-n-6">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-primary-1/10 rounded-xl flex items-center justify-center mr-3">
                                    <span className="text-primary-1 font-bold">2</span>
                                </div>
                                <h3 className="base1 font-semibold">Setup Local Runtime</h3>
                            </div>
                            <p className="body2 text-n-4">Configure your local TARX runtime for private, always-on AI assistance right on your machine.</p>
                        </div>
                        <div className="p-6 border border-n-3 rounded-2xl bg-n-1 dark:border-n-5 dark:bg-n-6">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-primary-1/10 rounded-xl flex items-center justify-center mr-3">
                                    <span className="text-primary-1 font-bold">3</span>
                                </div>
                                <h3 className="base1 font-semibold">Start Coding</h3>
                            </div>
                            <p className="body2 text-n-4">Open any project and start chatting with TARX. Your AI teammate is ready to help with perfect memory.</p>
                        </div>
                        <div className="mt-6">
                            <a 
                                href="/workspace"
                                className="btn-blue w-full text-center"
                            >
                                View Sample Workspace →
                            </a>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: "pricing",
            label: "Pricing",
            isClosable: true,
            content: (
                <div className="max-w-[30.75rem] mx-auto">
                    <div className="grid md:grid-cols-1 gap-6">
                        <div className="p-6 border border-n-3 rounded-2xl bg-n-1 dark:border-n-5 dark:bg-n-6">
                            <div className="text-center">
                                <h3 className="h6 mb-2">TARX Local</h3>
                                <div className="h3 mb-1">Free</div>
                                <p className="body2 text-n-4 mb-6">College-grad level AI on your machine</p>
                                <div className="space-y-3 text-left mb-6">
                                    <div className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-primary-1 rounded-full mr-3" />
                                        <span className="caption1">Local processing</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-primary-1 rounded-full mr-3" />
                                        <span className="caption1">Perfect memory</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-primary-1 rounded-full mr-3" />
                                        <span className="caption1">No rate limits</span>
                                    </div>
                                </div>
                                <button className="btn-white w-full">Get Started</button>
                            </div>
                        </div>
                        <div className="p-6 border-2 border-primary-1 rounded-2xl bg-n-1 dark:bg-n-6 relative overflow-hidden">
                            <div className="absolute top-4 right-4 px-2 py-1 bg-primary-1 text-n-1 rounded-lg text-xs font-semibold">
                                Recommended
                            </div>
                            <div className="text-center">
                                <h3 className="h6 mb-2">TARX Pro</h3>
                                <div className="h3 mb-1">$20<span className="text-base text-n-4">/month</span></div>
                                <p className="body2 text-n-4 mb-6">PhD-level reasoning with cloud boost</p>
                                <div className="space-y-3 text-left mb-6">
                                    <div className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-primary-1 rounded-full mr-3" />
                                        <span className="caption1">Everything in Local</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-primary-1 rounded-full mr-3" />
                                        <span className="caption1">Unlimited cloud boosts</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-primary-1 rounded-full mr-3" />
                                        <span className="caption1">Priority support</span>
                                    </div>
                                </div>
                                <button className="btn-blue w-full">Upgrade Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: "documentation",
            label: "Documentation",
            isClosable: true,
            content: (
                <div className="max-w-[30.75rem] mx-auto">
                    <div className="space-y-4">
                        <div className="p-4 border border-n-3 rounded-xl bg-n-1 dark:border-n-5 dark:bg-n-6 hover:border-primary-1/50 transition-colors cursor-pointer">
                            <h4 className="base1 font-semibold mb-2">📚 Quick Start Guide</h4>
                            <p className="caption1 text-n-4">Get up and running with TARX in 5 minutes</p>
                        </div>
                        <div className="p-4 border border-n-3 rounded-xl bg-n-1 dark:border-n-5 dark:bg-n-6 hover:border-primary-1/50 transition-colors cursor-pointer">
                            <h4 className="base1 font-semibold mb-2">🔧 Configuration</h4>
                            <p className="caption1 text-n-4">Customize TARX settings and preferences</p>
                        </div>
                        <div className="p-4 border border-n-3 rounded-xl bg-n-1 dark:border-n-5 dark:bg-n-6 hover:border-primary-1/50 transition-colors cursor-pointer">
                            <h4 className="base1 font-semibold mb-2">🚀 Advanced Features</h4>
                            <p className="caption1 text-n-4">Boost mode, integrations, and power user tips</p>
                        </div>
                        <div className="p-4 border border-n-3 rounded-xl bg-n-1 dark:border-n-5 dark:bg-n-6 hover:border-primary-1/50 transition-colors cursor-pointer">
                            <h4 className="base1 font-semibold mb-2">❓ FAQ</h4>
                            <p className="caption1 text-n-4">Common questions and troubleshooting</p>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    const handleTabClose = (tabId: string) => {
        console.log("Close tab:", tabId);
    };

    const handleNewChat = () => {
        console.log("New chat requested");
    };

    return (
        <>
            <div className="grow px-10 py-20 overflow-y-auto scroll-smooth scrollbar-none 2xl:py-12 md:px-4 md:pt-0 md:pb-6">
                <div className="mb-10 text-center">
                    <div className="h3 leading-[4rem] 2xl:mb-2 2xl:h4">
                        TARX CODE
                    </div>
                    <div className="body1 text-n-4 2xl:body1S max-w-2xl mx-auto">
                        Local-first AI coding assistant for VS Code, Cursor, Code-OSS, and Theia IDE. 
                        Your free, always-on coding teammate that works at a college-grad level entirely on your machine.
                    </div>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <Tabs 
                        items={dashboardTabs} 
                        variant="pills"
                        fullWidth={true}
                        className="mb-8"
                        onTabClose={handleTabClose}
                        onNewChat={handleNewChat}
                        showNewChat={true}
                    />
                </div>
            </div>
            <Message
                value={message}
                onChange={(e: any) => setMessage(e.target.value)}
            />
        </>
    );
};

export default Main;
