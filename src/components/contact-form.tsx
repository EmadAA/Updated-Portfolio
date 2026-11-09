"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
  maxLength: number;
  required?: boolean;
};

// Add, remove, or reorder fields here. The form renders from this list.
const FIELDS: Field[] = [
  { name: "name", label: "Your Name", type: "text", placeholder: "John Doe", maxLength: 100, required: true },
  { name: "email", label: "Your Email", type: "email", placeholder: "client@company.com", maxLength: 200, required: true },
  { name: "subject", label: "Subject", type: "text", placeholder: "New WooCommerce store project", maxLength: 150, required: true },
  { name: "message", label: "Message", type: "textarea", placeholder: "Tell me about your project, goals, or timeline...", maxLength: 5000, required: true },
];

const inputClass =
  "w-full rounded-md border border-[#244b3a]/30 bg-[#f7f4ea] px-3 py-2 text-sm text-[#101d18] placeholder-[#244b3a]/50 focus:border-[#5f8c6d] focus:outline-none disabled:opacity-60 dark:border-[#244b3a] dark:bg-[#101d18] dark:text-[#f7f4ea]";
const labelClass =
  "mb-1 block text-xs font-medium uppercase text-[#244b3a] dark:text-[#dfe8d9]/70";

type Status = { ok: boolean; message: string } | null;

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: hidden from people, filled in by bots
    if (String(data.get("website") ?? "")) return;

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();

    // Builds template params from the FIELDS config.
    // Keys are prefixed "from_" for name/email to match the EmailJS template.
    const params: Record<string, string> = {};
    for (const field of FIELDS) {
      params[field.name] = String(data.get(field.name) ?? "").trim();
    }
    params.from_name = name;
    params.from_email = email;
    params.reply_to = email;

    setSending(true);
    setStatus(null);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, {
        publicKey: PUBLIC_KEY,
      });
      form.reset();
      setStatus({ ok: true, message: "Message sent. Thank you, I'll reply soon." });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({ ok: false, message: "Failed to send. Please try again later." });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="rounded-lg border border-[#244b3a]/20 bg-[#dfe8d9]/30 p-6 dark:border-[#244b3a] dark:bg-[#244b3a]/30">
      <p className="mb-6 text-sm leading-relaxed text-[#244b3a] dark:text-[#dfe8d9]/80">
        Ready to design a new website, optimize an existing WooCommerce store,
        or automate your customer pipeline in GoHighLevel? Send a message
        directly:
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        {FIELDS.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className={labelClass}>
              {field.label}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                rows={5}
                required={field.required}
                maxLength={field.maxLength}
                placeholder={field.placeholder}
                disabled={sending}
                className={inputClass}
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                maxLength={field.maxLength}
                placeholder={field.placeholder}
                autoComplete={
                  field.type === "email" ? "email" : field.name === "name" ? "name" : "off"
                }
                disabled={sending}
                className={inputClass}
              />
            )}
          </div>
        ))}

        {/* Honeypot */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 rounded-md bg-[#5f8c6d] px-5 py-2.5 text-sm font-semibold text-[#f7f4ea] shadow-md transition hover:bg-[#244b3a] disabled:cursor-not-allowed disabled:opacity-60 dark:hover:bg-[#5f8c6d]/80"
          >
            <Send size={15} />
            {sending ? "Sending..." : "Send Inquiry"}
          </button>

          {status && (
            <p
              role="status"
              className={`text-sm ${
                status.ok ? "text-[#5f8c6d]" : "text-red-600 dark:text-red-400"
              }`}
            >
              {status.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}