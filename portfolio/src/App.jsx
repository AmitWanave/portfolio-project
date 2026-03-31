import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "./components/Navbarcode";
import Hero from "./components/Hero";
import ProjectCard from "./components/Projects";
import Contact from "./components/Contactcard";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const skills = [
  { name: "Java", level: 90, category: "Language", icon: "☕" },
  { name: "C++", level: 85, category: "Language", icon: "⚡" },
  { name: "React", level: 80, category: "Frontend", icon: "⚛" },
  { name: "Node.js", level: 75, category: "Backend", icon: "🟢" },
  { name: "FastAPI", level: 72, category: "Backend", icon: "🚀" },
  { name: "MongoDB", level: 70, category: "Database", icon: "🍃" },
  { name: "DSA", level: 88, category: "Core CS", icon: "🧩" },
  { name: "AWS", level: 60, category: "Cloud", icon: "☁" },
];

const skillCategories = ["All", "Language", "Frontend", "Backend", "Database", "Cloud", "Core CS"];

function SectionLabel({ text }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#00FFC8",
        }}
      >
        {text}
      </span>
      <div
        style={{
          flex: 1,
          height: "1px",
          background: "rgba(0,255,200,0.15)",
          maxWidth: "120px",
        }}
      />
    </div>
  );
}

