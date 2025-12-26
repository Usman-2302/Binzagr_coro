import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const logo = "/assets/images/logo.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Brands", path: "/brands" },
  { name: "Contact", path: "/contact" },
];

const brands = [
  { name: "Suntop", path: "/brands#suntop" },
  { name: "Suncola", path: "/brands#suncola" },
  { name: "Sunquick", path: "/brands#sunquick" },
];

export function Footer() {
  return (
    <footer className="relative bg-zinc-950 text-white overflow-hidden border-t border-white/5">
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/sources/company_bg.png"
          className="w-full h-full object-cover opacity-20 grayscale"
          alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40" />
      </div>

      {/* Subtle Accent Glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-primary/10 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
          {/* Company Info */}
          <div className="space-y-6">
            <img src={logo} alt="Binzagr Coro" className="h-7 w-auto brightness-0 invert opacity-90" />
            <div className="space-y-4">
              <h4 className="text-white font-bold text-xs tracking-widest uppercase italic">A Legacy of Collaboration</h4>
              <p className="text-white/60 text-xs leading-relaxed">
                Established in 1976, Binzagr Coro is a strategic joint venture between Binzagr Company and CO-RO A/S.
              </p>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <img src="/assets/sources/Best-place-to-work-PNG-768x257.png" className="h-8 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="GPTW" />
              <div className="h-6 w-px bg-white/10" />
              <a
                href="https://www.linkedin.com/company/binzagr-co-ro-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#0077b5] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Group */}
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-primary">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-white/60 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Brands */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-primary">Our Brands</h4>
              <ul className="space-y-3">
                {brands.map((brand) => (
                  <li key={brand.path}>
                    <Link
                      href={brand.path}
                      className="text-white/60 hover:text-primary transition-colors text-sm"
                    >
                      {brand.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Careers & Contact */}
          <div className="lg:col-span-1 space-y-10">
            {/* Careers Widget */}
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group">
              <h4 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors">Careers</h4>
              <p className="text-white/60 text-xs mb-4">Looking for a job? Join our growing team.</p>
              <a
                href="https://www.linkedin.com/company/binzagr-co-ro-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>Visit LinkedIn Page</span>
              </a>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-8 text-white">Contact Terminal</h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <span className="text-white/60 text-sm leading-relaxed">
                    Al Mahjar, Industrial Area South<br />
                    Jeddah 21411, Saudi Arabia
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <a
                    href="tel:+966126369626"
                    className="text-white/60 hover:text-white transition-colors text-sm font-medium"
                  >
                    +966 12 636 9626
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <a
                    href="mailto:info@binzagrcoro.com"
                    className="text-white/60 hover:text-white transition-colors text-sm font-medium"
                  >
                    info@binzagrcoro.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Binzagr Coro. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-white/40 hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/40 hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div >
    </footer >
  );
}
