"use client";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-secondary)",
        padding: "3rem 2.5rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Top section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  background: "var(--accent)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "14px",
                  color: "#0a0f1a",
                }}
              >
                H
              </div>
              <span
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                }}
              >
                HepaXAI
              </span>
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
                lineHeight: "1.7",
                maxWidth: "280px",
              }}
            >
              A multimodal explainable deep learning framework for early
              Hepatocellular Carcinoma risk prediction using heterogeneous
              medical data.
            </p>
            {/* Status badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                marginTop: "1rem",
                background: "rgba(0,212,170,0.08)",
                border: "1px solid rgba(0,212,170,0.2)",
                borderRadius: "20px",
                padding: "4px 12px",
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
                  animation: "pulse 2s infinite",
                }}
              />
              Research in progress
            </div>
          </div>

          {/* Project links */}
          <div>
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                marginBottom: "1rem",
              }}
            >
              Project
            </div>
            {[
              { label: "Overview", href: "#overview" },
              { label: "Methodology", href: "#methodology" },
              { label: "Datasets", href: "#datasets" },
              { label: "Dashboard", href: "/dashboard" },
            ].map((link) => (
              <div key={link.label} style={{ marginBottom: "0.6rem" }}>
                <a
                  href={link.href}
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>

          {/* Research links */}
          <div>
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                marginBottom: "1rem",
              }}
            >
              Research
            </div>
            {[
              { label: "Paper (coming soon)", href: "#" },
              { label: "TCGA-LIHC Dataset", href: "https://portal.gdc.cancer.gov/projects/TCGA-LIHC" },
              { label: "Kaggle Dataset", href: "https://www.kaggle.com" },
              { label: "CRISP-DM Method", href: "#methodology" },
            ].map((link) => (
              <div key={link.label} style={{ marginBottom: "0.6rem" }}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div>
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                marginBottom: "1rem",
              }}
            >
              Tech Stack
            </div>
            {[
              "PyTorch",
              "SHAP + LIME",
              "Next.js",
              "Tailwind CSS",
              "FastAPI",
            ].map((tech) => (
              <div
                key={tech}
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text-secondary)",
                  marginBottom: "0.6rem",
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="divider" style={{ marginBottom: "1.5rem" }} />

        {/* Bottom section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div
            style={{
              fontSize: "0.82rem",
              color: "var(--text-secondary)",
            }}
          >
            © {currentYear} HepaXAI · Islem Benameur · Research Project —
            Medical AI
          </div>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a
              href="https://github.com/benameur21/HepaXAI"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.82rem",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              GitHub Model
            </a>
            <a
              href="https://github.com/benameur21/HepaXAI-web"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.82rem",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              GitHub Web
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}
