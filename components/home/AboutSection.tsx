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
              title="About Binzagr Coro"
              subtitle="A Legacy of Quality and Trust"
              align="left"
              className="mb-8"
            />
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded in 1976, Binzagr Coro is a successful joint venture between
              Binzagr Company, one of Saudi Arabia's oldest and most respected
              business houses, and CO-RO A/S, a Danish leader in beverage production.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For over 45 years, we have been committed to delivering premium quality
              beverages that bring joy to millions of families across the Kingdom.
              Our state-of-the-art facilities in Jeddah produce some of the most
              beloved beverage brands in Saudi Arabia.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-gradient-primary hover:opacity-90 group">
                <Link href="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-primary rounded-3xl p-12 aspect-square flex items-center justify-center">
              <img
                src={logoIcon}
                alt="Binzagr Coro"
                className="w-48 h-48 object-contain animate-spin-slow"
              />
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-3xl border-4 border-primary/30 animate-pulse" />
              <div className="absolute -inset-4 rounded-3xl border border-primary/20" />
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
