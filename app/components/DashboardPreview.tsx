"use client";
import Link from "next/link";

export default function DashboardPreview() {
  const features = [
    { label: "AFP Level", value: "+0.42", width: "85%", color: "#ef4444" },
    { label: "Age", value: "+0.28", width: "60%", color: "#4f8ef7" },
    { label: "ALT Level", value: "+0.19", width: "45%", color: "#4f8ef7" },
    { label: "Albumin", value: "-0.14", width: "30%", color: "#f59e0b" },
    { label: "Tumor Type", value: "+0.09", width: "20%", color: "#f59e0b" },
  ];

  return (
    <section id="research" className="section">
      <div className="section-tag">Dashboard Preview</div>
      <h2 style={{ marginBottom: "0.8rem" }}>Clinical Interface</h2>
      <p style={{ maxWidth: "500px", marginBottom: "3rem" }}>
        Doctors enter patient lab values and instantly receive predictions with
        full SHAP explainability  bridging AI and clinical trust.
      </p>

      {/* Preview container */}
      <div
        style={{
          background: "var(--bg-secondary)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-xl)",
          padding: "1.5rem",
          overflow: "hidden",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
            paddingBottom: "1rem",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "28px",
                height: "28px",
                background: "var(--accent)",
                borderRadius: "7px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: "12px",
                color: "#0a0f1a",
              }}
            >
              H
            </div>
            <span
              style={{
                fontSize: "0.88rem",
                fontWeight: 600,
                color: "var(--text-primary)",
              }}
            >
              HepaXAI — Patient Analysis
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.75rem",
              color: "var(--accent)",
            }}
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
            Model Ready
          </div>
        </div>

        {/* Prediction cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          {[
            { label: "Cancer Risk", value: "87.3%", color: "#ef4444", width: "87%" },
            { label: "Tumor Stage", value: "Stage III", color: "#f59e0b", width: "65%" },
            { label: "Severity", value: "Severe", color: "#ef4444", width: "80%" },
          ].map((card) => (
            <div
              key={card.label}
              style={{
                background: "var(--bg-card2)",
                borderRadius: "var(--radius-md)",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "var(--text-secondary)",
                  marginBottom: "6px",
                }}
              >
                {card.label}
              </div>
              <div
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: card.color,
                  marginBottom: "8px",
                }}
              >
                {card.value}
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: card.width, background: card.color }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* SHAP explanation */}
        <div
          style={{
            background: "var(--bg-card2)",
            borderRadius: "var(--radius-md)",
            padding: "1.2rem",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--text-secondary)",
              marginBottom: "1rem",
              fontWeight: 600,
            }}
          >
            SHAP Feature Importance — Top Drivers
          </div>
          {features.map((f) => (
            <div
              key={f.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  width: "110px",
                  color: "var(--text-primary)",
                  flexShrink: 0,
                }}
              >
                {f.label}
              </div>
              <div
                style={{
                  flex: 1,
                  height: "8px",
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: f.width,
                    height: "100%",
                    background: f.color,
                    borderRadius: "4px",
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "var(--text-secondary)",
                  width: "40px",
                  textAlign: "right",
                  flexShrink: 0,
                }}
              >
                {f.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link href="/dashboard" className="btn-primary">
          Open Full Dashboard →
        </Link>
      </div>
    </section>
  );
}
