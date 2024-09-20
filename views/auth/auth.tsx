"use client";
import { useState } from "react";
import CardBlack from "./auth/card-black";
import CardWhite from "./auth/card-white";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleAuth = () => setIsSignUp(!isSignUp);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex w-full max-w-6xl rounded-2xl shadow-2xl bg-white z-10  md:flex-row flex-col">
        <CardWhite isSignUp={isSignUp} />
        <CardBlack isSignUp={isSignUp} onSignUpClick={toggleAuth} />
      </div>
    </div>
  );
};

export default AuthPage;
