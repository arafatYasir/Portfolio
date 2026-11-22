import GitHubIcon from "../app/icons/GitHubIcon";
import MediumIcon from "../app/icons/MediumIcon";
import LinkedInIcon from "../app/icons/LinkedInIcon";
import LeetCodeIcon from "@/app/icons/LeetCodeIcon";
import CodeforcesIcon from "@/app/icons/CodeforcesIcon";

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
        name: "Projects",
        link: "projects"
    },
    {
        id: 3,
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
        title: "iMessage",
        description: "A real-time chat app where messages arrive the moment they're sent, with no refreshing and no waiting around.",
        technologies: [
            "MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "Tailwind CSS"
        ],
        github: "https://github.com/arafatYasir/iMessage"
    },
    {
        id: 2,
        title: "Signalist",
        description: "Signalist is a real-time stock market analytics platform providing live market data, heatmaps, and visual insights etc.",
        technologies: [
            "Next.js", "TypeScript", "MongoDB", "Better Auth", "Tailwind CSS"
        ],
        github: "https://github.com/arafatYasir/Signalist"
    },
    {
        id: 3,
        title: "Linkora",
        description: "Linkora is a modern social media platform designed to help people connect, share ideas, and build meaningful digital relationships.",
        technologies: [
            "MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "JWT"
        ],
        github: "https://github.com/arafatYasir/Signalist"
    },
    {
        id: 4,
        title: "Velvel Pour",
        description: "A bar website for exploring a wide range of cocktails, with smooth GSAP animations throughout.",
        technologies: [
            "React.js", "Tailwind CSS", "GSAP"
        ],
        link: "https://velvel-pour.vercel.app/",
        github: "https://github.com/arafatYasir/Signalist"
    },
    {
        id: 5,
        title: "Movie Hub",
        description: "A browsing app for movies and TV shows, with search filtering and a details about every movie or tv shows",
        technologies: [
            "React.js", "Tailwind CSS"
        ],
        link: "https://findmovies4u.netlify.app/",
        github: "https://github.com/arafatYasir/Movie-Hub"
    },
    {
        id: 6,
        title: "Snake Game",
        description: "A modern styled snake game to play on the browser. With scoring, play/pause and match difficulty features.",
        technologies: [
            "HTML5", "CSS3", "JavaScript (ES6+)"
        ],
        link: "https://arafatyasir.github.io/Snake-Game/",
        github: "https://github.com/arafatYasir/Snake-Game"
    },
    {
        id: 7,
        title: "CashFlow",
        description: "CashFlow is a personal finance tracker website designed to help users manage their income and expenses efficiently.",
        technologies: [
            "React.js", "Tailwind CSS", "Firebase"
        ],
        link: "https://mycashflow-tracker.netlify.app/",
        github: "https://github.com/arafatYasir/CashFlow"
    },
];