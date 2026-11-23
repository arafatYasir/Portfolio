import { skills } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "../hooks/useMediaQuery";

const AboutSection = () => {
    // Extra responsive breakpoints
    const breakpoint1 = useMediaQuery("(min-width: 481px)");
    const breakpoint2 = useMediaQuery("(min-width: 601px)");
    const breakpoint3 = useMediaQuery("(min-width: 1001px)");

    // GSAP
    useGSAP(() => {
        gsap.from("#about", {
            scrollTrigger: {
                trigger: "#about",
                start: "top 95%"
            },
            opacity: 0,
            yPercent: 5,
            ease: "power1.inOut",
            delay: 0.35
        })
    }, []);

    return (
        <section id="about" className="max-w-[1000px] mx-auto py-[100px] md:py-[150px]">
            {/* ---- Section Heading ---- */}
            <div className="flex items-center mt-2.5 mb-10">
                <p className="font-mono text-lg md:text-xl leading-[23px] md:leading-[26px] text-[#64ffda] relative bottom-1 mr-2.5 select-none">01.</p>

                <h3 className="font-calibre text-2xl leading-[31px] md:text-[32px] md:leading-[42px] text-[#ccd6f6] font-semibold">About Me</h3>

                <hr className={`flex-1 ${breakpoint3 ? "max-w-[300px]" : "md:max-w-[200px]"} border-[#2d3952] ${breakpoint2 ? "ml-5" : "ml-2.5"} relative bottom-1`} />
            </div>

            {/* ---- Main Content Wrapper ---- */}
            <div className="flex flex-col gap-y-[60px] md:flex-row justify-between md:gap-x-[60px]">
                {/* ---- Info Part ---- */}
                <div className="md:w-[60%]">
                    <p className={`font-calibre ${breakpoint1 ? "text-xl leading-[26px]" : "text-lg leading-[23px]"} text-[#8892b0] mb-[15px] text-justify`}>
                        I started out curious about cyber security, but programming pulled me in harder. Web development won me over because I could write code and see the result right away, which is still the best feeling.
                    </p>

                    <p className={`font-calibre ${breakpoint1 ? "text-xl leading-[26px]" : "text-lg leading-[23px]"} text-[#8892b0] mb-[15px] text-justify`}>
                        Today I build full-stack web applications with the MERN stack and practice competitive programming on LeetCode, Codeforces and other platforms. I&apos;m still new to the industry, but I&apos;m curious, consistent, and looking for a remote team where I can contribute & grow.
                    </p>

                    <p className={`font-calibre ${breakpoint1 ? "text-xl leading-[26px]" : "text-lg leading-[23px]"} text-[#8892b0] mb-[15px] text-justify`}>Here&apos;s what&apos;s in my developer toolbox, from MERN stack essentials to the C++ I use for competitive programming.</p>

                    {/* ---- Skills List ---- */}
                    <ul style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, minmax(140px, 200px)"
                    }}>
                        {
                            skills.map((skill, index) => (
                                <li
                                    key={index}
                                    className="font-mono text-[13px] leading-[17px] text-[#8892b0] mb-[10px] pl-5 relative before:content-['▹'] before:absolute before:left-0 before:text-[#64ffda] before:text-sm before:leading-[12px]"
                                >
                                    {skill}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* ---- Image Part ---- */}
                <div className={`w-[75%] h-[75%] max-w-[280px] max-h-[280px] md:w-[40%] md:h-[40%] md:max-w-[320px] md:max-h-[320px] relative mx-auto md:mx-0 group`}>
                    <div
                        className={`w-full h-full max-w-[320px] max-h-[320px] rounded-[5px] bg-[#64ffda] transition relative -left-5`}
                    >
                        <Link
                            href="https://github.com/arafatYasir"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mix-blend-multiply grayscale contrast-100 hover:grayscale-0 hover:mix-blend-normal"
                            style={{
                                transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)"
                            }}
                        >
                            <Image
                                src="/images/Yasir_Arafat.jpg"
                                alt="Profile Picture of Yasir Arafat"
                                loading="lazy"
                                className="size-full"
                                width={500}
                                height={500}
                            />
                        </Link>
                    </div>

                    <div
                        className={`w-full h-full max-w-[320px] max-h-[320px] border-2 border-[#64ffda] rounded-[3px] absolute top-5 left-0 z-[-1] group group-hover:top-3 group-hover:-left-2`}
                        style={{
                            transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)"
                        }}
                    >
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection