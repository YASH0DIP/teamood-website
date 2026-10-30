import { navigationItems, instagramUrl } from "../hooks/navigation";
import { InstagramIcon } from "./Navbar";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="page-width">
        <div className="footer__top">
          <a href="#home" className="footer__brand">
            <span className="brand__mark">TM</span>
            <span className="brand__words">
              TEA <strong>MOOD</strong>
            </span>
          </a>

          <p>When your MOOD says, then TEA MOOD is in your ways.</p>
        </div>

        <div className="footer__grid">
          <div>
            <span className="footer__label">Explore</span>

            <nav className="footer__nav">
              {navigationItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <span className="footer__label">Find us</span>

            <address>
              Rama Krishna Puram,
              <br />
              Kota, Rajasthan 324010,
              <br />
              India.
            </address>
          </div>

          <div>
            <span className="footer__label">Follow the mood</span>

            <a
              className="footer__social"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon size={20} />
              Instagram
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <strong>BREWING GOOD MOODS, ONE CUP AT A TIME.</strong>

          <span>© {new Date().getFullYear()} Tea Mood</span>
        </div>
      </div>
    </footer>
  );
}