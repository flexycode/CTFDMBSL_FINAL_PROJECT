import React, { useState } from "react";
import { Search, Filter, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";
import { Checkbox } from "./ui/checkbox";
import { Separator } from "./ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import MedicineCard from "./MedicineCard";

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

interface Warehouse {
  id: string;
  location: string;
  subsidiary_company_id: string;
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

interface MedicineCatalogProps {
  medicines?: Medicine[];
  onAddToCart?: (medicine: Medicine, quantity: number) => void;
  category?: string;
  searchQuery?: string;
  warehouses?: Warehouse[];
  suppliers?: Supplier[];
  batchOrders?: BatchOrder[];
}

const MedicineCatalog: React.FC<MedicineCatalogProps> = ({
  medicines = mockMedicines,
  onAddToCart = () => {},
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    "all",
    "antibiotics",
    "painkillers",
    "cardiovascular",
    "respiratory",
    "gastrointestinal",
  ];

  const filteredMedicines = medicines.filter((medicine) => {
    // Search filter
    const matchesSearch =
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.description.toLowerCase().includes(searchTerm.toLowerCase());

    // Price filter
    const matchesPrice =
      medicine.price >= priceRange[0] && medicine.price <= priceRange[1];

    // Stock filter
    const matchesStock = showInStockOnly ? medicine.inStock : true;

    // Category filter
    const matchesCategory =
      activeCategory === "all" ||
      medicine.category.toLowerCase() === activeCategory.toLowerCase();

    return matchesSearch && matchesPrice && matchesStock && matchesCategory;
  });

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <Input
            placeholder="Search medicines..."
            className="pl-10 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter size={18} />
          Filters
          {showFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </Button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-2">Price Range</h3>
              <div className="px-2">
                <Slider
                  defaultValue={[0, 100]}
                  max={100}
                  step={1}
                  value={[priceRange[0], priceRange[1]]}
                  onValueChange={(value) => setPriceRange([value[0], value[1]])}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Availability</h3>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="in-stock"
                  checked={showInStockOnly}
                  onCheckedChange={(checked) =>
                    setShowInStockOnly(checked as boolean)
                  }
                />
                <label
                  htmlFor="in-stock"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Show only in-stock items
                </label>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Results</h3>
              <p className="text-sm text-gray-600">
                {filteredMedicines.length} medicines found
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Category Tabs */}
      <Tabs
        defaultValue="all"
        value={activeCategory}
        onValueChange={setActiveCategory}
      >
        <TabsList className="mb-6 w-full overflow-x-auto flex justify-start">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="capitalize">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            {/* Medicine Grid */}
            {filteredMedicines.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredMedicines.map((medicine) => (
                  <MedicineCard
                    key={medicine.id}
                    medicine={medicine}
                    onAddToCart={onAddToCart}
                  />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-10">
                  <p className="text-gray-500 mb-2">No medicines found</p>
                  <p className="text-sm text-gray-400">
                    Try adjusting your search or filters
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

// Mock data for development
const mockMedicines: Medicine[] = [
  {
    id: "1",
    name: "Amoxicillin",
    description: "Antibiotic used to treat bacterial infections",
    price: 12.99,
    category: "antibiotics",
    manufacturer: "GeneriCo Pharmaceuticals",
    inStock: true,
    imageUrl:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&q=80",
    batch_order_id: "1",
    supplier_id: "1",
    warehouse_id: "1",
    inventory: [
      { id: "1", warehouse_id: "1", medicine_id: "1", quantity: 250 },
      { id: "2", warehouse_id: "2", medicine_id: "1", quantity: 150 },
    ],
  },
  {
    id: "2",
    name: "Ibuprofen",
    description: "Non-steroidal anti-inflammatory drug used for pain relief",
    price: 8.49,
    category: "painkillers",
    manufacturer: "MediGen Labs",
    inStock: true,
    imageUrl:
      "https://images.unsplash.com/photo-1550572017-edd951b55104?w=300&q=80",
  },
  {
    id: "3",
    name: "Lisinopril",
    description: "ACE inhibitor used to treat high blood pressure",
    price: 15.99,
    category: "cardiovascular",
    manufacturer: "HeartHealth Pharma",
    inStock: false,
    imageUrl:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&q=80",
  },
  {
    id: "4",
    name: "Albuterol",
    description: "Bronchodilator that relaxes muscles in the airways",
    price: 24.99,
    category: "respiratory",
    manufacturer: "BreathEasy Medical",
    inStock: true,
    imageUrl:
      "https://images.unsplash.com/photo-1631549916768-4119b4123a21?w=300&q=80",
  },
  {
    id: "5",
    name: "Omeprazole",
    description: "Proton pump inhibitor used to reduce stomach acid",
    price: 18.75,
    category: "gastrointestinal",
    manufacturer: "DigestCare Pharmaceuticals",
    inStock: true,
    imageUrl:
      "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?w=300&q=80",
  },
  {
    id: "6",
    name: "Metformin",
    description: "Oral diabetes medicine that helps control blood sugar levels",
    price: 9.99,
    category: "endocrine",
    manufacturer: "GlucoBalance Labs",
    inStock: true,
    imageUrl:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=300&q=80",
  },
  {
    id: "7",
    name: "Atorvastatin",
    description: "Statin medication used to lower blood cholesterol",
    price: 22.5,
    category: "cardiovascular",
    manufacturer: "HeartHealth Pharma",
    inStock: false,
    imageUrl:
      "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=300&q=80",
  },
  {
    id: "8",
    name: "Cetirizine",
    description: "Antihistamine used to relieve allergy symptoms",
    price: 7.99,
    category: "allergy",
    manufacturer: "AllerClear Pharmaceuticals",
    inStock: true,
    imageUrl:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=300&q=80",
  },
];

// Mock data for warehouses
const mockWarehouses: Warehouse[] = [
  {
    id: "1",
    location: "New York Distribution Center",
    subsidiary_company_id: "1",
  },
  {
    id: "2",
    location: "Chicago Regional Warehouse",
    subsidiary_company_id: "2",
  },
  {
    id: "3",
    location: "San Francisco Supply Hub",
    subsidiary_company_id: "3",
  },
];

// Mock data for suppliers
const mockSuppliers: Supplier[] = [
  {
    id: "1",
    name: "GeneriCo Pharmaceuticals",
    contact_info: "contact@generico.com | (555) 123-4567",
  },
  {
    id: "2",
    name: "MediGen Labs",
    contact_info: "info@medigen.com | (555) 987-6543",
  },
  {
    id: "3",
    name: "HeartHealth Pharma",
    contact_info: "support@hearthealth.com | (555) 456-7890",
  },
];

// Mock data for batch orders
const mockBatchOrders: BatchOrder[] = [
  {
    id: "1",
    supplier_id: "1",
    order_date: "2025-04-15",
    delivery_date: "2025-04-22",
  },
  {
    id: "2",
    supplier_id: "2",
    order_date: "2025-04-10",
    delivery_date: "2025-04-18",
  },
  {
    id: "3",
    supplier_id: "3",
    order_date: "2025-04-05",
    delivery_date: "2025-04-12",
  },
];

export default MedicineCatalog;
