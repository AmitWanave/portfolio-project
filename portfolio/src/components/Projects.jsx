import { useState } from "react";

function ProjectCard({ title, tech, desc, status, github, index = 0 }) {
  const [hovered, setHovered] = useState(false);

  const techList = tech.split(",").map((t) => t.trim());
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        padding: "2rem",
        border: `1px solid ${hovered ? "rgba(0,255,200,0.3)" : "rgba(255,255,255,0.07)"}`,
        background: hovered
          ? "rgba(0,255,200,0.03)"
          : "rgba(255,255,255,0.02)",
        transition: "all 0.3s ease",
        cursor: "default",
        overflow: "hidden",
      }}
    >
      {/* Corner accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: hovered ? "100%" : "0%",
          height: "1px",
          background: "linear-gradient(90deg, #00FFC8, transparent)",
          transition: "width 0.4s ease",
        }}
      />

      {/* Number */}
      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.7rem",
          color: hovered ? "#00FFC8" : "rgba(255,255,255,0.15)",
          letterSpacing: "0.1em",
          marginBottom: "1.25rem",
          transition: "color 0.3s",
        }}
      >
        {num}
      </div>

      {/* Title */}
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "1.2rem",
          fontWeight: "700",
          color: "#fff",
          marginBottom: "0.75rem",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h2>

      {/* Description */}
      <p
        style={{
          fontSize: "0.88rem",
          color: "rgba(255,255,255,0.45)",
          lineHeight: "1.7",
          marginBottom: "1.5rem",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {desc}
      </p>

      {/* Tech pills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.4rem",
          marginBottom: "1.5rem",
        }}
      >
        {techList.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.08em",
              padding: "0.3rem 0.65rem",
              border: "1px solid rgba(0,255,200,0.2)",
              color: "rgba(0,255,200,0.7)",
              background: "rgba(0,255,200,0.04)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          paddingTop: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color:
              status === "Completed"
                ? "rgba(0,255,200,0.8)"
                : "rgba(255,200,0,0.8)",
          }}
        >
          {status === "Completed" ? "● Completed" : "◌ In Progress"}
        </span>

        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: hovered ? "#00FFC8" : "rgba(255,255,255,0.3)",
              textDecoration: "none",
              transition: "color 0.2s",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            GitHub →
          </a>
        ) : (
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.12)",
            }}
          >
            Private
          </span>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;