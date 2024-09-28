import Inbox from "@/views/inbox/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inbox My Todo List",
  description:
    "Easily manage your tasks and stay productive with the My Todo List app. Track your progress, prioritize your tasks, and never miss a deadline. Start organizing your to-do list today!",
  icons: {
    icon: "/app/favicon.ico",
  },
};

const Page = () => {
  return (
    <>
      <h1 className="text-white text-3xl font-bold">Inbox</h1>
      <Inbox />
    </>
  );
};

export default Page;
