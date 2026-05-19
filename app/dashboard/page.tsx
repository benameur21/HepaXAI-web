"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


// ── Types ──────────────────────────────────────────────
interface PatientForm {
  age: string;
  gender: string;
  totalBilirubin: string;
  directBilirubin: string;
  alkalinePhosphotase: string;
  alamineAminotransferase: string;
  aspartateAminotransferase: string;
  totalProtiens: string;
  albumin: string;
  agRatio: string;
}

interface Prediction {
  risk: number;
  stage: string;
  severity: string;
  confidence: number;
  shap: { label: string; value: number; positive: boolean }[];
}

// ── Mock prediction function (replace with real API later) ──
function mockPredict(form: PatientForm): Prediction {
  const age = parseInt(form.age) || 50;
  const alt = parseFloat(form.alamineAminotransferase) || 35;
  const albumin = parseFloat(form.albumin) || 3.5;
  const risk = Math.min(95, Math.max(5, (age / 90) * 60 + (alt / 200) * 40));
  return {
    risk: Math.round(risk),
    stage: risk > 70 ? "Stage III" : risk > 40 ? "Stage II" : "Stage I",
    severity: risk > 70 ? "Severe" : risk > 40 ? "Moderate" : "Mild",
    confidence: Math.round(85 + Math.random() * 10),
    shap: [
      { label: "AFP Level", value: 0.42, positive: true },
      { label: "Age", value: 0.28, positive: true },
      { label: "ALT", value: 0.19, positive: true },
      { label: "Albumin", value: 0.14, positive: false },
      { label: "Total Bilirubin", value: 0.09, positive: true },
    ],
  };
}

// ── Color helpers ──────────────────────────────────────
function getRiskColor(risk: number) {
  if (risk >= 70) return "#ef4444";
  if (risk >= 40) return "#f59e0b";
  return "#00d4aa";
}

function getSeverityColor(severity: string) {
  if (severity === "Severe") return "#ef4444";
  if (severity === "Moderate") return "#f59e0b";
  return "#00d4aa";
}

