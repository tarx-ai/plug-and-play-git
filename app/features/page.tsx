import type { NextPage } from "next";
import Layout from "@/components/Layout";

const Features: NextPage = () => {
    return (
        <Layout>
            <div className="grow px-10 py-20 overflow-y-auto scroll-smooth scrollbar-none 2xl:py-12 md:px-4 md:pt-0 md:pb-6">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16 text-center">
                        <div className="h2 leading-[3.5rem] 2xl:mb-2 2xl:h3">
                            Why TARX CODE?
                        </div>
                        <div className="body1 text-n-4 2xl:body1S max-w-2xl mx-auto">
                            Local-first AI that works around the clock. Fast, private, stable. 
                            Boost to the cloud only when you choose.
                        </div>
                    </div>

                    <div className="grid gap-8 md:gap-6">
                        <div className="flex items-start gap-6 p-8 rounded-2xl bg-n-6/50 border border-n-5">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#92B6DE] to-[#6B9BC7] flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="h4 mb-3">Local First</h3>
                                <p className="body2 text-n-3">
                                    TARX runs on your machine. Your history, context, and code never leave your laptop unless you choose to Boost.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 p-8 rounded-2xl bg-n-6/50 border border-n-5">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#92B6DE] to-[#6B9BC7] flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="h4 mb-3">Perfect Memory</h3>
                                <p className="body2 text-n-3">
                                    TARX remembers your sessions, files, and commands. No context lost between reboots or projects.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 p-8 rounded-2xl bg-n-6/50 border border-n-5">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#92B6DE] to-[#6B9BC7] flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="h4 mb-3">Stable Development with AI</h3>
                                <p className="body2 text-n-3">
                                    Always available. Always consistent. TARX doesn't throttle, timeout, or disappear. It's your side-by-side teammate.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 p-8 rounded-2xl bg-n-6/50 border border-n-5">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#92B6DE] to-[#6B9BC7] flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="h4 mb-3">Boost Capacity with Cloud</h3>
                                <p className="body2 text-n-3">
                                    Connect to TARX Online when you need extra depth—long refactors, complex algorithms, or cross-project reasoning.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 p-8 rounded-2xl bg-n-6/50 border border-n-5">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#92B6DE] to-[#6B9BC7] flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="h4 mb-3">Editor-Native Workflows</h3>
                                <p className="body2 text-n-3">
                                    Slash commands, in-panel testing, and context-aware prompts built for VS Code, Cursor, and beyond.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 p-8 rounded-2xl bg-n-6/50 border border-n-5">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#92B6DE] to-[#6B9BC7] flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="h4 mb-3">Private by Default</h3>
                                <p className="body2 text-n-3">
                                    No silent data collection. No third-party mining. TARX is your AI, not someone else's.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <div className="h3 mb-4">Getting Started</div>
                        <p className="body1 text-n-4 max-w-2xl mx-auto mb-8">
                            Every VS Code or Cursor project should start with TARX. Open a folder, and TARX will scaffold a README.md, 
                            initialize memory, and be ready to code—all locally, right out of the box.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <a href="/get-started" className="btn-blue">
                                Get Started
                            </a>
                            <a href="/pricing" className="btn-white">
                                View Pricing
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Features;
