"use client";

import { useState } from "react";
import { HeroSection } from "@/components/gallery-sections/hero-section";
import { CategoryTabs } from "@/components/gallery-sections/category-tabs";
import { GalleryGrid } from "@/components/gallery-sections/gallery-grid";

const projects = [
  {
    id: 1,
    title: "Modern Office Design",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    description: "Contemporary workspace solution",
  },
  {
    id: 2,
    title: "Sustainable Housing",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    description: "Eco-friendly residential project",
  },
  {
    id: 3,
    title: "Urban Planning",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=1200",
    description: "City development project",
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // ✅ Fix applied: Convert Set to an Array before spreading
  const categories = ["all", ...Array.from(new Set(projects.map(project => project.category)))];

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <div className="container mx-auto px-4 py-16">
        <CategoryTabs
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <GalleryGrid projects={filteredProjects} />
      </div>
    </div>
  );
}
