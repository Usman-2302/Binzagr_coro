"use client";

import { Section } from "@/components/ui/section";
import { ExternalLink } from "lucide-react";

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
                <Section key={brand.id} id={brand.id} className={i % 2 === 1 ? "bg-muted/30" : ""}>
                    <div className="container mx-auto px-4">
                        <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                            <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                                <h2 className="text-4xl font-bold mb-2">{brand.name}</h2>
                                <p className="text-primary text-xl font-medium mb-4">{brand.tagline}</p>
                                <p className="text-muted-foreground text-lg mb-6">{brand.description}</p>
                                <a href={brand.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary font-medium hover:underline">
                                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                            <div className={`relative bg-gradient-to-br ${brand.color} rounded-3xl p-12 flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                                <img src={brand.image} alt={brand.name} className="h-72 object-contain" />
                            </div>
                        </div>
                    </div>
                </Section>
            ))}
        </>
    );
}
