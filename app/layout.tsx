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
  title: "Frutos de Elqui",
  description:
    "Más de 25 años elaborando mermeladas, manjares y conservas artesanales 100% naturales en el corazón del Valle de Elqui, Chile.",
  keywords: [
    "mermeladas artesanales",
    "Valle de Elqui",
    "conservas naturales",
    "productos gourmet Chile",
    "manjar artesanal",
  ],
  authors: [{ name: "Frutos de Elqui" }],
  openGraph: {
    title: "Sabores del Valle de Elqui | Tradición y Sabor Artesanal",
    description:
      "Descubre la dulzura natural del Valle de Elqui con nuestras mermeladas y conservas hechas a mano.",
    type: "website",
    locale: "es_CL",
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
      <body className="min-h-full flex flex-col font-body bg-neutral-50">
        {children}
      </body>
    </html>
  );
}
