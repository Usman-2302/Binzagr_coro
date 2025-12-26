"use client";

import { Section } from "@/components/ui/section";
import { ExternalLink } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const suntopImg = "/assets/images/suntop.png";
const suncolaImg = "/assets/images/suncola.png";
const sunquickImg = "/assets/images/sunquick.png";

const brands = [
    { id: "suntop", name: "Suntop", tagline: "Pure Fruit Goodness", description: "Delicious fruit juices made from the finest ingredients, loved by children and adults alike. Available in multiple refreshing flavors.", image: suntopImg, link: "https://suntop.com.sa", color: "from-orange-400 to-yellow-400" },
    { id: "suncola", name: "Suncola", tagline: "Refreshingly Different", description: "A unique cola experience crafted specifically for the Saudi Arabian palate. The perfect blend of taste and refreshment.", image: suncolaImg, link: "https://suncola.com.sa", color: "from-red-500 to-orange-500" },
    { id: "sunquick", name: "Sunquick", tagline: "Concentrated Flavor", description: "Premium fruit concentrates that bring families together for moments of pure refreshment. Just add water for delicious drinks.", image: sunquickImg, link: "https://sunquick.com", color: "from-yellow-400 to-orange-400" },
];

export default function BrandsPage() {
    return (
        <>
            <section className="pt-32 pb-16 bg-gradient-dark">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">Our Brands</h1>
                    <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">Discover our portfolio of refreshing beverages loved across Saudi Arabia</p>
                </div>
            </section>

            {brands.map((brand, i) => (
                <Section key={brand.id} id={brand.id} className={i % 2 === 1 ? "bg-muted/10 py-32" : "py-32"}>
                    <div className="container mx-auto px-4">
                        <div className={`grid lg:grid-cols-2 gap-20 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className={`p-10 glass-card rounded-[3rem] ${i % 2 === 1 ? "lg:order-2" : ""}`}
                            >
                                <motion.h4
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
                                >
                                    Featured Brand
                                </motion.h4>
                                <h2 className="text-5xl font-black mb-4 text-secondary">{brand.name}</h2>
                                <p className="text-primary text-2xl font-black mb-6 italic">"{brand.tagline}"</p>
                                <p className="text-muted-foreground text-xl leading-relaxed mb-8">{brand.description}</p>
                                <Button asChild className="bg-gradient-primary hover:scale-105 transition-transform">
                                    <a href={brand.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                                        Visit Official Site <ExternalLink className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`relative group ${i % 2 === 1 ? "lg:order-1" : ""}`}
                            >
                                <BrandImage brand={brand} />
                            </motion.div>
                        </div>
                    </div>
                </Section>
            ))}

        </>
    );
}

import { Button } from "@/components/ui/button";

function BrandImage({ brand }: { brand: any }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={`relative bg-gradient-to-br ${brand.color} rounded-[4rem] p-16 flex items-center justify-center shadow-2xl`}
        >
            <motion.img
                style={{
                    translateZ: 100,
                }}
                src={brand.image}
                alt={brand.name}
                className="h-80 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
            {/* Gloss Highlight */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none rounded-[4rem]" />
        </motion.div>
    );
}
