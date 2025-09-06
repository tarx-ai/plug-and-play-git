import { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Icon from "@/components/Icon";

type ActionType = {
    id: string;
    title: string;
    icon: string;
    url: string;
};

type ActionsProps = {
    visible?: boolean;
    items: ActionType[];
};

const Actions = ({ visible, items }: ActionsProps) => {
    const pathname = usePathname();

    return (
        <div className="mb-6">
            <Disclosure defaultOpen={true}>
                <Disclosure.Button
                    className={`flex items-center w-full h-12 text-left base2 font-semibold text-n-3/75 transition-colors hover:text-n-1 ${
                        visible ? "justify-center px-3" : "px-5"
                    }`}
                >
                    <Icon
                        className="fill-n-4"
                        name="calendar"
                    />
                    {!visible && (
                        <>
                            <div className="ml-5">Actions</div>
                            <Icon
                                className="ml-auto fill-n-4 transition-transform ui-open:rotate-180"
                                name="arrow-down"
                            />
                        </>
                    )}
                </Disclosure.Button>
                <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <Disclosure.Panel className={`${visible ? "px-2" : "px-5"}`}>
                        <div className="ml-6 space-y-1">
                            {items.map((item) => (
                                <Link
                                    className={twMerge(
                                        `flex items-center w-full h-10 rounded-lg text-n-3/75 base2 font-medium transition-colors hover:text-n-1 hover:bg-n-6/50 ${
                                            pathname === item.url &&
                                            "text-n-1 bg-gradient-to-l from-[#323337] to-[rgba(80,62,110,0.29)]"
                                        }`
                                    )}
                                    key={item.id}
                                    href={item.url}
                                >
                                    <div className="flex justify-center items-center w-5 h-5 mr-3">
                                        <Icon
                                            className="fill-n-4"
                                            name={item.icon}
                                        />
                                    </div>
                                    <div className="text-sm">
                                        {item.title}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </Transition>
            </Disclosure>
        </div>
    );
};

export default Actions;
