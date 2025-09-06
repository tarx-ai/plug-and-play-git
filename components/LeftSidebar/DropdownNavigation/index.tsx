import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Icon from "@/components/Icon";

interface DropdownItem {
    id: string;
    title: string;
    subtitle?: string;
    icon?: string;
    color?: string;
    url?: string;
    isRecommended?: boolean;
    onClick?: () => void;
}

interface DropdownSection {
    title: string;
    icon: string;
    color: string;
    items: DropdownItem[];
    footerAction?: {
        label: string;
        onClick: () => void;
    };
    createAction?: {
        label: string;
        onClick: () => void;
    };
}

interface DropdownNavigationProps {
    sections: DropdownSection[];
    visible?: boolean;
}

const DropdownNavigation = ({ sections, visible }: DropdownNavigationProps) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    const toggleDropdown = (title: string) => {
        setOpenDropdown(openDropdown === title ? null : title);
    };

    return (
        <div className={`space-y-1 ${visible && "px-2"}`}>
            {sections.map((section, index) => (
                <div key={index}>
                    <button
                        className={twMerge(
                            "flex items-center justify-between w-full h-12 base2 font-semibold text-n-3/75 rounded-lg transition-colors hover:text-n-1",
                            visible ? "px-3" : "px-5"
                        )}
                        onClick={() => toggleDropdown(section.title)}
                    >
                        <div className="flex items-center text-left">
                            <Icon className={section.color} name={section.icon} />
                            {!visible && <div className="ml-5 text-left">{section.title}</div>}
                        </div>
                        {!visible && (
                            <Icon 
                                className={`text-n-4 transition-transform ${openDropdown === section.title ? 'rotate-180' : ''}`} 
                                name="chevron-down" 
                            />
                        )}
                    </button>

                    {/* Dropdown Content */}
                    {openDropdown === section.title && !visible && (
                        <div className="ml-8 mt-2 space-y-1">
                            {section.items.slice(0, 10).map((item) => (
                                <div key={item.id}>
                                    {item.url ? (
                                        <Link
                                            href={item.url}
                                            className={twMerge(
                                                "flex items-center justify-between px-3 py-2 rounded-lg hover:bg-n-6/30 transition-colors group",
                                                pathname === item.url && "bg-gradient-to-l from-[#323337] to-[rgba(70,79,111,0.3)] shadow-[inset_0px_0.0625rem_0_rgba(255,255,255,0.05),0_0.25rem_0.5rem_0_rgba(0,0,0,0.1)]"
                                            )}
                                        >
                                            <div className="flex items-center min-w-0 flex-1">
                                                {item.icon ? (
                                                    <Icon className={`mr-3 ${item.color || 'fill-n-4'}`} name={item.icon} />
                                                ) : (
                                                    <div className={`w-2 h-2 rounded-full mr-3 ${item.color || 'bg-n-4'}`} />
                                                )}
                                                <div className="min-w-0 text-left">
                                                    <div className="caption1 text-n-1 truncate text-left">{item.title}</div>
                                                    {item.subtitle && (
                                                        <div className="caption2 text-n-4 truncate text-left">{item.subtitle}</div>
                                                    )}
                                                </div>
                                            </div>
                                            {item.isRecommended && (
                                                <div className="px-2 py-0.5 bg-primary-1/20 text-primary-1 rounded-lg caption2 font-medium">
                                                    Recommended
                                                </div>
                                            )}
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={item.onClick}
                                            className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-n-6/30 transition-colors group text-left"
                                        >
                                            <div className="flex items-center min-w-0 flex-1">
                                                {item.icon ? (
                                                    <Icon className={`mr-3 ${item.color || 'fill-n-4'}`} name={item.icon} />
                                                ) : (
                                                    <div className={`w-2 h-2 rounded-full mr-3 ${item.color || 'bg-n-4'}`} />
                                                )}
                                                <div className="min-w-0 text-left">
                                                    <div className="caption1 text-n-1 truncate text-left">{item.title}</div>
                                                    {item.subtitle && (
                                                        <div className="caption2 text-n-4 truncate text-left">{item.subtitle}</div>
                                                    )}
                                                </div>
                                            </div>
                                            {item.isRecommended && (
                                                <div className="px-2 py-0.5 bg-primary-1/20 text-primary-1 rounded-lg caption2 font-medium">
                                                    Recommended
                                                </div>
                                            )}
                                        </button>
                                    )}
                                </div>
                            ))}
                            
                            {/* Footer Actions */}
                            <div className="border-t border-n-6/30 pt-2 mt-3">
                                {section.footerAction && (
                                    <button
                                        onClick={section.footerAction.onClick}
                                        className="flex items-center w-full px-3 py-2 rounded-lg hover:bg-n-6/30 transition-colors text-left"
                                    >
                                        <Icon className="text-n-4 mr-3" name="plus" />
                                        <span className="caption1 text-n-4 text-left">{section.footerAction.label}</span>
                                    </button>
                                )}
                                {section.createAction && openDropdown === section.title && (
                                    <button
                                        onClick={section.createAction.onClick}
                                        className="flex items-center w-full px-3 py-2 rounded-lg hover:bg-n-6/30 transition-colors text-left"
                                    >
                                        <Icon className="text-primary-1 mr-3" name="plus" />
                                        <span className="caption1 text-primary-1 text-left">{section.createAction.label}</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DropdownNavigation;