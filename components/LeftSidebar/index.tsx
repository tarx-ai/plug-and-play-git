/**
 * LeftSidebar Component - Main Navigation Sidebar
 * 
 * Primary navigation interface featuring dropdown sections, search, and user profile.
 * 
 * Recent Changes (2024-09-05):
 * - Removed redundant settings button from bottom section
 * - Streamlined settings access through profile avatar click
 * - Updated user information (John Doe)
 * - Maintained dropdown navigation structure (Chats, Workspaces, Actions)
 * - Preserved draggable divider functionality
 */

import { useState, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import Search from "@/components/Search";
import Settings from "@/components/Settings";
import DropdownNavigation from "./DropdownNavigation";
import Profile from "./Profile";

import { recentChats, workspaces, actions } from "@/mocks/dropdownNavigation";
import { resultSearch } from "@/mocks/resultSearch";
import { settings } from "@/constants/settings";
import { twMerge } from "tailwind-merge";

type LeftSidebarProps = {
    value: boolean;
    setValue?: any;
    smallSidebar?: boolean;
    visibleRightSidebar?: boolean;
};

const LeftSidebar = ({
    value,
    setValue,
    smallSidebar,
    visibleRightSidebar,
}: LeftSidebarProps) => {
    const [visibleSearch, setVisibleSearch] = useState<boolean>(false);
    const [visibleSettings, setVisibleSettings] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("keydown", handleWindowKeyDown);
        return () => {
            window.removeEventListener("keydown", handleWindowKeyDown);
        };
    }, []);

    const handleWindowKeyDown = (event: any) => {
        if (event.metaKey && event.key === "f") {
            event.preventDefault();
            setVisibleSearch(true);
        }
    };

    // Define dropdown sections structure
    const dropdownSections = [
        {
            title: "Chats with TARX",
            icon: "chat",
            color: "fill-accent-2",
            items: recentChats,
            footerAction: {
                label: "View more",
                onClick: () => {
                    // Navigate to full page list view
                    window.location.href = "/chats";
                }
            }
        },
        {
            title: "Workspaces", 
            icon: "folder",
            color: "fill-primary-1",
            items: workspaces,
            createAction: {
                label: "Create new workspace",
                onClick: () => {
                    console.log("Create workspace");
                }
            }
        },
        {
            title: "Actions",
            icon: "lightning", 
            color: "fill-accent-3",
            items: actions,
            footerAction: {
                label: "View all actions",
                onClick: () => {
                    window.location.href = "/actions";
                }
            }
        }
    ];

    // Simple navigation items for Search and Settings
    const simpleNavigation = [
        {
            title: "Search",
            icon: "search",
            color: "fill-primary-2",
            onClick: () => setVisibleSearch(true),
        },
        {
            title: "Settings",
            icon: "settings",
            color: "fill-accent-3",
            onClick: () => setVisibleSettings(true),
        },
    ];

    const handleClick = () => {
        setValue(!value);
        smallSidebar && value ? disablePageScroll() : enablePageScroll();
    };

    return (
        <>
            <div
                className={twMerge(
                    `fixed z-20 top-0 left-0 bottom-0 flex flex-col pt-30 px-4 bg-n-7 md:invisible md:opacity-0 md:transition-opacity ${
                        value
                            ? "w-24 pb-38 md:w-16 md:px-0 md:pb-30"
                            : "w-80 pb-58"
                    } ${visibleRightSidebar && "md:visible md:opacity-100"}`
                )}
            >
                <div
                    className={`absolute top-0 right-0 left-0 flex items-center h-30 pl-7 pr-6 ${
                        value ? "justify-center md:px-4" : "justify-between"
                    }`}
                >
                    {!value && <Logo />}
                    <button
                        className="group tap-highlight-color"
                        onClick={handleClick}
                    >
                        <Icon
                            className="fill-n-4 transition-colors group-hover:fill-n-3"
                            name={value ? "toggle-on" : "toggle-off"}
                        />
                    </button>
                </div>
                <div className="grow overflow-y-auto scroll-smooth scrollbar-none">
                    {/* Search at top */}
                    <div className={`mb-4 ${value && "px-2"}`}>
                        <button
                            className={`flex items-center w-full h-12 base2 font-semibold text-n-3/75 rounded-lg transition-colors hover:text-n-1 ${
                                value ? "px-3" : "px-5"
                            }`}
                            onClick={() => setVisibleSearch(true)}
                        >
                            <Icon className="fill-primary-2" name="search" />
                            {!value && <div className="ml-5 text-left">Search</div>}
                            {!value && (
                                <div className="ml-auto px-2 rounded-md bg-n-4/50 caption1 font-semibold text-n-3">
                                    ⌘ F
                                </div>
                            )}
                        </button>
                    </div>

                    {/* Dropdown Navigation */}
                    <DropdownNavigation sections={dropdownSections} visible={value} />
                </div>
                <div className="absolute left-0 bottom-0 right-0 pb-6 px-4 bg-n-7 before:absolute before:left-0 before:right-0 before:bottom-full before:h-10 before:bg-gradient-to-t before:from-[#131617] before:to-[rgba(19,22,23,0)] before:pointer-events-none md:px-3">
                    <Profile 
                        visible={value} 
                        onSettingsClick={() => setVisibleSettings(true)}
                        hasProfilePhoto={false}
                        userName="John Doe" 
                    />
                </div>
            </div>
            <Modal
                className="md:!p-0"
                classWrap="md:min-h-screen-ios md:rounded-none dark:shadow-[inset_0_0_0_0.0625rem_#232627,0_2rem_4rem_-1rem_rgba(0,0,0,0.33)] dark:md:shadow-none"
                classButtonClose="hidden md:flex md:absolute md:top-6 md:left-6 dark:fill-n-1"
                classOverlay="md:bg-n-1"
                visible={visibleSearch}
                onClose={() => setVisibleSearch(false)}
            >
                <Search items={resultSearch} />
            </Modal>
            <Modal
                className="md:!p-0"
                classWrap="max-w-[48rem] md:min-h-screen-ios md:rounded-none"
                classButtonClose="hidden md:block md:absolute md:top-5 md:right-5 dark:fill-n-4"
                classOverlay="md:bg-n-1"
                visible={visibleSettings}
                onClose={() => setVisibleSettings(false)}
            >
                <Settings items={settings} />
            </Modal>
        </>
    );
};

export default LeftSidebar;
