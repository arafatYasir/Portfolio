"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import MobileNavbar from "./components/navbar/MobileNavbar";
import { useMediaQuery } from "./hooks/useMediaQuery";
import HeroSection from "./components/HeroSection";
import SocialLinks from "./components/SocialLinks";
import FixedEmail from "./components/FixedEmail";
import LoadingUI from "./components/LoadingUI"
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import OtherProjectsSection from "./components/OtherProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const Home = () => {
  // States
  const [isLoadingUI, setIsLoadingUI] = useState(true);

  // Hooks
  const prevScrollValue = useRef(0);

  // Extra responsive breakpoint
  const breakpoint1 = useMediaQuery("(min-width: 481px)");
  const breakpoint2 = useMediaQuery("(min-width: 1001px)");

  // Functions
  const handleScrollTo = (sectionId: string) => {
    const targetSection = document.getElementById(sectionId);

    // Checking if the targeted section exists or not
    if (!targetSection) {
      console.error(`The section with id: ${sectionId} couldn't found!`);
      return;
    }

    // Current scroll positoin
    const currentScroll = window.scrollY;

    // Targeted sections top value
    const targetPosition = targetSection.getBoundingClientRect().top;

    // Target scroll position
    const targetScroll = currentScroll + targetPosition;

    // The actual scroll distance from current scroll to target scroll
    const scrollDistance = Math.abs(targetScroll - currentScroll);

    // Calculating dynamic duration based on scroll distance
    const baseDuration = 0.5;
    const duration = scrollDistance > 500 ? baseDuration + (scrollDistance - 800) / 2000 : baseDuration;

    // Scrolling to that section
    gsap.to(window, {
      scrollTo: targetSection,
      duration: duration,
      ease: "power3.inOut",
    });
  }

  // Animating the navbar + hero + fixed social icons & email
  useGSAP(() => {
    // Delaying 3.3 secods to wait for the loading to be completed
    const firstTimeline = gsap.timeline({
      delay: 3.4
    });

    firstTimeline
      // Logo
      .from("#logo", {
        opacity: 0,
        ease: "sine.inOut",
        duration: 1
      })
      // Nav Options
      .from("#nav-item", {
        opacity: 0,
        yPercent: -100,
        duration: 0.25,
        ease: "cubic-bezier(0.645, 0.045, 0.355, 1)",
        stagger: 0.15,
      }, "-=1")
      // Hero section
      .from("#hero-greetings", {
        opacity: 0,
        yPercent: 20,
        ease: "power4.inOut",
      })
      .from("#hero-name", {
        opacity: 0,
        yPercent: 17,
        ease: "power4.inOut",
        duration: 1
      }, "-=0.3")
      .from("#hero-profession", {
        opacity: 0,
        yPercent: 17,
        ease: "power4.inOut",
        duration: 0.5
      }, "-=0.75")
      .from("#hero-description", {
        opacity: 0,
        yPercent: 17,
        ease: "power4.inOut",
        duration: 0.5
      }, "-=0.7")
      .from("#hero-button", {
        opacity: 0,
        yPercent: 17,
        ease: "power4.inOut",
        duration: 0.5
      }, "-=0.7")
      // Social Links
      .from("#social-links", {
        opacity: 0,
        ease: "sine.inOut",
        duration: 1
      }, "-=0.3")
      // Fixed Email
      .from("#fixed-email", {
        opacity: 0,
        ease: "sine.inOut",
        duration: 1
      }, "-=1")
  }, []);

  // Disabling scroll when loading screen is appearing and re-enabling it when loading is done
  useEffect(() => {
    const body = document.querySelector("body")!;

    if (isLoadingUI) {
      body.style.overflow = "hidden";
    }
    else {
      body.style.overflow = "unset";
    }
  }, [isLoadingUI]);

  // Scroll to the top of the page on first render
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      {/* ---- Loading Screen ---- */}
      {
        isLoadingUI && <LoadingUI onAnimationComplete={() => setIsLoadingUI(false)} />
      }

      {/* ---- Header Part ---- */}
      <header>
        <Navbar handleScrollTo={handleScrollTo} prevScrollValue={prevScrollValue} />
        <MobileNavbar handleScrollTo={handleScrollTo} />
      </header>

      {/* ---- Main Part ---- */}
      <main className={`max-w-[1600px] mx-auto ${breakpoint1 ? "px-[50px]" : "px-[25px]"} ${breakpoint2 ? "px-[150px]" : "md:px-[100px]"}`}>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <OtherProjectsSection />
        <ContactSection />
      </main>

      {/* ---- Footer Part ---- */}
      <Footer />

      {/* ---- Fixed Social Links ---- */}
      <SocialLinks />

      {/* ---- Fixed Email ---- */}
      <FixedEmail />
    </>
  )
}

export default Home