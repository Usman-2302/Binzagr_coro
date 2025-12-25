import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Shield, Leaf, Award, Heart, Globe, Sparkles } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "ISO 22000 Certified",
    description: "Adhering to the highest international food safety standards.",
  },
  {
    icon: Leaf,
    title: "Quality Ingredients",
    description: "Using only the finest, carefully selected ingredients in all products.",
  },
  {
    icon: Award,
    title: "Great Place to Work",
    description: "Recognized for our exceptional workplace culture and employee satisfaction.",
  },
  {
    icon: Heart,
    title: "Trusted by Families",
    description: "Generations of Saudi families have made our brands part of their daily lives.",
  },
  {
    icon: Globe,
    title: "Danish Partnership",
    description: "Leveraging CO-RO's global expertise in beverage production.",
  },
  {
    icon: Sparkles,
    title: "Innovation Driven",
    description: "Continuously developing new flavors and products for evolving tastes.",
  },
];

export function WhyChooseUsSection() {
  return (
    <Section className="bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Why Choose Binzagr Coro"
          subtitle="What sets us apart in delivering refreshing experiences"
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
