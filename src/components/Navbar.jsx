import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigationItems, instagramUrl } from "../hooks/navigation";

export function InstagramIcon({ className = "w-6 h-6", color = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <a href="#home" className="brand" aria-label="Tea Mood home" onClick={closeMenu}>
        <span className="brand__mark">TM</span>
        <span className="brand__words">
          TEA <strong>MOOD</strong>
        </span>
      </a>

      <nav className="navbar__links" aria-label="Primary navigation">
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="navbar__actions">
        <a
          className="icon-link"
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Tea Mood on Instagram"
        >
          <InstagramIcon size={19} />
        </a>

        <a className="nav-cta" href="#visit">
          Visit us
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navigationItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              style={{ "--menu-index": index }}
              onClick={closeMenu}
            >
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <p>When your MOOD says, then TEA MOOD is in your ways.</p>
      </div>
    </header>
  );
}