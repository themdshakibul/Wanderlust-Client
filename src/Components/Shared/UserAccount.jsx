"use client";

import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { authClient } from "../lib/auth-client";
import { toast } from "react-toastify";

const UserAccount = ({ user }) => {
  const hadelLogout = async () => {
    toast.success("Log Out Successfull");
    await authClient.signOut();
  };

  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full">
        <Avatar size="lg">
          <Avatar.Image
            referrerPolicy="no-referrer"
            alt="Junior Garcia"
            src={user?.image}
          />
          <Avatar.Fallback delayMs={600}>{user.name.charAt(0)}</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image
                referrerPolicy="no-referrer"
                alt="Jane"
                src={user?.image}
              />
              <Avatar.Fallback delayMs={600}>
                {user.name.charAt(0)}
              </Avatar.Fallback>
            </Avatar>
            <div className="flex flex-col gap-0">
              <p className="text-sm leading-5 font-medium">{user.name}</p>
              <p className="text-xs leading-none text-muted">{user.email}</p>
            </div>
          </div>
        </div>
        <Dropdown.Menu>
          <Dropdown.Item id="dashboard" textValue="Dashboard">
            <Label>Dashboard</Label>
          </Dropdown.Item>
          <Dropdown.Item id="profile" textValue="Profile">
            <Label>Profile</Label>
          </Dropdown.Item>
          <Dropdown.Item id="logout" textValue="Logout" variant="danger">
            <div
              onClick={hadelLogout}
              className="flex w-full items-center justify-between gap-2"
            >
              <Label>Log Out</Label>
              <ArrowRightFromSquare className="size-3.5 text-danger" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};

export default UserAccount;
