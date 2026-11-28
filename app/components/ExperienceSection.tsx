import { experiences } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "../hooks/useMediaQuery";

const ExperienceSection = () => {
    // Extra responsive breakpoints
    const breakpoint1 = useMediaQuery("(min-width: 481px)");
    const breakpoint2 = useMediaQuery("(min-width: 601px)");
    const breakpoint3 = useMediaQuery("(min-width: 1001px)");

    // GSAP
    useGSAP(() => {
        gsap.from("#experience", {
            scrollTrigger: {
                trigger: "#experience",
                start: "top 95%",
                once: true,
            },
            opacity: 0,
            yPercent: 5,
            ease: "power1.inOut",
            delay: 0.35,
            clearProps: "transform",
        });

        gsap.utils.toArray<Element>("#experience .experience-item").forEach((item, index) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 92%",
                    once: true,
                },
                opacity: 0,
                y: 20,
                duration: 0.5,
                delay: 0.15 + index * 0.1,
                ease: "power2.out",
                clearProps: "transform",
            });
        });
    }, []);

    return (
        <section id="experience" className="max-w-[1000px] mx-auto py-[100px] md:py-[150px]">
            {/* ---- Section Heading ---- */}
            <div className="flex items-center mt-2.5 mb-12">
                <p className="font-mono text-lg md:text-xl leading-[23px] md:leading-[26px] text-[#64ffda] relative bottom-1 mr-2.5 select-none">
                    02.
                </p>

                <h3 className="font-calibre text-2xl leading-[31px] md:text-[32px] md:leading-[42px] text-[#ccd6f6] font-semibold whitespace-nowrap">
                    My Experience
                </h3>

                <hr
                    className={`flex-1 ${
                        breakpoint3 ? "max-w-[300px]" : "md:max-w-[200px]"
                    } border-[#2d3952] ${breakpoint2 ? "ml-5" : "ml-2.5"} relative bottom-1`}
                />
            </div>

            {/* ---- Experience Timeline ---- */}
            <div className="relative flex flex-col gap-y-12">
                {experiences.map((exp, index) => {
                    const isLast = index === experiences.length - 1;

                    return (
                        <article
                            key={exp.id}
                            className="experience-item relative grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-y-4 lg:gap-x-10"
                        >
                            {/* ---- Left Rail: Date & Location ---- */}
                            <div className="relative pl-7 lg:pl-0 lg:pr-6 lg:text-right">
                                {/* Timeline Node */}
                                <span
                                    aria-hidden="true"
                                    className="absolute left-0 lg:left-auto lg:-right-[5px] top-[6px] w-[10px] h-[10px] rounded-full bg-[#0a192f] border-2 border-[#64ffda] z-10"
                                />

                                {/* Vertical Connector Line */}
                                {!isLast && (
                                    <span
                                        aria-hidden="true"
                                        className="absolute left-[4px] lg:left-auto lg:right-[-1px] top-[18px] bottom-[-48px] w-[2px] bg-[#233554]"
                                    />
                                )}
                                {isLast && (
                                    <span
                                        aria-hidden="true"
                                        className="hidden lg:block absolute right-[-1px] top-[18px] bottom-2 w-[1px] bg-gradient-to-b from-[#233554] to-transparent"
                                    />
                                )}

                                <p className="font-mono text-[13px] leading-[20px] text-[#ccd6f6]">
                                    {exp.startingDate} &mdash; {exp.endingDate}
                                </p>

                                <p className="font-mono text-xs leading-[18px] text-[#8892b0] mt-1">
                                    {exp.employmentType} &mdash; {exp.location}
                                </p>
                            </div>

                            {/* ---- Right Column: Role, Summary, Highlights & Stack ---- */}
                            <div className="pl-7 lg:pl-0 max-w-[680px]">
                                {/* Role & Employment Type */}
                                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                                    <h4 className="font-calibre font-semibold text-[22px] leading-[28px] lg:text-2xl lg:leading-[31px] text-[#ccd6f6]">
                                        {exp.title}
                                    </h4>
                                </div>

                                {/* Intro */}
                                <p
                                    className={`font-calibre ${
                                        breakpoint1 ? "text-[19px] leading-[27px]" : "text-lg leading-[25px]"
                                    } text-[#a8b2d1] mb-5`}
                                >
                                    {exp.description.intro}
                                </p>

                                {/* Key Contributions */}
                                <ul className="flex flex-col gap-y-3 mb-6">
                                    {exp.description.points.map((point, idx) => (
                                        <li
                                            key={idx}
                                            className={`font-calibre ${
                                                breakpoint1 ? "text-lg leading-[25px]" : "text-[17px] leading-[23px]"
                                            } text-[#8892b0] pl-5 relative before:content-['▹'] before:absolute before:left-0 before:top-[2px] before:text-[#64ffda] before:text-sm before:leading-[18px]`}
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech Stack */}
                                <ul
                                    aria-label="Technologies used"
                                    className="flex flex-wrap gap-2 pt-4 border-t border-[#233554]/60"
                                >
                                    {exp.techStack.map((tech, idx) => (
                                        <li
                                            key={idx}
                                            className="font-mono text-xs leading-[16px] text-[#a8b2d1] bg-[#112240] border border-[#233554] px-2.5 py-1 rounded-[3px] hover:text-[#64ffda] transition-colors duration-250"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default ExperienceSection;
