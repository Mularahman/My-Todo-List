import SignIn from "@/views/auth/login/sign-in";
import SignUp from "@/views/auth/login/sign-up";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to My Todo List",
  description:
    "Stay organized and productive with My Todo List app. Effortlessly manage your tasks, track progress, and never miss a deadline. Start prioritizing your tasks today!",
  icons: {
    icon: "/app/favicon.ico",
  },
};

const Login = () => {
  return (
    <div className="relative overflow-hidden items-center justify-center min-h-screen bg-gradient-to-l from-gray-900 to-gray-500">
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-gradient-to-l from-orange-700 to-orange-500 rounded-full  shadow-2xl"></div>
      <div className="absolute bottom-[-300px] left-[-300px] w-[700px] h-[700px] bg-gradient-to-r from-orange-700 to-orange-500 rounded-full  shadow-2xl"></div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex w-full max-w-6xl rounded-2xl shadow-2xl bg-white z-10  md:flex-row flex-col ">
          {/* Sign Up Section */}
          <SignUp />
          {/* Sign In Section */}
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Login;
