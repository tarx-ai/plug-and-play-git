import { useState } from "react";
import Icon from "@/components/Icon";

const updates = [
    {
        id: "1",
        version: "v2.1.0",
        date: "March 1, 2024",
        title: "Enhanced AI Models",
        description: "New Claude-3.5 Sonnet integration with improved reasoning capabilities.",
        features: [
            "Faster response times",
            "Better code understanding",
            "Enhanced context awareness"
        ]
    },
    {
        id: "2", 
        version: "v2.0.5",
        date: "February 15, 2024",
        title: "Bug Fixes & Performance",
        description: "Various improvements and stability enhancements.",
        features: [
            "Fixed memory leaks",
            "Improved chat history",
            "Better error handling"
        ]
    }
];

const faqs = [
    {
        id: "1",
        question: "How does TARX compare to other AI assistants?",
        answer: "TARX focuses on local-first processing with perfect memory and stable availability. Unlike cloud-only solutions, TARX runs on your machine with optional cloud boost when needed."
    },
    {
        id: "2",
        question: "Can I use TARX offline?",
        answer: "Yes! TARX's core functionality works entirely offline. Only the optional Boost mode requires an internet connection for cloud-enhanced capabilities."
    },
    {
        id: "3",
        question: "How is my data protected?",
        answer: "Your conversations and code never leave your device unless you explicitly use Boost mode. TARX is built with privacy-first architecture and local processing."
    },
    {
        id: "4",
        question: "What's included in TARX Pro?",
        answer: "TARX Pro includes unlimited cloud boosts, priority support, advanced model access, and early feature previews."
    }
];

const UpdatesFaq = () => {
    const [activeTab, setActiveTab] = useState<"updates" | "faq">("updates");
    const [openFaq, setOpenFaq] = useState<string | null>(null);

    return (
        <div className="max-w-[48rem]">
            <div className="flex mb-8 border-b border-n-3 dark:border-n-5">
                <button
                    className={`pb-4 px-2 base1 font-semibold border-b-2 transition-colors ${
                        activeTab === "updates"
                            ? "border-primary-1 text-primary-1"
                            : "border-transparent text-n-4 hover:text-n-3"
                    }`}
                    onClick={() => setActiveTab("updates")}
                >
                    Updates
                </button>
                <button
                    className={`pb-4 px-2 ml-8 base1 font-semibold border-b-2 transition-colors ${
                        activeTab === "faq"
                            ? "border-primary-1 text-primary-1"
                            : "border-transparent text-n-4 hover:text-n-3"
                    }`}
                    onClick={() => setActiveTab("faq")}
                >
                    FAQ
                </button>
            </div>

            {activeTab === "updates" && (
                <div className="space-y-6">
                    {updates.map((update) => (
                        <div
                            key={update.id}
                            className="p-6 border border-n-3 rounded-2xl bg-n-1 dark:border-n-5 dark:bg-n-6"
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center">
                                    <div className="px-2 py-1 bg-primary-1/10 rounded-lg">
                                        <span className="caption2 font-semibold text-primary-1">
                                            {update.version}
                                        </span>
                                    </div>
                                    <span className="caption1 text-n-4 ml-3">{update.date}</span>
                                </div>
                            </div>
                            <div className="h6 mb-2">{update.title}</div>
                            <div className="body2 text-n-4 mb-4">{update.description}</div>
                            <div className="space-y-2">
                                {update.features.map((feature, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-primary-1 rounded-full mr-3" />
                                        <span className="caption1 text-n-4">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === "faq" && (
                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="border border-n-3 rounded-2xl bg-n-1 dark:border-n-5 dark:bg-n-6 overflow-hidden"
                        >
                            <button
                                className="w-full p-6 text-left flex items-center justify-between hover:bg-n-2/50 dark:hover:bg-n-7/50 transition-colors"
                                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                            >
                                <span className="base1 font-semibold pr-4">{faq.question}</span>
                                <Icon
                                    className={`w-5 h-5 fill-n-4 transition-transform ${
                                        openFaq === faq.id ? "rotate-180" : ""
                                    }`}
                                    name="arrow-down"
                                />
                            </button>
                            {openFaq === faq.id && (
                                <div className="px-6 pb-6">
                                    <div className="body2 text-n-4">{faq.answer}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UpdatesFaq;