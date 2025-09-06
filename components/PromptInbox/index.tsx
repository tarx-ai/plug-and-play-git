import { twMerge } from "tailwind-merge";

interface Prompt {
    id: string;
    title: string;
    hint?: string;
    cta?: string;
    icon: React.ReactNode;
    kind: "action" | "update";
}

const PROMPTS: Prompt[] = [
    {
        id: "resume-chat",
        title: "Continue: Making John Better",
        hint: "Pick up where you left off in your leadership development chat",
        cta: "Continue",
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                    d="M3 8l4 4L13 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        kind: "action",
    },
    {
        id: "skill-assessment",
        title: "Complete Skills Assessment",
        hint: "TARX recommends auditing your current leadership skills",
        cta: "Start Assessment",
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                    d="M8 1v6l4 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        ),
        kind: "action",
    },
    {
        id: "habit-tracker",
        title: "Set Up Habit Tracker",
        hint: "Create daily habits to improve work-life balance",
        cta: "Create Habits",
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                    d="M8 3.5v9M12.5 8h-9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        kind: "action",
    },
    {
        id: "goal-progress",
        title: "Weekly Goal Progress Updated",
        hint: "2 of 3 goals on track • Leadership skills improving",
        icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-green-500">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path
                    d="M5 8l2 2L11 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        kind: "update",
    },
];

interface PromptInboxProps {
    className?: string;
}

const PromptInbox = ({ className }: PromptInboxProps) => {
    return (
        <section className={twMerge(
            "mx-auto grid max-w-screen-2xl gap-6 px-4 pb-20 pt-8 md:grid-cols-[300px_1fr_300px]",
            className
        )}>
            {/* Left rail - reserved for sidebar */}
            <div className="hidden md:block" />

            {/* Center: prompt inbox */}
            <div className="space-y-6">
                {/* Title row */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="h3 mb-2">Inbox</h1>
                        <p className="body2 text-n-4">Actions & updates from TARX</p>
                    </div>
                    {/* CTA to continue last chat */}
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary-1 text-n-1 rounded-xl hover:bg-primary-2 transition-colors font-medium">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M3 8l4 4L13 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Continue
                    </button>
                </div>

                {/* Prompt List */}
                <div className="space-y-4">
                    {PROMPTS.map((prompt) => (
                        <div
                            key={prompt.id}
                            className="group flex items-center justify-between rounded-2xl border border-n-3 bg-n-1 p-6 hover:border-primary-1/30 transition-colors dark:border-n-5 dark:bg-n-6"
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className={twMerge(
                                        "grid h-10 w-10 place-items-center rounded-xl border",
                                        prompt.kind === "action" 
                                            ? "bg-primary-1/10 border-primary-1/30" 
                                            : "bg-n-3/10 border-n-3/30 dark:bg-n-5/10 dark:border-n-5/30"
                                    )}
                                >
                                    {prompt.icon}
                                </div>
                                <div className="space-y-1">
                                    <div className="base1 font-semibold">{prompt.title}</div>
                                    {prompt.hint && (
                                        <div className="caption1 text-n-4">{prompt.hint}</div>
                                    )}
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                {prompt.kind === "action" ? (
                                    <button className="px-4 py-2 bg-primary-1 text-n-1 rounded-xl hover:bg-primary-2 transition-colors font-medium text-sm">
                                        {prompt.cta ?? "Run"}
                                    </button>
                                ) : (
                                    <button className="px-4 py-2 bg-n-3/10 text-n-4 rounded-xl hover:bg-n-3/20 hover:text-n-3 transition-colors font-medium text-sm dark:bg-n-5/10 dark:hover:bg-n-5/20">
                                        View
                                    </button>
                                )}
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-n-5 group-hover:text-n-4 transition-colors">
                                    <path
                                        d="M6 4l4 4-4 4"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right rail: activity/context + actions */}
            <RightRail />
        </section>
    );
};

interface RightRailProps {
    className?: string;
}

const RightRail = ({ className }: RightRailProps) => {
    return (
        <aside className={twMerge("space-y-4", className)}>
            <Panel
                title="Activity · Context"
                items={[
                    "Analyzed workspace goals",
                    "Context: Leadership development",
                    "Mode: Consumer-focused workspace",
                ]}
            />
            <Panel 
                title="Actions" 
                items={[
                    "Your goals (3 active)", 
                    "TARX suggestions (2 pending)",
                    "Habit tracking (daily)"
                ]} 
            />
            
            {/* Public prompts link */}
            <div className="pt-2">
                <a 
                    href="/prompts/public" 
                    className="caption2 text-n-5 hover:text-primary-1 transition-colors underline"
                >
                    View my prompts (public)
                </a>
            </div>
        </aside>
    );
};

interface PanelProps {
    title: string;
    items: string[];
    className?: string;
}

const Panel = ({ title, items, className }: PanelProps) => {
    return (
        <div className={twMerge(
            "rounded-2xl border border-n-3 bg-n-2/30 p-4 dark:border-n-5 dark:bg-n-7/30",
            className
        )}>
            <div className="caption1 font-semibold text-n-4 mb-3">{title}</div>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="caption2 text-n-5 truncate">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PromptInbox;