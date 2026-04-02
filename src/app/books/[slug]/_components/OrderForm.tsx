"use client";

import { useState } from "react";

type FieldErrors = Partial<Record<"name" | "email" | "address", string>>;

export function OrderForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [dedication, setDedication] = useState("");
  const [payment, setPayment] = useState("Zelle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = "Full name is required";
    if (!email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = "Enter a valid email";
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
          payment,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setServerError(
          data.error ?? "Something went wrong. Please try again."
        );
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
        className="bg-[var(--color-surface-container-low)] p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <span
          className="material-symbols-outlined text-4xl text-[var(--color-primary-container)]"
          aria-hidden="true"
        >
          mark_email_read
        </span>
        <p className="font-[family-name:var(--font-headline)] text-2xl mt-4">
          Request received
        </p>
        <p className="text-[var(--color-secondary)] mt-2 max-w-md mx-auto">
          Thank you. You will receive payment instructions via email shortly.
        </p>
      </div>
    );
  }

  const baseInput =
    "w-full bg-[var(--color-surface-container-highest)] border-none p-4 text-white placeholder:text-white/20 focus:ring-2 focus:ring-[var(--color-primary-container)] outline-none text-sm";

  const inputClass = (field: keyof FieldErrors) =>
    [
      baseInput,
      errors[field]
        ? "ring-2 ring-[var(--color-error)]"
        : "",
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8" noValidate>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="order-name"
          className="text-[10px] text-[var(--color-secondary)] uppercase tracking-widest font-bold"
        >
          Full Name
        </label>
        <input
          id="order-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name for the note"
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
          <p
            id="order-name-error"
            className="text-xs text-[var(--color-error)]"
            role="alert"
          >
            {errors.name}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="order-email"
            className="text-[10px] text-[var(--color-secondary)] uppercase tracking-widest font-bold"
          >
            Email Address
          </label>
          <input
            id="order-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email)
                setErrors((p) => ({ ...p, email: undefined }));
            }}
            className={inputClass("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "order-email-error" : undefined}
          />
          {errors.email && (
            <p
              id="order-email-error"
              className="text-xs text-[var(--color-error)]"
              role="alert"
            >
              {errors.email}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="order-payment"
            className="text-[10px] text-[var(--color-secondary)] uppercase tracking-widest font-bold"
          >
            Payment Method
          </label>
          <select
            id="order-payment"
            name="payment"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            className="w-full bg-[var(--color-surface-container-highest)] border-none p-4 text-white focus:ring-2 focus:ring-[var(--color-primary-container)] outline-none text-sm"
          >
            <option>Zelle</option>
            <option>Venmo</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="order-address"
          className="text-[10px] text-[var(--color-secondary)] uppercase tracking-widest font-bold"
        >
          Shipping Address
        </label>
        <textarea
          id="order-address"
          name="address"
          rows={3}
          autoComplete="street-address"
          placeholder="Street, City, State, ZIP"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            if (errors.address)
              setErrors((p) => ({ ...p, address: undefined }));
          }}
          className={`${inputClass("address")} resize-none`}
          aria-invalid={!!errors.address}
          aria-describedby={
            errors.address ? "order-address-error" : undefined
          }
        />
        {errors.address && (
          <p
            id="order-address-error"
            className="text-xs text-[var(--color-error)]"
            role="alert"
          >
            {errors.address}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="order-dedication"
          className="text-[10px] text-[var(--color-secondary)] uppercase tracking-widest font-bold"
        >
          Autograph Dedication{" "}
          <span className="text-white/20">(optional)</span>
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
        <p className="text-sm text-[var(--color-error)]" role="alert">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-5 bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] font-bold text-lg hover:brightness-110 transition-all uppercase tracking-widest disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Request Autographed Copy"}
      </button>
      <p className="text-center text-xs text-white/40">
        We will contact you via email with payment details to confirm your
        order.
      </p>
    </form>
  );
}
