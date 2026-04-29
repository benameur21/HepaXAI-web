import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HepaXAI — Early Liver Cancer Detection",
  description:
    "A multimodal explainable deep learning framework for early Hepatocellular Carcinoma risk prediction using heterogeneous medical data.",
  keywords: [
    "liver cancer",
    "HCC",
    "explainable AI",
    "deep learning",
    "medical AI",
    "SHAP",
    "HepaXAI",
  ],
  authors: [{ name: "Islem Benameur", url: "https://github.com/benameur21" }],
  openGraph: {
    title: "HepaXAI — Early Liver Cancer Detection",
    description:
      "Explainable deep learning for early HCC risk prediction using heterogeneous medical data.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
