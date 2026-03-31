import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [focused, setFocused] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("server-error");
    }

    setLoading(false);
    setTimeout(() => setStatus(""), 5000);
  };

  const inputBaseStyle = {
    width: "100%",
    padding: "1rem 1.25rem",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    transition: "all 0.3s ease",
    borderRadius: "0",
    letterSpacing: "0.01em",
  };

  const inputFocusStyle = {
    borderColor: "rgba(0,255,200,0.4)",
    background: "rgba(0,255,200,0.02)",
    boxShadow: "0 0 20px rgba(0,255,200,0.05)",
  };

  const labelStyle = {
    fontFamily: "'Space Mono', monospace",
    fontSize: "0.65rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.3)",
    marginBottom: "0.5rem",
    display: "block",
    transition: "color 0.3s ease",
  };

  const labelFocusStyle = {
    color: "#00FFC8",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      style={{
        marginTop: "4rem",
        position: "relative",
      }}
    >
      {/* Decorative glow */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(0,255,200,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Form container */}
      <div
        style={{
          maxWidth: "560px",
          margin: "0 auto",
          padding: "2.5rem",
          border: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.01)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Corner accents */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "20px", height: "20px", borderTop: "1px solid rgba(0,255,200,0.3)", borderLeft: "1px solid rgba(0,255,200,0.3)" }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: "20px", height: "20px", borderTop: "1px solid rgba(0,255,200,0.3)", borderRight: "1px solid rgba(0,255,200,0.3)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "20px", height: "20px", borderBottom: "1px solid rgba(0,255,200,0.3)", borderLeft: "1px solid rgba(0,255,200,0.3)" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, width: "20px", height: "20px", borderBottom: "1px solid rgba(0,255,200,0.3)", borderRight: "1px solid rgba(0,255,200,0.3)" }} />

        {/* Form header */}
        <div style={{ marginBottom: "2rem" }}>
          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#00FFC8",
              marginBottom: "0.75rem",
            }}
          >
            // Send a message
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "0.85rem",
              lineHeight: "1.6",
            }}
          >
            Have a project in mind or just want to connect? Fill out the form
            below and I'll get back to you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {/* Email field */}
          <div>
            <label
              htmlFor="contact-email"
              style={{
                ...labelStyle,
                ...(focused === "email" ? labelFocusStyle : {}),
              }}
            >
              Your Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused("")}
              required
              style={{
                ...inputBaseStyle,
                ...(focused === "email" ? inputFocusStyle : {}),
              }}
            />
          </div>

          {/* Subject field */}
          <div>
            <label
              htmlFor="contact-subject"
              style={{
                ...labelStyle,
                ...(focused === "subject" ? labelFocusStyle : {}),
              }}
            >
              Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={handleChange}
              onFocus={() => setFocused("subject")}
              onBlur={() => setFocused("")}
              required
              style={{
                ...inputBaseStyle,
                ...(focused === "subject" ? inputFocusStyle : {}),
              }}
            />
          </div>

          {/* Message field */}
          <div>
            <label
              htmlFor="contact-message"
              style={{
                ...labelStyle,
                ...(focused === "message" ? labelFocusStyle : {}),
              }}
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me about your project or idea..."
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused("")}
              required
              rows="5"
              style={{
                ...inputBaseStyle,
                ...(focused === "message" ? inputFocusStyle : {}),
                resize: "vertical",
                minHeight: "120px",
              }}
            />
          </div>

          {/* Submit button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: "700",
              padding: "1rem 2rem",
              background: loading ? "rgba(0,255,200,0.15)" : "#00FFC8",
              color: loading ? "rgba(0,255,200,0.5)" : "#000",
              border: "1px solid #00FFC8",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#00FFC8";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(0,255,200,0.15)";
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.currentTarget.style.background = "#00FFC8";
                e.currentTarget.style.color = "#000";
                e.currentTarget.style.boxShadow = "none";
              }
            }}
          >
            {loading ? (
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                <span className="contact-spinner" />
                Sending...
              </span>
            ) : (
              "Send Message →"
            )}
          </motion.button>
        </form>

        {/* Status message */}
        {status && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              marginTop: "1.5rem",
              padding: "0.75rem 1rem",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.08em",
              border: "1px solid",
              borderColor:
                status === "success"
                  ? "rgba(0,255,200,0.3)"
                  : "rgba(255,80,80,0.3)",
              background:
                status === "success"
                  ? "rgba(0,255,200,0.05)"
                  : "rgba(255,80,80,0.05)",
              color:
                status === "success"
                  ? "#00FFC8"
                  : "#FF5050",
            }}
          >
            {status === "success" && "✓ Message sent successfully! I'll respond soon."}
            {status === "error" && "✕ Failed to send. Please try again."}
            {status === "server-error" && "⚠ Server unavailable. Try emailing me directly."}
          </motion.div>
        )}
      </div>

      <style>{`
        .contact-spinner {
          display: inline-block;
          width: 14px;
          height: 14px;
          border: 2px solid rgba(0,255,200,0.2);
          border-top-color: #00FFC8;
          border-radius: 50%;
          animation: contact-spin 0.6s linear infinite;
        }
        @keyframes contact-spin {
          to { transform: rotate(360deg); }
        }
        input::placeholder, textarea::placeholder {
          color: rgba(255,255,255,0.15);
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </motion.div>
  );
}