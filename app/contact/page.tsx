"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission for now - will connect to backend later
        await new Promise(r => setTimeout(r, 1000));
        toast({ title: "Message Sent!", description: "We'll get back to you soon." });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsSubmitting(false);
    };

    return (
        <>
            <section className="pt-40 pb-24 bg-gradient-dark">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">Contact Us</h1>
                    <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">We'd love to hear from you. Get in touch with our team.</p>
                </div>
            </section>

            <Section>
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <div className="bg-card rounded-2xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <Input placeholder="Your Name" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} required />
                                <Input type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} required />
                                <Input type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} />
                                <Textarea placeholder="Your Message" rows={5} value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} required />
                                <Button type="submit" className="w-full bg-gradient-primary" disabled={isSubmitting}>
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </Button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                                <div className="space-y-6">
                                    {[
                                        { icon: MapPin, title: "Address", text: "Al Mahjar, Jeddah, Saudi Arabia" },
                                        { icon: Phone, title: "Phone", text: "+966 12 636 9626" },
                                        { icon: Mail, title: "Email", text: "info@binzagrcoro.com" },
                                        { icon: Clock, title: "Hours", text: "Sun - Thu: 8:00 AM - 5:00 PM" },
                                    ].map(item => (
                                        <div key={item.title} className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                                                <item.icon className="h-6 w-6 text-primary-foreground" />
                                            </div>
                                            <div>
                                                <p className="font-semibold">{item.title}</p>
                                                <p className="text-muted-foreground">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
