import { useRef } from "react";
import { blogs } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import RedirectIcon from "../icons/RedirectIcon";
import { useMediaQuery } from "../hooks/useMediaQuery";

const BlogsSection = () => {
    // Extra hooks
    const hasAnimatedRef = useRef(false);

    // Extra responsive breakpoints
    const breakpoint2 = useMediaQuery("(min-width: 601px)");
    const breakpoint3 = useMediaQuery("(min-width: 1001px)");

    useGSAP(() => {
        // Animation configuration matching OtherProjectsSection
        const ANIMATION_CONFIG = {
            y: 20,
            duration: 0.25,
            ease: "cubic-bezier(0.645, 0.045, 0.355, 1)",
        };

        if (!hasAnimatedRef.current) {
            // Hide all blog cards initially
            gsap.set("#blogs .blog-card", { opacity: 0, y: ANIMATION_CONFIG.y });

            // Animate section heading first
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#blogs",
                    start: "top 95%",
                    once: true,
                },
                delay: 0.35,
                onStart: () => {
                    hasAnimatedRef.current = true;
                },
            });

            tl.fromTo(
                "#blogs .heading",
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power1.inOut" }
            );

            // Animate each blog card individually when entering viewport
            gsap.utils.toArray<Element>("#blogs .blog-card").forEach((card, i) => {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: ANIMATION_CONFIG.y },
                    {
                        scrollTrigger: {
                            trigger: card,
                            start: "top 95%",
                            once: true,
                            onEnter: () => {
                                gsap.to(card, {
                                    opacity: 1,
                                    y: 0,
                                    delay: (i % 3) * 0.15,
                                    duration: ANIMATION_CONFIG.duration,
                                    ease: ANIMATION_CONFIG.ease,
                                    clearProps: "transform",
                                });
                            },
                        },
                    }
                );
            });
        }
    }, []);

    return (
        <section id="blogs" className="max-w-[1000px] mx-auto py-[100px] md:py-[150px]">
            {/* ---- Section Heading ---- */}
            <div className="heading flex items-center mt-2.5 mb-10">
                <p className="font-mono text-lg md:text-xl leading-[23px] md:leading-[26px] text-[#64ffda] relative bottom-1 mr-2.5 select-none">
                    03.
                </p>

                <h3 className="font-calibre text-2xl leading-[31px] md:text-[32px] md:leading-[42px] text-[#ccd6f6] font-semibold whitespace-nowrap">
                    Blogs & Articles
                </h3>

                <hr
                    className={`flex-1 ${
                        breakpoint3 ? "max-w-[300px]" : "md:max-w-[200px]"
                    } border-[#2d3952] ${breakpoint2 ? "ml-5" : "ml-2.5"} relative bottom-1`}
                />
            </div>

            {/* ---- Blog Cards Grid ---- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <Link
                        key={blog.id}
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="blog-card group flex flex-col bg-[#112240] hover:bg-[#152747] border border-[#233554]/60 hover:border-[#64ffda]/30 rounded-[4px] overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-lg"
                    >
                        {/* ---- Blog Image with Overlay ---- */}
                        <div
                            className="relative w-full h-[210px] bg-[#64ffda] group-hover:bg-transparent before:absolute before:content-[''] before:w-full before:h-full before:inset-0 before:z-3 before:bg-[#0a192f] before:mix-blend-screen select-none overflow-hidden"
                            style={{
                                transition: "0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
                            }}
                        >
                            <div
                                className="w-full h-full grayscale contrast brightness-90 mix-blend-multiply group-hover:grayscale-0 group-hover:brightness-100 group-hover:mix-blend-normal"
                                style={{
                                    transition: "0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
                                }}
                            >
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover object-center"
                                    width={720}
                                    height={400}
                                />
                            </div>
                        </div>

                        {/* ---- Content ---- */}
                        <div className="p-6 flex flex-col flex-1 justify-between">
                            <div>
                                {/* Meta: Date & Read Time & External Icon */}
                                <div className="flex items-center justify-between mb-3 font-mono text-xs text-[#64ffda]">
                                    <span>
                                        {blog.date} &bull; {blog.readTime}
                                    </span>
                                    <span className="text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors duration-200">
                                        <RedirectIcon />
                                    </span>
                                </div>

                                {/* Title */}
                                <h4
                                    className="font-calibre font-semibold text-xl leading-[26px] text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors duration-200 line-clamp-2 mb-2.5"
                                >
                                    {blog.title}
                                </h4>

                                {/* Description */}
                                <p className="font-calibre text-[#8892b0] text-[15px] leading-[22px] line-clamp-3 mb-4">
                                    {blog.description}
                                </p>
                            </div>

                            {/* Tags & Read Action Cue */}
                            <div className="pt-3 border-t border-[#233554]/50 flex flex-col gap-2.5">
                                <ul className="flex flex-wrap gap-2 font-mono text-[11px] text-[#8892b0]">
                                    {blog.tags.map((tag, idx) => (
                                        <li
                                            key={idx}
                                            className="px-2 py-0.5 rounded bg-[#1d3557]/40 text-[#a8b2d1]"
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>

                                <div className="font-mono text-xs text-[#64ffda] flex items-center gap-1.5 pt-1 group-hover:translate-x-1 transition-transform duration-200">
                                    <span>Read on Medium</span>
                                    <span>&rarr;</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default BlogsSection;