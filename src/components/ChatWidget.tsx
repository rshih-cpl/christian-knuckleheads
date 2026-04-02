"use client";

export function ChatWidget() {
  return (
    <a
      href="mailto:hello@christianknuckleheads.com"
      aria-label="Chat with Mitch"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow-ambient hover:bg-[var(--color-primary-container)] transition-colors duration-200"
    >
      <span className="material-symbols-outlined text-2xl" aria-hidden="true">
        chat_bubble
      </span>
    </a>
  );
}
