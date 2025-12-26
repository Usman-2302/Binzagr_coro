import type { Metadata } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/merriweather/400.css";
import "@fontsource/merriweather/700.css";
import "@fontsource/merriweather/900.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import "./globals.css";
import { AppProviders } from "@/components/AppProviders";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Binzagr Coro Legacy",
  description: "Manufacturing Excellence in Saudi Arabia - Since 1976",
  icons: {
    icon: "/assets/sources/cropped-Frame-3-1-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
