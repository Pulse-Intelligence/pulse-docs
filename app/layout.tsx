import { RootProvider } from "fumadocs-ui/provider/next";
import { Analytics } from "@vercel/analytics/next";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import "fumadocs-ui/style.css";
import "./global.css";

export const metadata: Metadata = {
  title: {
    default: "Pulse Documentation",
    template: "%s | Pulse Docs",
  },
  description:
    "Documentation for the Pulse platform — build LLM-powered applications with visual workflows, RAG pipelines, and plugin-based model management.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Pulse Documentation",
    description: "Build LLM-powered applications with Pulse",
    siteName: "Pulse Docs",
    type: "website",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <RootProvider>{children}</RootProvider>
        <Analytics />
      </body>
    </html>
  );
}
