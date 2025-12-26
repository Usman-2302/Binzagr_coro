"use client";

import { motion } from "framer-motion";
import { Truck, MapPin, Globe } from "lucide-react";

const cities = [
    { name: "Riyadh", x: 600, y: 350, id: "riyadh" },
    { name: "Jeddah", x: 300, y: 400, id: "jeddah" },
    { name: "Dammam", x: 700, y: 250, id: "dammam" },
];

const connections = [
    { from: "Jeddah", to: "Riyadh" },
    { from: "Riyadh", to: "Dammam" },
];

export default function DistributionPage() {
    return (
        <div className="pt-24 min-h-screen bg-white">
            <section className="py-20 bg-secondary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Logistics Excellence
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black mb-6"
                    >
                        Nationwide <span className="text-gradient">Reach</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-primary-foreground/60 max-w-2xl mx-auto"
                    >
                        Our sophisticated distribution network ensures that refreshing moments are always within reach, across every corner of the Kingdom.
                    </motion.p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        {/* Stats */}
                        <div className="lg:col-span-1 space-y-8">
                            {[
                                { icon: <Truck />, title: "500+ Vehicles", desc: "A modern fleet optimized for temperature-controlled logistics." },
                                { icon: <MapPin />, title: "25 centers", desc: "Strategic distribution hubs across all major Saudi regions." },
                                { icon: <Globe />, title: "100% Coverage", desc: "Reaching over 30,000 retail outlets daily." },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 p-6 glass-card rounded-2xl"
                                >
                                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary text-lg">{stat.title}</h4>
                                        <p className="text-muted-foreground">{stat.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Interactive Map */}
                        <div className="lg:col-span-2 relative bg-secondary/5 rounded-3xl p-8 overflow-hidden min-h-[600px] flex items-center justify-center">
                            <svg
                                viewBox="0 0 1000 700"
                                className="w-full h-full max-w-3xl"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Simplified Saudi Arabia SVG Path */}
                                <motion.path
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    d="M250 150 L350 100 L550 80 L750 120 L850 250 L820 450 L700 550 L500 620 L300 580 L150 450 L180 250 Z"
                                    fill="currentColor"
                                    className="text-secondary/10"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />

                                {/* Animated Connections */}
                                {connections.map((conn, i) => {
                                    const from = cities.find(c => c.name === conn.from)!;
                                    const to = cities.find(c => c.name === conn.to)!;
                                    return (
                                        <motion.line
                                            key={i}
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 1, delay: 1.5 + i * 0.5 }}
                                            x1={from.x}
                                            y1={from.y}
                                            x2={to.x}
                                            y2={to.y}
                                            stroke="hsl(var(--primary))"
                                            strokeWidth="2"
                                            strokeDasharray="8 8"
                                        />
                                    );
                                })}

                                {/* City Dots */}
                                {cities.map((city, i) => (
                                    <g key={city.id}>
                                        <motion.circle
                                            initial={{ scale: 0 }}
                                            animate={{ scale: [1, 1.5, 1] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: 2 + i * 0.3 }}
                                            cx={city.x}
                                            cy={city.y}
                                            r="12"
                                            fill="hsl(var(--primary) / 0.2)"
                                        />
                                        <circle
                                            cx={city.x}
                                            cy={city.y}
                                            r="6"
                                            fill="hsl(var(--primary))"
                                        />
                                        <text
                                            x={city.x}
                                            y={city.y + 25}
                                            textAnchor="middle"
                                            className="fill-secondary font-bold text-sm"
                                        >
                                            {city.name}
                                        </text>
                                    </g>
                                ))}
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
