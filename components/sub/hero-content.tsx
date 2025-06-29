"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const text = textRef.current.innerText;
      const chars = text.trim().split("");
      textRef.current.innerHTML = chars.map(char => `<span>${char}</span>`).join("");
    }
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center w-full min-h-screen z-[20]"
    >
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col items-center justify-center gap-4 text-6xl font-bold text-white"
        >
          <Image
            src="/logo.png"
            alt="Fourth Dimension Logo"
            height={350}
            width={350}
            draggable={false}
            className="select-none"
          />
          <span>
            As Long as{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 relative inline-block">
              <div 
                ref={textRef}
                className="anim-text-flow"
              >
                Dreams
              </div>
            </span>{" "}
            Inspire.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 max-w-[600px]"
        >
          {/* Your description here if needed */}
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 px-6 button-primary text-white cursor-pointer rounded-lg"
        >
          Learn more
        </motion.a>
      </div>
    </motion.div>
  );
};
