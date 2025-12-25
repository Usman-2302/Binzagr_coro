"use client";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "@/hooks/use-in-view";
import { useCounter } from "@/hooks/use-counter";
import { useEffect } from "react";
import { Award, Users, Building, Calendar } from "lucide-react";

const stats = [
  {
    id: "years",
    value: 45,
    suffix: "+",
    label: "Years of Excellence",
    icon: Calendar,
    color: "text-primary",
  },
  {
    id: "employees",
    value: 300,
    suffix: "+",
    label: "Team Members",
    icon: Users,
    color: "text-accent",
  },
  {
    id: "products",
    value: 50,
    suffix: "+",
    label: "Products",
    icon: Building,
    color: "text-accent-yellow",
  },
  {
    id: "certifications",
    value: 5,
    suffix: "",
    label: "Quality Certifications",
    icon: Award,
    color: "text-primary",
  },
];

function StatCard({
  stat,
  isInView,
}: {
  stat: (typeof stats)[0];
  isInView: boolean;
}) {
  const { count, startAnimation } = useCounter({
    end: stat.value,
    duration: 2000,
  });

  useEffect(() => {
    if (isInView) {
      startAnimation();
    }
  }, [isInView, startAnimation]);

  const Icon = stat.icon;

  return (
    <div className="text-center group">
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
        <Icon className="h-8 w-8" />
      </div>
      <p className="text-4xl md:text-5xl font-bold mb-2">
        {count}
        {stat.suffix}
      </p>
      <p className="text-muted-foreground">{stat.label}</p>
    </div>
  );
}

export function StatsSection() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <Section className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4" ref={ref}>
        <SectionHeading
          title="Numbers That Speak"
          subtitle="Our commitment to excellence reflected in every metric"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} isInView={isInView} />
          ))}
        </div>
      </div>
    </Section>
  );
}
