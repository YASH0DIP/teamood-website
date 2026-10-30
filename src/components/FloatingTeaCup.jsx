import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useReducedMotion from "../hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export default function FloatingTeaCup() {
  const wrapperRef = useRef(null);
  const cupRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!wrapperRef.current || !cupRef.current) return;

    const wrapper = wrapperRef.current;
    const cup = cupRef.current;

    const context = gsap.context(() => {
      gsap.fromTo(
        wrapper,
        {
          xPercent: 52,
          yPercent: 58,
          scale: 0.68,
          opacity: 0,
          rotate: 16,
        },
        {
          xPercent: 0,
          yPercent: 0,
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: reducedMotion ? 0.01 : 1.8,
          delay: reducedMotion ? 0 : 0.35,
          ease: "power4.out",
        },
      );

      if (!reducedMotion) {
        gsap.to(cup, {
          y: -13,
          rotateZ: 1.5,
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(".tea-cup__steam", {
          y: -14,
          opacity: 0.15,
          scaleX: 1.18,
          duration: 2.1,
          repeat: -1,
          yoyo: true,
          stagger: 0.45,
          ease: "sine.inOut",
        });

        gsap.to(".tea-cup__orbit", {
          rotate: 360,
          duration: 18,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#our-story",
          start: "top bottom",
          endTrigger: "#teas",
          end: "top bottom",
          scrub: reducedMotion ? 0.01 : 1,
        },
      });

      timeline
        .to(
          wrapper,
          {
            x: () => window.innerWidth * 0.08,
            y: () => window.innerHeight * 0.1,
            rotation: -7,
            scale: 0.92,
            ease: "none",
          },
          0,
        )
        .to(
          wrapper,
          {
            x: () => -window.innerWidth * 0.25,
            y: () => window.innerHeight * 0.2,
            rotation: 7,
            scale: 0.88,
            ease: "none",
          },
          0.45,
        )
        .to(
          wrapper,
          {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            ease: "none",
          },
          1,
        );

      gsap.to(wrapper, {
        xPercent: -14,
        yPercent: 45,
        scale: 0.72,
        rotation: -10,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: "#teas",
          start: "bottom 85%",
          end: "#teas-end",
          scrub: reducedMotion ? 0.01 : 1,
        },
      });

      gsap.to(wrapper, {
        yPercent: -20,
        rotation: 12,
        ease: "none",
        scrollTrigger: {
          trigger: "#final-cta",
          start: "top bottom",
          end: "bottom bottom",
          scrub: reducedMotion ? 0.01 : 1,
        },
      });
    }, wrapper);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      context.revert();
    };
  }, [reducedMotion]);

  return (
    <div
      ref={wrapperRef}
      className="floating-cup"
      aria-hidden="true"
      style={{ opacity: reducedMotion ? 1 : undefined }}
    >
      <div className="floating-cup__shadow" />

      <div ref={cupRef} className="tea-cup">
        <div className="tea-cup__orbit">
          <span />
          <span />
          <span />
        </div>

        <div className="tea-cup__steam tea-cup__steam--one" />
        <div className="tea-cup__steam tea-cup__steam--two" />
        <div className="tea-cup__steam tea-cup__steam--three" />

        <div className="tea-cup__handle">
          <span />
        </div>

        <div className="tea-cup__body">
          <div className="tea-cup__rim">
            <div className="tea-cup__liquid">
              <span className="tea-cup__foam tea-cup__foam--one" />
              <span className="tea-cup__foam tea-cup__foam--two" />
            </div>
          </div>

          <div className="tea-cup__shine" />

          <div className="tea-cup__logo">
            <span>TEA</span>
            <strong>MOOD</strong>
          </div>
        </div>

        <div className="tea-cup__saucer" />
      </div>
    </div>
  );
}