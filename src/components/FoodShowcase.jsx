import { ArrowUpRight } from "lucide-react";

const foodItems = [
  {
    title: "A perfect sidekick",
    description: "Delicious café favourites made to complement your chai.",
    className: "food-card--large",
  },
  {
    title: "Bite-sized happiness",
    description: "Something savoury for the moments between sips.",
    className: "food-card--small",
  },
];

export default function FoodShowcase() {
  return (
    <section className="food section" id="food">
      <div className="page-width">
        <div className="food__heading">
          <div>
            <p className="eyebrow" data-reveal>
              Beyond the cup
            </p>

            <h2 className="section-title" data-reveal>
              THE PERFECT PARTNER
              <br />
              FOR YOUR CHAI.
            </h2>
          </div>

          <p data-reveal>
            Great conversations deserve great chai. And great chai deserves
            something delicious on the side.
          </p>
        </div>

        <div className="food__composition">
          {foodItems.map((item, index) => (
            <article
              key={item.title}
              className={`food-card ${item.className}`}
              data-reveal
            >
              <div className={`photo-placeholder photo-placeholder--food photo-placeholder--food-${index + 1}`}>
                <span>Add verified Tea Mood food photography</span>
              </div>

              <div className="food-card__overlay">
                <div>
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <ArrowUpRight />
              </div>
            </article>
          ))}

          <div className="food__quote" data-reveal>
            <span>Best of chai.</span>
            <strong>Best of food.</strong>
            <p>That’s the Tea Mood way.</p>
          </div>
        </div>
      </div>
    </section>
  );
}