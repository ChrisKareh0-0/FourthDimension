"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IconType } from "react-icons";
import { IoClose } from "react-icons/io5";

type ServiceDetails = {
  description: string;
  features: string[];
  benefits: string;
};

type Service = {
  icon: IconType;
  title: string;
  content: string;
  iconColor?: string;
  details: ServiceDetails;
};

type ServicePopupProps = {
  service: Service;
  onClose: () => void;
  onContactClick: () => void;
};

export const ServicePopup = ({ service, onClose, onContactClick }: ServicePopupProps) => {
  const { icon: Icon, title, details, iconColor = "#8A2BE2" } = service;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-[rgba(3,0,20,0.95)] backdrop-blur-md border border-[rgba(112,66,248,0.38)] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          >
            <IoClose size={24} />
          </button>

          {/* Content */}
          <div className="p-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-6">
                <Icon size={40} color="white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                {details.description}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                What We Offer
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {details.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-3 p-4 bg-[rgba(112,66,248,0.1)] rounded-lg border border-[rgba(112,66,248,0.2)]"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8 p-6 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl border border-[rgba(112,66,248,0.3)]"
            >
              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                Key Benefits
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                {details.benefits}
              </p>
            </motion.div>

            {/* Contact button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <button
                onClick={onContactClick}
                className="button-primary px-8 py-4 text-white rounded-lg font-medium hover:scale-105 transition-all duration-300 text-lg"
              >
                Get Started with {title}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}; 