"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 relative"
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
            <source src="/videos/encryption-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto px-6 z-10"
      >
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-center mb-12"
        >
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your project and create something amazing together.
          </p>
        </motion.div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="bg-[rgba(3,0,20,0.37)] backdrop-blur-md border border-[rgba(112,66,248,0.38)] rounded-2xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[rgba(3,0,20,0.5)] border border-[rgba(112,66,248,0.3)] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[rgba(112,66,248,0.6)] focus:ring-1 focus:ring-[rgba(112,66,248,0.3)] transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[rgba(3,0,20,0.5)] border border-[rgba(112,66,248,0.3)] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[rgba(112,66,248,0.6)] focus:ring-1 focus:ring-[rgba(112,66,248,0.3)] transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-[rgba(3,0,20,0.5)] border border-[rgba(112,66,248,0.3)] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[rgba(112,66,248,0.6)] focus:ring-1 focus:ring-[rgba(112,66,248,0.3)] transition-all duration-300"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-[rgba(3,0,20,0.5)] border border-[rgba(112,66,248,0.3)] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[rgba(112,66,248,0.6)] focus:ring-1 focus:ring-[rgba(112,66,248,0.3)] transition-all duration-300"
                placeholder="What&apos;s this about?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-[rgba(3,0,20,0.5)] border border-[rgba(112,66,248,0.3)] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[rgba(112,66,248,0.6)] focus:ring-1 focus:ring-[rgba(112,66,248,0.3)] transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="button-primary px-8 py-3 text-white rounded-lg font-medium hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>

            {/* Status messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-green-400 bg-green-900/20 border border-green-500/30 rounded-lg p-4"
              >
                Message sent successfully! I&apos;ll get back to you soon.
              </motion.div>
            )}
            
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-red-400 bg-red-900/20 border border-red-500/30 rounded-lg p-4"
              >
                Something went wrong. Please try again or contact me directly.
              </motion.div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}; 