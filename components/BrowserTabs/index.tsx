import { useState } from "react";
import { twMerge } from "tailwind-merge";

export interface BrowserTab {
    id: string;
    title: string;
    isActive?: boolean;
    isClosable?: boolean;
}

interface BrowserTabsProps {
    tabs: BrowserTab[];
    activeTabId?: string;
    onTabClick?: (tabId: string) => void;
    onTabClose?: (tabId: string) => void;
    onNewTab?: () => void;
    className?: string;
}

const BrowserTabs = ({ 
    tabs, 
    activeTabId, 
    onTabClick, 
    onTabClose, 
    onNewTab,
    className 
}: BrowserTabsProps) => {
    const [draggedTab, setDraggedTab] = useState<string | null>(null);

    const handleTabClick = (tabId: string) => {
        onTabClick?.(tabId);
    };

    const handleTabClose = (e: React.MouseEvent, tabId: string) => {
        e.stopPropagation();
        onTabClose?.(tabId);
    };

    return (
        <div className={twMerge("flex items-center justify-between bg-n-2 dark:bg-n-7 border-b border-n-3 dark:border-n-6 px-4", className)}>
            {/* Left side - Tabs */}
            <div className="flex items-center overflow-x-auto scrollbar-none">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={twMerge(
                            "group relative flex items-center min-w-0 max-w-64 px-4 py-3 cursor-pointer transition-colors duration-200",
                            (tab.isActive || tab.id === activeTabId) 
                                ? "bg-n-1 text-n-7 dark:bg-n-6 dark:text-n-1 rounded-t-2xl" 
                                : "bg-transparent text-n-4 hover:bg-n-3/30 rounded-t-2xl dark:hover:bg-n-6/50"
                        )}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        <div className="flex items-center min-w-0 flex-1">
                            <span className="truncate text-sm font-medium">
                                {tab.title}
                            </span>
                        </div>
                        
                        {(tab.isClosable !== false) && (
                            <button
                                className="ml-2 p-1 rounded-xl hover:bg-n-4/20 transition-colors opacity-0 group-hover:opacity-100"
                                onClick={(e) => handleTabClose(e, tab.id)}
                            >
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path
                                        d="M9 3L3 9M3 3l6 6"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        )}
                    </div>
                ))}
                
                {onNewTab && (
                    <button
                        className="flex items-center justify-center w-8 h-8 ml-2 text-n-4 hover:text-n-3 hover:bg-n-3/10 rounded-xl transition-colors"
                        onClick={onNewTab}
                    >
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M8 3.5v9M12.5 8h-9"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                )}
            </div>
            
            {/* Right side - Action buttons */}
            <div className="flex items-center gap-2">
                {/* New Chat Button */}
                <button className="flex items-center justify-center w-8 h-8 bg-primary-1 text-n-1 rounded-xl hover:bg-primary-2 transition-colors">
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
                </button>
                
                {/* Share Button */}
                <button className="flex items-center px-3 py-1.5 bg-n-1 text-n-7 border border-n-3 rounded-xl hover:bg-n-2 transition-colors dark:bg-n-6 dark:text-n-1 dark:border-n-5 dark:hover:bg-n-5">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mr-1.5">
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
            </div>
        </div>
    );
};

export default BrowserTabs;