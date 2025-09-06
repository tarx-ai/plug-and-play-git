/**
 * Profile Component - Left Sidebar User Profile
 * 
 * Displays user profile information in the left sidebar with clickable avatar to access settings.
 * Features:
 * - Clickable profile area opens settings modal
 * - Abstract avatar fallback for users without profile photos
 * - Connection status indicator
 * - Responsive design for collapsed/expanded sidebar states
 * 
 * Recent Changes:
 * - Removed redundant settings icon (2024-09-05)
 * - Made entire profile area clickable for settings access
 * - Added AbstractAvatar integration for users without photos
 * - Updated user name and email to John Doe / john@tarx.ai
 */

import Link from "next/link";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import AbstractAvatar from "@/components/AbstractAvatar";

type ProfileProps = {
    visible?: boolean;
    onSettingsClick?: () => void;
    hasProfilePhoto?: boolean;
    userName?: string;
};

const Profile = ({ visible, onSettingsClick, hasProfilePhoto = false, userName = "John Doe" }: ProfileProps) => (
    <div
        className={`${
            visible
                ? "mb-6"
                : "mb-3 shadow-[0_1.25rem_1.5rem_0_rgba(0,0,0,0.5)]"
        }`}
    >
        <div className={`${!visible && "p-2.5 bg-n-6 rounded-xl"}`}>
            <button
                className={`flex items-center w-full transition-colors hover:bg-n-6/20 rounded-lg ${
                    visible ? "justify-center p-2" : "px-2.5 py-2.5 pb-4.5"
                }`}
                onClick={onSettingsClick}
            >
                <div className="relative">
                    <div className="w-10 h-10 bg-primary-1 rounded-full flex items-center justify-center">
                        <span className="text-n-1 font-bold text-sm">JD</span>
                    </div>
                    <div className="absolute -right-0.75 -bottom-0.75 w-4.5 h-4.5 bg-primary-2 rounded-full border-4 border-n-6"></div>
                </div>
                {!visible && (
                    <>
                        <div className="ml-4 mr-4 flex-1 text-left">
                            <div className="base2 font-semibold text-n-1">
                                {userName}
                            </div>
                            <div className="caption1 font-semibold text-n-3/50">
                                john@tarx.ai
                            </div>
                        </div>
                    </>
                )}
            </button>
            {!visible && (
                <div className="w-full mt-2 px-3 py-2 bg-n-5 rounded-lg caption1 font-semibold text-primary-2 text-center">
                    Connected Online
                </div>
            )}
        </div>
    </div>
);

export default Profile;
