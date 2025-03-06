"use client";

import { useState } from "react";
import { HeroSection } from "@/components/products-sections/hero-section";
import { BenefitsSection } from "@/components/products-sections/benefits-section";
import { FiltersSearchSection } from "@/components/products-sections/filters-search-section";
import { ProductGrid } from "@/components/products-sections/product-grid";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  badge?: string;
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Enterprise Suite Pro",
    category: "Business Solutions",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
    description: "Complete business management solution with advanced analytics",
    features: ["Cloud Integration", "Real-time Analytics", "24/7 Support"],
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "SmartHome Hub",
    category: "IoT Devices",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&q=80&w=400",
    description: "Central control for all your smart home devices",
    features: ["Voice Control", "Energy Monitoring", "Mobile App"],
    badge: "New",
  },
  {
    id: 3,
    name: "SecureVault Pro",
    category: "Security",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=400",
    description: "Enterprise-grade security solution with advanced encryption",
    features: ["Biometric Auth", "Cloud Backup", "Audit Logs"],
    badge: "Featured",
  },
  {
    id: 4,
    name: "AI Analytics Platform",
    category: "Analytics",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
    description: "Advanced analytics powered by artificial intelligence",
    features: ["Predictive Analysis", "Custom Reports", "API Access"],
  },
  {
    id: 5,
    name: "CloudSync Enterprise",
    category: "Cloud Services",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400",
    description: "Seamless cloud integration and synchronization solution",
    features: ["Auto Backup", "File Versioning", "Team Sharing"],
    badge: "Popular",
  },
  {
    id: 6,
    name: "DevOps Toolkit",
    category: "Development",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400",
    description: "Complete suite of development and operations tools",
    features: ["CI/CD Pipeline", "Monitoring", "Container Support"],
  },
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    const query = value.toLowerCase();
    const filtered = initialProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
 
      <FiltersSearchSection
        onSearchChange={handleSearchChange}
        onFilter={() => console.log("Filter clicked")}
        onSort={() => console.log("Sort clicked")}
      />

      <div className="container mx-auto px-4 pb-16">
        <ProductGrid products={filteredProducts} />
      </div>

         
      {/* ✅ Add proper spacing */}

      <div className="py-12">
        <BenefitsSection />
      </div>

    </div>
  );
}
