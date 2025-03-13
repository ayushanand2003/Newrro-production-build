"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/products-sections/hero-section"
import { BenefitsSection } from "@/components/products-sections/benefits-section"
import { FiltersSearchSection } from "@/components/products-sections/filters-search-section"
import { ProductGrid } from "@/components/products-sections/product-grid"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
  description: string
  features: string[]
  badge?: string
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Enterprise Suite Pro",
    category: "Business Solutions",
    price: 1299.99,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
    description: "Complete business management solution with advanced analytics",
    features: ["Cloud Integration", "Real-time Analytics", "24/7 Support"],
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "SmartHome Hub",
    category: "IoT Devices",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&q=80&w=400",
    description: "Central control for all your smart home devices",
    features: ["Voice Control", "Energy Monitoring", "Mobile App"],
    badge: "New",
  },
  {
    id: 3,
    name: "SecureVault Pro",
    category: "Security",
    price: 499.99,
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=400",
    description:
      "Enterprise-grade security solution with advanced encryption",
    features: ["Biometric Auth", "Cloud Backup", "Audit Logs"],
    badge: "Featured",
  },
  {
    id: 4,
    name: "AI Analytics Platform",
    category: "Analytics",
    price: 899.99,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
    description:
      "Advanced analytics powered by artificial intelligence",
    features: ["Predictive Analysis", "Custom Reports", "API Access"],
  },
  {
    id: 5,
    name: "CloudSync Enterprise",
    category: "Cloud Services",
    price: 699.99,
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400",
    description:
      "Seamless cloud integration and synchronization solution",
    features: ["Auto Backup", "File Versioning", "Team Sharing"],
    badge: "Popular",
  },
  {
    id: 6,
    name: "DevOps Toolkit",
    category: "Development",
    price: 799.99,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400",
    description:
      "Complete suite of development and operations tools",
    features: ["CI/CD Pipeline", "Monitoring", "Container Support"],
  },
  {
    id: 7,
    name: "Premium Wireless Headphones",
    category: "Audio Devices",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
    description:
      "Experience crystal clear audio with our premium wireless headphones",
    features: ["Noise Cancellation", "30-hour Battery", "Premium Comfort"],
    badge: "Top Rated",
  },
  {
    id: 8,
    name: "Data Visualization Pro",
    category: "Analytics",
    price: 599.99,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
    description:
      "Turn complex data into intuitive visual insights",
    features: ["Interactive Charts", "Real-time Updates", "Export Options"],
  },
  {
    id: 9,
    name: "Network Security Gateway",
    category: "Security",
    price: 1499.99,
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=400",
    description:
      "Enterprise-grade network security solution with advanced threat protection",
    features: ["Firewall Protection", "Threat Detection", "VPN Support"],
    badge: "Enterprise",
  },
]

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(initialProducts)
  const [isLoading, setIsLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    const query = value.toLowerCase()
    const filtered = initialProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query),
    )
    setFilteredProducts(filtered)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <FiltersSearchSection
        onSearchChange={handleSearchChange}
        onFilter={() => console.log("Filter clicked")}
        onSort={() => console.log("Sort clicked")}
      />

      <div className="container mx-auto px-4 pb-16">
        <AnimatePresence mode="wait">
          {isLoading ? (
            // Loading skeleton
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg overflow-hidden border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="h-56 bg-gray-200 animate-pulse" />
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded w-full mb-4 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded w-full mb-4 animate-pulse" />
                    <div className="h-10 bg-gray-200 rounded w-full mt-6 animate-pulse" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProductGrid products={filteredProducts} />

              {filteredProducts.length === 0 && (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <h3 className="text-2xl font-semibold mb-2">No products found</h3>
                  <p className="text-gray-500">
                    Try adjusting your search or filters to find what you&apos;re looking for.
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="py-12">
        <BenefitsSection />
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors z-50"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
