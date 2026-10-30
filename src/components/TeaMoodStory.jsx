import { Sparkles } from "lucide-react";

export default function TeaMoodStory() {
  return (
    <section className="story section" id="our-story">
      <div className="story__ornament" aria-hidden="true">
        <Sparkles />
      </div>

      <div className="page-width story__layout">
        <div className="story__visual" data-reveal>
          <div className="story__photo story__photo--main">
            <div className="photo-placeholder photo-placeholder--chai">
              <span>Authentic chai photography</span>
              <strong>BREWED<br />WITH FEELING</strong>
            </div>
          </div>

          <div className="story__photo story__photo--detail">
            <div className="photo-placeholder photo-placeholder--leaves">
              <span>Tea leaves & spices</span>
            </div>
          </div>

          <div className="story__seal">
            <span>EST.</span>
            <strong>KOTA</strong>
            <span>TEA MOOD</span>
          </div>
        </div>

        <div className="story__copy">
          <p className="eyebrow" data-reveal>
            Our tea philosophy
          </p>

          <h2 className="section-title" data-reveal>
            MORE THAN JUST
            <br />
            A CUP OF TEA.
          </h2>

          <p className="story__description" data-reveal>
            Some moments call for a little energy. Some need a peaceful break.
            Some are simply better with friends. At Tea Mood, every mood deserves
            its own cup of chai. Discover a place where comforting flavours,
            delicious food, and conversations come together.
          </p>

          <div className="story__statement" data-reveal>
            <span>Your mood.</span>
            <span>Your chai.</span>
            <span>Your moment.</span>
          </div>
        </div>
      </div>
    </section>
  );
}