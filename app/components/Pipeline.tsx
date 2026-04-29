"use client";
import Link from "next/link";


export default function Pipeline() {
  const steps = [
    {
      num: "01",
      title: "Business Understanding",
      desc: "Define HCC detection objectives, success metrics, and clinical requirements.",
      icon: "🎯",
      color: "rgba(0,212,170,0.1)",
      border: "rgba(0,212,170,0.2)",
    },
    {
      num: "02",
      title: "Data Understanding",
      desc: "EDA on 4 datasets — missing values, class imbalance, correlations.",
      icon: "🔍",
      color: "rgba(79,142,247,0.1)",
      border: "rgba(79,142,247,0.2)",
    },
    {
      num: "03",
      title: "Data Preparation",
      desc: "Merge, clean, encode, SMOTE oversampling, StandardScaler normalization.",
      icon: "🔧",
      color: "rgba(245,158,11,0.1)",
      border: "rgba(245,158,11,0.2)",
    },
    {
      num: "04",
      title: "Modeling",
      desc: "3-stream multimodal DL with multi-task output heads vs baselines.",
      icon: "🧠",
      color: "rgba(168,85,247,0.1)",
      border: "rgba(168,85,247,0.2)",
    },
    {
      num: "05",
      title: "Evaluation",
      desc: "AUC-ROC, F1, ablation study, SHAP + LIME explainability analysis.",
      icon: "📊",
      color: "rgba(239,68,68,0.1)",
      border: "rgba(239,68,68,0.2)",
    },
    {
      num: "06",
      title: "Deployment",
      desc: "Next.js dashboard with FastAPI backend for real-time clinical predictions.",
      icon: "🚀",
      color: "rgba(0,212,170,0.1)",
      border: "rgba(0,212,170,0.2)",
    },
  ];

  const datasets = [
    { name: "TCGA-LIHC Clinical", rows: "2,977", type: "Clinical + Pathology", color: "var(--accent)" },
    { name: "TCGA Biospecimen", rows: "1,168", type: "Biospecimen", color: "var(--accent-blue)" },
    { name: "Indian Liver Patient", rows: "583", type: "Lab Results", color: "var(--accent-orange)" },
    { name: "LPD Dataset", rows: "30,691", type: "Demographics + Lab", color: "#a855f7" },
  ];

  return (
    <>
      {/* Pipeline Section */}
      <section id="methodology" className="section">
        <div className="section-tag">CRISP-DM Methodology</div>
        <h2 style={{ marginBottom: "0.8rem" }}>Research Pipeline</h2>
        <p style={{ maxWidth: "500px", marginBottom: "3rem" }}>
          Built following the industry standard CRISP-DM framework across 6
          structured and reproducible phases.
        </p>

        {/* Steps Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.2rem",
            marginBottom: "2rem",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="card"
              style={{
                borderColor: step.border,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background number */}
              <div
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "12px",
                  fontSize: "5rem",
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.03)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {step.num}
              </div>

              {/* Icon */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: step.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  marginBottom: "1rem",
                }}
              >
                {step.icon}
              </div>

              {/* Phase tag */}
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "var(--text-secondary)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                Phase {step.num}
              </div>

              <h3 style={{ marginBottom: "0.5rem" }}>{step.title}</h3>
              <p style={{ fontSize: "0.85rem", lineHeight: "1.6" }}>
                {step.desc}
              </p>

              {/* Step connector */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "-1px",
                    right: "-1px",
                    width: "20px",
                    height: "20px",
                    background: "var(--accent)",
                    clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                    opacity: 0.3,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="divider" />

      {/* Datasets Section */}
      <section id="datasets" className="section">
        <div className="section-tag">Heterogeneous Data</div>
        <h2 style={{ marginBottom: "0.8rem" }}>Data Sources</h2>
        <p style={{ maxWidth: "500px", marginBottom: "3rem" }}>
          4 datasets combined to create a rich multimodal training corpus
          covering clinical, lab, and biospecimen data.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.2rem",
          }}
        >
          {datasets.map((ds) => (
            <div key={ds.name} className="card card-accent">
              {/* Color bar */}
              <div
                style={{
                  height: "3px",
                  background: ds.color,
                  borderRadius: "2px",
                  marginBottom: "1.2rem",
                  width: "40px",
                }}
              />
              <h3 style={{ fontSize: "0.95rem", marginBottom: "0.4rem" }}>
                {ds.name}
              </h3>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: ds.color,
                  letterSpacing: "-1px",
                  lineHeight: 1.1,
                  marginBottom: "0.4rem",
                }}
              >
                {ds.rows}
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-secondary)",
                }}
              >
                {ds.type}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture diagram */}
        <div
          style={{
            marginTop: "2rem",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            padding: "2rem",
          }}
        >
          <div
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "var(--text-secondary)",
              marginBottom: "1.5rem",
            }}
          >
            Model Architecture
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
              fontSize: "0.82rem",
            }}
          >
            {[
              { label: "Clinical Stream", color: "var(--accent)" },
              { arrow: true },
              { label: "Lab Stream", color: "var(--accent-blue)" },
              { arrow: true },
              { label: "Biospecimen Stream", color: "var(--accent-orange)" },
              { arrow: true },
              { label: "Fusion Layer", color: "#a855f7" },
              { arrow: true },
              { label: "3 Output Heads", color: "var(--accent)" },
              { arrow: true },
              { label: "SHAP + LIME", color: "var(--accent)" },
            ].map((item, i) =>
              item.arrow ? (
                <div key={i} style={{ color: "var(--text-secondary)", fontSize: "18px" }}>
                  →
                </div>
              ) : (
                <div
                  key={i}
                  style={{
                    background: "var(--bg-secondary)",
                    border: `1px solid ${item.color}40`,
                    borderRadius: "8px",
                    padding: "6px 14px",
                    color: item.color,
                    fontWeight: 500,
                    fontSize: "0.78rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
