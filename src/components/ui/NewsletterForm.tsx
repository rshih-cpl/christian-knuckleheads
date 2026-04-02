"use client";

import { useState } from "react";

interface NewsletterFormProps {
  compact?: boolean;
}

export function NewsletterForm({ compact }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <p className="text-body-md text-[var(--color-primary)] font-semibold">
        <span
          className="material-symbols-outlined align-middle mr-1"
          aria-hidden="true"
        >
          check_circle
        </span>
        Welcome to the collective!
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex ${compact ? "flex-col sm:flex-row" : "flex-col md:flex-row"} gap-0 w-full`}
    >
      <label
        htmlFor={compact ? "footer-email" : "section-email"}
        className="sr-only"
      >
        Email address
      </label>
      <input
        id={compact ? "footer-email" : "section-email"}
        type="email"
        required
        aria-required="true"
        placeholder="YOUR EMAIL ADDRESS"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-grow bg-[var(--color-surface-container-low)] border-none focus:ring-1 focus:ring-[var(--color-primary-container)] text-sm tracking-widest px-6 md:px-8 py-5 md:py-6 placeholder:text-white/20 text-[var(--color-on-surface)] font-[family-name:var(--font-body)]"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] px-8 md:px-12 py-5 md:py-6 font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all disabled:opacity-50 shrink-0"
      >
        {status === "loading" ? "..." : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="text-sm text-[var(--color-error)] mt-2" role="alert">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
