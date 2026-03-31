import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const roles = [
  "Java Developer",
  "Backend Architect",
  "DSA Enthusiast",
  "Full-Stack Builder",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "0 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        width: "100%",
      }}
    >
      {/* Grid background lines */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(0,255,200,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,200,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          pointerEvents: "none",
        }}
      />

      {/* Glow blob */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,255,200,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        {/* Tag line */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.78rem",
            letterSpacing: "0.2em",
            color: "#00FFC8",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "32px",
              height: "1px",
              background: "#00FFC8",
              boxShadow: "0 0 6px rgba(0,255,200,0.8)",
            }}
          />
          Available for opportunities
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: "800",
            lineHeight: "1",
            letterSpacing: "-0.03em",
            color: "#fff",
            marginBottom: "0.5rem",
          }}
        >
          Amit
          <br />
          <span
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.25)",
              color: "transparent",
            }}
          >
            Wanave
          </span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "2.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span style={{ color: "#00FFC8" }}>//</span>
          <span>{displayed}</span>
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "1.2em",
              background: "#00FFC8",
              animation: "blink 1s step-end infinite",
            }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            maxWidth: "520px",
            color: "rgba(255,255,255,0.45)",
            lineHeight: "1.8",
            fontSize: "1rem",
            marginBottom: "3rem",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Building scalable, secure, and high-performance applications.
          300+ DSA problems solved. Currently crafting an AI-powered college assistant.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <a
            href="#projects"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.85rem 2rem",
              background: "#00FFC8",
              color: "#000",
              textDecoration: "none",
              fontWeight: "700",
              transition: "all 0.2s ease",
              border: "1px solid #00FFC8",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#00FFC8";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#00FFC8";
              e.target.style.color = "#000";
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.85rem 2rem",
              background: "transparent",
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              fontWeight: "400",
              border: "1px solid rgba(255,255,255,0.15)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.5)";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.15)";
              e.target.style.color = "rgba(255,255,255,0.7)";
            }}
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: "absolute",
            bottom: "-8rem",
            left: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "60px",
              background: "linear-gradient(to bottom, rgba(0,255,200,0.6), transparent)",
              animation: "scrollPulse 2s ease-in-out infinite",
            }}
          />
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Mono:wght@400;700&family=Inter:wght@300;400&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes scrollPulse {
          0%,100%{transform:scaleY(1);opacity:0.6}
          50%{transform:scaleY(1.3);opacity:1}
        }
      `}</style>
    </section>
  );
}

export default Hero;