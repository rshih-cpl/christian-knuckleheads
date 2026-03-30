"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type FieldErrors = Partial<Record<"name" | "email" | "address", string>>;

export function OrderForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [dedication, setDedication] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = "Full name is required";
    if (!email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Enter a valid email";
    if (!address.trim()) next.address = "Shipping address is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          address: address.trim(),
          dedication: dedication.trim() || undefined,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setServerError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSuccess(true);
    } catch {
      setServerError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div
        className="rounded-[4px] bg-[var(--color-surface-container-low)] p-8 text-center shadow-ambient"
        role="status"
        aria-live="polite"
      >
        <span className="material-symbols-outlined text-4xl text-[var(--color-primary)]" aria-hidden="true">
          mark_email_read
        </span>
        <p className="text-headline-sm text-[var(--color-primary)] mt-4">Request received</p>
        <p className="text-body-md text-[var(--color-on-surface-variant)] mt-2 max-w-md mx-auto">
          Thank you. You will receive payment instructions via email shortly.
        </p>
      </div>
    );
  }

  const baseInput =
    "w-full px-4 py-3 bg-[var(--color-surface-container-low)] text-[var(--color-on-surface)] placeholder:text-[var(--color-outline)] ghost-border rounded-[4px] text-body-md focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]";

  const inputClass = (field: keyof FieldErrors) =>
    [baseInput, errors[field] ? "ring-2 ring-[var(--color-error)] ring-offset-2 ring-offset-[var(--color-surface)]" : ""]
      .filter(Boolean)
      .join(" ");

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="order-name" className="text-title-sm text-[var(--color-on-surface)] block mb-2">
          Full Name <span className="text-[var(--color-error)]">*</span>
        </label>
        <input
          id="order-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
          }}
          className={inputClass("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "order-name-error" : undefined}
        />
        {errors.name && (
          <p id="order-name-error" className="text-label-md text-[var(--color-error)] mt-1" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="order-email" className="text-title-sm text-[var(--color-on-surface)] block mb-2">
          Email <span className="text-[var(--color-error)]">*</span>
        </label>
        <input
          id="order-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
          }}
          className={inputClass("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "order-email-error" : undefined}
        />
        {errors.email && (
          <p id="order-email-error" className="text-label-md text-[var(--color-error)] mt-1" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="order-address" className="text-title-sm text-[var(--color-on-surface)] block mb-2">
          Shipping Address <span className="text-[var(--color-error)]">*</span>
        </label>
        <textarea
          id="order-address"
          name="address"
          rows={4}
          autoComplete="street-address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            if (errors.address) setErrors((p) => ({ ...p, address: undefined }));
          }}
          className={inputClass("address")}
          aria-invalid={!!errors.address}
          aria-describedby={errors.address ? "order-address-error" : undefined}
        />
        {errors.address && (
          <p id="order-address-error" className="text-label-md text-[var(--color-error)] mt-1" role="alert">
            {errors.address}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="order-dedication" className="text-title-sm text-[var(--color-on-surface)] block mb-2">
          Autograph Dedication <span className="text-label-md font-normal">(optional)</span>
        </label>
        <input
          id="order-dedication"
          name="dedication"
          type="text"
          placeholder="e.g. For Sarah"
          value={dedication}
          onChange={(e) => setDedication(e.target.value)}
          className={baseInput}
        />
      </div>

      {serverError && (
        <p className="text-body-md text-[var(--color-error)]" role="alert">
          {serverError}
        </p>
      )}

      <Button type="submit" className="w-full" size="lg" loading={loading}>
        Submit Order Request
      </Button>
      <p className="text-center text-label-md text-[var(--color-outline)]">
        You will receive payment instructions via email.
      </p>
    </form>
  );
}
