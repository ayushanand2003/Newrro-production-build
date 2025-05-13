export interface ProductPreview {
    slug: string;
    name: string;
    short: string;
    image: string;
    route: string;
  }
  
  export const products: ProductPreview[] = [
    {
      slug: "arjuna",
      name: "Arjuna Edu Kit",
      short: "High-performance ROS-based research and learning robot.",
      image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/work_gallery/R11.png?raw=true",
      route: "/labs/arjuna",
    },
    {
      slug: "babroo",
      name: "Babroo",
      short: "Smart robotics learning kit with AI control and voice recognition.",
      image: "https://raw.githubusercontent.com/ayushanand2003/Newrro-production-build/refs/heads/main/public/assets/product/b2.png",
      route: "/labs/babroo",
    },
    {
      slug: "kush",
      name: "Kush",
      short: "Beginner-friendly robot with display, WiFi, and expansion support.",
      image: "https://raw.githubusercontent.com/ayushanand2003/Newrro-production-build/refs/heads/main/public/assets/product/k1.png",
      route: "/labs/kush",
    },
    {
      slug: "jt2",
      name: "JT-2",
      short: "Autonomous mobile robot with ROS 2, smart motors, and navigation.",
      image: "https://raw.githubusercontent.com/ayushanand2003/Newrro-production-build/refs/heads/main/public/assets/product/nrc0.png",
      route: "/labs/jt2",
    },
    {
      slug: "esp32-kit",
      name: "Robotics Learning Kit (ESP32)",
      short: "Affordable modular robotics kit with ESP32 and wireless connectivity.",
      image: "https://github.com/ayushanand2003/Newrro-production-build/blob/main/public/assets/product/br3.png?raw=true",
      route: "/labs/esp32-kit",
    },
  ];