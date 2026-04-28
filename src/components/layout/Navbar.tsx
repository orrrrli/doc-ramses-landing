"use client";

import Image from "next/image";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { SideMenu } from "./SideMenu";

const WA_LINK =
  "https://wa.me/5213121355297?text=Hola%20Dr.%20Ramses%2C%20quisiera%20agendar%20una%20cita";

export function Navbar(): React.JSX.Element {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/97 backdrop-blur-md border-b border-[#e0f7f4] h-16 flex items-center justify-between px-[5%]">
      <a href="#inicio" className="flex items-center gap-3 no-underline">
        <Image
          src="/logo_circulo.png"
          alt="Dr. Ramses Castañeda"
          width={46}
          height={46}
          className="object-contain"
        />
        <div className="leading-tight">
          <span className="block font-[family-name:var(--font-playfair)] font-bold text-[0.97rem] text-[#1346a0]">
            Dr. Ramses Castañeda
          </span>
          <span className="block font-[family-name:var(--font-dm-sans)] font-medium text-[0.6rem] text-[#4a5568] tracking-[1.5px] uppercase">
            Médico General · Diabetólogo · Colima
          </span>
        </div>
      </a>

      <div className="flex items-center gap-3">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 bg-gradient-to-br from-[#00bfa5] to-[#008e76] text-white px-[18px] py-2 rounded-full font-bold text-[0.85rem] no-underline whitespace-nowrap"
        >
          <WhatsAppIcon className="w-4 h-4" />
          Contacto
        </a>
        <SideMenu />
      </div>
    </nav>
  );
}
