import { ArrowUpRight } from "lucide-react";
import { teaProducts } from "../hooks/data";

export default function TeaVarietyGrid() {
  return (
    <section className="varieties section" id="tea-varieties">
      <div className="page-width">
        <div className="varieties__heading">
          <div>
            <p className="eyebrow" data-reveal>
              Find your tea mood
            </p>

            <h2 className="section-title" data-reveal>
              15+ WAYS TO MAKE
              <br />
              YOUR MOOD BETTER.
            </h2>
          </div>

          <div className="varieties__intro" data-reveal>
            <p>One café. Endless tea moods.</p>
            <span>
              Explore a selection of our chai and tea experiences. Product data
              is editable pending the verified Tea Mood menu.
            </span>
          </div>
        </div>

        <div className="varieties__grid">
          {teaProducts.map((product, index) => (
            <article
              className={`tea-card tea-card--${product.size} tea-card--${product.tone}`}
              key={product.id}
              data-reveal
            >
              <div className="tea-card__number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="tea-card__visual">
                <div className="tea-card__glow" />

                <div className="tea-card__mini-cup">
                  <div className="tea-card__mini-handle" />
                  <div className="tea-card__mini-body">
                    <span>TEA<br />MOOD</span>
                  </div>
                </div>

                {!product.image && (
                  <span className="tea-card__image-note">
                    Add verified product image
                  </span>
                )}
              </div>

              <div className="tea-card__content">
                <span className="tea-card__category">{product.category}</span>

                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <div className="tea-card__footer">
                  <span>{product.flavour}</span>
                  <strong>{product.price}</strong>
                </div>
              </div>

              <button
                className="tea-card__action"
                type="button"
                aria-label={`Discover ${product.name}`}
              >
                <ArrowUpRight size={20} />
              </button>
            </article>
          ))}
        </div>

        <div className="varieties__bottom" data-reveal>
          <p>From ₹10 to a whole new mood.</p>
          <a href="#visit">
            Come taste the full collection
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}