"use client";
import { useEffect } from "react";

export default function ProspectusPage() {
  useEffect(() => {
    // Start download via API route
    window.location.href = "/api/prospectus";
  }, []);

  return (
    <main style={{ padding: "6rem 2rem", textAlign: "center" }}>
      <h1 style={{ color: "var(--primary)" }}>Downloading prospectus…</h1>
      <p>If it doesn’t start, <a href="/api/prospectus">tap here</a>.</p>
    </main>
  );
}
