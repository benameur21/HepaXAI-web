"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "6rem 2.5rem 5rem",
      }}
    >
      {/* Badge */}
      <div
        className="badge badge-accent fade-in"
        style={{ marginBottom: "1.8rem" }}
      >
        <div
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "var(--accent)",
          }}
          className="pulse"
        />
        Research Project — Medical AI 2025–2026
      </div>

      {/* Heading */}
      <h1
        className="fade-in fade-in-delay-1"
        style={{ marginBottom: "1.4rem", maxWidth: "750px" }}
      >
        Early HCC Risk  
        <br />
        Prediction with{" "}
        <span style={{   background: "linear-gradient(135deg, #00c9a7, #017a8b)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",}}>Explainable Deep Learning</span>
      </h1>

      {/* Subheading */}
      <p
        className="fade-in fade-in-delay-2"
        style={{
          fontSize: "1.1rem",
          maxWidth: "580px",
          marginBottom: "2.5rem",
          color: "var(--text-secondary)",
          lineHeight: "1.75",
        }}
      >
        A multimodal deep learning framework predicting HCC risk, tumor stage,
        and severity powered by SHAP and LIME for transparent clinical
        decision support.
      </p>

      {/* CTA Buttons */}
      <div
        className="fade-in fade-in-delay-3"
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          marginBottom: "4rem",
        }}
      >
        <Link href="/dashboard" className="btn-primary">
          Explore Dashboard →
        </Link>
        <a
          href="https://github.com/benameur21/HepaXAI"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          Contact
        </a>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "1px",
          background: "var(--border)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          maxWidth: "620px",
        }}
      >
        {[
          { value: "3", label: "Prediction Heads" },
          { value: "4", label: "Data Sources" },
          { value: "2977", label: "HCC Patients" },
          { value: "XAI", label: "SHAP + LIME" },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              background: "var(--bg-card)",
              padding: "1.4rem 1rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "1.8rem",
                fontWeight: 800,
                color: "var(--accent)",
                letterSpacing: "-1px",
                lineHeight: 1,
                marginBottom: "6px",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "var(--text-secondary)",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
