import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  ChevronRight,
  Activity,
  TrendingUp,
  AlertCircle,
  Search,
  Plus,
  Edit,
  Trash2,
  Package,
  Building,
  Warehouse,
  Users,
  ShoppingCart,
} from "lucide-react";

interface ParentCompany {
  id: string;
  name: string;
  address: string;
}

interface SubsidiaryCompany {
  id: string;
  name: string;
  address: string;
  parent_company_id: string;
}

interface Warehouse {
  id: string;
  location: string;
  subsidiary_company_id: string;
}

interface Medicine {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  manufacturer: string;
  inStock: boolean;
  imageUrl: string;
  batch_order_id?: string;
  supplier_id?: string;
  warehouse_id?: string;
  inventory?: Inventory[];
}

interface Inventory {
  id: string;
  warehouse_id: string;
  medicine_id: string;
  quantity: number;
}

interface Supplier {
  id: string;
  name: string;
  contact_info: string;
}

interface BatchOrder {
  id: string;
  supplier_id: string;
  order_date: string;
  delivery_date: string;
}

interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  order_date: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  total: number;
  parent_company_id?: string;
  subsidiary_company_id?: string;
}

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("inventory");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for inventory stats
  const inventoryStats = {
    total: 1248,
    lowStock: 24,
    pendingOrders: 36,
  };

  // Mock data for recent inventory updates
  const recentInventoryUpdates = [
    {
      name: "Amoxicillin 500mg",
      category: "Antibiotics",
      stock: 342,
      status: "In Stock",
      date: "Today, 10:30 AM",
      warehouse: "New York Distribution Center",
    },
    {
      name: "Ibuprofen 200mg",
      category: "Pain Relief",
      stock: 156,
      status: "Low Stock",
      date: "Yesterday, 3:45 PM",
      warehouse: "Chicago Regional Warehouse",
    },
    {
      name: "Metformin 850mg",
      category: "Diabetes",
      stock: 89,
      status: "In Stock",
      date: "Yesterday, 11:20 AM",
      warehouse: "San Francisco Supply Hub",
    },
    {
      name: "Lisinopril 10mg",
      category: "Cardiovascular",
      stock: 12,
      status: "Critical",
      date: "2 days ago",
      warehouse: "New York Distribution Center",
    },
  ];

  // Mock data for recent orders
  const recentOrders = [
    {
      id: "ORD-1234",
      customer: "Dr. Sarah Johnson",
      date: "Today, 9:15 AM",
      total: 456.78,
      status: "pending",
      items: 5,
      company: "MediCorp Regional Hospital",
    },
    {
      id: "ORD-1233",
      customer: "Dr. Michael Chen",
      date: "Yesterday, 2:30 PM",
      total: 289.95,
      status: "processing",
      items: 3,
      company: "Global Pharma Research Center",
    },
    {
      id: "ORD-1232",
      customer: "Dr. Emily Rodriguez",
      date: "Yesterday, 10:45 AM",
      total: 712.5,
      status: "shipped",
      items: 8,
      company: "HealthTech Medical Center",
    },
    {
      id: "ORD-1231",
      customer: "Dr. James Wilson",
      date: "3 days ago",
      total: 145.25,
      status: "delivered",
      items: 2,
      company: "MediCorp Community Clinic",
    },
  ];

  return (
    <div className="bg-background p-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">PharmaXLedger Dashboard</h1>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="bg-blue-50 text-blue-700 border-blue-200"
            >
              Admin View
            </Badge>
            <Button variant="outline" size="sm">
              Export Data
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Inventory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">
                    {inventoryStats.total}
                  </div>
                  <div className="text-xs text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" /> +12% from last month
                  </div>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Low Stock Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">
                    {inventoryStats.lowStock}
                  </div>
                  <div className="text-xs text-amber-600 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" /> Requires attention
                  </div>
                </div>
                <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-amber-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Orders Pending
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">
                    {inventoryStats.pendingOrders}
                  </div>
                  <div className="text-xs text-blue-600 flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1" /> View all
                  </div>
                </div>
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                  <ShoppingCart className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="companies">Companies</TabsTrigger>
            <TabsTrigger value="warehouses">Warehouses</TabsTrigger>
            <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
          </TabsList>

          {/* Inventory Tab */}
          <TabsContent value="inventory" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <div className="relative w-64">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search inventory..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" /> Add Medicine
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Inventory Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentInventoryUpdates.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                    >
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {item.category} • {item.warehouse}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="font-medium">{item.stock} units</div>
                          <Badge
                            variant={
                              item.status === "Critical"
                                ? "destructive"
                                : item.status === "Low Stock"
                                  ? "outline"
                                  : "secondary"
                            }
                            className={
                              item.status === "Low Stock"
                                ? "border-amber-200 bg-amber-100 text-amber-700"
                                : ""
                            }
                          >
                            {item.status}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground whitespace-nowrap">
                          {item.date}
                        </div>
                        <div className="flex space-x-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <div className="flex justify-between items-center mb-4">
              <div className="relative w-64">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search orders..." className="pl-8" />
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                    >
                      <div>
                        <div className="font-medium">{order.id}</div>
                        <div className="text-sm text-muted-foreground">
                          {order.customer} • {order.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="font-medium">
                            ${order.total.toFixed(2)}
                          </div>
                          <Badge
                            variant={
                              order.status === "cancelled"
                                ? "destructive"
                                : order.status === "pending"
                                  ? "outline"
                                  : order.status === "delivered"
                                    ? "secondary"
                                    : "default"
                            }
                            className={
                              order.status === "pending"
                                ? "border-amber-200 bg-amber-100 text-amber-700"
                                : ""
                            }
                          >
                            {order.status.charAt(0).toUpperCase() +
                              order.status.slice(1)}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground whitespace-nowrap">
                          {order.date}
                        </div>
                        <div className="flex space-x-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Companies Tab */}
          <TabsContent value="companies">
            <Card>
              <CardHeader>
                <CardTitle>Company Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Manage parent companies and their subsidiaries.
                </p>
                <Button>
                  <Plus className="h-4 w-4 mr-2" /> Add Company
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Warehouses Tab */}
          <TabsContent value="warehouses">
            <Card>
              <CardHeader>
                <CardTitle>Warehouse Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Manage warehouse locations and inventory.
                </p>
                <Button>
                  <Plus className="h-4 w-4 mr-2" /> Add Warehouse
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Suppliers Tab */}
          <TabsContent value="suppliers">
            <Card>
              <CardHeader>
                <CardTitle>Supplier Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Manage suppliers and batch orders.
                </p>
                <Button>
                  <Plus className="h-4 w-4 mr-2" /> Add Supplier
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
