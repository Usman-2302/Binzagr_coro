"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const suntopImg = "/assets/images/suntop.png";
const suncolaImg = "/assets/images/suncola.png";
const sunquickImg = "/assets/images/sunquick.png";

const brands = [
    {
        id: "suntop",
        name: "Suntop",
        category: "Fruit Juice & Drinks",
        tagline: "Pure Fruit Goodness",
        description: "Delicious fruit juices made from the finest ingredients, loved by children and adults alike. Available in multiple refreshing flavors.",
        image: suntopImg,
        link: "https://suntop.com.sa",
        accent: "bg-orange-500",
        gradient: "from-orange-500/20 to-yellow-500/5"
    },
    {
        id: "suncola",
        name: "Suncola",
        category: "Carbonated Beverage",
        tagline: "Refreshingly Different",
        description: "A unique cola experience crafted specifically for the Saudi Arabian palate. The perfect blend of taste and refreshment.",
        image: suncolaImg,
        link: "https://suncola.com.sa",
        accent: "bg-red-600",
        gradient: "from-red-600/20 to-orange-600/5"
    },
    {
        id: "sunquick",
        name: "Sunquick",
        category: "Fruit Concentrate",
        tagline: "Concentrated Flavor",
        description: "Premium fruit concentrates that bring families together for moments of pure refreshment. Just add water for delicious drinks.",
        image: sunquickImg,
        link: "https://sunquick.com",
        accent: "bg-yellow-500",
        gradient: "from-yellow-500/20 to-orange-500/5"
    },
];

export default function BrandsPage() {
    return (
        <div className="bg-zinc-50 min-h-screen text-secondary overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/sources/binzagr_co_ro_ltd_cover.jpeg"
                        alt="Binzagr Co-Ro Portfolio"
                        className="w-full h-full object-cover opacity-90 scale-105 animate-subtle-zoom"
                    />
                    {/* Dark overlay for text readability, fading to white at bottom - adjusted to keep text area clear */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 from-0% via-black/50 via-20% to-black/70" />
                </div>

                <div className="container relative z-10 px-4 text-center h-full flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="space-y-6 mt-auto mb-auto"
                    >
                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white drop-shadow-2xl">
                            Our Brands
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-lg">
                            Decades of quality, innovation, and refreshing moments tailored for the region.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
                    >
                        <ArrowRight className="rotate-90 text-zinc-900 h-6 w-6" />
                    </motion.div>
                </div>
            </section>

            {/* Brand Showcases */}
            <div className="relative z-10 space-y-32 pb-32">
                {brands.map((brand, i) => (
                    <BrandSection key={brand.id} brand={brand} index={i} />
                ))}
            </div>
        </div>
    );
}

function BrandSection({ brand, index }: { brand: typeof brands[0], index: number }) {
    const isEven = index % 2 === 0;

    return (
        <section id={brand.id} className="container mx-auto px-4 py-12 md:py-24 relative group">
            {/* Ambient Background Glow */}
            <div className={`absolute inset-0 blur-[120px] -z-10 opacity-5 bg-gradient-brand-radial ${brand.gradient}`} />

            <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 relative perspective-1000"
                >
                    <div className="relative aspect-square md:aspect-[4/3] flex items-center justify-center">
                        {/* Decorative Circle */}
                        <div className="absolute inset-0 bg-secondary/5 rounded-full blur-3xl scale-75 opacity-30 group-hover:opacity-50 transition-opacity duration-700" />

                        <img
                            src={brand.image}
                            alt={brand.name}
                            className="relative z-10 w-3/4 h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-transform duration-700 group-hover:-translate-y-4 group-hover:scale-105"
                        />
                    </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-1/2 text-center lg:text-left space-y-8"
                >
                    <div>
                        <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-secondary/10 text-secondary`}>
                            {brand.category}
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black text-secondary tracking-tight mb-2">
                            {brand.name}
                        </h2>
                        <h3 className={`text-2xl md:text-3xl font-serif italic text-primary`}>
                            {brand.tagline}
                        </h3>
                    </div>

                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                        {brand.description}
                    </p>

                    <Button asChild size="lg" className={`${brand.accent} text-white border-0 hover:opacity-90 hover:scale-105 transition-all duration-300 rounded-full px-10 py-6 text-lg shadow-xl shadow-orange-500/10`}>
                        <a href={brand.link} target="_blank" rel="noopener noreferrer">
                            Explore {brand.name} <ExternalLink className="ml-2 h-5 w-5" />
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
