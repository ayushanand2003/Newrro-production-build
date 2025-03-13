"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Heart,
  ShoppingCart,
  Star,
  Check,
  ChevronLeft,
  ChevronRight,
  Truck,
  Shield,
  Sparkles,
  RotateCw,
} from "lucide-react";
import { cn } from "@/lib/utils";

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

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  // Guard clause at the very top – if no product is provided, return early.
  if (!product) return null;

  // All hooks are now called unconditionally since product is non-null.
  const [selectedColor, setSelectedColor] = useState("shadow");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const [view360Active, setView360Active] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Define image arrays – safe to use "product" since it is guaranteed to be non-null.
  const productImages = [
    product.image,
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=400",
  ];

  const view360Images = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=400",
    product.image,
  ];

  // Close on Escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Auto-rotate when in 360° view mode
  useEffect(() => {
    let animationId: number;
    if (view360Active) {
      const autoRotate = () => {
        setRotationAngle((prev) => (prev + 0.5) % 360);
        animationId = requestAnimationFrame(autoRotate);
      };
      const timeoutId = setTimeout(() => {
        animationId = requestAnimationFrame(autoRotate);
      }, 500);
      return () => {
        clearTimeout(timeoutId);
        cancelAnimationFrame(animationId);
      };
    }
  }, [view360Active]);

  // Handlers for 360° dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!view360Active) return;
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!view360Active) return;
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !view360Active) return;
    const delta = e.clientX - startX;
    setStartX(e.clientX);
    setRotationAngle((prev) => (prev + delta) % 360);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !view360Active) return;
    const delta = e.touches[0].clientX - startX;
    setStartX(e.touches[0].clientX);
    setRotationAngle((prev) => (prev + delta) % 360);
  };

  const handleDragEnd = () => setIsDragging(false);

  const get360Image = () => {
    const normalizedAngle = rotationAngle < 0 ? rotationAngle + 360 : rotationAngle;
    const segmentSize = 360 / view360Images.length;
    const imageIndex = Math.floor(normalizedAngle / segmentSize) % view360Images.length;
    return view360Images[imageIndex];
  };

  const toggle360View = () => {
    setView360Active((prev) => !prev);
    setIsZoomed(false);
  };

  const discountPrice = (product.price * 0.87).toFixed(2);

  // Simulate adding to cart
  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => {
      setIsAddingToCart(false);
      setShowAddedMessage(true);
      setTimeout(() => setShowAddedMessage(false), 3000);
    }, 1000);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
      >
        <motion.div
          className={cn(
            "relative w-full max-w-6xl max-h-[90vh] overflow-y-auto",
            "rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 bg-white/90 backdrop-blur-xl"
          )}
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <motion.button
            className="absolute top-3 right-3 z-50 p-2 rounded-md bg-white/20 hover:bg-white/30 border border-white/20 shadow backdrop-blur-sm"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            aria-label="Close Modal"
          >
            <X className="w-5 h-5 text-foreground" />
          </motion.button>

          {/* LEFT COLUMN: Images */}
          <div className="p-6 sm:p-8 flex flex-col gap-6">
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleDragEnd}
              className={cn(
                "relative aspect-square rounded-xl overflow-hidden bg-white shadow-md",
                view360Active ? "cursor-grab" : "cursor-zoom-in"
              )}
            >
              {product.badge && (
                <motion.div
                  className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-semibold text-white rounded-full bg-secondary shadow"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {product.badge}
                </motion.div>
              )}

              <motion.div
                className="relative w-full h-full"
                animate={{ scale: isZoomed && !view360Active ? 1.3 : 1 }}
                transition={{ type: "spring", damping: 30 }}
              >
                <motion.img
                  src={view360Active ? get360Image() : productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => !view360Active && setIsZoomed((prev) => !prev)}
                  style={{ pointerEvents: view360Active ? "none" : "auto" }}
                />
              </motion.div>

              {view360Active && (
                <motion.div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-white bg-foreground/60 backdrop-blur-sm flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <RotateCw className="w-5 h-5 animate-spin" />
                  <span className="text-xs font-medium">Drag to explore</span>
                </motion.div>
              )}

              {!view360Active && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
                  {[ChevronLeft, ChevronRight].map((Icon, idx) => (
                    <motion.button
                      key={idx}
                      className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center backdrop-blur-md border border-white/20"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage((prev) =>
                          idx === 0
                            ? prev === 0
                              ? productImages.length - 1
                              : prev - 1
                            : prev === productImages.length - 1
                            ? 0
                            : prev + 1
                        );
                      }}
                      aria-label={idx === 0 ? "Previous Image" : "Next Image"}
                    >
                      <Icon className="w-5 h-5 text-foreground" />
                    </motion.button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className={cn(
                  "flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium border border-white/20",
                  view360Active ? "bg-primary/10 text-primary" : "bg-white/10 text-foreground"
                )}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={toggle360View}
              >
                <RotateCw className={cn("w-4 h-4", view360Active && "animate-spin")} />
                {view360Active ? "Exit 360°" : "View 360°"}
              </motion.button>

              <div className={cn("grid grid-cols-4 gap-2 flex-1", view360Active && "opacity-50 pointer-events-none")}>
                {productImages.map((img, idx) => (
                  <motion.div
                    key={idx}
                    className={cn(
                      "relative aspect-square rounded-md overflow-hidden shadow cursor-pointer group",
                      selectedImage === idx && "ring-2 ring-primary ring-offset-2"
                    )}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 flex flex-col">
            <div className="space-y-4 sm:space-y-5">
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-white rounded-full bg-primary shadow"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Sparkles className="w-3 h-3" />
                <span>{product.category || "PREMIUM"}</span>
              </motion.div>

              <motion.h2
                className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {product.name}
              </motion.h2>

              <motion.div
                className="flex items-center gap-3 flex-wrap text-xs sm:text-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />
                  ))}
                </div>
                <span className="flex items-center gap-1 text-foreground">
                  <span className="font-semibold">4.9</span>
                  <span className="w-1 h-1 bg-foreground/30 rounded-full" />
                  <span>36 reviews</span>
                  <span className="flex items-center gap-1 text-green-500">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    In Stock
                  </span>
                </span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 sm:gap-3 flex-wrap"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="text-2xl sm:text-3xl font-bold text-primary">
                  ${discountPrice}
                </span>
                <span className="text-sm sm:text-base line-through text-foreground/50">
                  ${product.price.toFixed(2)}
                </span>
                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary">
                  SAVE 13%
                </span>
              </motion.div>

              <motion.p
                className="text-sm sm:text-base leading-relaxed text-foreground"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {product.description} Experience crystal clear audio with our premium
                wireless headphones. Featuring active noise cancellation, 30-hour battery
                life, and premium comfort for extended listening sessions.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-6">
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h3 className="font-semibold text-sm sm:text-base text-foreground">
                  Choose Color
                </h3>
                <div className="flex gap-3 items-center">
                  {[
                    { name: "shadow", bgClass: "bg-foreground" },
                    { name: "pink", bgClass: "bg-primary" },
                    { name: "purple", bgClass: "bg-secondary" },
                  ].map((c) => (
                    <motion.div
                      key={c.name}
                      className={cn(
                        "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ring-2 ring-offset-2 cursor-pointer",
                        selectedColor === c.name ? "ring-opacity-100" : "ring-opacity-0",
                        c.bgClass
                      )}
                      onClick={() => setSelectedColor(c.name)}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {selectedColor === c.name && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </motion.div>
                  ))}
                </div>
                <p className="text-xs font-medium text-foreground">
                  Selected: {selectedColor}
                </p>
              </motion.div>

              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h3 className="font-semibold text-sm sm:text-base text-foreground">
                  Quantity
                </h3>
                <div className="flex items-center border border-foreground/20 rounded-xl w-fit overflow-hidden shadow-sm">
                  <motion.button
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/10 text-foreground"
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    -
                  </motion.button>
                  <span className="w-8 sm:w-12 h-8 sm:h-10 flex items-center justify-center font-medium text-foreground">
                    {quantity}
                  </span>
                  <motion.button
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/10 text-foreground"
                    onClick={() => setQuantity((prev) => prev + 1)}
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    +
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Truck,
                      title: "Free Express Shipping",
                      description: "Delivery in 1-3 business days",
                    },
                    {
                      icon: Shield,
                      title: "Extended 2-Year Warranty",
                      description: "Premium protection included",
                    },
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="relative p-4 rounded-xl bg-white/20 border border-white/20 backdrop-blur-md"
                      whileHover={{ scale: 1.02, y: -4 }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-md bg-primary text-white">
                          <feature.icon className="w-5 h-5" />
                        </div>
                        <div className="space-y-1 text-foreground text-sm">
                          <p className="font-semibold">{feature.title}</p>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-6">
              <motion.button
                className="relative flex-1 px-5 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 bg-foreground text-background shadow"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
              >
                {isAddingToCart ? (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center rounded-xl bg-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Check className="w-5 h-5 text-white" />
                  </motion.div>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </>
                )}

                {showAddedMessage && (
                  <motion.div
                    className="absolute top-0 left-0 right-0 -translate-y-full mt-2 py-1 px-2 text-center text-xs text-white rounded-lg bg-primary"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    Added to cart!
                  </motion.div>
                )}
              </motion.button>

              <motion.button
                className="flex-1 px-5 py-3 rounded-xl font-semibold relative overflow-hidden bg-primary text-white shadow"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative">Buy Now</span>
              </motion.button>

              <motion.button
                className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/20 border border-white/20 shadow backdrop-blur-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setWishlist((prev) => !prev)}
                aria-label="Add to Wishlist"
              >
                <motion.div
                  animate={{
                    scale: wishlist ? [1, 1.3, 1] : 1,
                    rotate: wishlist ? [0, 20, -20, 0] : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Heart
                    className="w-5 h-5 transition-colors"
                    style={{
                      color: wishlist
                        ? "rgb(var(--accent-pink-rgb))"
                        : "rgb(var(--foreground-rgb))",
                      fill: wishlist
                        ? "rgb(var(--accent-pink-rgb))"
                        : "black",
                    }}
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProductDetailModal;
