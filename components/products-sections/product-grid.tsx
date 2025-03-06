"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group"
        >
          <Card className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {product.badge && (
                  <Badge className="absolute top-4 right-4 bg-primary">
                    {product.badge}
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <CardTitle className="mb-2">{product.name}</CardTitle>
                  <CardDescription>{product.category}</CardDescription>
                </div>
                <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
              </div>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature) => (
                  <Badge key={feature} variant="secondary">
                    {feature}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button className="w-full">Learn More</Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
