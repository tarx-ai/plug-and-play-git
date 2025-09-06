import Link from "next/link";
import Icon from "@/components/Icon";

const ManageSubscription = () => {
    return (
        <div className="max-w-[30rem]">
            <div className="mb-6">
                <div className="h6 mb-3">Manage subscription</div>
                <div className="body2 text-n-4">
                    View and manage your TARX subscription, billing, and payment methods.
                </div>
            </div>
            <div className="p-6 border border-n-3 rounded-2xl bg-n-1 dark:border-n-5 dark:bg-n-6">
                <div className="flex items-center mb-4">
                    <div className="flex justify-center items-center w-12 h-12 mr-4 bg-primary-1/10 rounded-xl">
                        <Icon className="w-6 h-6 fill-primary-1" name="card" />
                    </div>
                    <div>
                        <div className="base1 font-semibold">TARX Pro</div>
                        <div className="caption1 text-n-4">Active subscription</div>
                    </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <div className="caption1 text-n-4">Next billing date</div>
                    <div className="caption1 font-semibold">March 15, 2024</div>
                </div>
                <div className="flex items-center justify-between mb-6">
                    <div className="caption1 text-n-4">Amount</div>
                    <div className="caption1 font-semibold">$20/month</div>
                </div>
                <div className="flex space-x-3">
                    <Link 
                        className="btn-stroke-light flex-1 text-center"
                        href="/pricing"
                    >
                        Change Plan
                    </Link>
                    <button className="btn-stroke-light flex-1">
                        Cancel
                    </button>
                </div>
            </div>
            
            <div className="mt-6 p-4 border border-n-3 rounded-xl bg-n-2/50 dark:border-n-5 dark:bg-n-7/50">
                <div className="flex items-center">
                    <Icon className="w-5 h-5 mr-3 fill-n-4" name="info" />
                    <div className="caption1 text-n-4">
                        Changes will take effect at your next billing cycle.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageSubscription;