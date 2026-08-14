import { useState } from "react";
import AuthHero from "../components/auth/AuthHero";
import AuthTabs from "../components/auth/AuthTabs";
import LoginForm from "../components/auth/LoginForm";
import SignUpForm from "../components/auth/SignUpForm";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login"); // "login" | "signup"

  return (
    <div className="flex min-h-screen bg-slate-50 lg:min-h-[calc(100vh-2.75rem)]">
      <AuthHero />

      <div className="flex flex-1 items-center justify-center px-4 py-10 sm:px-8">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6 flex justify-center">
            <span className="text-2xl font-extrabold tracking-tight text-navy-950">
              ALFA
              <span className="ml-1 block text-center text-[10px] font-semibold tracking-[0.3em] text-blue-600">
                APPLIANCES
              </span>
            </span>
          </div>

          <AuthTabs activeTab={activeTab} onChange={setActiveTab} />

          <div className="mt-6">
            {activeTab === "login" ? <LoginForm /> : <SignUpForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;