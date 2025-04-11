"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle, BarChart3, LineChart, PieChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  currentStock: number;
  minimumStock: number;
  location: string;
  lastUpdated: string;
  usage: {
    date: string;
    amount: number;
  }[];
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string;
    fill?: boolean;
  }[];
}

const InventoryVisualization = ({
  inventoryData = mockInventoryData,
  timeRange = "30days",
  category = "all",
  location = "all",
}: {
  inventoryData?: InventoryItem[];
  timeRange?: string;
  category?: string;
  location?: string;
}) => {
  const [selectedTimeRange, setSelectedTimeRange] = useState(timeRange);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [selectedLocation, setSelectedLocation] = useState(location);
  const [activeTab, setActiveTab] = useState("stock-levels");

  // Filter inventory data based on selections
  const filteredData = inventoryData.filter((item) => {
    return (
      (selectedCategory === "all" || item.category === selectedCategory) &&
      (selectedLocation === "all" || item.location === selectedLocation)
    );
  });

  // Get low stock items
  const lowStockItems = filteredData.filter(
    (item) => item.currentStock <= item.minimumStock,
  );

  return (
    <div className="w-full h-full bg-background p-4 space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Inventory Visualization</h2>
          <p className="text-muted-foreground">
            Monitor stock levels and usage patterns
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Select
            value={selectedTimeRange}
            onValueChange={setSelectedTimeRange}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 Days</SelectItem>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="90days">Last 90 Days</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="antibiotics">Antibiotics</SelectItem>
              <SelectItem value="painkillers">Painkillers</SelectItem>
              <SelectItem value="cardiovascular">Cardiovascular</SelectItem>
              <SelectItem value="respiratory">Respiratory</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="pharmacy">Main Pharmacy</SelectItem>
              <SelectItem value="emergency">Emergency Dept</SelectItem>
              <SelectItem value="ward-a">Ward A</SelectItem>
              <SelectItem value="ward-b">Ward B</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {lowStockItems.length > 0 && (
        <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <h3 className="font-medium">Low Stock Alert</h3>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {lowStockItems.map((item) => (
                <Badge
                  key={item.id}
                  variant="outline"
                  className="border-red-200 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                >
                  {item.name}: {item.currentStock} remaining
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="stock-levels" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            <span className="hidden sm:inline">Stock Levels</span>
          </TabsTrigger>
          <TabsTrigger
            value="usage-patterns"
            className="flex items-center gap-2"
          >
            <LineChart className="h-4 w-4" />
            <span className="hidden sm:inline">Usage Patterns</span>
          </TabsTrigger>
          <TabsTrigger
            value="category-distribution"
            className="flex items-center gap-2"
          >
            <PieChart className="h-4 w-4" />
            <span className="hidden sm:inline">Category Distribution</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="stock-levels" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Stock Levels</CardTitle>
              <CardDescription>
                Inventory levels across all products
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full flex items-center justify-center">
                {/* Placeholder for actual chart component */}
                <div className="w-full h-full bg-muted/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-16 w-16 mx-auto text-muted-foreground" />
                    <p className="mt-2 text-muted-foreground">
                      Stock Level Chart would render here
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Showing data for {filteredData.length} products
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usage-patterns" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Usage Patterns</CardTitle>
              <CardDescription>Consumption trends over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full flex items-center justify-center">
                {/* Placeholder for actual chart component */}
                <div className="w-full h-full bg-muted/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <LineChart className="h-16 w-16 mx-auto text-muted-foreground" />
                    <p className="mt-2 text-muted-foreground">
                      Usage Pattern Chart would render here
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Showing trends for the {selectedTimeRange}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="category-distribution" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Category Distribution</CardTitle>
              <CardDescription>
                Breakdown of inventory by category
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full flex items-center justify-center">
                {/* Placeholder for actual chart component */}
                <div className="w-full h-full bg-muted/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="h-16 w-16 mx-auto text-muted-foreground" />
                    <p className="mt-2 text-muted-foreground">
                      Category Distribution Chart would render here
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Showing distribution across{" "}
                      {selectedLocation === "all"
                        ? "all locations"
                        : selectedLocation}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Inventory Forecast</CardTitle>
            <CardDescription>
              Projected stock levels based on current usage
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full flex items-center justify-center bg-muted/20 rounded-lg">
              <p className="text-muted-foreground">
                Forecast chart would render here
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reorder Recommendations</CardTitle>
            <CardDescription>
              Suggested reorder quantities based on usage patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {lowStockItems.length > 0 ? (
                lowStockItems.slice(0, 5).map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center p-2 border rounded-md"
                  >
                    <span>{item.name}</span>
                    <Badge>
                      Reorder:{" "}
                      {Math.max(item.minimumStock - item.currentStock, 0) + 10}
                    </Badge>
                  </div>
                ))
              ) : (
                <p className="text-center py-8 text-muted-foreground">
                  No reorder recommendations at this time
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Mock data for demonstration
const mockInventoryData: InventoryItem[] = [
  {
    id: "1",
    name: "Amoxicillin 500mg",
    category: "antibiotics",
    currentStock: 120,
    minimumStock: 50,
    location: "pharmacy",
    lastUpdated: "2023-05-15",
    usage: [
      { date: "2023-05-01", amount: 10 },
      { date: "2023-05-08", amount: 15 },
      { date: "2023-05-15", amount: 12 },
    ],
  },
  {
    id: "2",
    name: "Ibuprofen 200mg",
    category: "painkillers",
    currentStock: 85,
    minimumStock: 100,
    location: "pharmacy",
    lastUpdated: "2023-05-14",
    usage: [
      { date: "2023-05-01", amount: 20 },
      { date: "2023-05-08", amount: 25 },
      { date: "2023-05-15", amount: 18 },
    ],
  },
  {
    id: "3",
    name: "Lisinopril 10mg",
    category: "cardiovascular",
    currentStock: 45,
    minimumStock: 60,
    location: "ward-a",
    lastUpdated: "2023-05-13",
    usage: [
      { date: "2023-05-01", amount: 8 },
      { date: "2023-05-08", amount: 12 },
      { date: "2023-05-15", amount: 10 },
    ],
  },
  {
    id: "4",
    name: "Albuterol Inhaler",
    category: "respiratory",
    currentStock: 30,
    minimumStock: 25,
    location: "emergency",
    lastUpdated: "2023-05-12",
    usage: [
      { date: "2023-05-01", amount: 5 },
      { date: "2023-05-08", amount: 7 },
      { date: "2023-05-15", amount: 6 },
    ],
  },
  {
    id: "5",
    name: "Metformin 500mg",
    category: "endocrine",
    currentStock: 200,
    minimumStock: 150,
    location: "ward-b",
    lastUpdated: "2023-05-11",
    usage: [
      { date: "2023-05-01", amount: 15 },
      { date: "2023-05-08", amount: 18 },
      { date: "2023-05-15", amount: 14 },
    ],
  },
];

export default InventoryVisualization;