// ── Dashboard Page ─────────────────────────────────────
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"predict" | "performance" | "history">("predict");
  const [form, setForm] = useState<PatientForm>({
    age: "58",
    gender: "Male",
    totalBilirubin: "1.2",
    directBilirubin: "0.4",
    alkalinePhosphotase: "187",
    alamineAminotransferase: "42",
    aspartateAminotransferase: "38",
    totalProtiens: "6.8",
    albumin: "3.2",
    agRatio: "0.9",
  });
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = () => {
    setLoading(true);
    setTimeout(() => {
      setPrediction(mockPredict(form));
      setLoading(false);
    }, 1200);
  };

  const baselines = [
    { name: "Logistic Regression", acc: "%", auc: ".", f1: "." },
    { name: "Random Forest", acc: "%", auc: ".", f1: "." },
    { name: "XGBoost", acc: "%", auc: ".", f1: "." },
    { name: "HepaXAI (ours)", acc: "%", auc: ".", f1: ".", highlight: true },
  ];

  const history = [
    { id: "HCC-001", age: 62, gender: "M", risk: 87, stage: "Stage III", severity: "Severe", date: "Apr 25" },
    { id: "HCC-002", age: 45, gender: "F", risk: 54, stage: "Stage II", severity: "Moderate", date: "Apr 25" },
    { id: "HCC-003", age: 58, gender: "M", risk: 12, stage: "Stage I", severity: "Mild", date: "Apr 24" },
    { id: "HCC-004", age: 71, gender: "M", risk: 92, stage: "Stage IV", severity: "Severe", date: "Apr 24" },
    { id: "HCC-005", age: 39, gender: "F", risk: 31, stage: "Stage I", severity: "Mild", date: "Apr 23" },
  ];

  const cardStyle = {
    background: "var(--bg-card)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius-lg)",
    padding: "1.4rem",
  };

  const inputStyle = {
    width: "100%",
    background: "var(--bg-secondary)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    padding: "8px 12px",
    color: "var(--text-primary)",
    fontSize: "0.88rem",
    outline: "none",
  };

  const tabStyle = (active: boolean) => ({
    padding: "8px 18px",
    borderRadius: "8px",
    fontSize: "0.85rem",
    cursor: "pointer",
    border: "1px solid " + (active ? "var(--border-hover)" : "transparent"),
    background: active ? "var(--bg-card)" : "transparent",
    color: active ? "var(--text-primary)" : "var(--text-secondary)",
    fontWeight: active ? 600 : 400,
    transition: "all 0.15s",
  });

  return (
    <main>
      <Navbar />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.5rem 2rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.5rem" }}>
            <Link href="/" style={{ fontSize: "0.82rem", color: "var(--text-secondary)", textDecoration: "none" }}>
              Home
            </Link>
            <span style={{ color: "var(--text-secondary)" }}>→</span>
            <span style={{ fontSize: "0.82rem", color: "var(--accent)" }}>Dashboard</span>
          </div>
          <h2 style={{ marginBottom: "0.4rem" }}>HepaXAI Dashboard</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
            Enter patient data to get instant liver cancer risk predictions with XAI explanations.
          </p>
        </div>

        {/* Stats row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "1rem",
          marginBottom: "2rem",
        }}>
          {[
            { label: "Total Analyzed", value: "1,247" },
            { label: "High Risk", value: "312", color: "#ef4444" },
            { label: "Model Accuracy", value: "87.3%", color: "#00d4aa" },
            { label: "AUC-ROC", value: "0.91", color: "#00d4aa" },
          ].map((s) => (
            <div key={s.label} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "1rem" }}>
              <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)", marginBottom: "4px" }}>{s.label}</div>
              <div style={{ fontSize: "1.5rem", fontWeight: 700, color: s.color || "var(--text-primary)" }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "6px", marginBottom: "1.5rem", borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>
          {(["predict", "performance", "history"] as const).map((tab) => (
            <button key={tab} style={tabStyle(activeTab === tab)} onClick={() => setActiveTab(tab)}>
              {tab === "predict" ? "🎯 Predict" : tab === "performance" ? "📊 Performance" : "📋 History"}
            </button>
          ))}
        </div>

        {/* ── Predict Tab ── */}
        {activeTab === "predict" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>

            {/* Input form */}
            <div style={cardStyle}>
              <div style={{ fontSize: "0.88rem", fontWeight: 600, marginBottom: "1.2rem" }}>Patient Data Input</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {[
                  { label: "Age", key: "age", type: "number" },
                  { label: "Gender", key: "gender", type: "select", options: ["Male", "Female"] },
                  { label: "Total Bilirubin", key: "totalBilirubin", type: "number" },
                  { label: "Direct Bilirubin", key: "directBilirubin", type: "number" },
                  { label: "Alkaline Phosphotase", key: "alkalinePhosphotase", type: "number" },
                  { label: "ALT (Alamine)", key: "alamineAminotransferase", type: "number" },
                  { label: "AST (Aspartate)", key: "aspartateAminotransferase", type: "number" },
                  { label: "Total Proteins", key: "totalProtiens", type: "number" },
                  { label: "Albumin", key: "albumin", type: "number" },
                  { label: "A/G Ratio", key: "agRatio", type: "number" },
                ].map((field) => (
                  <div key={field.key}>
                    <label style={{ fontSize: "0.75rem", color: "var(--text-secondary)", display: "block", marginBottom: "4px" }}>
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <select
                        style={inputStyle}
                        value={form[field.key as keyof PatientForm]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      >
                        {field.options?.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    ) : (
                      <input
                        type="number"
                        style={inputStyle}
                        value={form[field.key as keyof PatientForm]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      />
                    )}
                  </div>
                ))}
              </div>
              <button
                className="btn-primary"
                style={{ width: "100%", marginTop: "1.2rem", justifyContent: "center" }}
                onClick={handlePredict}
                disabled={loading}
              >
                {loading ? "Analyzing..." : "Run HepaXAI Prediction →"}
              </button>
            </div>

            {/* Results */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {prediction ? (
                <>
                  {/* Risk ring */}
                  <div style={cardStyle}>
                    <div style={{ fontSize: "0.88rem", fontWeight: 600, marginBottom: "1rem" }}>Prediction Results</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginBottom: "1.2rem" }}>
                      <div style={{
                        width: "80px", height: "80px", borderRadius: "50%",
                        background: `rgba(${prediction.risk >= 70 ? "239,68,68" : prediction.risk >= 40 ? "245,158,11" : "0,212,170"},0.15)`,
                        border: `3px solid ${getRiskColor(prediction.risk)}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexDirection: "column",
                      }}>
                        <div style={{ fontSize: "1.2rem", fontWeight: 800, color: getRiskColor(prediction.risk) }}>
                          {prediction.risk}%
                        </div>
                        <div style={{ fontSize: "0.6rem", color: "var(--text-secondary)" }}>Risk</div>
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, marginBottom: "4px" }}>
                          {prediction.risk >= 70 ? "High Cancer Risk" : prediction.risk >= 40 ? "Moderate Risk" : "Low Risk"}
                        </div>
                        <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                          Confidence: {prediction.confidence}%
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                      <div style={{ background: "var(--bg-secondary)", borderRadius: "8px", padding: "0.8rem" }}>
                        <div style={{ fontSize: "0.7rem", color: "var(--text-secondary)" }}>Tumor Stage</div>
                        <div style={{ fontWeight: 600, color: "#f59e0b" }}>{prediction.stage}</div>
                      </div>
                      <div style={{ background: "var(--bg-secondary)", borderRadius: "8px", padding: "0.8rem" }}>
                        <div style={{ fontSize: "0.7rem", color: "var(--text-secondary)" }}>Severity</div>
                        <div style={{ fontWeight: 600, color: getSeverityColor(prediction.severity) }}>{prediction.severity}</div>
                      </div>
                    </div>
                  </div>

                  {/* SHAP */}
                  <div style={cardStyle}>
                    <div style={{ fontSize: "0.88rem", fontWeight: 600, marginBottom: "1rem" }}>SHAP Explanation</div>
                    {prediction.shap.map((s) => (
                      <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                        <div style={{ fontSize: "0.75rem", width: "110px", flexShrink: 0 }}>{s.label}</div>
                        <div style={{ flex: 1, height: "8px", background: "rgba(255,255,255,0.06)", borderRadius: "4px", overflow: "hidden" }}>
                          <div style={{ width: `${s.value * 200}%`, height: "100%", background: s.positive ? "#ef4444" : "#4f8ef7", borderRadius: "4px" }} />
                        </div>
                        <div style={{ fontSize: "0.72rem", color: s.positive ? "#ef4444" : "#4f8ef7", width: "40px", textAlign: "right" }}>
                          {s.positive ? "+" : "-"}{s.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div style={{ ...cardStyle, display: "flex", alignItems: "center", justifyContent: "center", minHeight: "300px", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ fontSize: "3rem" }}>🧬</div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem", textAlign: "center" }}>
                    Enter patient data and click<br />"Run HepaXAI Prediction"
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── Performance Tab ── */}
        {activeTab === "performance" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={cardStyle}>
              <div style={{ fontSize: "0.88rem", fontWeight: 600, marginBottom: "1.2rem" }}>Baseline Comparison</div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
                <thead>
                  <tr>
                    {["Model", "Accuracy", "AUC-ROC", "F1-Score"].map((h) => (
                      <th key={h} style={{ textAlign: "left", padding: "8px 12px", color: "var(--text-secondary)", borderBottom: "1px solid var(--border)", fontWeight: 500 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {baselines.map((b) => (
                    <tr key={b.name} style={{ background: b.highlight ? "rgba(0,212,170,0.05)" : "transparent" }}>
                      <td style={{ padding: "10px 12px", fontWeight: b.highlight ? 600 : 400, color: b.highlight ? "var(--accent)" : "var(--text-primary)" }}>{b.name}</td>
                      <td style={{ padding: "10px 12px", color: b.highlight ? "var(--accent)" : "var(--text-primary)" }}>{b.acc}</td>
                      <td style={{ padding: "10px 12px", color: b.highlight ? "var(--accent)" : "var(--text-primary)" }}>{b.auc}</td>
                      <td style={{ padding: "10px 12px", color: b.highlight ? "var(--accent)" : "var(--text-primary)" }}>{b.f1}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={cardStyle}>
              <div style={{ fontSize: "0.88rem", fontWeight: 600, marginBottom: "1.2rem" }}>Ablation Study — Stream Contribution</div>
              {[
                { label: "Without Clinical Stream", drop: "-15%", width: "72%", color: "#ef4444" },
                { label: "Without Lab Stream", drop: "-11%", width: "55%", color: "#f59e0b" },
                { label: "Without Biospecimen", drop: "-6%", width: "30%", color: "#00d4aa" },
                { label: "Full Model (all streams)", drop: "87.3%", width: "87%", color: "#00d4aa" },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  <div style={{ fontSize: "0.82rem", width: "200px", flexShrink: 0 }}>{row.label}</div>
                  <div style={{ flex: 1, height: "8px", background: "rgba(255,255,255,0.06)", borderRadius: "4px", overflow: "hidden" }}>
                    <div style={{ width: row.width, height: "100%", background: row.color, borderRadius: "4px" }} />
                  </div>
                  <div style={{ fontSize: "0.78rem", color: row.color, width: "45px", textAlign: "right" }}>{row.drop}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── History Tab ── */}
        {activeTab === "history" && (
          <div style={cardStyle}>
            <div style={{ fontSize: "0.88rem", fontWeight: 600, marginBottom: "1.2rem" }}>Patient Prediction History</div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
                <thead>
                  <tr>
                    {["Patient ID", "Age", "Gender", "Risk", "Stage", "Severity", "Date"].map((h) => (
                      <th key={h} style={{ textAlign: "left", padding: "8px 12px", color: "var(--text-secondary)", borderBottom: "1px solid var(--border)", fontWeight: 500 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {history.map((p) => (
                    <tr key={p.id}>
                      <td style={{ padding: "10px 12px", color: "var(--text-primary)" }}>{p.id}</td>
                      <td style={{ padding: "10px 12px" }}>{p.age}</td>
                      <td style={{ padding: "10px 12px" }}>{p.gender}</td>
                      <td style={{ padding: "10px 12px" }}>
                        <span style={{
                          background: `rgba(${p.risk >= 70 ? "239,68,68" : p.risk >= 40 ? "245,158,11" : "0,212,170"},0.1)`,
                          color: getRiskColor(p.risk),
                          padding: "2px 10px", borderRadius: "20px", fontSize: "0.78rem", fontWeight: 600,
                        }}>
                          {p.risk}%
                        </span>
                      </td>
                      <td style={{ padding: "10px 12px" }}>{p.stage}</td>
                      <td style={{ padding: "10px 12px" }}>
                        <span style={{
                          background: `rgba(${p.severity === "Severe" ? "239,68,68" : p.severity === "Moderate" ? "245,158,11" : "0,212,170"},0.1)`,
                          color: getSeverityColor(p.severity),
                          padding: "2px 10px", borderRadius: "20px", fontSize: "0.78rem", fontWeight: 600,
                        }}>
                          {p.severity}
                        </span>
                      </td>
                      <td style={{ padding: "10px 12px", color: "var(--text-secondary)" }}>{p.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
