import SignIn from "@/views/auth/register/sign-in";
import SignUp from "@/views/auth/register/sign-up";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register - My Todo List",
  description:
    "Create your account to start managing your tasks effectively with My Todo List. Sign up and join our community to stay organized and productive.",
  icons: {
    icon: "/app/favicon.ico",
  },
};

const Register = () => {
  return (
    <div className="relative overflow-hidden items-center justify-center min-h-screen bg-gradient-to-l from-gray-900 to-gray-500">
      <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-gradient-to-l from-orange-700 to-orange-500 rounded-full  shadow-2xl"></div>
      <div className="absolute bottom-[-300px] left-[-300px] w-[700px] h-[700px] bg-gradient-to-r from-orange-700 to-orange-500 rounded-full  shadow-2xl"></div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex w-full max-w-6xl rounded-2xl shadow-2xl bg-white z-10  md:flex-row flex-col">
          {/* Sign In Section */}
         <SignIn />

          {/* Sign Up Section */}
        <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Register;
