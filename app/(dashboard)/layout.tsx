"use client"
import AvatarDropdown from "@/components/avatar-dropdown";
import ButtonToggle from "@/components/dashboard/button-sidebar";
import Sidebar from "@/components/dashboard/sidebar";
import { NotificationIcon } from "@/components/ui/icon";
import type { Metadata } from "next";
import { useState } from "react";

// export const metadata: Metadata = {
//     title: "Dashboard My Todo List",
//     description: "My Todo List",
//     icons: {
//         icon: "/app/favicon.ico",
//     },
// };

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <div className="w-full flex h-screen">
                <div className={`bg-gray-900 h-full p-8 lg:block ${isSidebarOpen ? 'w-1/5' : 'w-0'} bg-gray-900 w-1/5 h-full p-8 lg:block hidden transition-all duration-300`}>
                {isSidebarOpen && (
                        <div>
                <div className="flex justify-between">
                    <div className="flex items-center justify-center">
                        <AvatarDropdown />

                    </div>
                    <div className="flex items-center justify-center">
                        <button className="bg-orange-500 bg-opacity-40 rounded-lg hover:bg-orange-500 mr-2">
                            <NotificationIcon />
                        </button>
                            <ButtonToggle isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                    </div>  
                </div>
                <Sidebar />
            </div>
                )}
            </div>

                <div className={`bg-gray-800 ${isSidebarOpen ? 'lg:w-4/5' : 'lg:w-full'} w-full h-full p-8 overflow-auto transition-all duration-300 bg-gray-800 lg:w-4/5 `}>
                    <main id="auth-layout">{children}</main>
                </div>
        </div>
        </>
    );
};

export default Layout;
