import React, { useState } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import MedicineCatalog from "./MedicineCatalog";
import { default as CartComponent } from "./ShoppingCart";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Mock categories for the navigation
  const categories = [
    { id: "all", name: "All Medicines" },
    { id: "antibiotics", name: "Antibiotics" },
    { id: "painkillers", name: "Painkillers" },
    { id: "cardiovascular", name: "Cardiovascular" },
    { id: "respiratory", name: "Respiratory" },
    { id: "gastrointestinal", name: "Gastrointestinal" },
  ];

  // Mock cart items count
  const cartItemsCount = 3;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Update the search query which will filter medicines in MedicineCatalog
    console.log("Searching for:", searchQuery);
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1584362917165-526a968579e8?w=64&q=80"
                alt="PharmaXLedger Logo"
                className="h-10 w-10 rounded-full mr-2"
              />
              <h1 className="text-xl font-bold text-blue-600">PharmaXLedger</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {categories.slice(0, 4).map((category) => (
                <button
                  key={category.id}
                  className={`text-sm font-medium ${activeCategory === category.id ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </nav>

            {/* Search, Cart, and User */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:flex relative">
                <Input
                  type="text"
                  placeholder="Search medicines..."
                  className="w-64 pr-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </form>

              {/* Cart */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    {cartItemsCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cartItemsCount}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:max-w-md p-0">
                  <CartComponent />
                </SheetContent>
              </Sheet>

              {/* User */}
              {isAuthenticated ? (
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=doctor" />
                    <AvatarFallback>DR</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block">
                    <p className="text-sm font-medium">Dr. Smith</p>
                    <Button
                      variant="link"
                      size="sm"
                      className="p-0 h-auto text-xs text-gray-500"
                      onClick={handleLogout}
                    >
                      Sign out
                    </Button>
                  </div>
                </div>
              ) : (
                <Button onClick={handleLogin} variant="outline" size="sm">
                  Sign In
                </Button>
              )}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-3 pb-3">
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search medicines..."
                    className="w-full pr-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button
                    type="submit"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </form>
              <div className="flex flex-col space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`text-sm font-medium text-left py-2 ${activeCategory === category.id ? "text-blue-600" : "text-gray-600"}`}
                    onClick={() => {
                      handleCategoryChange(category.id);
                      setIsMenuOpen(false);
                    }}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* Hero Section */}
        <section className="mb-8 relative overflow-hidden rounded-xl p-6 md:p-8">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover opacity-20"
            >
              <source
                src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-indigo-600/30"></div>
          </div>
          <div className="relative z-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                Welcome to PharmaXLedger
              </h2>
              <p className="text-gray-600 mb-6">
                Your trusted platform for pharmaceutical supply chain
                management. Browse our extensive catalog of generic medicines
                with real-time inventory tracking.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Browse Catalog
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="mb-6">
          <TabsList className="mb-4 bg-transparent">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <MedicineCatalog
                category={category.id}
                searchQuery={searchQuery}
              />
            </TabsContent>
          ))}
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1584362917165-526a968579e8?w=64&q=80"
                  alt="PharmaXLedger Logo"
                  className="h-8 w-8 rounded-full mr-2"
                />
                <h2 className="text-lg font-bold text-blue-600">
                  PharmaXLedger
                </h2>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Advanced Pharmaceutical Supply Chain Management
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                About
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                Contact
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                Terms
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-blue-600">
                Privacy
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            © 2025 PharmaXLedger. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
