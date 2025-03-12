"use client";

import { useState } from "react";
import { HeroSection } from "@/components/gallery-sections/hero-section";
import { CategoryTabs } from "@/components/gallery-sections/category-tabs";
import { GalleryGrid } from "@/components/gallery-sections/gallery-grid";

const projects = [

  {
    id: 1,
    title: "Arjuna Robot",
    category: "Arjuna",
    image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/R11.png?raw=true",
    description: "Arjuna Robot Photoshoot",
  },
  {
    id: 2,
    title: "Arjuna Robot",
    category: "Arjuna",
    image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/R2.png?raw=true",
    description: "Arjuna Robot Photoshoot",
  },
  {
    id: 3,
    title: "Arjuna Robot",
    category: "Arjuna",
    image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/R3.png?raw=true",
    description: "Arjuna Robot Photoshoot",
  },
  {
    id: 4,
    title: "Arjuna Robot",
    category: "Arjuna",
    image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/R5.png?raw=true",
    description: "Arjuna Robot Photoshoot",
  },
  {
    id: 5,
    title: "Arjuna Robot",
    category: "Arjuna",
    image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/R6.png?raw=true",
    description: "Arjuna Robot Testing",
  },
 
  //5-10
  


  {
    id: 10,
    title: "Emerge Event",
    category: "Expo",
    image: "https://raw.githubusercontent.com/ayushanand2003/Newrro-production-build/refs/heads/main/public/assets/work_gallery/Emerge1.png",
    description: "Contemporary workspace solution",
  },
  {
    id: 11,
    title: "Emerge Event",
    category: "Expo",
    image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/Emerge2.png?raw=true",
    description: "Contemporary workspace solution",
  },
  {
    id: 12,
    title: "Emerge Event",
    category: "Expo",
    image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/Emerge3.png?raw=true",
    description: "Contemporary workspace solution",
  },
 
  {
    id: 13,
    title: "Workshop",
    category: "Workshop",
    image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/GAT.png?raw=true",
    description: "Robotic Workshop for students at GAT",
  },
  {
    id: 14,
    title: "Workshop",
    category: "Workshop",
    image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/GAT1.png?raw=true",
    description: "Robotic Workshop for students at GAT",

  },
  {
    id: 15,
    title: "Workshop",
    category: "Workshop",
    image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/GAT2.png?raw=true",
    description: "Robotic Workshop for students at GAT",
  },
  {
    id: 16,
    title: "University Trainings" ,
    category: "University",
    image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/Global1.png?raw=true",
    description: "Teaching students about Robotics at Global",
  },
  {
    id: 17,
    title: "University Trainings" ,
    category: "University",
    image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/GAT2.png?raw=true",
    description: "Teaching students about Robotics at Global",

  },
  {
    id: 18,
    title: "University Trainings" ,
    category: "University",
    image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/Global2.png?raw=true",
    description: "Teaching students about Robotics at Global",
  },
  {
    id: 19,
    title: "University Trainings" ,
    category: "University",
    image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/JSS1.png?raw=true",
    description: "Teaching students about Robotics at JSS",
  },
  {
    id: 20,
    title: "University Trainings" ,
    category: "University",
    image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/JSS2.png?raw=true",
    description: "Teaching students about Robotics at JSS",
  },
  {
    id: 21,
    title: "University Trainings" ,
    category: "University",
    image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/JSS3.png?raw=true",
    description: "Teaching students about Robotics at JSS",
  },
  {
    id: 22,
    title: "University Trainings" ,
    category: "University",
    image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/SMVIT1.png?raw=true",
    description: "Teaching students about Robotics at SMVIT",
  },
  {
    id: 23,
    title: "University Trainings" ,
    category: "University",
    image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/SMVIT2.png?raw=true",
    description: "Teaching students about Robotics at SMVIT",
  },
  {
    id: 24,
    title: "University Trainings" ,
    category: "University",
    image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/SMVIT3.png?raw=true",
    description: "Teaching students about Robotics at SMVIT",
  },
  {
    id: 25,
    title: "University Trainings" ,
    category: "University",
    image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/reva2.png?raw=true",
    description: "Teaching students about Robotics at Reva",
  },
  {
    id: 26,
    title: "University Trainings" ,
    category: "University",
    image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/reva1.JPG?raw=true",
    description: "Teaching students about Robotics at Reva",
  },
  {
    id: 27,
    title: "University Trainings" ,
    category: "University",
    image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/reva3.png?raw=true",
    description: "Teaching students about Robotics at Reva",
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
