import GitHubIcon from "../app/icons/GitHubIcon";
import MediumIcon from "../app/icons/MediumIcon";
import LinkedInIcon from "../app/icons/LinkedInIcon";
import LeetCodeIcon from "@/app/icons/LeetCodeIcon";
import CodeforcesIcon from "@/app/icons/CodeforcesIcon";
import { link } from "fs";

// Types & Interfaces
interface OtherProject {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    github: string;
}

export const navOptions = [
    {
        id: 1,
        name: "About",
        link: "about"
    },
    {
        id: 2,
        name: "Experience",
        link: "experience"
    },
    {
        id: 3,
        name: "Projects",
        link: "projects"
    },
    {
        id: 4,
        name: "Blogs",
        link: "blogs"
    },
    {
        id: 5,
        name: "Contact",
        link: "contact"
    },
];

export const socials = [
    {
        id: 1,
        icon: GitHubIcon,
        link: "https://github.com/arafatYasir"
    },
    {
        id: 2,
        icon: LinkedInIcon,
        link: "https://www.linkedin.com/in/arafatYasir01"
    },
    {
        id: 3,
        icon: MediumIcon,
        link: "https://medium.com/@arafatYasir"
    },
    {
        id: 4,
        icon: LeetCodeIcon,
        link: "https://leetcode.com/u/arafatYasir01/"
    },
    {
        id: 5,
        icon: CodeforcesIcon,
        link: "https://codeforces.com/profile/iamyasir.arafat01"
    },
];

export const skills = [
    "HTML5",
    "MongoDB",
    "CSS3",
    "Express.js",
    "JavaScript (ES6+)",
    "React.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Next.js",
    "Shadcn",
    "Redux",
    "GSAP",
    "Zustand",
    "C",
    "C++"
];

export const allProjects = [
    {
        id: 1,
        name: "NextStep",
        description: "NextStep is a SaaS platform that helps job seekers apply with confidence. Its four AI-driven tools analyze job descriptions, score your resume for ATS, build an ATS-optimized resume, and write cover letters, all tailored to the role you're targeting.",
        technologies: [
            "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Redux", "MongoDB", "Mongoose", "Zod", "Supabase Auth", "Gemini AI", "Inngest", "Stripe", "Cloudinary", "Web3Forms"
        ],
        link: "https://career-next-step.vercel.app/",
        github: "https://github.com/arafatYasir/NextStep",
        image: "/images/project_nextstep.png"
    },
    {
        id: 2,
        name: "Prime Nest",
        description: "PrimeNest is a full-stack real estate marketplace where buyers, sellers, and renters connect directly through built-in real-time chat. Browse listings with rich filters, then manage properties, proposals, and transactions, all in one place.",
        technologies: [
            "React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "TypeScript", "Socket.io", "Tailwind CSS", "shadcn/ui", "Zustand", "TanStack Query", "React Hook Form", "Zod", "React Leaflet", "Clerk", "Stripe", "Cloudinary", "Web3Forms"
        ],
        link: "https://your-prime-nest.vercel.app/",
        github: "https://github.com/arafatYasir/PrimeNest",
        image: "/images/project_prime_nest.png"
    }
];

