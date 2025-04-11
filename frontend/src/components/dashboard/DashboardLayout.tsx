"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  Bell,
  Settings,
  LogOut,
  Home,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  FileText,
  Menu,
  X,
} from "lucide-react";

interface DashboardLayoutProps {
  children?: React.ReactNode;
  userRole?: "healthcare" | "admin";
  userName?: string;
  userAvatar?: string;
}

export default function DashboardLayout({
  children,
  userRole = "healthcare",
  userName = "Dr. Jane Smith",
  userAvatar = "",
}: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`${isSidebarOpen ? "w-64" : "w-20"} bg-card border-r border-border transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 flex items-center justify-between border-b border-border">
          <div
            className={`flex items-center ${!isSidebarOpen && "justify-center w-full"}`}
          >
            {isSidebarOpen ? (
              <h1 className="text-xl font-bold">MediSupply</h1>
            ) : (
              <span className="text-xl font-bold">MS</span>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className={!isSidebarOpen ? "mx-auto" : ""}
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <NavItem
            href="/dashboard"
            icon={<Home size={20} />}
            label="Overview"
            isActive={pathname === "/dashboard"}
            isCollapsed={!isSidebarOpen}
          />
          <NavItem
            href="/dashboard/catalog"
            icon={<Package size={20} />}
            label="Medicine Catalog"
            isActive={pathname === "/dashboard/catalog"}
            isCollapsed={!isSidebarOpen}
          />
          <NavItem
            href="/dashboard/inventory"
            icon={<BarChart3 size={20} />}
            label="Inventory"
            isActive={pathname === "/dashboard/inventory"}
            isCollapsed={!isSidebarOpen}
          />
          <NavItem
            href="/dashboard/orders"
            icon={<ShoppingCart size={20} />}
            label="Orders"
            isActive={pathname === "/dashboard/orders"}
            isCollapsed={!isSidebarOpen}
          />

          {userRole === "admin" && (
            <>
              <Separator className="my-4" />
              <p
                className={`text-xs text-muted-foreground mb-2 ${!isSidebarOpen && "hidden"}`}
              >
                Admin Controls
              </p>
              <NavItem
                href="/dashboard/admin"
                icon={<Settings size={20} />}
                label="Admin Panel"
                isActive={pathname === "/dashboard/admin"}
                isCollapsed={!isSidebarOpen}
              />
              <NavItem
                href="/dashboard/users"
                icon={<Users size={20} />}
                label="User Management"
                isActive={pathname === "/dashboard/users"}
                isCollapsed={!isSidebarOpen}
              />
              <NavItem
                href="/dashboard/reports"
                icon={<FileText size={20} />}
                label="Reports"
                isActive={pathname === "/dashboard/reports"}
                isCollapsed={!isSidebarOpen}
              />
            </>
          )}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={userAvatar} alt={userName} />
              <AvatarFallback>
                {userName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            {isSidebarOpen && (
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium truncate">{userName}</p>
                <p className="text-xs text-muted-foreground capitalize">
                  {userRole}
                </p>
              </div>
            )}
            {isSidebarOpen && (
              <Button variant="ghost" size="icon">
                <LogOut size={18} />
              </Button>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6">
          <div className="flex items-center w-1/3">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search medicines, orders..."
                className="pl-8 w-full"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" className="relative">
              <Bell size={18} />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                3
              </Badge>
            </Button>
            <Button variant="outline" size="icon">
              <Settings size={18} />
            </Button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  isCollapsed: boolean;
}

function NavItem({ href, icon, label, isActive, isCollapsed }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center p-2 rounded-md transition-colors ${isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"} ${isCollapsed ? "justify-center" : ""}`}
    >
      <span className="mr-3">{icon}</span>
      {!isCollapsed && <span>{label}</span>}
    </Link>
  );
}
