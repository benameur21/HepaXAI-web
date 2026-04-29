"use client";
import Link from "next/link";

export default function Features() {
  const features = [
    {
      icon: "🎯",
      color: "rgba(0,212,170,0.1)",
      title: "Risk Prediction",
      desc: "Binary classification of liver cancer risk using clinical, lab, and biospecimen data streams fused together.",
      tag: "Head 1",
    },
    {
      icon: "📊",
      color: "rgba(79,142,247,0.1)",
      title: "Stage Classification",
      desc: "Multi-class tumor stage prediction from Stage I to Stage IV using AJCC pathologic staging data.",
      tag: "Head 2",
    },
    {
      icon: "🔬",
      color: "rgba(245,158,11,0.1)",
      title: "Severity Assessment",
      desc: "Mild / Moderate / Severe classification with full SHAP explanation per patient prediction.",
      tag: "Head 3",
    },
    {
      icon: "🧠",
      color: "rgba(168,85,247,0.1)",
      title: "SHAP Explainability",
      desc: "Global and local feature importance — doctors understand exactly why the model made each prediction.",
      tag: "XAI",
    },
    {
      icon: "🔗",
      color: "rgba(0,212,170,0.1)",
      title: "Multimodal Fusion",
      desc: "3 separate data streams (clinical + lab + biospecimen) fused through a unified deep learning architecture.",
      tag: "Architecture",
    },
    {
      icon: "⚡",
      color: "rgba(239,68,68,0.1)",
      title: "LIME Explanations",
      desc: "Per-patient local explanations showing which features pushed the prediction up or down.",
      tag: "XAI",
    },
  ];

  return (
    <section id="overview" className="section">
      {/* Header */}
      <div className="section-tag">Core Features</div>
      <h2 style={{ marginBottom: "0.8rem" }}>What HepaXAI Does</h2>
      <p
        style={{
          maxWidth: "520px",
          marginBottom: "3rem",
          color: "var(--text-secondary)",
        }}
      >
        Three simultaneous prediction outputs from one unified multimodal model
         with full explainability at every step.
      </p>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.2rem",
        }}
      >
        {features.map((f) => (
          <div
            key={f.title}
            className="card card-accent"
            style={{ position: "relative" }}
          >
            {/* Tag */}
            <div
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                fontSize: "0.7rem",
                fontWeight: 700,
                color: "var(--accent)",
                background: "rgba(0,212,170,0.08)",
                border: "1px solid rgba(0,212,170,0.15)",
                padding: "2px 8px",
                borderRadius: "20px",
              }}
            >
              {f.tag}
            </div>

            {/* Icon */}
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: f.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                marginBottom: "1rem",
              }}
            >
              {f.icon}
            </div>

            {/* Content */}
            <h3 style={{ marginBottom: "0.5rem" }}>{f.title}</h3>
            <p style={{ fontSize: "0.88rem", lineHeight: "1.65" }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
