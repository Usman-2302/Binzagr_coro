import { motion } from "framer-motion";

const certifications = [
    "ISO 9001",
    "ISO 22000",
    "SASO QUALITY MARK",
    "HACCP CERTIFIED",
    "SFDA APPROVED",
    "VISION 2030 ALIGNED"
];

export function TrustTicker() {
    return (
        <div className="bg-secondary/5 border-y border-secondary/10 py-6 overflow-hidden">
            <div className="container mx-auto px-4 mb-4">
                <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                    Global Standards & Local Trust
                </p>
            </div>
            <div className="relative flex overflow-x-hidden">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex whitespace-nowrap"
                >
                    {[...certifications, ...certifications].map((cert, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 mx-8 text-xl md:text-2xl font-black text-secondary/20 grayscale hover:grayscale-0 transition-all cursor-default"
                        >
                            <div className="w-2 h-2 rounded-full bg-primary/40" />
                            {cert}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
