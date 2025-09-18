"use client";
import { useEffect } from "react";

export default function ProspectusPage() {
  useEffect(() => {
    // Create a hidden link with the `download` attribute and click it.
    const a = document.createElement("a");
    a.href = "/prospectus.pdf"; // file in /public
    a.download = "Icon_Investor_Prospectus.pdf"; // suggested filename
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Fallback: after a short delay, navigate directly (covers browsers that ignore programmatic clicks)
    const t = setTimeout(() => {
      window.location.href = "/prospectus.pdf";
    }, 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <main style={{ padding: "6rem 2rem", textAlign: "center" }}>
      <h1 style={{ color: "var(--primary)" }}>Downloading prospectus…</h1>
      <p>If it doesn’t start, <a href="/prospectus.pdf" download>tap here to download</a>.</p>
    </main>
  );
}
