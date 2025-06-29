"use client";

import { useRef, useState, useEffect } from "react";
import { IconType } from "react-icons";
import { 
  IoStarOutline, 
  IoEarthOutline, 
  IoRocketOutline, 
  IoCartOutline, 
  IoShareSocialOutline, 
  IoSearchOutline,
  IoDocumentTextOutline,
  IoCameraOutline,
  IoTrendingUpOutline,
  IoCreateOutline
} from "react-icons/io5";

type CardProps = {
  icon: IconType;
  title: string;
  content: string;
  iconColor?: string;
};

// Map of available icons with space theme (outline style)
export const CardIcons = {
  branding: IoStarOutline,           // Star outline for branding
  website: IoEarthOutline,           // Earth outline for websites
  mobile: IoRocketOutline,           // Rocket outline for mobile
  ecommerce: IoCartOutline,          // Cart outline for e-commerce
  social: IoShareSocialOutline,      // Share outline for social media
  seo: IoSearchOutline,              // Search outline for SEO
  content: IoDocumentTextOutline,    // Document outline for content creation
  photography: IoCameraOutline,      // Camera outline for photography
  marketing: IoTrendingUpOutline,    // Trending up outline for performance marketing
  copywriting: IoCreateOutline       // Create outline for copywriting
};

export const InteractiveCard = ({ icon: Icon, title, content, iconColor = "#8A2BE2" }: CardProps) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState<NodeJS.Timeout | null>(null);
  
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (cardRef.current) {
      setWidth(cardRef.current.offsetWidth);
      setHeight(cardRef.current.offsetHeight);
    }
  }, []);
  
  // Reduce sensitivity by dividing mouse movement values
  const mousePX = mouseX / (width || 1) / 2;
  const mousePY = mouseY / (height || 1) / 2;
  
  const cardStyle = {
    transform: `rotateY(${mousePX * 15}deg) rotateX(${mousePY * -15}deg)`
  };
  
  const iconTransform = {
    transform: `translateX(${mousePX * -20}px) translateY(${mousePY * -20}px)`,
  };
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const newMouseX = e.clientX - rect.left - width/2;
      const newMouseY = e.clientY - rect.top - height/2;
      
      setMouseX(prevX => prevX + (newMouseX - prevX) * 0.2);
      setMouseY(prevY => prevY + (newMouseY - prevY) * 0.2);
    }
  };
  
  const handleMouseEnter = () => {
    if (mouseLeaveDelay) {
      clearTimeout(mouseLeaveDelay);
      setMouseLeaveDelay(null);
    }
  };
  
  const handleMouseLeave = () => {
    const delay = setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000);
    setMouseLeaveDelay(delay);
  };
  
  return (
    <div 
      className="card-wrap cursor-pointer"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="card"
        style={cardStyle}
      >
        <div 
          className="card-icon" 
          style={iconTransform}
        >
          <Icon size={80} color={iconColor} />
        </div>
        <div className="card-info">
          <h1 className={title === "Performance Marketing" ? "performance-marketing-title" : ""}>
            {title}
          </h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};
