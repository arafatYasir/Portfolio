import { socials } from "@/lib/constants"
import Link from "next/link";

const SocialLinks = () => {
    return (
        <div
            id="social-links"
            className="hidden md:flex flex-col items-center gap-y-5 fixed bottom-0 left-[40px]"
        >
            {/* ---- Social Icons ---- */}
            <ul className="flex flex-col items-center">
                {
                    socials.map((social) => {
                        const Icon = social.icon;

                        return (
                            <li
                                key={social.id}
                                className=""
                            >
                                <Link
                                    href={social.link}
                                    target="_blank"
                                    className="text-[#a8b2d1] hover:text-[#64ffda] block hover:translate-y-[-3px] p-3.5"
                                    style={{
                                        transition: "0.25s cubic-bezier(0.645, 0.045, 0.355, 1)"
                                    }}
                                    rel="noopener noreferrer"
                                >
                                    <Icon />
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>

            {/* ---- Vertical Line ---- */}
            <div className="h-[90px] w-[1px] bg-[#a8b2d1]"></div>
        </div>
    )
}

export default SocialLinks