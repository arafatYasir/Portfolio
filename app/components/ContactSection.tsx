import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import gsap from "gsap";
import Button from "./Button";

const ACCESS_KEY = process.env.NEXT_PUBLIC_FORM_KEY!;

const ContactSection = () => {
    // States
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Extra responsive breakpoints
    const breakpoint1 = useMediaQuery("(min-width: 1001px)");
    const breakpoint2 = useMediaQuery("(max-width: 480px)");

    useGSAP(() => {
        gsap.from("#contact", {
            scrollTrigger: {
                trigger: "#contact",
                start: "top 90%"
            },
            opacity: 0,
            yPercent: 6,
            ease: "power1.inOut",
            delay: 0.35
        })
    }, []);

    const validateForm = (data: { name: string; email: string; message: string }) => {
        const errors = { name: "", email: "", message: "" };

        if (!data.name.trim()) {
            errors.name = "Name is required";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.trim()) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(data.email)) {
            errors.email = "Please enter a valid email address";
        }

        if (!data.message.trim()) {
            errors.message = "Message is required";
        }

        return errors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm(formData);
        setErrors(validationErrors);

        const hasErrors = Object.values(validationErrors).some((err) => err !== "");
        if (hasErrors) {
            return;
        }

        // Send a mail via Web3Forms
        try {
            setLoading(true);

            const fData = new FormData(e.target);
            fData.append("access_key", ACCESS_KEY);

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: fData
            });

            const data = await res.json();

            if (data.success) {
                setIsSubmitted(true);
                setFormData({
                    name: "", email: "", message: ""
                });
            } else {
                setErrors((prev) => ({ ...prev, message: "Failed to send message!" }));
            }
        } catch (e) {
            setErrors((prev) => ({ ...prev, message: "Failed to send message!" }));
            console.log("Message sending error:", e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="flex flex-col items-center max-w-[650px] mx-auto mb-[100px] py-[100px] md:py-[150px]">
            {/* ---- Section Heading ---- */}
            <div>
                <p className={`font-mono ${breakpoint1 ? "text-base leading-[21px]" : "text-sm leading-[18px]"} text-[#64ffda] text-center mt-2.5 mb-5`}>
                    <span className="select-none">05. </span>
                    What&apos;s Next?
                </p>

                <h2 className={`font-calibre font-semibold text-[40px] leading-[52px] ${breakpoint1 ? "text-[60px] leading-[78px]" : "md:text-[50px] md:leading-[65px]"}  text-[#ccd6f6] text-center mb-5`}>Get In Touch</h2>
            </div>

            {/* ---- Sub-heading / Paragraph ---- */}
            <p className={`font-calibre ${breakpoint2 ? "text-lg leading-[23px]" : "text-xl leading-[26px]"} text-[#8892b0] text-center mb-[40px] max-w-[500px]`}>
                Have a question or just want to say hi? Feel free to reach out and connect!
            </p>

            {/* ---- Enclosed Card Container ---- */}
            <div className="w-full bg-[#112240]/60 border border-[#233554] rounded-[6px] p-4 sm:p-6 md:p-10 shadow-xl">
                {/* ---- Status & Response Note Header ---- */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-[#233554]">
                    <div className="flex items-center gap-2 font-mono text-xs text-[#64ffda] bg-[#64ffda]/10 px-3 py-1.5 rounded-full border border-[#64ffda]/20">
                        <span className="w-2 h-2 rounded-full bg-[#64ffda] animate-pulse" />
                        Available for new opportunities
                    </div>
                    <div className="font-mono text-xs text-[#8892b0] bg-[#172a45] px-3 py-1.5 rounded-full border border-white/20">
                        I typically reply in 24 hours
                    </div>
                </div>

                {isSubmitted ? (
                    <div className="py-10 text-center">
                        <p className="font-mono text-[#64ffda] text-lg mb-3">Message Sent Successfully!</p>
                        <p className="font-calibre text-[#8892b0] text-base mb-6">Thank you for reaching out. I will get back to you soon.</p>
                        <button
                            onClick={() => {
                                setIsSubmitted(false);
                                setFormData({ name: "", email: "", message: "" });
                            }}
                            className="text-sm font-mono text-[#64ffda] underline cursor-pointer hover:text-[#64ffda]/80 transition-colors"
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="font-mono text-xs text-[#64ffda] tracking-wide">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className={`bg-[#0a192f] border ${errors.name ? "border-[#ff6b6b]" : "border-[#233554]"} focus:border-[#64ffda] text-[#ccd6f6] placeholder-[#8892b0]/50 rounded-[4px] px-4 py-3 font-calibre text-base outline-none transition-colors duration-200`}
                            />
                            {errors.name && (
                                <p className="font-mono text-xs text-[#ff6b6b] mt-1 flex items-center gap-1.5">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-mono text-xs text-[#64ffda] tracking-wide">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your.email@example.com"
                                className={`bg-[#0a192f] border ${errors.email ? "border-[#ff6b6b]" : "border-[#233554]"} focus:border-[#64ffda] text-[#ccd6f6] placeholder-[#8892b0]/50 rounded-[4px] px-4 py-3 font-calibre text-base outline-none transition-colors duration-200`}
                            />
                            {errors.email && (
                                <p className="font-mono text-xs text-[#ff6b6b] mt-1 flex items-center gap-1.5">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="font-mono text-xs text-[#64ffda] tracking-wide">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message here..."
                                className={`bg-[#0a192f] border ${errors.message ? "border-[#ff6b6b]" : "border-[#233554]"} focus:border-[#64ffda] text-[#ccd6f6] placeholder-[#8892b0]/50 rounded-[4px] px-4 py-3 font-calibre text-base outline-none resize-none transition-colors duration-200`}
                            />
                            {errors.message && (
                                <p className="font-mono text-xs text-[#ff6b6b] mt-1 flex items-center gap-1.5">
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <div className="flex justify-center mt-4">
                            <Button value={loading ? "Sending..." : "Send Message"} disabled={loading} />
                        </div>
                    </form>
                )}
            </div>
        </section>
    )
}

export default ContactSection;
