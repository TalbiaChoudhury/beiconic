"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main style={{ maxWidth: 900, margin: "7rem auto", padding: "2rem" }}>
      {/* Our Vision */}
      <section id="vision" style={{ marginBottom: "3rem" }}>
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "0.75rem",
            color: "var(--primary)",
          }}
        >
          Our Vision
        </h1>
        <p style={{ lineHeight: 1.6, color: "var(--foreground)" }}>
          It started as a passion project between two cousins — no audience, no
          investors, just belief.
          <br />
          <br />
          Personal trainers don’t get paid fairly in gyms. Many earn less than
          minimum wage after “gym rent” or 30–40 voluntary hours. Clients are
          stuck too: limited by location, confused by misinformation, and often
          pushed into low-quality online plans.
          <br />
          <br />
          That’s why we built Icon — the first expert-curated, AI-powered
          coaching platform. PTs get paid fairly. Users get world-class coaching
          at accessible prices.
          <br />
          <br />
          We had hundreds of developers apply and interviewed over 50. Now
          we’ve formed a strong in-house team across the globe, secured
          high-level investors and advisors, and reached a £500,000 valuation
          within two months.
          <br />
          <br />
          This is just the beginning — we aim to bring Icon to the world soon.
        </p>
      </section>

      {/* The Team */}
      <section id="team" style={{ marginBottom: "3rem" }}>
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "0.75rem",
            color: "var(--primary)",
          }}
        >
          The Team
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.25rem",
          }}
        >
          {/* Mish */}
          <article
            style={{
              background: "#1b1e1fff",
              border: "1px solid #333",
              borderRadius: 12,
              padding: "1rem",
              display: "flex",
              alignItems: "center", // <-- changed from flex-start
              gap: "1rem",
            }}
          >
            {/* Avatar */}
            <figure
              style={{
                flex: "0 0 auto",
                width: 125,
                height: 125,
                borderRadius: "9999px",
                overflow: "hidden",
                border: "1px solid #333",
                background: "#222",
                margin: 0,
              }}
            >
              <Image
                src="/assets/images/Team/mish.jpg"
                alt="Mish Choudhury"
                width={84}
                height={84}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </figure>

            {/* Text */}
            <div>
              <h3 style={{ margin: 0, fontSize: "1.1rem" }}>
                Mish Choudhury — Chief Vision Officer
              </h3>
              <p style={{ margin: "0.5rem 0 0", lineHeight: 1.6 }}>
                Entrepreneur and wellbeing specialist with 11+ years across
                coaching, product, and systems. Mish leads product vision and
                strategy for Icon — blending human-centred design with scalable
                AI so real coaches can support more people without losing their
                voice.
              </p>
            </div>
          </article>

          {/* Ephraim */}
          <article
            style={{
              background: "#1b1e1fff",
              border: "1px solid #333",
              borderRadius: 12,
              padding: "1rem",
              display: "flex",
              alignItems: "center", // <-- changed from flex-start
              gap: "1rem",
            }}
          >
            {/* Avatar */}
            <figure
              style={{
                flex: "0 0 auto",
                width: 125,
                height: 125,
                borderRadius: "9999px",
                overflow: "hidden",
                border: "1px solid #333",
                background: "#222",
                margin: 0,
              }}
            >
              <Image
                src="/assets/images/Team/ephraim.jpg"
                alt="Ephraim Lisk"
                width={84}
                height={84}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </figure>

            {/* Text */}
            <div>
              <h3 style={{ margin: 0, fontSize: "1.1rem" }}>
                Ephraim Lisk — Chief Marketing Officer
              </h3>
              <p style={{ margin: "0.5rem 0 0", lineHeight: 1.6 }}>
                Growth leader and creator with a multi-million-strong audience.
                Ephraim specialises in authentic storytelling and short-form
                content that converts attention into community — leading Icon’s
                brand, social, and go-to-market engine.
              </p>
            </div>
          </article>

          {/* Taseen */}
          <article
            style={{
              background: "#1b1e1fff",
              border: "1px solid #333",
              borderRadius: 12,
              padding: "1rem",
              display: "flex",
              alignItems: "center", // <-- changed from flex-start
              gap: "1rem",
            }}
          >
            {/* Avatar */}
            <figure
              style={{
                flex: "0 0 auto",
                width: 125,
                height: 125,
                borderRadius: "9999px",
                overflow: "hidden",
                border: "1px solid #333",
                background: "#222",
                margin: 0,
              }}
            >
              <Image
                src="/assets/images/Team/taseen.jpg"
                alt="Taseen Choudhury"
                width={84}
                height={84}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </figure>

            {/* Text */}
            <div>
              <h3 style={{ margin: 0, fontSize: "1.1rem" }}>
                Taseen Choudhury — Chief Operating Officer
              </h3>
              <p style={{ margin: "0.5rem 0 0", lineHeight: 1.6 }}>
                Operations and delivery. Taseen builds the systems that make Icon
                reliable at scale — from trainer onboarding and support to
                day-to-day ops — so users and coaches get a seamless experience.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Contact Us */}
      <section id="contact">
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "0.75rem",
            color: "var(--primary)",
          }}
        >
          Contact Us
        </h1>
        <p style={{ lineHeight: 1.6, marginBottom: "1rem" }}>
          We’d love to hear from you. Whether you’re a prospective user,
          trainer, or partner, drop us a line and we’ll get back to you.
        </p>

        <div
          style={{
            background: "#1b1e1fff",
            border: "1px solid #333",
            borderRadius: 12,
            padding: "1rem",
          }}
        >
          <ContactForm />
          <p
            style={{
              marginTop: "0.75rem",
              fontSize: "0.9rem",
              opacity: 0.8,
              textAlign: "center",
            }}
          >
            Submissions are sent to <b>contact@beiconic.app</b>.
          </p>
        </div>
      </section>
    </main>
  );
}

