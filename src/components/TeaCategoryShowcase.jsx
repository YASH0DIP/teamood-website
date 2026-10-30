import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, MoveRight } from "lucide-react";
import { teaCategories } from "../hooks/data";
import useReducedMotion from "../hooks/useReducedMotion";

export default function TeaCategoryShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const touchStartRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const active = teaCategories[activeIndex];

  const goTo = (index) => {
    const total = teaCategories.length;
    setActiveIndex((index + total) % total);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      const rect = sectionRef.current?.getBoundingClientRect();

      if (!rect) return;

      const visible =
        rect.top < window.innerHeight * 0.55 &&
        rect.bottom > window.innerHeight * 0.45;

      if (!visible) return;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goTo(activeIndex + 1);
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goTo(activeIndex - 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  const onTouchStart = (event) => {
    touchStartRef.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event) => {
    if (touchStartRef.current === null) return;

    const distance = event.changedTouches[0].clientX - touchStartRef.current;

    if (Math.abs(distance) > 48) {
      goTo(activeIndex + (distance < 0 ? 1 : -1));
    }

    touchStartRef.current = null;
  };

  return (
    <section
      ref={sectionRef}
      id="teas"
      className="category-showcase"
      style={{
        "--category-bg": active.background,
        "--category-fg": active.foreground,
        "--category-accent": active.accent,
        "--category-liquid": active.liquid,
        "--category-cup": active.cupColor,
        "--category-steam": active.steam,
      }}
    >
      <div className="category-showcase__texture" aria-hidden="true" />

      <div className="category-showcase__inner page-width">
        <div className="category-copy" key={`copy-${active.id}`}>
          <div className="category-copy__topline">
            <span>{active.number}</span>
            <span>{active.label}</span>
          </div>

          <h2>{active.title}</h2>

          <p className="category-copy__description">{active.description}</p>

          <div className="category-copy__flavour">
            <span>TASTE NOTES</span>
            <strong>{active.flavour}</strong>
          </div>

          <a className="category-copy__link" href="#tea-varieties">
            Explore this category
            <MoveRight size={20} />
          </a>
        </div>

        <div className="category-ingredients" key={`ingredients-${active.id}`}>
          {active.ingredients.map((ingredient, index) => (
            <div
              className={`ingredient ingredient--${index + 1}`}
              key={ingredient}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{ingredient}</strong>
            </div>
          ))}
        </div>

        <div className="category-controls" aria-label="Tea category controls">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous tea category"
          >
            <ArrowLeft size={22} />
          </button>

          <div className="category-controls__count">
            <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
            <span />
            <small>{String(teaCategories.length).padStart(2, "0")}</small>
          </div>

          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Next tea category"
          >
            <ArrowRight size={22} />
          </button>
        </div>

        <div className="category-progress" aria-hidden="true">
          {teaCategories.map((category, index) => (
            <span
              key={category.id}
              className={index === activeIndex ? "is-active" : ""}
            />
          ))}
        </div>
      </div>

      <div
        className="category-showcase__swipe"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      />
    </section>
  );
}