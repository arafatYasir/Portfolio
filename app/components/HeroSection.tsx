import Link from "next/link";
import { useMediaQuery } from "../hooks/useMediaQuery";
import Button from "./Button";

const HeroSection = () => {
    // Extra responsive breakpoints
    const breakpoint1 = useMediaQuery("(min-width: 377px)");
    const breakpoint2 = useMediaQuery("(min-width: 481px)");

    return (
        <section id="hero" className="flex items-center justify-center min-h-screen max-w-[1000px] mx-[clamp(0px,calc((100vw-1300px)/2),150px)] pt-[150px] pb-[100px] md:py-[150px]">
            <div>
                <p id="hero-greetings" className="font-mono text-[13px] leading-[17px] md:text-sm md:leading-[18px] lg:text-base lg:leading-[21px] text-[#64ffda] mb-5 ml-[3px]">Hi, my name is</p>

                <h1 id="hero-name" className={`font-calibre text-[40px] leading-[44px] ${breakpoint1 && "text-[50px] leading-[55px]"} ${breakpoint2 && "text-[60px] leading-[66px]"} md:text-[70px] md:leading-[77px] lg:text-[80px] lg:leading-[88px] font-semibold text-[#ccd6f6]`}>
                    Yasir Arafat.
                </h1>

                <h2 id="hero-profession" className={`font-calibre text-[40px] leading-[44px] ${breakpoint1 && "text-[50px] leading-[55px]"} ${breakpoint2 && "text-[60px] leading-[66px]"} md:text-[70px] md:leading-[77px] lg:text-[80px] lg:leading-[88px] font-semibold text-[#8892b0] mb-2.5`}>
                    MERN Stack Developer & Competitive Programmer
                </h2>

                <p id="hero-description" className={`max-w-[500px] mt-[25px] mb-[15px] font-calibre text-lg leading-[23px] ${breakpoint2 && "text-xl leading-[26px]"} text-[#8892b0] text-justify`}>
                    I came for cyber security and stayed for the web development. Now I build MERN stack web applications and have solved 500+ problems across different problem solving platforms. I&apos;m Based in Bangladesh, looking for remote opportunities.
                </p>

                <div id="hero-button" className="mt-[50px]">
                    <Link
                        href="/resume/YasirArafat_Frontend_Developer_Resume.pdf"
                        target="_blank"
                        className="cursor-pointer"
                    >
                        <Button value="View My Resume" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSection