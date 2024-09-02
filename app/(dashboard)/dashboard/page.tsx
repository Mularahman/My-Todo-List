import AvatarDropdown from "@/components/avatar-dropdown";
import Navbar from "@/components/dashboard/navbar";
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
                            <svg className="text-white p-2" fill="CurrentColor" width={35} height={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" /></svg>
                        </button>
                        <button className="bg-orange-500 bg-opacity-40 rounded-lg hover:bg-orange-500">
                            <svg className="text-white p-2" fill="CurrentColor" width={35} height={35}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
                        </button>
                    </div>  
                </div>
                <Navbar />
            </div>

            <div className="bg-gray-800 lg:w-4/5 w-full h-full p-8">
                <h1 className="text-white text-3xl font-bold">Dashboard Content</h1>
                <p className="text-white">Welcome to your dashboard!</p>
            </div>
        </div>
    );
};

export default Dashboard;
