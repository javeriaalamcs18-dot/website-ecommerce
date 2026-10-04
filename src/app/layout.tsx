import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Gen Smart Skills for Youth – Shopify E-Commerce Course | IT HUB Mardan",
  description: "Official 2-Week Hands-on Shopify E-Commerce training for female youth at Jawan Markaz, Sports Complex Mardan. Organized by District Administration, District Youth Office Mardan, and IT HUB Mardan. 100% Free.",
  keywords: ["Shopify E-Commerce", "IT HUB Mardan", "District Youth Office Mardan", "Smart Skills For Youth", "Khyber Pakhtunkhwa Youth Training", "Women In Tech"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/assets/it-hub-logo.png" />
      </head>
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
