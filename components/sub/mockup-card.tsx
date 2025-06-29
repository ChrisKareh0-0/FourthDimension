import Image from "next/image";
import { motion } from "framer-motion";

type MockupCardProps = {
  src: string;
  title: string;
  description: string;
  category: string;
};

export const MockupCard = ({
  src,
  title,
  description,
  category,
}: MockupCardProps) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(138, 43, 226, 0.3)"
      }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-xl bg-[rgba(3,0,20,0.8)] backdrop-blur-sm border border-[#2A0E61]/50 group cursor-pointer"
    >
      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full">
          {category}
        </span>
      </div>

      {/* Image Container */}
      <div className="relative overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={400}
          height={300}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-purple-500/50 transition-colors duration-300" />
    </motion.div>
  );
}; 