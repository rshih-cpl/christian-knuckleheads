"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface NewsletterFormProps {
  compact?: boolean;
}

export function NewsletterForm({ compact }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
        <span className="material-symbols-outlined align-middle mr-1" aria-hidden="true">
          check_circle
        </span>
        Welcome to the collective!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex ${compact ? "flex-col sm:flex-row" : "flex-col sm:flex-row"} gap-3`}>
      <label htmlFor={compact ? "footer-email" : "section-email"} className="sr-only">
        Email address
      </label>
      <input
        id={compact ? "footer-email" : "section-email"}
        type="email"
        required
        aria-required="true"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-2.5 bg-[var(--color-surface-container-low)] text-[var(--color-on-surface)] placeholder:text-[var(--color-outline)] ghost-border rounded-[4px] text-sm focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
      />
      <Button type="submit" loading={status === "loading"} size={compact ? "md" : "lg"}>
        Subscribe
      </Button>
      {status === "error" && (
        <p className="text-sm text-[var(--color-error)]" role="alert">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
