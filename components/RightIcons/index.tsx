import { twMerge } from "tailwind-merge";

interface RightIconsProps {
    className?: string;
}

const RightIcons = ({ className }: RightIconsProps) => {
    return (
        <div className={twMerge("flex items-center gap-2", className)}>
            <button className="rounded-xl border border-n-3 p-2 hover:border-primary-1/50 transition-colors dark:border-n-5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-n-4">
                    <path
                        d="M2 3h12v10H2zM6 7h4M6 10h2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            <button className="rounded-xl border border-n-3 p-2 hover:border-primary-1/50 transition-colors dark:border-n-5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-n-4">
                    <path
                        d="M3 8l4 4L13 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
};

export default RightIcons;