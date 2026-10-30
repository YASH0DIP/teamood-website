import { ArrowUpRight, MapPin } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="final-cta" id="final-cta">
      <div className="final-cta__glow" aria-hidden="true" />

      <div className="page-width final-cta__content">
        <p className="eyebrow" data-reveal>
          There’s always a cup for you
        </p>

        <h2 data-reveal>
          WHATEVER YOUR MOOD,
          <br />
          <span>THERE’S A CHAI FOR THAT.</span>
        </h2>

        <p data-reveal>
          Drop by Tea Mood and turn an ordinary moment into your favourite tea
          moment.
        </p>

        <div className="final-cta__buttons" data-reveal>
          <a className="button button--cream" href="#visit">
            <MapPin size={18} />
            Visit Tea Mood
          </a>

          <a className="button button--outline-light" href="#teas">
            Explore tea varieties
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}