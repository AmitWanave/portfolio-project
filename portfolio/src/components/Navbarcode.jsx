import { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(5, 5, 10, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0, 255, 200, 0.08)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "1.1rem",
            fontWeight: "700",
            color: "#00FFC8",
            textDecoration: "none",
            letterSpacing: "0.05em",
          }}
        >
          AW<span style={{ color: "rgba(255,255,255,0.3)" }}>.dev</span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="nav-links">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.78rem",
                fontWeight: "400",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: active === link.id ? "#00FFC8" : "rgba(255,255,255,0.5)",
                transition: "color 0.2s ease",
                position: "relative",
                paddingBottom: "4px",
              }}
              onMouseEnter={(e) => {
                if (active !== link.id) e.target.style.color = "rgba(255,255,255,0.85)";
              }}
              onMouseLeave={(e) => {
                if (active !== link.id) e.target.style.color = "rgba(255,255,255,0.5)";
              }}
            >
              {link.label}
              {active === link.id && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "1px",
                    background: "#00FFC8",
                    boxShadow: "0 0 6px rgba(0,255,200,0.6)",
                  }}
                />
              )}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
