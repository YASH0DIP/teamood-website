import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { instagramUrl } from "../hooks/navigation";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero__wash" aria-hidden="true" />

      <div className="hero__leaves hero__leaves--one" aria-hidden="true" />
      <div className="hero__leaves hero__leaves--two" aria-hidden="true" />

      <div className="hero__content page-width">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">Kota’s tea destination</p>

          <h1 className="hero__title">
            <span>EVERY MOOD</span>
            <span>NEEDS A LITTLE</span>
            <span className="hero__title-accent">CHAI.</span>
          </h1>

          <p className="hero__description">
            From your morning kickstart to those endless conversations, there’s
            always a perfect cup waiting for you.
          </p>

          <div className="hero__buttons">
            <a className="button button--dark" href="#teas">
              Explore our teas
              <ArrowUpRight size={18} />
            </a>

            <a className="button button--ghost" href="#visit">
              <MapPin size={18} />
              Visit our café
            </a>
          </div>

          <div className="hero__proof">
            <span>15+ tea varieties</span>
            <i />
            <span>Starting at just ₹10</span>
          </div>
        </div>

        <div className="hero__cup-space" aria-hidden="true" />

        <aside className="hero__note hero__note--top">
          <span>Brewed with feeling</span>
          <strong>01</strong>
        </aside>

        <aside className="hero__note hero__note--bottom">
          <span>Best of chai</span>
          <strong>Best of food</strong>
        </aside>
      </div>

      <div className="hero__bottom page-width">
        <p>When your MOOD says, then TEA MOOD is in your ways.</p>

        <a href="#our-story" className="scroll-cue">
          <span>Scroll to explore</span>
          <ArrowDown size={17} />
        </a>

        <a href={instagramUrl} target="_blank" rel="noreferrer">
          @teamoodofficial
        </a>
      </div>
    </section>
  );
}