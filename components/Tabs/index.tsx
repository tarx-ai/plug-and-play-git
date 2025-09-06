"use client";

import { useState, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface TabItem {
    id: string;
    label: string;
    content: ReactNode;
    icon?: string;
    badge?: string | number;
    isClosable?: boolean;
}

interface TabsProps {
    items: TabItem[];
    defaultTab?: string;
    className?: string;
    variant?: "default" | "pills" | "underline";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    onChange?: (tabId: string) => void;
    onTabClose?: (tabId: string) => void;
    onNewChat?: () => void;
    showNewChat?: boolean;
}

const Tabs = ({ 
    items, 
    defaultTab, 
    className,
    variant = "default",
    size = "md",
    fullWidth = false,
    onChange,
    onTabClose,
    onNewChat,
    showNewChat = false
}: TabsProps) => {
    const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id);

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        onChange?.(tabId);
    };

    const handleTabClose = (e: React.MouseEvent, tabId: string) => {
        e.stopPropagation();
        onTabClose?.(tabId);
    };

    const activeContent = items.find(item => item.id === activeTab)?.content;

    // Size classes
    const sizeClasses = {
        sm: "text-sm px-3 py-1.5 gap-1.5",
        md: "text-base px-4 py-2 gap-2", 
        lg: "text-lg px-6 py-3 gap-2.5"
    };

    // Variant classes
    const getTabClasses = (isActive: boolean) => {
        const baseClasses = `
            inline-flex items-center justify-center font-medium transition-all duration-200 
            ${sizeClasses[size]} 
            ${fullWidth ? "flex-1" : ""}
        `;

        switch (variant) {
            case "pills":
                return twMerge(baseClasses, isActive 
                    ? "bg-primary-1 text-n-1 rounded-2xl shadow-sm" 
                    : "text-n-4 hover:text-n-3 hover:bg-n-3/10 rounded-2xl"
                );
            case "underline":
                return twMerge(baseClasses, isActive
                    ? "text-primary-1 border-b-2 border-primary-1 pb-3"
                    : "text-n-4 hover:text-n-3 border-b-2 border-transparent hover:border-n-3/30 pb-3"
                );
            default:
                return twMerge(baseClasses, isActive
                    ? "bg-n-1 text-n-7 rounded-xl shadow-sm dark:bg-n-6 dark:text-n-1"
                    : "text-n-4 hover:text-n-3 hover:bg-n-3/10 rounded-xl dark:hover:bg-n-6/50"
                );
        }
    };

    const containerClasses = twMerge(
        "flex items-center",
        showNewChat ? "justify-between" : "justify-start",
        variant === "default" && "bg-n-2/50 p-1 rounded-2xl dark:bg-n-7/50",
        variant === "pills" && "bg-n-2/30 p-1 rounded-2xl dark:bg-n-7/30", 
        variant === "underline" && "border-b border-n-3 dark:border-n-5",
        fullWidth && "w-full",
        className
    );

    return (
        <div>
            {/* Tab Navigation */}
            <div className={containerClasses}>
                <div className="flex items-center">
                    {items.map((item) => (
                        <button
                            key={item.id}
                            className={twMerge(
                                getTabClasses(item.id === activeTab),
                                "group relative"
                            )}
                            onClick={() => handleTabChange(item.id)}
                        >
                            {item.icon && (
                                <span className={`w-5 h-5 ${size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : ""}`}>
                                    {/* Add icon component here if needed */}
                                    <span className="text-current">{item.icon}</span>
                                </span>
                            )}
                            {item.label}
                            {item.badge && (
                                <span className={`
                                    bg-accent-1 text-n-1 rounded-full text-xs font-semibold min-w-[1.25rem] h-5 
                                    flex items-center justify-center px-1.5
                                    ${size === "sm" ? "text-xs h-4 min-w-[1rem]" : ""}
                                    ${size === "lg" ? "text-sm h-6 min-w-[1.5rem]" : ""}
                                `}>
                                    {item.badge}
                                </span>
                            )}
                            
                            {/* Close button - show on hover */}
                            {item.isClosable && onTabClose && (
                                <span
                                    className="ml-2 p-1 rounded-xl hover:bg-n-4/20 transition-colors opacity-0 group-hover:opacity-100"
                                    onClick={(e) => handleTabClose(e, item.id)}
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
                                </span>
                            )}
                        </button>
                    ))}
                </div>
                
                {/* New Chat Button */}
                {showNewChat && onNewChat && (
                    <button
                        className={twMerge(
                            "flex items-center gap-2 text-sm font-medium transition-colors duration-200",
                            variant === "pills" 
                                ? "text-primary-1 hover:text-primary-2 bg-primary-1/10 hover:bg-primary-1/20 px-4 py-2 rounded-2xl"
                                : "text-n-4 hover:text-n-3 hover:bg-n-3/10 px-4 py-2 rounded-xl dark:hover:bg-n-6/50"
                        )}
                        onClick={onNewChat}
                    >
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
                )}
            </div>

            {/* Tab Content */}
            <div className="mt-6">
                {activeContent}
            </div>
        </div>
    );
};

export default Tabs;
