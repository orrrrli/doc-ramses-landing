import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Dr. Ramses Castañeda | Médico General y Diabetólogo · Colima",
  description:
    "Médico General y Diabetólogo con enfoque en el control integral de la diabetes y enfermedades crónicas. Atención personalizada en Colima.",
  themeColor: "#00bfa5",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.JSX.Element {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="font-sans bg-white text-[#1e2a3a] overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
