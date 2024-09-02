import AvatarDropdown from "@/components/avatar-dropdown";
import Sidebar from "@/components/dashboard/sidebar";
import { BarIcon, NotificationIcon } from "@/components/ui/icon";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Dashboard My Todo List",
    description:
        "Easily manage your tasks and stay productive with the My Todo List app. Track your progress, prioritize your tasks, and never miss a deadline. Start organizing your to-do list today!",
    icons: {
        icon: "/app/favicon.ico",
    },
};



const Dashboard = () => {
    return (
        <div className="w-full flex h-screen">
            <div className="bg-gray-900 w-1/5 h-full p-8 lg:block hidden">
                <div className="flex justify-between">
                    <div className="flex items-center justify-center">
                        <AvatarDropdown />

                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-orange-500 bg-opacity-40 rounded-lg hover:bg-orange-500 mr-2">
                            <NotificationIcon />
                        </button>
                        <button className="bg-orange-500 bg-opacity-40 rounded-lg hover:bg-orange-500">
                           <BarIcon />
                        </button>
                    </div>  
                </div>
                <Sidebar />
            </div>

            <div className="bg-gray-800 lg:w-4/5 w-full h-full p-8">
                <h1 className="text-white text-3xl font-bold">Dashboard Content</h1>
                <p className="text-white">Welcome to your dashboard!</p>
            </div>
        </div>
    );
};

export default Dashboard;
