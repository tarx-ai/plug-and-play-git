import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface TopBarProps {
    className?: string;
}

const TopBar = ({ className }: TopBarProps) => {
    return (
        <header className={twMerge(
            "sticky top-0 z-40 border-b border-n-3 bg-n-1/80 backdrop-blur dark:border-n-6 dark:bg-n-6/80",
            className
        )}>
            <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-3">
                {/* Left cluster: Share + Avatar */}
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-n-1 text-n-7 border border-n-3 rounded-xl hover:bg-n-2 transition-colors dark:bg-n-6 dark:text-n-1 dark:border-n-5 dark:hover:bg-n-5">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M10.5 6L13 3.5L10.5 1M13 3.5H3.5M5.5 10l-2.5 2.5L5.5 15M3 12.5h9.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span className="text-sm font-medium">Share</span>
                    </button>
                    
                    <a href="/profile" className="flex items-center gap-2 rounded-xl border border-n-3 px-3 py-2 hover:border-primary-1/50 transition-colors dark:border-n-5">
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-xs">J</span>
                        </div>
                        <span className="text-sm text-n-4">John</span>
                    </a>
                </div>

                {/* Right: New chat */}
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-1 text-n-1 rounded-xl hover:bg-primary-2 transition-colors font-medium">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path
                            d="M14 9.5c0 .828-.672 1.5-1.5 1.5h-9L1 13.5V2.5C1 1.672 1.672 1 2.5 1h9c.828 0 1.5.672 1.5 1.5v7z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8 6v2M9 7H7"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    New Chat
                </button>
            </div>
        </header>
    );
};

export default TopBar;