import { useState } from "react";
import { 
  FiUser, 
  FiPackage, 
  FiTruck, 
  FiMapPin, 
  FiLogOut, 
  FiChevronRight,
  FiShield,
  FiClock
} from "react-icons/fi";
import Container from "../components/common/Container";


import AccountSettingsTab from "../components/profile-tabs/AccountSettingsTab";
import OrdersHistoryTab from "../components/profile-tabs/OrdersHistoryTab";
import TrackOrderTab from "../components/profile-tabs/TrackOrderTab";
import AddressBookTab from "../components/profile-tabs/AddressBookTab";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("orders"); 
  const [trackingNumber, setTrackingNumber] = useState("ALFA-904218");
  const [user] = useState({
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    phone: "+44 7700 900077",
    memberSince: "March 2024",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  });

  const navigationItems = [
    { id: "orders", label: "My Orders", icon: FiPackage, count: 3 },
    { id: "track", label: "Track Live", icon: FiTruck, badge: "Active" },
    { id: "addresses", label: "Saved Addresses", icon: FiMapPin, count: 2 },
    { id: "settings", label: "Account Settings", icon: FiUser },
  ];

  return (
    <div className="min-h-screen bg-navy-900/[0.02] py-8 lg:py-12">
      <Container>
        <div className="mb-8 rounded border border-navy-900/10 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-brand-blue/20">
                <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-navy-950 sm:text-3xl">{user.name}</h1>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                    <FiShield size={12} /> Verified Buyer
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-navy-900/60">{user.email}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-navy-900/40">
                  <FiClock size={12} /> Member since {user.memberSince}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded bg-navy-900/[0.03] p-4 text-xs font-medium text-navy-900/70 border border-navy-900/5">
              <div>
                <p className="text-lg font-bold text-navy-950">14-Day</p>
                <p className="text-[11px] text-navy-900/50">Price Lock Active</p>
              </div>
              <div className="h-8 w-px bg-navy-900/10" />
              <div>
                <p className="text-lg font-bold text-emerald-600">Free</p>
                <p className="text-[11px] text-navy-900/50">Stair Heroes Standard</p>
              </div>
            </div>
          </div>
        </div>


        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
    
          <aside className="space-y-2">
            <div className="sticky top-24 overflow-hidden rounded border border-navy-900/10 bg-white p-2 shadow-sm">
              <nav className="space-y-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`flex w-full items-center justify-between rounded px-4 py-3.5 text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
                          : "text-navy-900/70 hover:bg-navy-900/[0.04] hover:text-navy-950"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} className={isActive ? "text-white" : "text-navy-900/50"} />
                        <span>{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.badge && (
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                              isActive ? "bg-white/20 text-white" : "bg-brand-blue/10 text-brand-blue"
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                        {item.count !== undefined && (
                          <span
                            className={`rounded-md px-2 py-0.5 text-xs font-bold ${
                              isActive ? "bg-white/20 text-white" : "bg-navy-900/5 text-navy-900/60"
                            }`}
                          >
                            {item.count}
                          </span>
                        )}
                        <FiChevronRight
                          size={16}
                          className={`opacity-50 ${isActive ? "text-white" : "text-navy-900/30"}`}
                        />
                      </div>
                    </button>
                  );
                })}
              </nav>

              <div className="mt-4 border-t border-navy-900/10 pt-2">
                <button
                  type="button"
                  className="flex w-full items-center gap-3 rounded px-4 py-3 text-sm font-semibold text-rose-600 transition-colors hover:bg-rose-50"
                >
                  <FiLogOut size={18} />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </aside>

          <main className="min-h-[500px]">
            {activeTab === "settings" && <AccountSettingsTab user={user} />}
            {activeTab === "orders" && (
              <OrdersHistoryTab
                onTrackOrder={(orderId) => {
                  setTrackingNumber(orderId);
                  setActiveTab("track");
                }}
              />
            )}
            {activeTab === "track" && (
              <TrackOrderTab key={trackingNumber} initialTrackingNumber={trackingNumber} />
            )}
            {activeTab === "addresses" && <AddressBookTab />}
          </main>
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;