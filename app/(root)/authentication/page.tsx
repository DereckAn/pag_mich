"use client";
import { LoginForm } from "@/components/ui/login-form";
import { SignCard } from "@/components/ui/signup-card";
import { cn } from "@/utils/utils";
import { useState } from "react";

const AuthForm = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <main
      className={cn(
        "h-screen w-full flex transition-transform duration-500 ease-in-out",
        showLoginForm ? "flex-row-reverse " : "flex-row"
      )}
    >
      <LoginForm showlogin={showLoginForm} />
      <SignCard
        title={showLoginForm ? "New Here?" : "One of Us?"}
        description={
          showLoginForm
            ? "Sign up and discover a great amount of new opportunities!"
            : "If you already have an account, just sign in. We've missed you!"
        }
        butext={showLoginForm ? "Sign Up" : "Sign In"}
        onclick={toggleForm}
      />
    </main>
  );
};

export default AuthForm;
