"use client";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const missionImg = "/assets/images/mission.png";
const aboutVideo = "/assets/videos/about_binzagr.mp4";

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 bg-gradient-dark">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">About Us</h1>
                    <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">A legacy of quality, trust, and refreshing moments since 1976</p>
                </div>
            </section>

            {/* Story */}
            <Section>
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionHeading title="Our Story" align="left" />
                            <div className="space-y-4 text-muted-foreground">
                                <p>Binzagr Coro is a successful joint venture established in 1976 between Binzagr Company, one of Saudi Arabia's oldest business houses, and CO-RO A/S, a Danish leader in beverage production.</p>
                                <p>For over 45 years, we have been dedicated to producing high-quality fruit juices and beverages that bring joy to millions of families across the Kingdom.</p>
                                <p>Our state-of-the-art manufacturing facility in Jeddah produces some of Saudi Arabia's most beloved beverage brands including Suntop, Suncola, and Sunquick.</p>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-xl">
                            <video controls className="w-full">
                                <source src={aboutVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Mission */}
            <Section className="bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <img src={missionImg} alt="Mission" className="rounded-2xl shadow-xl" />
                        <div>
                            <SectionHeading title="Our Mission" align="left" />
                            <p className="text-muted-foreground text-lg">To deliver premium quality beverages that refresh and delight our consumers while maintaining the highest standards of food safety, sustainability, and corporate responsibility.</p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