/* -------- Inline ContactForm component (posts to /api/contact) -------- */
function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    company: "", // honeypot
  });
  const [status, setStatus] = useState({ sending: false, message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.company) return; // bot caught
    setStatus({ sending: true, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          reason: form.reason,
          company: form.company,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to send message.");

      setStatus({ sending: false, message: "Thanks! We’ll be in touch shortly." });
      setForm({ name: "", email: "", phone: "", reason: "", company: "" });
    } catch (err) {
      setStatus({
        sending: false,
        message: err.message || "Something went wrong. Please try again.",
      });
    }
  };

  const inputBase = {
    borderRadius: 8,
    padding: "0.75rem",
    border: "1px solid #4a4a4a",
    background: "#ffffff",
    color: "#000000",
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <form onSubmit={onSubmit} className="contact-form" style={{ display: "grid", gap: "0.75rem" }}>
      {/* honeypot */}
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={onChange}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label style={{ display: "block", fontSize: 12, marginBottom: 6, fontWeight: 700 }}>
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Jane Doe"
          value={form.name}
          onChange={onChange}
          required
          style={inputBase}
        />
      </div>

      <div>
        <label style={{ display: "block", fontSize: 12, marginBottom: 6, fontWeight: 700 }}>
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={onChange}
          required
          style={inputBase}
        />
      </div>

      <div>
        <label style={{ display: "block", fontSize: 12, marginBottom: 6, fontWeight: 700 }}>
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="+44 7123 456789"
          value={form.phone}
          onChange={onChange}
          style={inputBase}
        />
      </div>

      <div>
        <label style={{ display: "block", fontSize: 12, marginBottom: 6, fontWeight: 700 }}>
          Reason for contacting us
        </label>
        <textarea
          name="reason"
          placeholder="How can we help?"
          rows={5}
          value={form.reason}
          onChange={onChange}
          required
          style={{ ...inputBase, resize: "vertical" }}
        />
      </div>

      <button
        type="submit"
        disabled={status.sending}
        style={{
          border: "none",
          borderRadius: 12,
          padding: "0.9rem 1.25rem",
          fontWeight: 700,
          background: "var(--primary)",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        {status.sending ? "Sending…" : "Send Message"}
      </button>

      {status.message && (
        <p style={{ textAlign: "center", fontSize: 14, opacity: 0.9 }}>{status.message}</p>
      )}
    </form>
  );
}
