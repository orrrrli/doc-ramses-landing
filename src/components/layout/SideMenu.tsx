"use client";

import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const WA_LINK =
  "https://wa.me/5213121355297?text=Hola%20Dr.%20Ramses%2C%20quisiera%20agendar%20una%20cita";

const NAV_LINKS = [
  { label: "Inicio",        href: "#inicio" },
  { label: "Perfil Médico", href: "#perfil-medico" },
  { label: "Mis Servicios", href: "#servicios" },
  { label: "Enfermedades",  href: "#enfermedades" },
  { label: "Contacto",      href: "#contacto" },
];

export function SideMenu(): React.JSX.Element {
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Abrir menú"
        className="bg-transparent border-2 border-[#dce6f7] rounded-[10px] w-10 h-10 flex flex-col items-center justify-center gap-[5px] cursor-pointer hover:bg-[#f4f7fe] transition-colors"
      >
        <span className="block w-[18px] h-[2px] bg-[#1346a0] rounded-full" />
        <span className="block w-[18px] h-[2px] bg-[#1346a0] rounded-full" />
        <span className="block w-[18px] h-[2px] bg-[#1346a0] rounded-full" />
      </SheetTrigger>

      <SheetContent side="right" className="w-[300px] p-0 flex flex-col">
        <SheetHeader className="bg-gradient-to-br from-[#0a1f4a] to-[#006d5b] px-6 pt-7 pb-5 text-white">
          <Image
            src="/images/logo-circulo.png"
            alt="Logo"
            width={52}
            height={52}
            className="mb-2"
          />
          <SheetTitle className="font-[family-name:var(--font-playfair)] text-white text-[1rem] font-bold text-left">
            Dr. Ramses Castañeda
          </SheetTitle>
          <p className="text-[0.72rem] text-white/75 text-left">
            Médico General · Diabetólogo · Colima
          </p>
        </SheetHeader>

        <nav className="flex-1 py-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="flex items-center px-6 py-[14px] text-[0.92rem] font-semibold text-[#1e2a3a] no-underline border-l-[3px] border-transparent hover:bg-[#f4f7fe] hover:border-l-[#00bfa5] hover:text-[#00bfa5] transition-all"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="m-4 bg-gradient-to-br from-[#1346a0] to-[#1a5cc8] text-white rounded-[14px] py-[14px] text-center font-bold text-[0.9rem] no-underline block"
        >
          Agendar cita por WhatsApp
        </a>
      </SheetContent>
    </Sheet>
  );
}