function SkillCard({ skill, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "1.75rem",
        border: hovered
          ? "1px solid rgba(0,255,200,0.2)"
          : "1px solid rgba(255,255,255,0.06)",
        background: hovered
          ? "rgba(0,255,200,0.03)"
          : "rgba(255,255,255,0.02)",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        transition: "all 0.4s ease",
      }}
    >
      {/* Hover glow effect */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background: "radial-gradient(circle at center, rgba(0,255,200,0.04) 0%, transparent 60%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      />

      {/* Top row: Icon + Category */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.25rem",
        }}
      >
        <span style={{ fontSize: "1.5rem", filter: hovered ? "none" : "grayscale(0.5)", transition: "filter 0.3s ease" }}>
          {skill.icon}
        </span>
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: hovered ? "rgba(0,255,200,0.7)" : "rgba(255,255,255,0.2)",
            padding: "0.25rem 0.5rem",
            border: `1px solid ${hovered ? "rgba(0,255,200,0.15)" : "rgba(255,255,255,0.06)"}`,
            transition: "all 0.3s ease",
          }}
        >
          {skill.category}
        </span>
      </div>

      {/* Skill name */}
      <h3
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: "700",
          fontSize: "1.1rem",
          color: hovered ? "#fff" : "rgba(255,255,255,0.85)",
          marginBottom: "1rem",
          transition: "color 0.3s ease",
          letterSpacing: "-0.01em",
        }}
      >
        {skill.name}
      </h3>

      {/* Progress bar */}
      <div style={{ marginBottom: "0.5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: "0.4rem",
          }}
        >
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Proficiency
          </span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.7rem",
              fontWeight: "700",
              color: hovered ? "#00FFC8" : "rgba(0,255,200,0.5)",
              transition: "color 0.3s ease",
            }}
          >
            {skill.level}%
          </span>
        </div>
        <div
          style={{
            height: "3px",
            background: "rgba(255,255,255,0.06)",
            width: "100%",
            position: "relative",
            overflow: "hidden",
            borderRadius: "2px",
          }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: index * 0.06 + 0.3, ease: "easeOut" }}
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #00FFC8, rgba(0,255,200,0.3))",
              boxShadow: hovered
                ? "0 0 12px rgba(0,255,200,0.6)"
                : "0 0 6px rgba(0,255,200,0.3)",
              transition: "box-shadow 0.3s ease",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <div
      style={{
        background: "#05050A",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Hero />

      {/* ── ABOUT ── */}
      <section
        id="about"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "8rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ width: "100%" }}
        >
          <SectionLabel text="01 / About" />
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: "800",
              lineHeight: "1.1",
              letterSpacing: "-0.03em",
              marginBottom: "2.5rem",
              color: "#fff",
            }}
          >
            Backend by craft,
            <br />
            <span style={{ color: "rgba(255,255,255,0.25)" }}>
              full-stack by necessity.
            </span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
            }}
            className="about-grid"
          >
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                lineHeight: "1.9",
                fontSize: "1rem",
              }}
            >
              I'm a passionate developer focused on backend systems and problem
              solving. I enjoy building scalable applications using Java, React,
              and FastAPI — writing code that is readable, reliable, and fast.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {[
                ["300+", "DSA Problems Solved"],
                ["3+", "Projects Shipped"],
                ["2+", "Years of Learning"],
              ].map(([num, label]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "1rem",
                    borderLeft: "1px solid rgba(0,255,200,0.25)",
                    paddingLeft: "1.25rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "2rem",
                      fontWeight: "800",
                      color: "#00FFC8",
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.72rem",
                      color: "rgba(255,255,255,0.35)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── SKILLS ── */}
      <section
        id="skills"
        style={{
          padding: "8rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionLabel text="02 / Skills" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "3rem",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
            className="skills-header"
          >
            <div>
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: "800",
                  letterSpacing: "-0.03em",
                  color: "#fff",
                  marginBottom: "0.75rem",
                }}
              >
                Tools I work with
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.3)",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                  maxWidth: "500px",
                }}
              >
                Technologies and frameworks I use to bring ideas to life — from
                system design to deployment.
              </p>
            </div>

            {/* Category filter pills */}
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
              }}
              className="skill-filters"
            >
              {skillCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.62rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "0.4rem 0.85rem",
                    border:
                      activeCategory === cat
                        ? "1px solid #00FFC8"
                        : "1px solid rgba(255,255,255,0.08)",
                    background:
                      activeCategory === cat
                        ? "rgba(0,255,200,0.1)"
                        : "transparent",
                    color:
                      activeCategory === cat
                        ? "#00FFC8"
                        : "rgba(255,255,255,0.35)",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (activeCategory !== cat) {
                      e.target.style.borderColor = "rgba(255,255,255,0.25)";
                      e.target.style.color = "rgba(255,255,255,0.6)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== cat) {
                      e.target.style.borderColor = "rgba(255,255,255,0.08)";
                      e.target.style.color = "rgba(255,255,255,0.35)";
                    }
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Skills grid */}
          <motion.div
            layout
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {filteredSkills.map((skill, i) => (
              <div
                key={skill.name}
                style={{ background: "#05050A" }}
              >
                <SkillCard skill={skill} index={i} />
              </div>
            ))}
          </motion.div>

          {/* Skills summary bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2rem",
              padding: "1rem 1.5rem",
              border: "1px solid rgba(255,255,255,0.04)",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.2)",
                textTransform: "uppercase",
              }}
            >
              {filteredSkills.length} skill{filteredSkills.length !== 1 ? "s" : ""} ·{" "}
              {activeCategory === "All" ? "All categories" : activeCategory}
            </span>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                color: "rgba(0,255,200,0.3)",
                textTransform: "uppercase",
              }}
            >
              Always learning →
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* ── PROJECTS ── */}
      <section
        id="projects"
        style={{
          padding: "8rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionLabel text="03 / Projects" />
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: "800",
              letterSpacing: "-0.03em",
              marginBottom: "3rem",
              color: "#fff",
            }}
          >
            Things I've built
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "0",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {[
            {
              title: "AI College Assistant",
              tech: "Generative AI, React, FastAPI",
              desc: "AI-powered chatbot helping students with college queries, built with RAG architecture and Generative AI.",
              status: "In Progress",
              github: "https://github.com/PramodShinde2407/Placebot-GenAi",
            },
            {
              title: "Bloggify",
              tech: "Node.js, Express.js, MongoDB",
              desc: "Full-stack blog platform with JWT authentication, rich text editing, and complete CRUD functionality.",
              status: "Completed",
              github: "https://github.com/AmitWanave/Blogging-Application",
            },
            {
              title: "ESP32 Oscilloscope",
              tech: "ESP32, JavaScript, WebSockets",
              desc: "Real-time web-based oscilloscope for waveform visualization and signal analysis via WebSockets.",
              status: "Completed",
              github: false,
            },
          ].map((proj, i) => (
            <div
              key={proj.title}
              style={{
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                borderBottom: "none",
              }}
            >
              <ProjectCard {...proj} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        style={{
          padding: "8rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ textAlign: "center" }}
        >
          <SectionLabel text="04 / Contact" />

          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: "800",
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: "1.5rem",
              lineHeight: 1.05,
            }}
          >
            Let's build
            <br />
            something great.
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              maxWidth: "440px",
              margin: "0 auto 2rem",
              lineHeight: "1.8",
              fontSize: "0.95rem",
            }}
          >
            Open to internships, collaborations, and interesting problems.
            Drop a message — I respond fast.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:amitwanave418@gmail.com"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.9rem 2.5rem",
                background: "#00FFC8",
                color: "#000",
                textDecoration: "none",
                fontWeight: "700",
                border: "1px solid #00FFC8",
                transition: "all 0.2s ease",
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
              Email Me
            </a>

            <a
              href="https://github.com/AmitWanave"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.9rem 2.5rem",
                background: "transparent",
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.15)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "rgba(255,255,255,0.5)";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "rgba(255,255,255,0.15)";
                e.target.style.color = "rgba(255,255,255,0.6)";
              }}
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <Contact />
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.7rem",
            color: "rgba(255,255,255,0.15)",
            letterSpacing: "0.1em",
          }}
        >
          © {new Date().getFullYear()} Amit Wanave — Built with React
        </p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Mono:wght@400;700&family=Inter:wght@300;400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @media (max-width: 640px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .skills-header { flex-direction: column !important; align-items: flex-start !important; }
          .skill-filters { margin-top: 0.5rem; }
        }
      `}</style>
    </div>
  );
}

export default App;