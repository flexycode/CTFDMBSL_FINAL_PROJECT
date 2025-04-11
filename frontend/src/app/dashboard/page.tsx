import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import MedicineCatalog from "@/components/dashboard/MedicineCatalog";
import InventoryVisualization from "@/components/dashboard/InventoryVisualization";
import AdminControls from "@/components/dashboard/AdminControls";

export default function DashboardPage() {
  // In a real implementation, this would come from authentication context
  const userRole = "administrator"; // or 'healthcare-professional'

  return (
    <div className="min-h-screen bg-background">
      <DashboardLayout>
        <div className="p-6 space-y-6">
          <section className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome to your pharmaceutical supply chain management dashboard.
            </p>
          </section>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1 bg-card rounded-xl border shadow p-4">
              <h3 className="font-semibold text-lg mb-2">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Medicines</span>
                  <span className="font-medium">1,245</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Low Stock Items</span>
                  <span className="font-medium text-amber-500">28</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Pending Orders</span>
                  <span className="font-medium text-blue-500">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Out of Stock</span>
                  <span className="font-medium text-red-500">7</span>
                </div>
              </div>
            </div>

            <div className="col-span-1 bg-card rounded-xl border shadow p-4">
              <h3 className="font-semibold text-lg mb-2">Recent Activity</h3>
              <div className="space-y-3">
                <div className="border-b pb-2">
                  <p className="text-sm">Order #12345 processed</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
                <div className="border-b pb-2">
                  <p className="text-sm">Inventory updated: Paracetamol</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
                <div className="border-b pb-2">
                  <p className="text-sm">New user registered: Dr. Smith</p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
                <div>
                  <p className="text-sm">Low stock alert: Amoxicillin</p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
              </div>
            </div>

            <div className="col-span-1 bg-card rounded-xl border shadow p-4">
              <h3 className="font-semibold text-lg mb-2">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary text-sm font-medium transition-colors">
                  New Order
                </button>
                <button className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary text-sm font-medium transition-colors">
                  Add Medicine
                </button>
                <button className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary text-sm font-medium transition-colors">
                  Generate Report
                </button>
                <button className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary text-sm font-medium transition-colors">
                  Manage Users
                </button>
              </div>
            </div>
          </div>

          {/* Conditional rendering based on user role */}
          {userRole === "administrator" ? (
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  Inventory Overview
                </h2>
                <InventoryVisualization />
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  Medicine Catalog
                </h2>
                <MedicineCatalog />
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Admin Controls</h2>
                <AdminControls />
              </section>
            </div>
          ) : (
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  Medicine Catalog
                </h2>
                <MedicineCatalog />
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  Inventory Status
                </h2>
                <InventoryVisualization />
              </section>
            </div>
          )}
        </div>
      </DashboardLayout>
    </div>
  );
}
