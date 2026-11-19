"use client";

import { useRef } from "react";
import Navbar from "./components/navbar/Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const Home = () => {
  // Hooks
  const prevScrollValue = useRef(0);

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

  return (
    <>
      {/* ---- Header Part ---- */}
      <header>
        <Navbar handleScrollTo={handleScrollTo} prevScrollValue={prevScrollValue} />
      </header>
    </>
  )
}

export default Home