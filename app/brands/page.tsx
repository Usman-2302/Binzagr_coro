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
        description: "Delicious fruit juices made from the finest ingredients, loved by children and adults alike. A staple of Saudi heritage for generations.",
        flavors: ["Orange", "Berry Mix", "Apple", "Mango", "Mixed Fruit", "Pineapple", "Blackcurrant"],
        packaging: ["Tetra Pak 200ml", "Tetra Pak 1L", "PET Bottles"],
        productType: "Ready-to-Drink Juice",
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
        description: "A unique, non-carbonated cola experience crafted specifically for the regional palate. The perfect blend of deep cola taste and smooth refreshment.",
        flavors: ["Classic Cola"],
        packaging: ["Tetra Pak 200ml", "Tetra Pak 1L", "Cans 330ml"],
        productType: "Non-Carbonated Beverage",
        image: suncolaImg,
        link: "https://www.suncola.com",
        accent: "bg-red-600",
        gradient: "from-red-600/20 to-orange-600/5"
    },
    {
        id: "sunquick",
        name: "Sunquick",
        category: "Fruit Concentrate",
        tagline: "Concentrated Flavor",
        description: "Premium fruit concentrates that bring families together. Made with real fruit juice, one bottle creates liters of delicious refreshing moments.",
        flavors: ["Orange", "Tropical", "Mandarin", "Lemon", "Mixed Berries"],
        packaging: ["PET Bottles 330ml", "PET Bottles 700ml"],
        productType: "Fruit Concentrate",
        image: sunquickImg,
        link: "https://www.sunquick.com",
        accent: "bg-yellow-500",
        gradient: "from-yellow-500/20 to-orange-500/5"
    },
];

export default function BrandsPage() {
    return (
        <div className="bg-zinc-50 min-h-screen text-secondary overflow-hidden">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-black">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/sources/binzagr_co_ro_ltd_cover.jpeg"
                        alt="Binzagr Co-Ro Portfolio"
                        className="w-full h-full object-cover opacity-90 scale-105 animate-subtle-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="space-y-6"
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter text-white drop-shadow-2xl">
                            Our <span className="text-primary">Brands</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-lg">
                            Decades of quality, innovation, and refreshing moments tailored for the region.
                        </p>
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
                        <h2 className="text-5xl md:text-7xl font-bold text-secondary tracking-tight mb-2">
                            {brand.name}
                        </h2>
                        <h3 className={`text-2xl md:text-3xl font-serif italic text-primary`}>
                            {brand.tagline}
                        </h3>
                    </div>

                    <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                        {brand.description}
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {brand.flavors.map((flavor, idx) => (
                            <span key={idx} className="px-3 py-1 rounded-lg bg-zinc-100 text-secondary/60 text-[10px] font-semibold uppercase tracking-widest border border-zinc-200">
                                {flavor}
                            </span>
                        ))}
                    </div>

                    <div className="space-y-4 pt-4">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-semibold uppercase tracking-wider text-secondary/40">Product Type:</span>
                            <span className="text-sm font-bold text-secondary">{brand.productType}</span>
                        </div>
                        <div>
                            <div className="text-xs font-semibold uppercase tracking-wider text-secondary/40 mb-2">Available Formats:</div>
                            <div className="flex flex-wrap gap-2">
                                {brand.packaging.map((format, idx) => (
                                    <span key={idx} className="px-3 py-1 rounded-lg bg-white text-secondary text-xs font-bold border border-zinc-200">
                                        {format}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

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
