import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Info, MessageCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface MedicineCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  manufacturer: string;
  inStock: boolean;
  imageUrl: string;
  onAddToCart: (id: string) => void;
  onViewDetails: (id: string) => void;
}

const MedicineCard = ({
  id = "1",
  name = "Paracetamol",
  description = "Pain reliever and fever reducer used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.",
  price = 5.99,
  category = "Pain Relief",
  manufacturer = "Generic Pharma",
  inStock = true,
  imageUrl = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&q=80",
  onAddToCart = () => {},
  onViewDetails = () => {},
}: MedicineCardProps) => {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the inquiry to a backend
    console.log("Inquiry submitted for", name);
    setInquirySubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setInquirySubmitted(false);
      setInquiryOpen(false);
    }, 3000);
  };
  return (
    <>
      <Card className="w-[280px] h-[320px] overflow-hidden flex flex-col bg-white">
        <div className="relative h-36 overflow-hidden bg-gray-100">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
          <Badge
            variant={inStock ? "default" : "destructive"}
            className="absolute top-2 right-2"
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>

        <CardHeader className="p-3 pb-0">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground">{manufacturer}</p>
        </CardHeader>

        <CardContent className="p-3 flex-grow">
          <p className="text-sm line-clamp-3">{description}</p>
        </CardContent>

        <CardFooter className="p-3 pt-0 flex justify-between items-center">
          <div className="font-semibold">${price.toFixed(2)}</div>
          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => onViewDetails(id)}
                  >
                    <Info className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Details</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setInquiryOpen(true)}
                  >
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Product Inquiry</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button
              onClick={() => onAddToCart(id)}
              disabled={!inStock}
              size="sm"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </CardFooter>
      </Card>

      {/* Product Inquiry Dialog */}
      <Dialog open={inquiryOpen} onOpenChange={setInquiryOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Product Inquiry: {name}</DialogTitle>
            <DialogDescription>
              Ask about availability, pricing, or other details for this
              medication.
            </DialogDescription>
          </DialogHeader>

          {!inquirySubmitted ? (
            <form onSubmit={handleInquirySubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="inquiry" className="text-right">
                    Inquiry
                  </Label>
                  <Textarea
                    id="inquiry"
                    placeholder="I would like to know more about..."
                    className="col-span-3"
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit">Submit Inquiry</Button>
              </DialogFooter>
            </form>
          ) : (
            <div className="py-6 flex flex-col items-center justify-center text-center">
              <div className="bg-green-100 text-green-700 rounded-full p-3 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                Inquiry Submitted!
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                We'll get back to you shortly.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MedicineCard;
