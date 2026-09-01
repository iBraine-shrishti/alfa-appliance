import { useNavigate } from "react-router-dom";
import { FiUserPlus } from "react-icons/fi";

const SignUpForm = ({ role }) => {
  const navigate = useNavigate();

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
        <input
          id="signup-password"
          type="password"
          required
          placeholder="••••••••"
          className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-navy-950 outline-none placeholder:text-slate-400 focus:border-blue-600"
        />
      </div>

      <div>
        <label htmlFor="signup-confirm" className="mb-2 block text-sm font-semibold text-navy-950">
          Confirm Password
        </label>
        <input
          id="signup-confirm"
          type="password"
          required
          placeholder="••••••••"
          className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-navy-950 outline-none placeholder:text-slate-400 focus:border-blue-600"
        />
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
