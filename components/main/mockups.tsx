"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import { MockupCard } from "@/components/sub/mockup-card";
import { MOCKUPS } from "@/constants";

export const Mockups = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(MOCKUPS.map(mockup => mockup.category)))];

  // Filter mockups based on selected category
  const filteredMockups = selectedCategory === "All" 
    ? MOCKUPS 
    : MOCKUPS.filter(mockup => mockup.category === selectedCategory);

  return (
    <section
      id="mockups"
      className="flex flex-col items-center justify-center py-20 relative min-h-screen"
    >
      {/* Background video */}
      <div className="w-full h-full absolute top-0 left-0">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto px-6 z-10"
      >
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-center mb-16"
        >
          <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
            Branding Portfolio
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Explore our branding and design mockups showcasing creative brand identities, 
            logo designs, and comprehensive brand guidelines for various clients and industries.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg"
                    : "bg-[rgba(3,0,20,0.8)] text-gray-300 border border-[#2A0E61]/50 hover:border-purple-500/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Mockups Grid */}
        <motion.div
          variants={slideInFromLeft(1.1)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredMockups.map((mockup, index) => (
            <motion.div
              key={mockup.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MockupCard
                src={mockup.image}
                title={mockup.title}
                description={mockup.description}
                category={mockup.category}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredMockups.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">
              No branding work found for the selected category.
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}; 