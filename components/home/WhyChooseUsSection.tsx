import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Shield, Leaf, Award, Heart, Globe, Sparkles } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Heritage of Trust",
    description: "A cultural staple in Saudi households since 1976, built on decades of consistency.",
  },
  {
    icon: Sparkles,
    title: "Innovative Spirit",
    description: "Continuously evolving our portfolio to match modern lifestyles and preferences.",
  },
  {
    icon: Award,
    title: "Culture of Excellence",
    description: "Certified by Great Place to Work® for our commitment to people and development.",
  },
  {
    icon: Globe,
    title: "Global Partnership",
    description: "Synthesizing Binzagr's local market depth with Co-Ro's international standards.",
  },
  {
    icon: Shield,
    title: "Quality Promise",
    description: "Unwavering commitment to safety and freshness in every drop we produce.",
  },
  {
    icon: Leaf,
    title: "Community Growth",
    description: "Driving localized economic impact and sustainable practices for the next generation.",
  },
];

export function WhyChooseUsSection() {
  return (
    <Section className="bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="The Coro Difference"
          subtitle="Beyond manufacturing, we represent a legacy of quality and shared values."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-primary mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
