"use client";

import { ArrowRightFromSquare, LayoutHeader, Person } from "@gravity-ui/icons";
import { Avatar, Dropdown } from "@heroui/react";
import { authClient } from "../lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const UserAccount = ({ user }) => {
  const router = useRouter();

  const hadelLogout = async () => {
    try {
      await authClient.signOut();
      toast.success("Log Out Successful", { theme: "dark" });
      router.push("/"); // Log out hole home page-e niye jabe
    } catch (error) {
      toast.error("Logout failed!");
    }
  };

  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full cursor-pointer outline-none">
        <Avatar
          size="lg"
          className="ring-2 ring-white/10 hover:ring-cyan-500 transition-all"
        >
          <Avatar.Image
            referrerPolicy="no-referrer"
            alt={user?.name}
            src={user?.image}
          />
          <Avatar.Fallback delayMs={600}>
            {user?.name?.charAt(0)}
          </Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>

      <Dropdown.Popover className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-2 shadow-2xl">
        {/* User Info Header */}
        <div className="px-4 pt-4 pb-3 border-b border-white/5 mb-2">
          <div className="flex items-center gap-3">
            <Avatar size="sm">
              <Avatar.Image src={user?.image} />
              <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-sm font-black text-white uppercase tracking-tight">
                {user?.name}
              </p>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                {user?.email}
              </p>
            </div>
          </div>
        </div>

        {/* Dropdown Menu Items */}
        <Dropdown.Menu className="gap-1">
          <Dropdown.Item
            key="dashboard"
            className="rounded-xl py-2.5 hover:bg-white/5 text-gray-400"
          >
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
              <LayoutHeader className="size-4" /> Dashboard
            </div>
          </Dropdown.Item>

          <Dropdown.Item
            key="profile"
            className="rounded-xl py-2.5 hover:bg-white/5 text-gray-400"
          >
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
              <Person className="size-4" /> Profile
            </div>
          </Dropdown.Item>

          {/* Sign Out Button - Puru alada and High-Contrast Red */}
          <Dropdown.Item
            key="logout"
            className="rounded-xl py-2.5 bg-red-500/10 hover:bg-red-500 group transition-all"
            onAction={hadelLogout} // HeroUI Dropdown-e onClick-er jaygay onAction best kaj kore
          >
            <div className="flex w-full items-center justify-between gap-3">
              <span className="text-xs font-black uppercase tracking-widest text-red-500 group-hover:text-white transition-colors">
                Log Out
              </span>
              <ArrowRightFromSquare className="size-4 text-red-500 group-hover:text-white transition-colors" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default UserAccount;
