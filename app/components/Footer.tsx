import GitHubIcon from "../icons/GitHubIcon"
import LinkedInIcon from "../icons/LinkedInIcon"
import MediumIcon from "../icons/MediumIcon"
import LeetCodeIcon from "../icons/LeetCodeIcon"
import CodeforcesIcon from "../icons/CodeforcesIcon"
import { useMediaQuery } from "../hooks/useMediaQuery"
import { socials } from "@/lib/constants"
import Link from "next/link"

const Footer = () => {
    // Extra responsive breakpoint
    const breakpoint1 = useMediaQuery("(max-width: 610px)");

    return (
        <footer className="bg-[#020c1b] w-full min-h-[70px] p-[15px] flex items-center flex-col md:flex-row">
            {/* ---- Social Icons ---- */}
            <ul className="md:hidden flex items-center justify-between w-full max-w-[270px] mb-5">
                {
                    socials.map((social) => {
                        const Icon = social.icon;
                        return (
                            <li
                                key={social.id}
                                className=""
                            >
                                <a
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#a8b2d1] hover:text-[#64ffda] block hover:translate-y-[-3px] p-2.5"
                                    style={{
                                        transition: "0.25s cubic-bezier(0.645, 0.045, 0.355, 1)"
                                    }}
                                >
                                    <Icon
                                        width={social.link.includes("leetcode") ? 24 : 20}
                                        height={social.link.includes("leetcode") ? 24 : 20} 
                                    />
                                </a>
                            </li>
                        )
                    })
                }
            </ul>

            {/* ---- Footer Text ---- */}
            <div className={`flex ${breakpoint1 ? "flex-col gap-y-3" : "flex-wrap gap-y-5"} justify-center items-center gap-x-8 sm:gap-x-10 w-full mx-auto max-w-[750px] lg:max-w-full`}>
                <div>
                    <p className="font-mono text-[13px] leading-[17px] text-[#8892b0]">
                        Design Inspired by:&nbsp;
                        <Link
                            href="https://github.com/bchiang7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="active:bg-[#226185] active:text-[#64ffda] hover:text-[#64ffda] font-bold"
                            style={{
                                transition: "0.25s cubic-bezier(0.645, 0.045, 0.355, 1)"
                            }}
                        >
                            Brittany Chiang
                        </Link>
                    </p>
                </div>

                <div className={`w-[2px] h-6 bg-[#8892b0] ${breakpoint1 ? "hidden" : "block"}`}></div>

                <div>
                    <p className="font-mono text-[13px] text-[#8892b0] leading-[17px]">
                        Built by:&nbsp;
                        <Link
                            href="https://github.com/arafatYasir"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="active:bg-[#226185] active:text-[#64ffda] hover:text-[#64ffda] font-bold"
                            style={{
                                transition: "0.25s cubic-bezier(0.645, 0.045, 0.355, 1)"
                            }}
                        >
                            Yasir Arafat
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer