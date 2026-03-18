import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import "fumadocs-ui/style.css";
import "./global.css";

export const metadata: Metadata = {
  title: "Pulse Documentation",
  description: "Documentation for the Pulse platform",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
