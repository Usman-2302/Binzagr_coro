import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight } from "lucide-react";

const logoIcon = "/assets/images/logo-icon.png";

export function AboutSection() {
  return (
    <Section className="bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <SectionHeading
              title="Enterprise Scale"
              subtitle="Manufacturing Excellence in Saudi Arabia"
              align="left"
              className="mb-8"
            />
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Established in 1976, Binzagr Coro is a strategic union between <strong>Binzagr Company</strong> and <strong>CO-RO A/S</strong>.
                We have redefined the beverage landscape in the Kingdom through industrial precision and international safety standards.
              </p>
              <p>
                Our Jeddah-based facility is one of the region's most sophisticated manufacturing hubs,
                producing the brands that Saudi families have trusted for nearly five decades.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-secondary text-white hover:bg-primary transition-all duration-500 rounded-full px-10 shadow-xl group">
                <Link href="/about" className="flex items-center gap-3">
                  <span className="font-black uppercase tracking-wider text-sm">Learn More About Us</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-square flex items-center justify-center shadow-2xl">
              <img
                src="/assets/sources/1W7A0711-scaled.jpg"
                alt="Binzagr Manufacturing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-12 h-1 bg-primary mb-4" />
                <h4 className="text-white font-black text-xl italic leading-tight">Jeddah <br /> Manufacturing Hub</h4>
              </div>
            </div>
            {/* Stats */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl shadow-lg p-6">
              <p className="text-4xl font-bold text-primary">45+</p>
              <p className="text-muted-foreground text-sm">Years of Excellence</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-background rounded-2xl shadow-lg p-6">
              <p className="text-4xl font-bold text-accent">300+</p>
              <p className="text-muted-foreground text-sm">Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
