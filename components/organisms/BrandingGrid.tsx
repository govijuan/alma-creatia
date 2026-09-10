// components/ServicesGrid.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import CurveCard from "../molecules/CurveCard";

const brandingItems = [
  {
    id: 1,
    title: "Strategy",
    description: "Deep research & positioning that sets the foundation.",
    image: "/textures/clay-1.jpg", // replace with your images
  },
  {
    id: 2,
    title: "Design",
    description: "Visual systems and interfaces that feel alive.",
    image: "/textures/clay-2.jpg",
  },
  {
    id: 3,
    title: "Development",
    description: "Clean, performant code that scales with you.",
    image: "/textures/clay-3.jpg",
  },
  {
    id: 4,
    title: "Motion",
    description: "Subtle animations that guide attention.",
    image: "/textures/clay-4.jpg",
  },
  {
    id: 5,
    title: "Content",
    description: "Words and stories that convert and connect.",
    image: "/textures/clay-5.jpg",
  },
  {
    id: 6,
    title: "Launch",
    description: "Go-to-market systems and growth loops.",
    image: "/textures/clay-6.jpg",
  },
  {
    id: 7,
    title: "Optimization",
    description: "Data-driven improvements that enhance performance.",
    image: "/textures/clay-7.jpg",
  },
  {
    id: 8,
    title: "Support",
    description: "Ongoing maintenance and updates for peace of mind.",
    image: "/textures/clay-8.jpg",
  },
  {
    id: 9,
    title: "Analytics",
    description: "Insights and metrics to inform future decisions.",
    image: "/textures/clay-9.jpg",
  },
  {
    id: 10,
    title: "Consulting",
    description: "Expert advice to navigate complex challenges.",
    image: "/textures/clay-10.jpg",
  },
  {
    id: 11,
    title: "Branding",
    description: "Crafting a unique identity that resonates.",
    image: "/textures/clay-11.jpg",
  },
  {
    id: 12,
    title: "SEO",
    description: "Optimizing content to rank higher in search results.",
    image: "/textures/clay-12.jpg",
  }
  // add more as needed
];

export default function BrandingGrid() {
  return (
    <section className="bg-[#f5f2eb] p-15 w-3/4 mx-auto mt-15">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-bold mb-8 text-center bg-white/9 rounded-3xl text-white p-4">Our Branding Services</h2>
        </div>

        {/* Organic-looking grid – adjust columns / gaps to taste */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 place-items-center">
          {brandingItems.map((item) => (
            <CurveCard key={item.id} cardContent={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
