import { ArrowUpRight, MapPin } from "lucide-react";

const mapsSearch =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Tea Mood Kota Rama Krishna Puram Kota Rajasthan 324010");

export default function CafeLocation() {
  return (
    <section className="location section" id="visit">
      <div className="page-width location__layout">
        <div className="location__content">
          <p className="eyebrow" data-reveal>
            Come brew with us
          </p>

          <h2 className="section-title" data-reveal>
            YOUR NEXT CHAI BREAK
            <br />
            STARTS HERE.
          </h2>

          <div className="location__card" data-reveal>
            <div className="location__icon">
              <MapPin />
            </div>

            <div>
              <span>TEA MOOD — KOTA</span>
              <address>
                Rama Krishna Puram,
                <br />
                Kota, Rajasthan 324010,
                <br />
                India.
              </address>
            </div>
          </div>

          <div className="location__buttons" data-reveal>
            <a
              className="button button--dark"
              href={mapsSearch}
              target="_blank"
              rel="noreferrer"
            >
              Get directions
              <ArrowUpRight size={18} />
            </a>

            <a
              className="button button--ghost"
              href={mapsSearch}
              target="_blank"
              rel="noreferrer"
            >
              Find us on Maps
            </a>
          </div>
        </div>

        <div className="location__visual" data-reveal>
          <div className="location__arch" aria-hidden="true" />

          <div className="photo-placeholder photo-placeholder--cafe">
            <span>Add verified Tea Mood café photography</span>
            <strong>WELCOME TO<br />TEA MOOD</strong>
          </div>

          <div className="location__sticker">
            <span>YOUR TEA BREAK</span>
            <strong>KOTA</strong>
          </div>
        </div>
      </div>
    </section>
  );
}