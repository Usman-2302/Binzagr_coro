"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const logo = "/assets/images/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Brands", path: "/brands", hasMegaMenu: true },
  { name: "Logistics", path: "/distribution" },
  { name: "Contact", path: "/contact" },
];

const brandsMenuData = [
  { name: "Suntop", icon: "/assets/images/suntop.png", path: "/brands#suntop" },
  { name: "Suncola", icon: "/assets/images/suncola.png", path: "/brands#suncola" },
  { name: "Sunquick", icon: "/assets/images/sunquick.png", path: "/brands#sunquick" },
];


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <img
            src={logo}
            alt="Binzagr Coro"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.path}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative py-4"
            >
              <Link
                href={link.path}
                className={cn(
                  "relative flex items-center gap-1 text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary",
                  pathname === link.path
                    ? "text-primary"
                    : isScrolled
                      ? "text-secondary"
                      : "text-secondary"
                )}
              >
                {link.name}
                {link.hasMegaMenu && <ChevronDown className={cn("w-4 h-4 transition-transform", hoveredLink === link.name && "rotate-180")} />}
                {pathname === link.path && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-primary rounded-full"
                  />
                )}
              </Link>

              <AnimatePresence>
                {link.hasMegaMenu && hoveredLink === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[400px] glass-card rounded-2xl p-6 mt-2 grid grid-cols-3 gap-4"
                  >
                    {brandsMenuData.map((brand) => (
                      <Link
                        key={brand.name}
                        href={brand.path}
                        className="group flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-secondary/5 transition-colors"
                      >
                        <div className="w-16 h-16 rounded-lg bg-secondary/5 p-2 flex items-center justify-center">
                          <img src={brand.icon} alt={brand.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                        </div>
                        <span className="text-xs font-bold text-secondary">{brand.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>


        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild className="bg-gradient-primary hover:opacity-90 transition-opacity">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-10 p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-secondary" />
          ) : (
            <Menu className="h-6 w-6 text-secondary" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/98 backdrop-blur-md md:hidden transition-all duration-300",
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "text-2xl font-semibold transition-colors",
                  pathname === link.path
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild size="lg" className="bg-gradient-primary mt-4">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
