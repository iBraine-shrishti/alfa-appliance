import { useState } from "react";
import { FiSave, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const AccountSettingsTab = ({ user }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    // Handle password update logic here
    alert("Password updated successfully!");
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-navy-950">Account Settings</h2>
        <p className="mt-1 text-sm text-navy-900/60">Update your personal details and account security.</p>
      </div>

      {/* Profile Info Form */}
      <form className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-navy-950 border-b border-navy-900/10 pb-3">
          Personal Information
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-bold text-navy-900/70">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 w-full rounded-xl border border-navy-900/15 px-4 py-2.5 text-sm font-semibold text-navy-950 focus:border-brand-blue focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-navy-900/70">Phone Number</label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="mt-1 w-full rounded-xl border border-navy-900/15 px-4 py-2.5 text-sm font-semibold text-navy-950 focus:border-brand-blue focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-navy-900/70">Email Address</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1 w-full rounded-xl border border-navy-900/15 px-4 py-2.5 text-sm font-semibold text-navy-950 focus:border-brand-blue focus:outline-none"
          />
        </div>

        <div className="pt-2">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-black"
          >
            <FiSave size={16} /> Save Personal Details
          </button>
        </div>
      </form>

      <form onSubmit={handlePasswordChange} className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-navy-900/10 pb-3">
          <h3 className="text-base font-bold text-navy-950 flex items-center gap-2">
            <FiLock className="text-brand-blue" /> Security & Password
          </h3>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="flex items-center gap-1.5 text-xs font-bold text-navy-900/60 hover:text-navy-950"
          >
            {showPassword ? <FiEyeOff size={14} /> : <FiEye size={14} />}
            {showPassword ? "Hide Passwords" : "Show Passwords"}
          </button>
        </div>

        <div>
          <label className="block text-xs font-bold text-navy-900/70">Current Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={passwordData.currentPassword}
            onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
            placeholder="••••••••"
            className="mt-1 w-full rounded-xl border border-navy-900/15 px-4 py-2.5 text-sm font-semibold text-navy-950 focus:border-brand-blue focus:outline-none"
            required
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-bold text-navy-900/70">New Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={passwordData.newPassword}
              onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
              placeholder="••••••••"
              className="mt-1 w-full rounded-xl border border-navy-900/15 px-4 py-2.5 text-sm font-semibold text-navy-950 focus:border-brand-blue focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-navy-900/70">Confirm New Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={passwordData.confirmPassword}
              onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
              placeholder="••••••••"
              className="mt-1 w-full rounded-xl border border-navy-900/15 px-4 py-2.5 text-sm font-semibold text-navy-950 focus:border-brand-blue focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-navy-950 px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-blue"
          >
            <FiLock size={16} /> Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountSettingsTab;