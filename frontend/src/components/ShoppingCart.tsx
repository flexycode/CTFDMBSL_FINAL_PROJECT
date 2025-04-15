import React, { useState } from "react";
import { X, Minus, Plus, ShoppingBag, CreditCard } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";

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

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface ShoppingCartProps {
  isOpen?: boolean;
  onClose?: () => void;
  items?: CartItem[];
  parentCompanies?: ParentCompany[];
  subsidiaryCompanies?: SubsidiaryCompany[];
}

const ShoppingCart = ({
  isOpen = true,
  onClose = () => {},
  items = [],
  parentCompanies = mockParentCompanies,
  subsidiaryCompanies = mockSubsidiaryCompanies,
}: ShoppingCartProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    items.length
      ? items
      : [
          {
            id: "1",
            name: "Amoxicillin 500mg",
            price: 12.99,
            quantity: 2,
            image:
              "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&q=80",
          },
          {
            id: "2",
            name: "Ibuprofen 200mg",
            price: 8.5,
            quantity: 1,
            image:
              "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=200&q=80",
          },
          {
            id: "3",
            name: "Metformin 850mg",
            price: 15.75,
            quantity: 3,
            image:
              "https://images.unsplash.com/photo-1550572017-edd951b55104?w=200&q=80",
          },
        ],
  );

  const [showCheckout, setShowCheckout] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [selectedParentCompany, setSelectedParentCompany] =
    useState<string>("");
  const [selectedSubsidiaryCompany, setSelectedSubsidiaryCompany] =
    useState<string>("");

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + tax;

  const handleCheckout = () => {
    setShowCheckout(false);
    setShowConfirmation(true);
  };

  return (
    <div className="bg-background">
      <Sheet open={isOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent
          className="w-full sm:max-w-md overflow-y-auto"
          side="right"
        >
          <SheetHeader>
            <SheetTitle className="text-xl font-bold flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5" /> Shopping Cart
            </SheetTitle>
          </SheetHeader>

          <div className="mt-6 flex flex-col gap-5">
            {cartItems.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-muted-foreground">Your cart is empty</p>
                <Button className="mt-4" onClick={onClose}>
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="flex p-4">
                      <div className="h-20 w-20 rounded-md overflow-hidden bg-muted flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex flex-col flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          ${item.price.toFixed(2)}
                        </p>
                        <div className="flex items-center mt-auto">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="mx-3">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 self-start"
                        onClick={() => removeItem(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ))}

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (7%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  className="w-full mt-4"
                  size="lg"
                  onClick={() => setShowCheckout(true)}
                >
                  Proceed to Checkout
                </Button>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>

      {/* Checkout Dialog */}
      <Dialog open={showCheckout} onOpenChange={setShowCheckout}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Checkout</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="parent-company">Parent Company</Label>
              <select
                id="parent-company"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={selectedParentCompany}
                onChange={(e) => {
                  setSelectedParentCompany(e.target.value);
                  setSelectedSubsidiaryCompany("");
                }}
              >
                <option value="">Select Parent Company</option>
                {parentCompanies.map((company) => (
                  <option key={company.id} value={company.id}>
                    {company.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="subsidiary-company">Subsidiary Company</Label>
              <select
                id="subsidiary-company"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={selectedSubsidiaryCompany}
                onChange={(e) => setSelectedSubsidiaryCompany(e.target.value)}
                disabled={!selectedParentCompany}
              >
                <option value="">Select Subsidiary Company</option>
                {subsidiaryCompanies
                  .filter(
                    (company) =>
                      company.parent_company_id === selectedParentCompany,
                  )
                  .map((company) => (
                    <option key={company.id} value={company.id}>
                      {company.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="address">Shipping Address</Label>
              <Input id="address" placeholder="123 Medical Center Dr" />
            </div>
            <div className="grid gap-2">
              <Label>Payment Method</Label>
              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="credit" id="credit" />
                  <Label htmlFor="credit">Credit Card</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bank" id="bank" />
                  <Label htmlFor="bank">Bank Transfer</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="invoice" id="invoice" />
                  <Label htmlFor="invoice">
                    Invoice (For Healthcare Institutions)
                  </Label>
                </div>
              </RadioGroup>
            </div>
            {paymentMethod === "credit" && (
              <div className="grid gap-2">
                <Label htmlFor="card">Card Number</Label>
                <Input id="card" placeholder="**** **** **** ****" />
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div>
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCheckout(false)}>
              Cancel
            </Button>
            <Button onClick={handleCheckout}>Complete Order</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Order Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Order Confirmed!</DialogTitle>
          </DialogHeader>
          <div className="py-6 text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CreditCard className="h-8 w-8 text-green-600" />
            </div>
            <p className="mb-2">Thank you for your order.</p>
            <p className="text-muted-foreground text-sm">
              Order #ORD-{Math.floor(Math.random() * 10000)}
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              You will receive an email confirmation shortly.
            </p>
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <div className="flex justify-between font-medium">
                <span>Total Amount:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {cartItems.length} items
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={() => {
                setShowConfirmation(false);
                setCartItems([]);
                onClose();
              }}
              className="w-full"
            >
              Continue Shopping
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Mock data for parent companies
const mockParentCompanies: ParentCompany[] = [
  {
    id: "1",
    name: "MediCorp International",
    address: "123 Healthcare Blvd, New York, NY 10001",
  },
  {
    id: "2",
    name: "Global Pharma Holdings",
    address: "456 Medicine Ave, Chicago, IL 60601",
  },
  {
    id: "3",
    name: "HealthTech Enterprises",
    address: "789 Wellness Way, San Francisco, CA 94105",
  },
];

// Mock data for subsidiary companies
const mockSubsidiaryCompanies: SubsidiaryCompany[] = [
  {
    id: "1",
    name: "MediCorp Regional Hospital",
    address: "101 Hospital Road, Boston, MA 02115",
    parent_company_id: "1",
  },
  {
    id: "2",
    name: "MediCorp Community Clinic",
    address: "202 Clinic Street, Philadelphia, PA 19103",
    parent_company_id: "1",
  },
  {
    id: "3",
    name: "Global Pharma Research Center",
    address: "303 Research Park, Houston, TX 77030",
    parent_company_id: "2",
  },
  {
    id: "4",
    name: "Global Pharma Distribution",
    address: "404 Distribution Lane, Miami, FL 33101",
    parent_company_id: "2",
  },
  {
    id: "5",
    name: "HealthTech Medical Center",
    address: "505 Innovation Drive, Seattle, WA 98101",
    parent_company_id: "3",
  },
  {
    id: "6",
    name: "HealthTech Pharmacy Solutions",
    address: "606 Technology Plaza, Austin, TX 78701",
    parent_company_id: "3",
  },
];

export default ShoppingCart;
