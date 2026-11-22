import { SubmitEventHandler, useState } from "react";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import gsap from "gsap";
import Button from "./Button";

const ContactSection = () => {
    // States
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Extra responsive breakpoints
    const breakpoint1 = useMediaQuery("(min-width: 1001px)");
    const breakpoint2 = useMediaQuery("(max-width: 480px)");

    // Animations
    useGSAP(() => {
        gsap.from("#contact", {
            scrollTrigger: {
                trigger: "#contact",
                start: "top 95%"
            },
            opacity: 0,
            yPercent: 6,
            ease: "power1.inOut",
            delay: 0.35
        })
    }, []);

    // Functions
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        // Static portfolio form submission simulation
        setIsSubmitted(true);
    };

    return (
        <section id="contact" className="flex flex-col items-center max-w-[600px] mx-auto mb-[100px] py-[100px] md:py-[150px] px-4 md:px-0">
            {/* ---- Section Heading ---- */}
            <div>
                <p className={`font-mono ${breakpoint1 ? "text-base leading-[21px]" : "text-sm leading-[18px]"} text-[#64ffda] text-center mt-2.5 mb-5`}>
                    <span className="select-none">03. </span>
                    What&apos;s Next?
                </p>

                <h2 className={`font-calibre font-semibold text-[40px] leading-[52px] ${breakpoint1 ? "text-[60px] leading-[78px]" : "md:text-[50px] md:leading-[65px]"}  text-[#ccd6f6] text-center mb-5`}>Get In Touch</h2>
            </div>

            <p className={`font-calibre ${breakpoint2 ? "text-lg leading-[23px]" : "text-xl leading-[26px]"} text-[#8892b0] text-center mb-[40px] max-w-[500px]`}>
                Have a question or just want to say hi? Feel free to reach out and connect!
            </p>

            {isSubmitted ? (
                <div className="w-full max-w-[500px] p-8 bg-[#112240] border border-[#64ffda]/30 rounded-[4px] text-center">
                    <p className="font-mono text-[#64ffda] text-base mb-2">Message Sent!</p>
                    <p className="font-calibre text-[#8892b0] text-lg">Thank you for reaching out. I will get back to you soon.</p>
                    <button
                        onClick={() => {
                            setIsSubmitted(false);
                            setFormData({ name: "", email: "", message: "" });
                        }}
                        className="mt-6 text-sm font-mono text-[#64ffda] underline cursor-pointer hover:text-[#64ffda]/80"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="w-full max-w-[500px] flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="font-mono text-xs text-[#64ffda] tracking-wide">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="bg-[#112240] border border-[#233554] focus:border-[#64ffda] text-[#ccd6f6] placeholder-[#8892b0]/50 rounded-[4px] px-4 py-3 font-calibre text-base outline-none transition-colors duration-200"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-mono text-xs text-[#64ffda] tracking-wide">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            className="bg-[#112240] border border-[#233554] focus:border-[#64ffda] text-[#ccd6f6] placeholder-[#8892b0]/50 rounded-[4px] px-4 py-3 font-calibre text-base outline-none transition-colors duration-200"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="font-mono text-xs text-[#64ffda] tracking-wide">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message here..."
                            className="bg-[#112240] border border-[#233554] focus:border-[#64ffda] text-[#ccd6f6] placeholder-[#8892b0]/50 rounded-[4px] px-4 py-3 font-calibre text-base outline-none resize-none transition-colors duration-200"
                        />
                    </div>

                    <div className="flex justify-center mt-[20px]">
                        <Button value="Send Message" />
                    </div>
                </form>
            )}
        </section>
    )
}

export default ContactSection;