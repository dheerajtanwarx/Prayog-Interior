"use client";

import { useRef, useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

const fieldClass =
  "w-full rounded-lg border border-copper/20 bg-copper/5 px-4 py-3 text-sm text-cream placeholder:text-ink-subtle outline-none transition-colors focus:border-copper/60 aria-[invalid=true]:border-red-400/60";

interface Enquiry {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Frontend-only contact form. There is no backend — submissions are composed
 * into a pre-filled email (mailto:) or WhatsApp chat (wa.me) and handed off to
 * the visitor's own mail/WhatsApp client.
 */
export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string | null>(null);

  function collect(): Enquiry | null {
    const form = formRef.current;
    if (!form) return null;
    const data = new FormData(form);
    const enquiry: Enquiry = {
      name: (data.get("name") as string)?.trim() ?? "",
      email: (data.get("email") as string)?.trim() ?? "",
      subject: (data.get("subject") as string)?.trim() ?? "",
      message: (data.get("message") as string)?.trim() ?? "",
    };

    if (!enquiry.name || !enquiry.email || !enquiry.message) {
      setError("Please add your name, email, and a short message first.");
      return null;
    }
    setError(null);
    return enquiry;
  }

  function buildBody(e: Enquiry) {
    const lines = [`Name: ${e.name}`, `Email: ${e.email}`];
    if (e.subject) lines.push(`Project type: ${e.subject}`);
    lines.push("", e.message);
    return lines.join("\n");
  }

  function sendEmail() {
    const enquiry = collect();
    if (!enquiry) return;
    const subject = enquiry.subject
      ? `Consultation request — ${enquiry.subject}`
      : "Consultation request";
    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(buildBody(enquiry))}`;
    window.location.href = href;
  }

  function sendWhatsApp() {
    const enquiry = collect();
    if (!enquiry) return;
    const text = `Hello ${site.name}, I'd like to request a consultation.\n\n${buildBody(
      enquiry,
    )}`;
    const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        sendEmail();
      }}
      className="flex flex-col gap-4"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="sr-only">
            Full name
          </label>
          <input id="name" name="name" type="text" required placeholder="Full name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input id="email" name="email" type="email" required placeholder="Email address" className={fieldClass} />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="sr-only">
          Project type
        </label>
        <input id="subject" name="subject" type="text" placeholder="Project type (e.g. residential, retail)" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your space and vision…"
          className={`${fieldClass} resize-none`}
        />
      </div>

      {error && (
        <p role="alert" className="text-[0.8rem] text-red-300">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-br from-copper to-terracotta px-8 py-4 text-[0.78rem] font-medium uppercase tracking-[0.1em] text-cream shadow-[0_4px_24px_rgba(193,127,89,0.25)] transition-all duration-500 ease-out-expo hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(193,127,89,0.4)]"
        >
          <Mail size={15} />
          Send via Email
        </button>
        <button
          type="button"
          onClick={sendWhatsApp}
          className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-copper/40 bg-copper/10 px-8 py-4 text-[0.78rem] font-medium uppercase tracking-[0.1em] text-cream transition-all duration-500 ease-out-expo hover:-translate-y-0.5 hover:border-copper hover:bg-copper/20"
        >
          <MessageCircle size={15} />
          Send via WhatsApp
        </button>
      </div>

      <p className="text-[0.72rem] leading-relaxed text-ink-subtle">
        Your details open in your own email or WhatsApp app — nothing is stored or sent automatically.
      </p>
    </form>
  );
}
