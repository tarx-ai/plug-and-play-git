"use client";

import { useState } from "react";
import Message from "@/components/Message";
import Tabs, { TabItem } from "@/components/Tabs";

type MainProps = {};

const Main = ({}: MainProps) => {
    const [message, setMessage] = useState<string>("");
    const [workspaceName, setWorkspaceName] = useState<string>("Making John Better");
    const [workspaceGoals, setWorkspaceGoals] = useState<string>("Set goals, audit skills, boost productivity, balance life, and lead effectively—all in one personalized workspace.");

    const workspaceTabs: TabItem[] = [
        {
            id: "chats",
            label: "Chats",
            isClosable: false,
            content: (
                <div className="space-y-4">
                    <div className="p-6 border border-n-3 rounded-2xl bg-n-1 dark:border-n-5 dark:bg-n-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-bold text-lg">T</span>
                            </div>
                            <div className="flex-1">
                                <div className="base1 font-semibold mb-2">TARX</div>
                                <div className="body2 text-n-4 mb-4">
                                    I've analyzed your goals and created a personalized development plan. Let's start with skill auditing - I can help you identify your current strengths and areas for growth in leadership and productivity.
                                </div>
                                <div className="flex items-center space-x-4 text-n-5 caption1">
                                    <span>Just now</span>
                                    <button className="hover:text-n-3 transition-colors">Reply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-6 border border-n-3 rounded-2xl bg-n-1 dark:border-n-5 dark:bg-n-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-bold text-lg">J</span>
                            </div>
                            <div className="flex-1">
                                <div className="base1 font-semibold mb-2">John</div>
                                <div className="body2 text-n-4 mb-4">
                                    I want to become a better leader and balance my work-life better. Can you help me create a structured plan?
                                </div>
                                <div className="flex items-center space-x-4 text-n-5 caption1">
                                    <span>2 min ago</span>
                                    <button className="hover:text-n-3 transition-colors">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* TARX Auto-generated Next Actions */}
                    <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-2xl">
                        <div className="flex items-center mb-3">
                            <div className="w-6 h-6 bg-green-500/20 rounded-xl flex items-center justify-center mr-2">
                                <span className="text-green-500 text-sm">🎯</span>
                            </div>
                            <span className="caption1 font-semibold text-green-600">Suggested Next Actions</span>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between p-3 bg-n-1 rounded-xl dark:bg-n-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="caption1">Schedule 30-min leadership assessment</span>
                                </div>
                                <button className="caption2 text-green-600 hover:text-green-700 transition-colors">Add to calendar</button>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-n-1 rounded-xl dark:bg-n-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                    <span className="caption1">Define 3 key work-life balance metrics</span>
                                </div>
                                <button className="caption2 text-yellow-600 hover:text-yellow-700 transition-colors">Start now</button>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: "agents",
            label: "Agents",
            isClosable: true,
            content: (
                <div className="space-y-4">
                    <div className="p-6 border border-n-3 rounded-2xl bg-n-1 dark:border-n-5 dark:bg-n-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-xl">🎯</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="base1 font-semibold">Goal Setting Agent</div>
                                    <span className="caption2 text-green-500 bg-green-500/10 px-2 py-1 rounded-lg">Active</span>
                                </div>
                                <div className="body2 text-n-4 mb-3">
                                    Helping you define and track SMART goals for personal and professional development.
                                </div>
                                <div className="caption2 text-n-5">Last active: 5 min ago</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-6 border border-n-3 rounded-2xl bg-n-1 dark:border-n-5 dark:bg-n-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-xl">📊</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="base1 font-semibold">Skills Audit Agent</div>
                                    <span className="caption2 text-primary-1 bg-primary-1/10 px-2 py-1 rounded-lg">Ready</span>
                                </div>
                                <div className="body2 text-n-4 mb-3">
                                    Assesses your current skills and identifies areas for improvement and growth opportunities.
                                </div>
                                <div className="caption2 text-n-5">Ready to start audit</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-6 border border-n-3 rounded-2xl bg-n-1 dark:border-n-5 dark:bg-n-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-xl">⚡</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="base1 font-semibold">Productivity Coach</div>
                                    <span className="caption2 text-n-4 bg-n-3/20 px-2 py-1 rounded-lg">Standby</span>
                                </div>
                                <div className="body2 text-n-4 mb-3">
                                    Optimizes your workflow and helps build sustainable productivity habits.
                                </div>
                                <div className="caption2 text-n-5">Analyzing your patterns</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* TARX Auto-generated Agent Suggestions */}
                    <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center">
                                <div className="w-6 h-6 bg-blue-500/20 rounded-xl flex items-center justify-center mr-2">
                                    <span className="text-blue-500 text-sm">🤖</span>
                                </div>
                                <span className="caption1 font-semibold text-blue-600">Recommended Agents</span>
                            </div>
                            <button className="caption2 text-blue-600 hover:text-blue-700 transition-colors">Deploy all</button>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between p-3 bg-n-1 rounded-xl dark:bg-n-6">
                                <div className="flex items-center space-x-3">
                                    <span className="text-lg">💡</span>
                                    <div>
                                        <div className="caption1 font-medium">Habit Builder Agent</div>
                                        <div className="caption2 text-n-5">Track and reinforce positive habits</div>
                                    </div>
                                </div>
                                <button className="caption2 text-blue-600 hover:text-blue-700 transition-colors">Deploy</button>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-n-1 rounded-xl dark:bg-n-6">
                                <div className="flex items-center space-x-3">
                                    <span className="text-lg">📈</span>
                                    <div>
                                        <div className="caption1 font-medium">Performance Coach</div>
                                        <div className="caption2 text-n-5">Monitor KPIs and suggest improvements</div>
                                    </div>
                                </div>
                                <button className="caption2 text-blue-600 hover:text-blue-700 transition-colors">Deploy</button>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: "context",
            label: "Context",
            isClosable: true,
            content: (
                <div className="space-y-6">
                    <div className="border border-n-3 rounded-2xl bg-n-1 dark:border-n-5 dark:bg-n-6 overflow-hidden">
                        <div className="p-6 border-b border-n-3 dark:border-n-5">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="base1 font-semibold">Workspace Knowledge</h3>
                                <div className="flex items-center space-x-2">
                                    <span className="caption2 text-n-4">Color</span>
                                    <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="caption1 font-semibold text-n-4 mb-2 block">Workspace Name</label>
                                <input 
                                    type="text"
                                    value={workspaceName}
                                    onChange={(e) => setWorkspaceName(e.target.value)}
                                    className="w-full p-3 border border-n-3 rounded-xl bg-n-1 dark:border-n-5 dark:bg-n-6 focus:border-primary-1 outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="caption1 font-semibold text-n-4 mb-2 block">What do you want Tarx to do in this Workspace?</label>
                                <textarea 
                                    value={workspaceGoals}
                                    onChange={(e) => setWorkspaceGoals(e.target.value)}
                                    rows={3}
                                    className="w-full p-3 border border-n-3 rounded-xl bg-n-1 dark:border-n-5 dark:bg-n-6 focus:border-primary-1 outline-none transition-colors resize-none"
                                />
                            </div>
                        </div>
                        
                        <div className="p-6">
                            <h4 className="base2 font-semibold mb-4">Add media to enhance Tarx knowledge in this workspace</h4>
                            <div className="text-n-4 caption1 mb-4">
                                Media can help Tarx help you more.<br />
                                More knowledge means better insights and more helpful responses from Tarx
                            </div>
                            
                            <div className="border-2 border-dashed border-n-3 rounded-2xl p-8 text-center dark:border-n-5 hover:border-primary-1/50 transition-colors cursor-pointer">
                                <div className="w-16 h-16 bg-n-3/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📁</span>
                                </div>
                                <div className="base2 font-semibold mb-2">Drag & drop files</div>
                                <div className="caption1 text-n-4">or click to browse</div>
                            </div>
                            
                            {/* TARX Auto-generated Suggestions */}
                            <div className="mt-6 p-4 bg-primary-1/5 border border-primary-1/20 rounded-2xl">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center">
                                        <div className="w-6 h-6 bg-primary-1/20 rounded-xl flex items-center justify-center mr-2">
                                            <span className="text-primary-1 text-sm">✨</span>
                                        </div>
                                        <span className="caption1 font-semibold text-primary-1">TARX Suggestions</span>
                                    </div>
                                    <button className="caption2 text-primary-1 hover:text-primary-2 transition-colors">Generate more</button>
                                </div>
                                <div className="space-y-2">
                                    <div className="caption2 text-n-5">Based on your goals, TARX recommends adding:</div>
                                    <div className="flex flex-wrap gap-2">
                                        <button className="caption2 px-3 py-1.5 bg-n-1 border border-n-3 rounded-xl hover:border-primary-1/50 transition-colors dark:bg-n-6 dark:border-n-5">
                                            📚 Leadership development articles
                                        </button>
                                        <button className="caption2 px-3 py-1.5 bg-n-1 border border-n-3 rounded-xl hover:border-primary-1/50 transition-colors dark:bg-n-6 dark:border-n-5">
                                            ⏰ Time management frameworks
                                        </button>
                                        <button className="caption2 px-3 py-1.5 bg-n-1 border border-n-3 rounded-xl hover:border-primary-1/50 transition-colors dark:bg-n-6 dark:border-n-5">
                                            📊 Productivity methodologies
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h5 className="caption1 font-semibold">Import knowledge from URL</h5>
                                    <div className="flex items-center space-x-4">
                                        <span className="caption2 text-n-4">Refresh Rate</span>
                                        <select className="caption2 bg-n-1 border border-n-3 rounded-lg px-2 py-1 dark:bg-n-6 dark:border-n-5">
                                            <option>Daily</option>
                                            <option>Hourly</option>
                                            <option>Never</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="caption2 text-n-4 mb-3">One url per line.</div>
                                <textarea 
                                    placeholder="Enter URL(s)"
                                    rows={3}
                                    className="w-full p-3 border border-n-3 rounded-xl bg-n-1 dark:border-n-5 dark:bg-n-6 focus:border-primary-1 outline-none transition-colors resize-none caption1"
                                />
                                <div className="flex justify-between items-center mt-4">
                                    <button className="caption1 text-n-4 hover:text-n-3 transition-colors">Cancel</button>
                                    <button className="btn-blue px-6 py-2">Import</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: "team",
            label: "Team",
            isClosable: true,
            content: (
                <div className="space-y-4">
                    <div className="p-6 border border-n-3 rounded-2xl bg-n-1 dark:border-n-5 dark:bg-n-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="base1 font-semibold">Team Members</h3>
                            <button className="btn-small btn-blue">+ Invite</button>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold text-lg">J</span>
                                </div>
                                <div className="flex-1">
                                    <div className="base2 font-semibold">John Smith</div>
                                    <div className="caption1 text-n-4">Owner • Active now</div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                    <span className="caption2 text-n-4">Online</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold text-lg">T</span>
                                </div>
                                <div className="flex-1">
                                    <div className="base2 font-semibold">TARX AI Assistant</div>
                                    <div className="caption1 text-n-4">AI Agent • Always available</div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="w-3 h-3 bg-primary-1 rounded-full animate-pulse"></span>
                                    <span className="caption2 text-primary-1">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-6 border border-n-3 rounded-2xl bg-n-1 dark:border-n-5 dark:bg-n-6">
                        <h4 className="base2 font-semibold mb-4">Collaboration Tools</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 border border-n-3 rounded-xl text-center hover:border-primary-1/50 transition-colors cursor-pointer dark:border-n-5">
                                <div className="w-10 h-10 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                                    <span className="text-xl">💬</span>
                                </div>
                                <div className="caption1 font-semibold">Group Chat</div>
                            </div>
                            <div className="p-4 border border-n-3 rounded-xl text-center hover:border-primary-1/50 transition-colors cursor-pointer dark:border-n-5">
                                <div className="w-10 h-10 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                                    <span className="text-xl">📝</span>
                                </div>
                                <div className="caption1 font-semibold">Shared Notes</div>
                            </div>
                            <div className="p-4 border border-n-3 rounded-xl text-center hover:border-primary-1/50 transition-colors cursor-pointer dark:border-n-5">
                                <div className="w-10 h-10 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                                    <span className="text-xl">📊</span>
                                </div>
                                <div className="caption1 font-semibold">Progress Tracking</div>
                            </div>
                            <div className="p-4 border border-n-3 rounded-xl text-center hover:border-primary-1/50 transition-colors cursor-pointer dark:border-n-5">
                                <div className="w-10 h-10 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                                    <span className="text-xl">🎯</span>
                                </div>
                                <div className="caption1 font-semibold">Goal Alignment</div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        // Remove the old actions tab since we've replaced it with consumer-focused content
    ];

    const handleTabClose = (tabId: string) => {
        console.log("Close tab:", tabId);
        // Here you would implement the logic to remove the tab
    };

    const handleNewChat = () => {
        console.log("New chat requested");
        // Here you would implement the logic to create a new chat tab
    };

    return (
        <>
            <div className="flex flex-col h-full">
                <div className="border-b border-n-3 dark:border-n-5 p-6">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center">
                            <span className="text-white font-bold text-lg">P</span>
                        </div>
                        <div>
                            <h1 className="h5 mb-1">Project Dashboard</h1>
                            <p className="caption1 text-n-4">tarx-react • Last active 2 min ago</p>
                        </div>
                    </div>
                </div>
                
                <div className="flex-1 p-6 overflow-y-auto">
                    <Tabs 
                        items={workspaceTabs} 
                        variant="underline"
                        className="max-w-4xl"
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
