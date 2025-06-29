"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handlePresentationClick = () => {
    // Option 1: PDF presentation (recommended for browser viewing)
    const presentationPath = "/presentations/portfolio-presentation.pdf";
    
    // Option 2: Google Slides (if you upload your PowerPoint to Google Slides)
    // const presentationPath = "https://docs.google.com/presentation/d/YOUR_SLIDE_ID/edit?usp=sharing";
    
    // Open the file directly in a new tab
    window.open(presentationPath, "_blank");
  };

  return (
    <section
      id="projects"
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
            <source src="/videos/blackhole.webm" type="video/webm" />
          </video>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto px-6 z-10"
      >
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-center mb-16"
        >
          <h1 className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
            Our Portfolio
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Discover our comprehensive portfolio presentation showcasing our latest projects, 
            achievements, and innovative solutions that drive success.
          </p>
        </motion.div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="flex justify-center"
        >
          <motion.button
            onClick={handlePresentationClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(138, 43, 226, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative group cursor-pointer"
          >
            {/* Main button */}
            <div className="relative bg-gradient-to-r from-purple-600 to-cyan-600 p-1 rounded-2xl">
              <div className="bg-[rgba(3,0,20,0.9)] backdrop-blur-md rounded-2xl p-8 md:p-12">
                <div className="flex flex-col items-center space-y-6">
                  {/* Icon */}
                  <motion.div
                    animate={{ 
                      rotate: isHovered ? 360 : 0,
                      scale: isHovered ? 1.2 : 1
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center"
                  >
                    <svg 
                      className="w-10 h-10 md:w-12 md:h-12 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                      />
                    </svg>
                  </motion.div>

                  {/* Text */}
                  <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      View Portfolio Presentation
                    </h2>
                    <p className="text-gray-300 text-lg max-w-md">
                      Click to open our comprehensive PowerPoint presentation showcasing our work
                    </p>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    animate={{ 
                      x: isHovered ? 10 : 0,
                      opacity: isHovered ? 1 : 0.7
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center space-x-2 text-purple-400"
                  >
                    <span className="text-sm font-medium">Open Presentation</span>
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <motion.div
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl -z-10"
            />
          </motion.button>
        </motion.div>

        {/* Additional info */}
        <motion.div
          variants={slideInFromLeft(1.1)}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            Our presentation includes detailed case studies, project timelines, and success metrics
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
