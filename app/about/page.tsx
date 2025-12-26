"use client";

import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

const missionImg = "/assets/images/mission.png";
const aboutVideo = "/assets/videos/about_binzagr.mp4";

export default function AboutPage() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            {/* Hero */}
            <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <img src="/assets/sources/1W7A0491-scaled.jpg" className="w-full h-full object-cover opacity-60" alt="Binzagr Heritage" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6"
                    >
                        Established 1976
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-black text-white mb-8"
                    >
                        Quality Beyond <br /> <span className="text-gradient">Boundaries</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
                    >
                        A powerful partnership between Saudi excellence and Danish innovation,
                        refreshing millions of families for nearly five decades.
                    </motion.p>
                </div>
            </section>

            {/* Story */}
            <Section>
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="w-20 h-1.5 bg-primary" />
                            <SectionHeading title="The Joint Venture" align="left" />
                            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed italic border-l-4 border-primary/20 pl-8">
                                <p>
                                    Established in 1976, Binzagr Coro represents a strategic union between <strong>Binzagr Company</strong>—one of Saudi Arabia's most prestigious business houses—and <strong>CO-RO A/S</strong>, a Danish leader in beverage production.
                                </p>
                            </div>
                            <div className="grid gap-4 pt-4">
                                {[
                                    "Transfer of international production standards to Saudi Arabia.",
                                    "Unmatched distribution velocity across the Kingdom.",
                                    "Home to beloved brands: Suntop, Suncola, and Sunquick."
                                ].map((point, i) => (
                                    <div key={i} className="flex items-center gap-3 font-bold text-secondary">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        {point}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative group rounded-3xl overflow-hidden shadow-2xl bg-black">
                            <video
                                ref={videoRef}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover aspect-video"
                            >
                                <source src={aboutVideo} type="video/mp4" />
                            </video>

                            {/* Video Controls Overlay */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button
                                    onClick={togglePlay}
                                    className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                                    aria-label={isPlaying ? "Pause video" : "Play video"}
                                >
                                    {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Mission */}
            <Section className="bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-5 gap-16 items-center">
                        <div className="lg:col-span-2">
                            <div className="relative flex items-center justify-center">
                                <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                                <img
                                    src={missionImg}
                                    alt="Mission"
                                    className="relative w-full max-w-[280px] h-auto object-contain animate-float drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-3 space-y-6">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-2">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-xs font-black uppercase tracking-widest">Our Commitment</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-secondary leading-tight uppercase">Our <span className="text-primary italic">Mission</span></h2>
                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">To deliver premium quality beverages that refresh and delight our consumers while maintaining the highest standards of food safety, sustainability, and corporate responsibility.</p>
                            <div className="h-1 w-24 bg-primary/30 rounded-full" />
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
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <section ref={containerRef} className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <SectionHeading title="Our Journey" subtitle="Decades of refreshing excellence" />

                <div className="relative mt-20">
                    {/* Central Line */}
                    <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-secondary/10" />
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-primary origin-top"
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
                                className={`relative flex items-center justify-start md:justify-normal gap-12 md:gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Date Bubble */}
                                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary border-4 border-white shadow-lg z-10 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-[45%] pl-12 md:pl-0">
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
