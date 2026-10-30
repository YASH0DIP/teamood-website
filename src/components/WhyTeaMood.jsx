import { ArrowUpRight } from "lucide-react";

const highlights = [
  {
    number: "01",
    value: "15+",
    title: "VARIETIES",
    description: "More choices, more flavours, more reasons to fall in love with chai.",
  },
  {
    number: "02",
    value: "₹10",
    title: "CHAI FROM",
    description: "Good moments do not need to cost more.",
  },
  {
    number: "03",
    value: "1st",
    title: "OUTLET IN KOTA",
    description: "Your local destination for chai and delicious food.",
  },
  {
    number: "04",
    value: "BOTH",
    title: "BEST OF CHAI. BEST OF FOOD.",
    description: "Bringing the perfect combination of comfort, flavour, and happiness.",
  },
];

export default function WhyTeaMood() {
  return (
    <section className="why section">
      <div className="page-width">
        <div className="why__heading">
          <p className="eyebrow" data-reveal>
            The Tea Mood difference
          </p>

          <h2 className="section-title" data-reveal>
            WHAT MAKES
            <br />
            TEA MOOD SPECIAL?
          </h2>
        </div>

        <div className="why__list">
          {highlights.map((item) => (
            <article className="why-item" key={item.number} data-reveal>
              <span className="why-item__number">{item.number}</span>

              <div className="why-item__value">{item.value}</div>

              <div className="why-item__copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <ArrowUpRight className="why-item__icon" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}