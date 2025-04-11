"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  LineChart,
  PieChart,
  Upload,
  Users,
  Package,
  ShoppingCart,
  FileText,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

interface AdminControlsProps {
  activeTab?: string;
}

const AdminControls: React.FC<AdminControlsProps> = ({
  activeTab = "products",
}) => {
  const [selectedTab, setSelectedTab] = useState(activeTab);
  const [pdfUploading, setPdfUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showUploadDialog, setShowUploadDialog] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPdfUploading(true);
      setUploadProgress(0);

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setPdfUploading(false);
            setShowUploadDialog(true);
            return 100;
          }
          return prev + 10;
        });
      }, 300);
    }
  };

  return (
    <div className="w-full h-full bg-background p-6">
      <div className="flex flex-col space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Controls</h1>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <FileText className="mr-2 h-4 w-4" />
              Export Data
            </Button>
            <Button size="sm">
              <Upload className="mr-2 h-4 w-4" />
              Upload Catalog
            </Button>
          </div>
        </div>

        <Tabs
          defaultValue={selectedTab}
          onValueChange={setSelectedTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-4 w-full max-w-3xl">
            <TabsTrigger value="products">
              <Package className="mr-2 h-4 w-4" />
              Product Management
            </TabsTrigger>
            <TabsTrigger value="users">
              <Users className="mr-2 h-4 w-4" />
              User Management
            </TabsTrigger>
            <TabsTrigger value="orders">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Order Management
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <BarChart className="mr-2 h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Product Management Tab */}
          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Product Management</CardTitle>
                    <CardDescription>
                      Manage your pharmaceutical products inventory
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm">Add Product</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add New Product</DialogTitle>
                          <DialogDescription>
                            Fill in the details to add a new pharmaceutical
                            product.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Name
                            </Label>
                            <Input
                              id="name"
                              placeholder="Product name"
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="category" className="text-right">
                              Category
                            </Label>
                            <Select>
                              <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="antibiotics">
                                  Antibiotics
                                </SelectItem>
                                <SelectItem value="painkillers">
                                  Painkillers
                                </SelectItem>
                                <SelectItem value="cardiovascular">
                                  Cardiovascular
                                </SelectItem>
                                <SelectItem value="respiratory">
                                  Respiratory
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="price" className="text-right">
                              Price
                            </Label>
                            <Input
                              id="price"
                              type="number"
                              placeholder="0.00"
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="stock" className="text-right">
                              Stock
                            </Label>
                            <Input
                              id="stock"
                              type="number"
                              placeholder="0"
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                              Description
                            </Label>
                            <Input
                              id="description"
                              placeholder="Product description"
                              className="col-span-3"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Save Product</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Upload className="mr-2 h-4 w-4" />
                          Upload PDF Catalog
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Upload PDF Catalog</DialogTitle>
                          <DialogDescription>
                            Upload a PDF catalog to bulk import products into
                            the system.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                            <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                            <p className="text-sm text-muted-foreground mb-2">
                              Drag and drop your PDF file here or click to
                              browse
                            </p>
                            <Input
                              id="pdf-upload"
                              type="file"
                              accept=".pdf"
                              className="hidden"
                              onChange={handleFileUpload}
                            />
                            <Button
                              variant="outline"
                              onClick={() =>
                                document.getElementById("pdf-upload")?.click()
                              }
                            >
                              Select PDF File
                            </Button>
                          </div>
                          {pdfUploading && (
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Uploading...</span>
                                <span>{uploadProgress}%</span>
                              </div>
                              <Progress value={uploadProgress} />
                            </div>
                          )}
                        </div>
                        <DialogFooter>
                          <Button
                            type="button"
                            variant="outline"
                            disabled={pdfUploading}
                          >
                            Cancel
                          </Button>
                          <Button type="submit" disabled={pdfUploading}>
                            Upload and Process
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-2">
                    <Input placeholder="Search products..." className="w-64" />
                    <Select>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="antibiotics">Antibiotics</SelectItem>
                        <SelectItem value="painkillers">Painkillers</SelectItem>
                        <SelectItem value="cardiovascular">
                          Cardiovascular
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="in-stock">In Stock</SelectItem>
                        <SelectItem value="low-stock">Low Stock</SelectItem>
                        <SelectItem value="out-of-stock">
                          Out of Stock
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      Bulk Edit
                    </Button>
                  </div>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[50px]">
                        <input type="checkbox" className="rounded" />
                      </TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: 1,
                        name: "Amoxicillin 500mg",
                        category: "Antibiotics",
                        price: 12.99,
                        stock: 250,
                        status: "in-stock",
                      },
                      {
                        id: 2,
                        name: "Ibuprofen 200mg",
                        category: "Painkillers",
                        price: 8.5,
                        stock: 120,
                        status: "in-stock",
                      },
                      {
                        id: 3,
                        name: "Lisinopril 10mg",
                        category: "Cardiovascular",
                        price: 15.75,
                        stock: 30,
                        status: "low-stock",
                      },
                      {
                        id: 4,
                        name: "Albuterol Inhaler",
                        category: "Respiratory",
                        price: 45.0,
                        stock: 0,
                        status: "out-of-stock",
                      },
                      {
                        id: 5,
                        name: "Metformin 500mg",
                        category: "Diabetes",
                        price: 10.25,
                        stock: 180,
                        status: "in-stock",
                      },
                    ].map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <input type="checkbox" className="rounded" />
                        </TableCell>
                        <TableCell className="font-medium">
                          {product.name}
                        </TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>${product.price.toFixed(2)}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              product.status === "out-of-stock"
                                ? "destructive"
                                : product.status === "low-stock"
                                  ? "outline"
                                  : "default"
                            }
                          >
                            {product.status === "in-stock"
                              ? "In Stock"
                              : product.status === "low-stock"
                                ? "Low Stock"
                                : "Out of Stock"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                  Delete
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>
                                    Are you sure?
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This action cannot be undone. This will
                                    permanently delete the product and remove it
                                    from our servers.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction>Delete</AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* User Management Tab */}
          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>
                      Manage healthcare professionals and administrators
                    </CardDescription>
                  </div>
                  <Button size="sm">Add User</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-2">
                    <Input placeholder="Search users..." className="w-64" />
                    <Select>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Roles</SelectItem>
                        <SelectItem value="admin">Administrator</SelectItem>
                        <SelectItem value="healthcare">
                          Healthcare Professional
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: 1,
                        name: "Dr. Sarah Johnson",
                        email: "sarah.johnson@hospital.com",
                        role: "Healthcare Professional",
                        status: "active",
                        lastLogin: "2023-05-15 09:30 AM",
                      },
                      {
                        id: 2,
                        name: "John Smith",
                        email: "john.smith@hospital.com",
                        role: "Administrator",
                        status: "active",
                        lastLogin: "2023-05-15 08:15 AM",
                      },
                      {
                        id: 3,
                        name: "Emily Davis",
                        email: "emily.davis@hospital.com",
                        role: "Healthcare Professional",
                        status: "inactive",
                        lastLogin: "2023-05-10 02:45 PM",
                      },
                      {
                        id: 4,
                        name: "Michael Brown",
                        email: "michael.brown@hospital.com",
                        role: "Healthcare Professional",
                        status: "active",
                        lastLogin: "2023-05-14 11:20 AM",
                      },
                      {
                        id: 5,
                        name: "Jessica Wilson",
                        email: "jessica.wilson@hospital.com",
                        role: "Administrator",
                        status: "active",
                        lastLogin: "2023-05-15 10:05 AM",
                      },
                    ].map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">
                          {user.name}
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              user.status === "active" ? "default" : "outline"
                            }
                          >
                            {user.status === "active" ? "Active" : "Inactive"}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.lastLogin}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              {user.status === "active"
                                ? "Deactivate"
                                : "Activate"}
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Order Management Tab */}
          <TabsContent value="orders" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Order Management</CardTitle>
                    <CardDescription>
                      Track and manage medicine orders
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-2">
                    <Input placeholder="Search orders..." className="w-64" />
                    <Select>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="processing">Processing</SelectItem>
                        <SelectItem value="shipped">Shipped</SelectItem>
                        <SelectItem value="delivered">Delivered</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Time Period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="yesterday">Yesterday</SelectItem>
                        <SelectItem value="week">This Week</SelectItem>
                        <SelectItem value="month">This Month</SelectItem>
                        <SelectItem value="year">This Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Payment</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "ORD-001",
                        customer: "Dr. Sarah Johnson",
                        date: "2023-05-15",
                        total: 245.5,
                        status: "delivered",
                        payment: "completed",
                      },
                      {
                        id: "ORD-002",
                        customer: "Cardiology Department",
                        date: "2023-05-15",
                        total: 1250.75,
                        status: "processing",
                        payment: "completed",
                      },
                      {
                        id: "ORD-003",
                        customer: "Emergency Room",
                        date: "2023-05-14",
                        total: 780.25,
                        status: "shipped",
                        payment: "completed",
                      },
                      {
                        id: "ORD-004",
                        customer: "Dr. Michael Brown",
                        date: "2023-05-14",
                        total: 125.0,
                        status: "pending",
                        payment: "pending",
                      },
                      {
                        id: "ORD-005",
                        customer: "Pediatrics Department",
                        date: "2023-05-13",
                        total: 450.8,
                        status: "cancelled",
                        payment: "refunded",
                      },
                    ].map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">
                          {order.id}
                        </TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>${order.total.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              order.status === "delivered"
                                ? "default"
                                : order.status === "processing" ||
                                    order.status === "shipped"
                                  ? "outline"
                                  : order.status === "pending"
                                    ? "secondary"
                                    : "destructive"
                            }
                          >
                            {order.status.charAt(0).toUpperCase() +
                              order.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              order.payment === "completed"
                                ? "default"
                                : order.payment === "pending"
                                  ? "outline"
                                  : "destructive"
                            }
                          >
                            {order.payment.charAt(0).toUpperCase() +
                              order.payment.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                            <Button variant="outline" size="sm">
                              Update Status
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$24,780.50</div>
                  <p className="text-xs text-muted-foreground">
                    +12.5% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Orders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45</div>
                  <p className="text-xs text-muted-foreground">+5 new today</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Low Stock Items
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">
                    3 items need immediate attention
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Overview</CardTitle>
                  <CardDescription>Monthly sales performance</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="flex items-center justify-center h-full bg-muted/20 rounded-md">
                    <div className="text-center">
                      <BarChart className="h-10 w-10 mx-auto text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        Sales chart visualization would appear here
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Inventory Status</CardTitle>
                  <CardDescription>
                    Current inventory by category
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="flex items-center justify-center h-full bg-muted/20 rounded-md">
                    <div className="text-center">
                      <PieChart className="h-10 w-10 mx-auto text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        Inventory chart visualization would appear here
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Order Trends</CardTitle>
                  <CardDescription>Order volume over time</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="flex items-center justify-center h-full bg-muted/20 rounded-md">
                    <div className="text-center">
                      <LineChart className="h-10 w-10 mx-auto text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        Order trends visualization would appear here
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Top Products</CardTitle>
                  <CardDescription>Most ordered products</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Orders</TableHead>
                        <TableHead>Revenue</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          id: 1,
                          name: "Amoxicillin 500mg",
                          category: "Antibiotics",
                          orders: 245,
                          revenue: 3185.55,
                        },
                        {
                          id: 2,
                          name: "Ibuprofen 200mg",
                          category: "Painkillers",
                          orders: 198,
                          revenue: 1683.0,
                        },
                        {
                          id: 3,
                          name: "Lisinopril 10mg",
                          category: "Cardiovascular",
                          orders: 156,
                          revenue: 2457.0,
                        },
                        {
                          id: 4,
                          name: "Metformin 500mg",
                          category: "Diabetes",
                          orders: 142,
                          revenue: 1455.5,
                        },
                        {
                          id: 5,
                          name: "Atorvastatin 20mg",
                          category: "Cardiovascular",
                          orders: 135,
                          revenue: 2362.5,
                        },
                      ].map((product) => (
                        <TableRow key={product.id}>
                          <TableCell className="font-medium">
                            {product.name}
                          </TableCell>
                          <TableCell>{product.category}</TableCell>
                          <TableCell>{product.orders}</TableCell>
                          <TableCell>${product.revenue.toFixed(2)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* PDF Upload Success Dialog */}
      <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>PDF Catalog Processed</DialogTitle>
            <DialogDescription>
              Your PDF catalog has been successfully uploaded and processed.
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 rounded-md bg-green-50 border border-green-200 flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <div>
              <h4 className="font-medium text-green-900">Upload Summary</h4>
              <ul className="mt-2 text-sm text-green-800 space-y-1">
                <li>• 42 products extracted from PDF</li>
                <li>• 35 new products added</li>
                <li>• 7 existing products updated</li>
                <li>• 0 errors encountered</li>
              </ul>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setShowUploadDialog(false)}>
              View Products
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminControls;
