import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FloatingTeaCup from "./components/FloatingTeaCup";
import TeaMoodStory from "./components/TeaMoodStory";
import TeaCategoryShowcase from "./components/TeaCategoryShowcase";
import TeaVarietyGrid from "./components/TeaVarietyGrid";
import FoodShowcase from "./components/FoodShowcase";
import WhyTeaMood from "./components/WhyTeaMood";
import CafeLocation from "./components/CafeLocation";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const pageRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: 70,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray("[data-parallax]").forEach((element) => {
        const amount = Number(element.dataset.parallax || 60);

        gsap.fromTo(
          element,
          { yPercent: -amount / 10 },
          {
            yPercent: amount / 10,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    }, pageRef);

    const refresh = () => ScrollTrigger.refresh();

    window.addEventListener("load", refresh);
    const timer = window.setTimeout(refresh, 500);

    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(timer);
      context.revert();
    };
  }, []);

  return (
    <div ref={pageRef} className="site-shell">
      <Navbar />
      <main>
        <HeroSection />
        <TeaMoodStory />
        <TeaCategoryShowcase />
        <TeaVarietyGrid />
        <FoodShowcase />
        <WhyTeaMood />
        <CafeLocation />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingTeaCup />
    </div>
  );
}

export default App;