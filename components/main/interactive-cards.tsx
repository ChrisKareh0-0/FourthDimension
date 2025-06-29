"use client";

import { useState } from "react";
import { InteractiveCard, CardIcons } from "@/components/sub/interactive-card";
import { ServicePopup } from "@/components/sub/service-popup";

const CARD_DATA = [
  {
    icon: CardIcons.social,
    title: "Social Media",
    content: "Strategic social media campaigns to build community and increase brand awareness.",
    iconColor: "#8A2BE2",
    details: {
      description: "Comprehensive social media management and marketing strategies to elevate your brand's online presence and engage with your target audience effectively.",
      features: [
        "Platform-specific content creation and curation",
        "Community management and engagement strategies",
        "Paid advertising campaigns across social platforms",
        "Analytics and performance tracking",
        "Influencer collaboration and partnerships",
        "Brand voice and messaging development"
      ],
      benefits: "Increase brand visibility, build authentic relationships with your audience, drive website traffic, and generate qualified leads through strategic social media presence."
    }
  },
  {
    icon: CardIcons.branding,
    title: "Branding",
    content: "Create a memorable brand identity with comprehensive branding strategies.",
    iconColor: "#8A2BE2",
    details: {
      description: "Complete brand identity development including visual design, brand guidelines, and strategic positioning to create a cohesive and memorable brand experience.",
      features: [
        "Brand strategy and positioning",
        "Visual identity design (colors, typography, imagery)",
        "Brand guidelines and style guides",
        "Brand messaging and tone of voice",
        "Brand collateral design",
        "Brand audit and refresh services"
      ],
      benefits: "Establish a strong, recognizable brand that resonates with your target audience, builds trust, and differentiates you from competitors in your market."
    }
  },
  {
    icon: CardIcons.content,
    title: "Content Creation",
    content: "Engaging and strategic content that tells your story and drives results.",
    iconColor: "#8A2BE2",
    details: {
      description: "Professional content creation services that align with your brand voice and business objectives, from blog posts to video content and everything in between.",
      features: [
        "Blog writing and content strategy",
        "Video content creation and editing",
        "Infographic and visual content design",
        "Email marketing campaigns",
        "Case studies and whitepapers",
        "Social media content calendars"
      ],
      benefits: "Drive organic traffic, establish thought leadership, improve SEO rankings, and create valuable resources that convert visitors into customers."
    }
  },
  {
    icon: CardIcons.website,
    title: "Development",
    content: "Custom web and mobile applications built with cutting-edge technologies.",
    iconColor: "#8A2BE2",
    details: {
      description: "Full-stack web and mobile development services using modern technologies to create scalable, high-performance applications that drive business growth and user engagement.",
      features: [
        "Custom website and web application development",
        "Mobile app development (iOS & Android)",
        "E-commerce platform development",
        "API development and integration",
        "Database design and optimization",
        "Cloud deployment and maintenance"
      ],
      benefits: "Build robust, scalable digital solutions that streamline operations, enhance user experience, and provide measurable business value through custom software development."
    }
  },
  {
    icon: CardIcons.photography,
    title: "Photography",
    content: "Professional photography services to showcase your products and brand story.",
    iconColor: "#8A2BE2",
    details: {
      description: "High-quality photography services including product photography, lifestyle shoots, and brand imagery that captures your unique story and enhances your marketing materials.",
      features: [
        "Product and commercial photography",
        "Lifestyle and brand photography",
        "Event and corporate photography",
        "Photo editing and retouching",
        "Stock photo curation and licensing",
        "Photography consultation and planning"
      ],
      benefits: "Enhance your marketing materials with professional imagery, increase engagement on social media, and create a more authentic and appealing brand presence."
    }
  },
  {
    icon: CardIcons.marketing,
    title: "Performance Marketing",
    content: "Data-driven marketing campaigns that deliver measurable results and ROI.",
    iconColor: "#8A2BE2",
    details: {
      description: "Results-focused digital marketing campaigns using advanced targeting, analytics, and optimization techniques to maximize your advertising spend and achieve your business goals.",
      features: [
        "Google Ads and PPC campaigns",
        "Facebook and Instagram advertising",
        "Retargeting and remarketing strategies",
        "Conversion rate optimization",
        "A/B testing and campaign optimization",
        "Performance analytics and reporting"
      ],
      benefits: "Generate qualified leads, increase sales conversions, improve ROI on advertising spend, and scale your business through data-driven marketing strategies."
    }
  },
  {
    icon: CardIcons.copywriting,
    title: "Strategy",
    content: "Comprehensive marketing strategy development to achieve your business objectives.",
    iconColor: "#8A2BE2",
    details: {
      description: "Strategic marketing planning and consultation to align your marketing efforts with business goals, identify opportunities, and create actionable roadmaps for growth.",
      features: [
        "Marketing strategy development",
        "Market research and competitive analysis",
        "Customer persona development",
        "Marketing funnel optimization",
        "Budget planning and allocation",
        "Performance measurement frameworks"
      ],
      benefits: "Create a clear roadmap for marketing success, optimize resource allocation, improve customer acquisition, and achieve sustainable business growth through strategic planning."
    }
  }
];

export const InteractiveCards = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
  };

  const handleClosePopup = () => {
    setSelectedService(null);
  };

  const handleContactClick = () => {
    setSelectedService(null);
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="cards-container">
        {CARD_DATA.map((card, index) => (
          <div key={index} onClick={() => handleServiceClick(card)}>
            <InteractiveCard
              icon={card.icon}
              title={card.title}
              content={card.content}
              iconColor={card.iconColor}
            />
          </div>
        ))}
      </div>

      {selectedService && (
        <ServicePopup
          service={selectedService}
          onClose={handleClosePopup}
          onContactClick={handleContactClick}
        />
      )}
    </>
  );
};
