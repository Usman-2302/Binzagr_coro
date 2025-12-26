"use client";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

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

            {/* Vertical Timeline */}
            <TimelineSection />
        </>
    );
}

const timelineData = [
    { year: "1976", title: "The Beginning", desc: "Joint venture established between Binzagr Company and CO-RO A/S." },
    { year: "1985", title: "Production Milestone", desc: "Our Jeddah facility reaches peak production capacity for Suntop." },
    { year: "2000", title: "Market Expansion", desc: "Expanded distribution to cover 100% of the Saudi market." },
    { year: "2015", title: "Modernization", desc: "Complete upgrade of manufacturing lines with European technology." },
    { year: "2023", title: "Vision 2030", desc: "Launch of new sustainability initiatives and packaging designs." },
];

function TimelineSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stately: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <section ref={containerRef} className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <SectionHeading title="Our Journey" subtitle="Decades of refreshing excellence" />

                <div className="relative mt-20">
                    {/* Central Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-secondary/10 hidden md:block" />
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-primary origin-top hidden md:block"
                    />

                    {/* Timeline Items */}
                    <div className="space-y-24">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className={`relative flex items-center justify-between md:justify-normal gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Date Bubble */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary border-4 border-white shadow-lg z-10 hidden md:flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-[45%]">
                                    <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                            <span className="text-6xl font-black">{item.year}</span>
                                        </div>
                                        <span className="text-primary font-black text-2xl mb-2 block">{item.year}</span>
                                        <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                                        <p className="text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
