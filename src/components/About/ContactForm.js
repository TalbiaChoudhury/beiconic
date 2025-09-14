"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    // simple honeypot
    company: ""
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
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message.");
      setStatus({ sending: false, message: "Thanks! We’ll be in touch shortly." });
      setForm({ name: "", email: "", phone: "", reason: "", company: "" });
    } catch (err) {
      setStatus({ sending: false, message: err.message || "Something went wrong." });
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 max-w-xl">
      {/* Honeypot (hidden) */}
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={onChange}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />
      <div className="flex flex-col">
        <label className="mb-1 text-sm">Name</label>
        <input
          className="rounded-md p-3 border border-neutral-700 bg-white text-black"
          type="text"
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Jane Doe"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm">Email</label>
        <input
          className="rounded-md p-3 border border-neutral-700 bg-white text-black"
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm">Phone</label>
        <input
          className="rounded-md p-3 border border-neutral-700 bg-white text-black"
          type="tel"
          name="phone"
          value={form.phone}
          onChange={onChange}
          placeholder="+44 7123 456789"
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm">Reason for contacting us</label>
        <textarea
          className="rounded-md p-3 border border-neutral-700 bg-white text-black"
          name="reason"
          value={form.reason}
          onChange={onChange}
          placeholder="How can we help?"
          rows={5}
          required
        />
      </div>

      <button
        type="submit"
        disabled={status.sending}
        className="rounded-lg px-5 py-3 font-semibold bg-[var(--primary)] text-white hover:opacity-90 transition"
      >
        {status.sending ? "Sending…" : "Send Message"}
      </button>

      {status.message && (
        <p className="text-sm text-center opacity-90">{status.message}</p>
      )}
    </form>
  );
}
