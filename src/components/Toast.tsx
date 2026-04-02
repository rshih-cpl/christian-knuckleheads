"use client";

import { createContext, useContext, useState, useCallback } from "react";

interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

interface ToastContextValue {
  addToast: (message: string, type?: Toast["type"]) => void;
}

const ToastContext = createContext<ToastContextValue>({ addToast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, type: Toast["type"] = "success") => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div
        className="fixed top-4 right-4 z-[100] flex flex-col gap-2 max-md:top-auto max-md:bottom-4 max-md:right-4 max-md:left-4"
        aria-live="polite"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="alert"
            className="flex items-center gap-3 px-4 py-3 bg-[var(--color-surface-container-highest)] text-[var(--color-on-surface)] shadow-ambient animate-[slideIn_0.2s_ease-out]"
          >
            <span className="material-symbols-outlined text-lg" aria-hidden="true">
              {toast.type === "success"
                ? "check_circle"
                : toast.type === "error"
                ? "error"
                : "info"}
            </span>
            <p className="text-sm flex-1">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]"
              aria-label="Dismiss notification"
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">
                close
              </span>
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
