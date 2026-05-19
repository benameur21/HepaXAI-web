import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch("http://localhost:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json(
        { error: `FastAPI error: ${error}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error("Prediction error:", error);
    return NextResponse.json(
      { error: "Failed to connect to HepaXAI model server. Make sure FastAPI is running on port 8000." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const response = await fetch("http://localhost:8000/health");
    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { status: "offline", model_loaded: false },
      { status: 503 }
    );
  }
}