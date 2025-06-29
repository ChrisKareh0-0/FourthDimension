import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { MdEmail, MdPhone } from "react-icons/md";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Potato World",
    description:
      'Description Area wassup Description Area wassup Description Area wassup Description Area wassup Description Area wassup Description Area wassup Description Area wassup Description Area wassup ',
    image: "",
    link: "https://example.com",
  },
  {
    title: "WaterMelon City ",
    description:
      'Lorem Description Description Area wassup Description Area wassup Description Area wassup Description Area wassup Description Area wassup Description Area wassup Description Area wassup Description ',
    image: "",
    link: "https://example.com",
  },
  {
    title: "Cucumber Jungle",
    description:
      'Lorem Lorem test test Description Area wassup Description Area wassup Description Area wassup Description Area wassup  Description Area wassup Description Area wassup Description Area wassup Description Area wassup ',
    image: "",
    link: "https://example.com",
  },
] as const;

export const CONTACT_INFO = {
  email: "vnoura@fourthdimension.com",
  phone: "+961 79 112 031",
} as const;

export const FOOTER_DATA = [
  {
    title: "Contact",
    data: [
      {
        name: CONTACT_INFO.email,
        icon: MdEmail,
        link: `mailto:${CONTACT_INFO.email}`,
      },
      {
        name: CONTACT_INFO.phone,
        icon: MdPhone,
        link: `tel:${CONTACT_INFO.phone}`,
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/fourthdimensionagency",
      },
      {
        name: "Facebook",
        icon: FaFacebook,
        link: "https://facebook.com",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/company/fourthdimensionagency/",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About Us",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Branding",
    link: "#mockups",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "",
};

export const MOCKUPS = [
  {
    title: "Brand Identity Design",
    description: "Comprehensive brand identity package including logo design, color palette, and visual guidelines.",
    image: "/Mockup 02.png",
    category: "Brand Identity",
  },
  {
    title: "Logo Design Collection",
    description: "Creative logo designs showcasing different styles and approaches for various industries.",
    image: "/Mockup 04.png",
    category: "Logo Design",
  },
  {
    title: "Brand Guidelines",
    description: "Detailed brand guidelines and style guide ensuring consistent brand application across all platforms.",
    image: "/Mockup 11.png",
    category: "Brand Guidelines",
  },
  {
    title: "Marketing Materials",
    description: "Complete marketing collateral including business cards, letterheads, and promotional materials.",
    image: "/Mockup 12.png",
    category: "Marketing Collateral",
  },
  {
    title: "Digital Branding",
    description: "Digital brand applications including social media templates and web design elements.",
    image: "/Mockup 14.png",
    category: "Digital Branding",
  },
] as const;
