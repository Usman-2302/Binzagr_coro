import { Section } from "@/components/ui/section";

export default function TermsOfService() {
    return (
        <>
            <div className="pt-40 pb-24 bg-black relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/sources/company_bg.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-30 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Terms of Service</h1>
                    <p className="text-lg text-white/60">Last Updated: {new Date().getFullYear()}</p>
                </div>
            </div>

            <Section className="bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg prose-neutral max-w-none">
                        <p className="lead text-xl text-secondary/80 font-medium mb-12">
                            Welcome to the Binzagr Coro website. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms carefully before exploring our digital platform.
                        </p>

                        <h3 className="text-2xl font-bold text-secondary mt-12 mb-6">1. Acceptance of Terms</h3>
                        <p className="text-muted-foreground mb-6">
                            By accessing this website, you acknowledge that you have read, understood, and agree to be legally bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
                        </p>

                        <h3 className="text-2xl font-bold text-secondary mt-12 mb-6">2. Intellectual Property</h3>
                        <p className="text-muted-foreground mb-6">
                            All content on this website, including but not limited to text, graphics, logos, images, videos, and software, is the property of Binzagr Coro or its content suppliers and is protected by international copyright and trademark laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written consent.
                        </p>

                        <h3 className="text-2xl font-bold text-secondary mt-12 mb-6">3. Use of Website</h3>
                        <p className="text-muted-foreground mb-6">
                            You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.
                        </p>

                        <h3 className="text-2xl font-bold text-secondary mt-12 mb-6">4. Limitation of Liability</h3>
                        <p className="text-muted-foreground mb-6">
                            Binzagr Coro makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is strictly at your own risk.
                        </p>

                        <h3 className="text-2xl font-bold text-secondary mt-12 mb-6">5. Changes to Terms</h3>
                        <p className="text-muted-foreground mb-6">
                            We reserve the right to modify these Terms of Service at any time without prior notice. Your continued use of the website following any changes indicates your acceptance of the new terms. We encourage you to review this page periodically for any updates.
                        </p>

                        <h3 className="text-2xl font-bold text-secondary mt-12 mb-6">6. Governing Law</h3>
                        <p className="text-muted-foreground mb-6">
                            These terms and conditions are governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Saudi Arabia.
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
}
