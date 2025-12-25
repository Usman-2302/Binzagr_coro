import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const logo = "/assets/images/logo.png";
const footerBg = "/assets/images/footer_bg.png";

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
    <footer className="relative bg-secondary text-secondary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Orange Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img src={logo} alt="Binzagr Coro" className="h-10 w-auto brightness-0 invert" />
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              A joint venture between Binzagr Company and CO-RO A/S, bringing refreshing beverages to Saudi Arabia since 1976.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
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
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/70 text-sm">
                  Al Mahjar, Jeddah<br />
                  Saudi Arabia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+966126369626"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  +966 12 636 9626
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:info@binzagrcoro.com"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  info@binzagrcoro.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/50 text-sm">
              © {new Date().getFullYear()} Binzagr Coro. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-secondary-foreground/50 hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-secondary-foreground/50 hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
