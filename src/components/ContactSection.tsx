import { Mail, Phone, MapPin, MessageCircle, Instagram, Linkedin, Facebook } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { ContactForm } from "./ContactForm";

const details = [
  { icon: Phone, label: "Call us", value: site.phone, href: `tel:${site.phoneHref}` },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.phone,
    href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
      `Hello ${site.name}, I'd like to request a consultation.`,
    )}`,
  },
  { icon: Mail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Visit us", value: site.address, href: "#map" },
];

const socials = [
  { icon: Instagram, href: site.social.instagram, label: "Instagram" },
  { icon: Linkedin, href: site.social.linkedin, label: "LinkedIn" },
  { icon: Facebook, href: site.social.facebook, label: "Facebook" },
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-bg-elevated py-[clamp(5rem,12vh,9rem)]">
      <div className="container-px">
        <SectionHeading
          label="Get in Touch"
          title={
            <>
              Let&rsquo;s design your <em>next space</em>
            </>
          }
          description="Whether it's a home, a showroom, or an office — tell us about your project and we'll turn your vision into a refined reality."
          className="mb-[clamp(3rem,5vw,4rem)]"
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: details + map */}
          <Reveal direction="right" className="flex flex-col gap-6">
            <ul className="flex flex-col gap-4">
              {details.map((d) => (
                <li key={d.label}>
                  <a
                    href={d.href}
                    {...(d.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="card-hairline flex items-center gap-4 rounded-xl bg-bg p-5 transition-transform duration-500 ease-out-expo hover:-translate-y-0.5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-copper/15 bg-copper/10 text-copper-light">
                      <d.icon size={20} />
                    </span>
                    <span>
                      <span className="block text-[0.7rem] uppercase tracking-[0.12em] text-ink-muted">
                        {d.label}
                      </span>
                      <span className="text-[0.95rem] text-cream">{d.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Google Maps placeholder */}
            <div
              id="map"
              className="card-hairline relative flex h-56 items-center justify-center overflow-hidden rounded-2xl bg-bg"
              role="img"
              aria-label="Map showing studio location in Jaipur, Rajasthan"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(193,127,89,0.12),transparent_60%)]" />
              <div className="relative flex flex-col items-center gap-2 text-center">
                <MapPin size={28} className="text-copper-light" />
                <span className="text-sm font-medium text-cream">{site.address}</span>
                <span className="text-[0.72rem] uppercase tracking-[0.12em] text-ink-subtle">
                  Google Maps Embed
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-copper/15 text-ink-muted transition-all hover:border-copper hover:bg-copper/10 hover:text-copper-light"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal className="card-hairline rounded-2xl bg-bg p-[clamp(1.5rem,3vw,2.5rem)]">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
