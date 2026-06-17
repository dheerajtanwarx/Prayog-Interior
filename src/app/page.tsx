import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { Marquee } from "@/components/Marquee";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessSection } from "@/components/ProcessSection";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { site } from "@/data/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "InteriorDesignBusiness",
  name: site.name,
  description: site.description,
  email: site.email,
  telephone: site.phoneHref,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero />
      <AboutSection />
      <Marquee />
      <ServicesSection />
      <ProjectsSection />
      <PortfolioSection />
      <WhyChooseUs />
      <ProcessSection />
      <Testimonials />
      <CTASection />
      <ContactSection />
    </>
  );
}
