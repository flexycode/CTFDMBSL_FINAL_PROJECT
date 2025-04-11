"use client";

import React, { useState } from "react";
import { Search, Filter, Grid, List, ShoppingCart, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Medicine {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  image: string;
}

interface MedicineCatalogProps {
  medicines?: Medicine[];
}

export default function MedicineCatalog({
  medicines = [],
}: MedicineCatalogProps) {
  // Default medicines data if none provided
  const defaultMedicines: Medicine[] =
    medicines.length > 0
      ? medicines
      : [
          {
            id: "1",
            name: "Paracetamol 500mg",
            category: "Pain Relief",
            price: 5.99,
            stock: 120,
            description: "General pain reliever and fever reducer",
            image:
              "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80",
          },
          {
            id: "2",
            name: "Amoxicillin 250mg",
            category: "Antibiotics",
            price: 12.5,
            stock: 85,
            description: "Broad-spectrum antibiotic for bacterial infections",
            image:
              "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&q=80",
          },
          {
            id: "3",
            name: "Lisinopril 10mg",
            category: "Cardiovascular",
            price: 8.75,
            stock: 200,
            description: "ACE inhibitor for treating high blood pressure",
            image:
              "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&q=80",
          },
          {
            id: "4",
            name: "Metformin 500mg",
            category: "Diabetes",
            price: 7.25,
            stock: 150,
            description: "Oral medication for type 2 diabetes",
            image:
              "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80",
          },
          {
            id: "5",
            name: "Atorvastatin 20mg",
            category: "Cardiovascular",
            price: 15.99,
            stock: 90,
            description: "Statin medication to lower cholesterol",
            image:
              "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=400&q=80",
          },
          {
            id: "6",
            name: "Omeprazole 20mg",
            category: "Gastrointestinal",
            price: 9.5,
            stock: 110,
            description: "Proton pump inhibitor for acid reflux and ulcers",
            image:
              "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?w=400&q=80",
          },
        ];

  // State for search and filters
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [availabilityFilter, setAvailabilityFilter] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<number[]>([0, 20]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Get all unique categories
  const categories = Array.from(
    new Set(defaultMedicines.map((med) => med.category)),
  );

  // Filter medicines based on search and filters
  const filteredMedicines = defaultMedicines.filter((medicine) => {
    // Search term filter
    const matchesSearch =
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.description.toLowerCase().includes(searchTerm.toLowerCase());

    // Category filter
    const matchesCategory =
      categoryFilter === "all" || medicine.category === categoryFilter;

    // Availability filter
    const matchesAvailability =
      availabilityFilter === "all" ||
      (availabilityFilter === "in-stock" && medicine.stock > 0) ||
      (availabilityFilter === "out-of-stock" && medicine.stock === 0);

    // Price range filter
    const matchesPrice =
      medicine.price >= priceRange[0] && medicine.price <= priceRange[1];

    return (
      matchesSearch && matchesCategory && matchesAvailability && matchesPrice
    );
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMedicines.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(filteredMedicines.length / itemsPerPage);

  // Handle adding to cart
  const handleAddToCart = (medicineId: string) => {
    console.log(`Added medicine with ID ${medicineId} to cart`);
    // Implement actual cart functionality here
  };

  return (
    <div className="w-full bg-background p-6 rounded-lg shadow-sm">
      <div className="flex flex-col space-y-6">
        {/* Header with search and view toggle */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-2xl font-bold">Medicine Catalog</h2>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search medicines..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
                aria-label="List view"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Filters section */}
        <div className="bg-muted/40 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Filter className="h-4 w-4" />
            <h3 className="font-medium">Filters</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Availability</label>
              <Select
                value={availabilityFilter}
                onValueChange={setAvailabilityFilter}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Any Availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Availability</SelectItem>
                  <SelectItem value="in-stock">In Stock</SelectItem>
                  <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Price Range</label>
                <span className="text-sm text-muted-foreground">
                  ${priceRange[0]} - ${priceRange[1]}
                </span>
              </div>
              <Slider
                defaultValue={[0, 20]}
                max={50}
                step={1}
                value={priceRange}
                onValueChange={setPriceRange}
                className="py-2"
              />
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="text-sm text-muted-foreground">
          Showing {filteredMedicines.length} results
        </div>

        {/* Medicines display */}
        {filteredMedicines.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-muted p-3 mb-4">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-1">No medicines found</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Try adjusting your search or filter criteria to find what you're
              looking for.
            </p>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentItems.map((medicine) => (
              <Card key={medicine.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={medicine.image}
                    alt={medicine.name}
                    className="h-full w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{medicine.name}</CardTitle>
                    <Badge
                      variant={medicine.stock > 0 ? "secondary" : "outline"}
                      className="ml-2"
                    >
                      {medicine.stock > 0
                        ? `${medicine.stock} in stock`
                        : "Out of stock"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0 pb-2">
                  <Badge className="mb-2">{medicine.category}</Badge>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {medicine.description}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-2 flex justify-between items-center">
                  <p className="font-medium">${medicine.price.toFixed(2)}</p>
                  <Button
                    size="sm"
                    onClick={() => handleAddToCart(medicine.id)}
                    disabled={medicine.stock <= 0}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {currentItems.map((medicine) => (
              <Card key={medicine.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-48 h-48 overflow-hidden bg-muted">
                    <img
                      src={medicine.image}
                      alt={medicine.name}
                      className="h-full w-full object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-2">
                      <div>
                        <h3 className="text-lg font-medium">{medicine.name}</h3>
                        <Badge className="mt-1">{medicine.category}</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={medicine.stock > 0 ? "secondary" : "outline"}
                        >
                          {medicine.stock > 0
                            ? `${medicine.stock} in stock`
                            : "Out of stock"}
                        </Badge>
                        <p className="font-medium">
                          ${medicine.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {medicine.description}
                    </p>
                    <div className="mt-4 flex justify-end">
                      <Button
                        size="sm"
                        onClick={() => handleAddToCart(medicine.id)}
                        disabled={medicine.stock <= 0}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Pagination */}
        {filteredMedicines.length > 0 && (
          <Pagination className="mt-4">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                  aria-disabled={currentPage === 1}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === page}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(page);
                      }}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ),
              )}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages)
                      setCurrentPage(currentPage + 1);
                  }}
                  aria-disabled={currentPage === totalPages}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
}
