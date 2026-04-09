import type { Metadata } from "next";
import { Playball, Lora } from "next/font/google";
import "./globals.css";

const playball = Playball({
  variable: "--font-playball",
  subsets: ["latin"],
  weight: "400",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frutosdeelqui.cl"),
  title: "Frutos de Elqui | Sabores Tradicionales del Valle",
  description:
    "Más de 25 años elaborando mermeladas, manjares y conservas artesanales 100% naturales en el corazón del Valle de Elqui, Chile.",
  keywords: [
    "mermeladas artesanales",
    "Valle de Elqui",
    "conservas naturales",
    "productos gourmet Chile",
    "manjar artesanal",
    "manjar de papaya",
    "mermeladas elqui",
  ],
  authors: [{ name: "Frutos de Elqui" }],
  openGraph: {
    title: "Frutos de Elqui | Tradición y Sabor Artesanal",
    description:
      "Descubre la dulzura natural del Valle de Elqui con nuestras mermeladas y conservas 100% naturales hechas a mano.",
    url: "https://frutosdeelqui.cl",
    siteName: "Frutos de Elqui",
    images: [
      {
        url: "/assets/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Frutos de Elqui - Sabores del Valle",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frutos de Elqui | Tradición y Sabor Artesanal",
    description:
      "Mermeladas, manjares y conservas artesanales del Valle de Elqui.",
    images: ["/assets/images/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playball.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-brand-cream/20">
        {children}
      </body>
    </html>
  );
}
