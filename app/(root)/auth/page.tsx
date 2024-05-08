"use client";
import { LoginForm } from "@/components/ui/login-form";
import { SignCard } from "@/components/ui/signup-card";
import { useState } from "react";

const AuthForm = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <main className="h-screen w-full flex ">
      <LoginForm
        title="Login to Your Account"
        signinup="Login"
        showlogin={showLoginForm}
      />
      <SignCard
        title="New Here?"
        description="Sign up and discover a great amount of new opportunities!"
        butext="Sign Up"
        onclick={toggleForm}
      />
    </main>
  );
};

export default AuthForm;
