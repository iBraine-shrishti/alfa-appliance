import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUserPlus, FiEye, FiEyeOff } from "react-icons/fi";

const SignUpForm = ({ role }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
 
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="signup-name" className="mb-2 block text-sm font-semibold text-navy-950">
          Full Name
        </label>
        <input
          id="signup-name"
          type="text"
          required
          placeholder="John Doe"
          className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-navy-950 outline-none placeholder:text-slate-400 focus:border-blue-600"
        />
      </div>

      <div>
        <label htmlFor="signup-email" className="mb-2 block text-sm font-semibold text-navy-950">
          Email Address
        </label>
        <input
          id="signup-email"
          type="email"
          required
          placeholder={role === "admin" ? "technician@alfa.com" : "john@example.com"}
          className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-navy-950 outline-none placeholder:text-slate-400 focus:border-blue-600"
        />
      </div>

      <div>
        <label htmlFor="signup-password" className="mb-2 block text-sm font-semibold text-navy-950">
          Password
        </label>
        <div className="relative">
          <input
            id="signup-password"
            type={showPassword ? "text" : "password"}
            required
            placeholder="••••••••"
            className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 pr-10 text-sm text-navy-950 outline-none placeholder:text-slate-400 focus:border-blue-600"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-navy-950 transition-colors"
          >
            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="signup-confirm" className="mb-2 block text-sm font-semibold text-navy-950">
          Confirm Password
        </label>
        <div className="relative">
          <input
            id="signup-confirm"
            type={showConfirm ? "text" : "password"}
            required
            placeholder="••••••••"
            className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 pr-10 text-sm text-navy-950 outline-none placeholder:text-slate-400 focus:border-blue-600"
          />
          <button
            type="button"
            onClick={() => setShowConfirm((prev) => !prev)}
            aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-navy-950 transition-colors"
          >
            {showConfirm ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-500"
      >
        Create Account
        <FiUserPlus size={16} />
      </button>
    </form>
  );
};

export default SignUpForm;