export const otherProjects: OtherProject[] = [
    {
        id: 1,
        title: "LeetNote",
        description: "LeetNote is a Chrome extension that turns a solved LeetCode problem into a useful note according to the solution.",
        technologies: [
            "HTML5", "CSS3", "TypeScript", "Manifest V3", "Zod", "Gemini API"
        ],
        github: "https://github.com/arafatYasir/LeetNote-AI-Extension"
    },
    {
        id: 2,
        title: "iMessage",
        description: "A real-time chat app where messages arrive the moment they're sent, with no refreshing and no waiting around.",
        technologies: [
            "MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "Tailwind CSS"
        ],
        github: "https://github.com/arafatYasir/iMessage"
    },
    {
        id: 3,
        title: "Signalist",
        description: "Signalist is a real-time stock market analytics platform providing live market data, heatmaps, and visual insights etc.",
        technologies: [
            "Next.js", "TypeScript", "MongoDB", "Better Auth", "Tailwind CSS"
        ],
        github: "https://github.com/arafatYasir/Signalist"
    },
    {
        id: 4,
        title: "Linkora",
        description: "Linkora is a modern social media platform designed to help people connect, share ideas, and build meaningful digital relationships.",
        technologies: [
            "MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "JWT"
        ],
        github: "https://github.com/arafatYasir/Linkora"
    },
    {
        id: 5,
        title: "Velvel Pour",
        description: "A bar website for exploring a wide range of cocktails, with smooth GSAP animations throughout.",
        technologies: [
            "React.js", "Tailwind CSS", "GSAP"
        ],
        link: "https://velvel-pour.vercel.app/",
        github: "https://github.com/arafatYasir/GSAP-Cocktails"
    },
    {
        id: 6,
        title: "Movie Hub",
        description: "A browsing app for movies and TV shows, with search filtering and a details about every movie or tv shows",
        technologies: [
            "React.js", "Tailwind CSS"
        ],
        link: "https://findmovies4u.netlify.app/",
        github: "https://github.com/arafatYasir/Movie-Hub"
    },
    {
        id: 7,
        title: "Snake Game",
        description: "A modern styled snake game to play on the browser. With scoring, play/pause and match difficulty features.",
        technologies: [
            "HTML5", "CSS3", "JavaScript (ES6+)"
        ],
        link: "https://arafatyasir.github.io/Snake-Game/",
        github: "https://github.com/arafatYasir/Snake-Game"
    },
    {
        id: 8,
        title: "CashFlow",
        description: "CashFlow is a personal finance tracker website designed to help users manage their income and expenses efficiently.",
        technologies: [
            "React.js", "Tailwind CSS", "Firebase"
        ],
        link: "https://mycashflow-tracker.netlify.app/",
        github: "https://github.com/arafatYasir/CashFlow"
    },
    {
        id: 9,
        title: "Pokedex",
        description: "Pokedex is a pokemon browsing website where you can find all pokemons and their full details such as hp, attack, defense, special attacks etc.",
        technologies: [
            "React.js", "CSS3"
        ],
        link: "https://151pokemons-info.netlify.app/",
        github: "https://github.com/arafatYasir/Pokedex"
    },
];

export const blogs = [
    {
        id: 1,
        image: "/images/blog1.webp",
        title: "How to Build a Responsive Webpage with HTML and Minimal CSS",
        description: "Building responsive webpages has become an essential skill for web developers in today’s mobile-first world. A responsive webpage adapts seamlessly to different screen sizes, ensuring an optimal user experience on desktops, tablets, and smartphones. While frameworks like Bootstrap are popular for creating responsive designs, you can achieve impressive results with just HTML and minimal CSS. In this guide, we’ll walk you through the steps to build a fully responsive webpage using a streamlined approach.",
        date: "Jan 9, 2025",
        readTime: "4 min read",
        tags: ["HTML", "CSS", "Responsive Design"],
        link: "https://medium.com/@arafatYasir/how-to-build-a-responsive-webpage-with-html-and-minimal-css-9954ccba2084"
    },
    {
        id: 2,
        image: "/images/blog2.webp",
        title: "Mastering Semantic HTML: A Beginner’s Guide to Accessible Webpages",
        description: "In today’s web development landscape, semantic HTML plays a critical role in creating accessible, user-friendly, and well-structured websites. Whether you’re a novice or a seasoned developer, understanding semantic HTML is essential for building webpages that are not only visually appealing but also functional for all users, including those relying on assistive technologies.",
        date: "Jan 9, 2025",
        readTime: "3 min read",
        tags: ["HTML"],
        link: "https://medium.com/@arafatYasir/mastering-semantic-html-a-beginners-guide-to-accessible-webpages-1cfc53cb6076"
    },
    {
        id: 3,
        image: "/images/blog3.webp",
        title: "10 Best Practices in CSS3 for Every Web Developer",
        description: "CSS3 is an essential tool for creating modern, responsive web designs. While it’s easy to learn the basics, applying best practices ensures your code is clean, efficient, and maintainable. Here are 10 key practices every web developer should follow:",
        date: "Jan 9, 2025",
        readTime: "3 min read",
        tags: ["CSS"],
        link: "https://medium.com/@arafatYasir/10-best-practices-in-css3-for-every-web-developer-8e30fcc7773e"
    }
]