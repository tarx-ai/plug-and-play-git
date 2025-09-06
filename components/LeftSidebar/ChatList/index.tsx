import { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import AddChatList from "@/components/AddChatList";

type ChatListType = {
    id: string;
    title: string;
    counter: number;
    color: string;
    url: string;
};

type ChatListProps = {
    visible?: boolean;
    items: ChatListType[];
};

const ChatList = ({ visible, items }: ChatListProps) => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false);

    const pathname = usePathname();

    return (
        <>
            <div className="mb-6">
                <Disclosure defaultOpen={true}>
                    <Disclosure.Button
                        className={`flex items-center w-full h-12 text-left base2 font-semibold text-n-3/75 transition-colors hover:text-n-1 ${
                            visible ? "justify-center px-3" : "px-5"
                        }`}
                    >
                        <Icon
                            className="fill-n-4"
                            name="chat"
                        />
                        {!visible && (
                            <>
                                <div className="ml-5">Chat list</div>
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
                                        <div
                                            className="w-3 h-3 rounded"
                                            style={{
                                                backgroundColor: item.color,
                                            }}
                                        ></div>
                                    </div>
                                    <div className="text-sm flex-1">
                                        {item.title}
                                    </div>
                                    <div className="px-2 py-0.5 bg-n-6 rounded text-xs font-medium text-n-4">
                                        {item.counter}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                    </Transition>
                </Disclosure>
                <button
                    className={`group flex items-center w-full h-10 text-left base2 text-n-3/75 transition-colors hover:text-n-3 ${
                        visible ? "justify-center px-3" : "px-5"
                    }`}
                    onClick={() => setVisibleModal(true)}
                >
                    <div className="ml-6 flex items-center">
                        <Icon
                            className="fill-n-4 transition-colors group-hover:fill-n-3 mr-3"
                            name="plus-circle"
                        />
                        {!visible && <div className="text-sm">New list</div>}
                    </div>
                </button>
            </div>
            <Modal
                className="md:!p-0"
                classWrap="max-w-[40rem] md:min-h-screen-ios md:rounded-none md:pb-8"
                classButtonClose="absolute top-6 right-6 w-10 h-10 rounded-full bg-n-2 md:right-5 dark:bg-n-4/25 dark:fill-n-4 dark:hover:fill-n-1"
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
            >
                <AddChatList onCancel={() => setVisibleModal(false)} />
            </Modal>
        </>
    );
};

export default ChatList;
