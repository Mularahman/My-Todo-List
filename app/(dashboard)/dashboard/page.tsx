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
        <>
                <h1 className="text-white text-3xl font-bold">Dashboard Content</h1>
                <p className="text-white">Welcome to your dashboard!</p>
        </>
           
    );
};

export default Dashboard;
