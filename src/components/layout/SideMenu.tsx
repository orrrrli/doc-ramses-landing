"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { cn } from "@/lib/utils";

const WA_LINK =
  "https://wa.me/5213121355297?text=Hola%20Dr.%20Ramses%2C%20quisiera%20agendar%20una%20cita";

const URW = "font-[family-name:var(--font-urw)]";

const NAV_LINKS = [
  { label: "Inicio",        href: "#inicio",    id: "inicio" },
  { label: "Perfil Médico", href: "#quien-soy", id: "quien-soy" },
  { label: "Mis Servicios", href: "#servicios",  id: "servicios" },
  { label: "Herramientas",  href: "#mi-portal",  id: "mi-portal" },
  { label: "Contacto",      href: "#contacto",   id: "contacto" },
];

const TRIGGER = 96;

export function SideMenu(): React.JSX.Element {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const update = (): void => {
      let active = NAV_LINKS[0].id;
      for (const { id } of NAV_LINKS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= TRIGGER) {
          active = id;
        }
      }
      setActiveSection(active);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const handleNavClick = (href: string): void => {
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Abrir menú"
        className="bg-transparent border-2 border-[#b2e0d8] rounded-[10px] w-10 h-10 flex flex-col items-center justify-center gap-[5px] cursor-pointer hover:bg-[#e0f7f4] transition-colors"
      >
        <span className="block w-[18px] h-[2px] bg-[#00bfa5] rounded-full" />
        <span className="block w-[18px] h-[2px] bg-[#00bfa5] rounded-full" />
        <span className="block w-[18px] h-[2px] bg-[#00bfa5] rounded-full" />
      </SheetTrigger>

      <SheetContent side="right" className="w-[300px] p-0 flex flex-col bg-[#f8faf9]">
        <SheetHeader className="px-6 pt-7 pb-5 border-b border-[#dce6f7]/60">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-circulo.png"
              alt="Logo"
              width={44}
              height={44}
              className="object-contain"
            />
            <div className="leading-tight">
              <SheetTitle className={cn(URW, "text-[#00bfa5] text-[1rem] font-bold text-left")}>
                Dr. Ramses Castañeda
              </SheetTitle>
              <p className={cn(URW, "text-[0.65rem] text-[#00bfa5]/60 text-left tracking-[1.5px] uppercase font-bold mt-0.5")}>
                Médico General · Diabetólogo
              </p>
            </div>
          </div>
        </SheetHeader>

        <nav className="flex-1 py-3 overflow-y-auto">
          {NAV_LINKS.map(({ label, href, id }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(href);
                }}
                className={cn(
                  URW,
                  "flex items-center px-6 py-[14px] text-[0.95rem] font-semibold no-underline",
                  "border-l-[3px] transition-all duration-200",
                  isActive
                    ? "border-l-[#00bfa5] text-[#00bfa5] bg-[#00bfa5]/10"
                    : "border-transparent text-[#1e2a3a] hover:bg-[#e0f7f4] hover:border-l-[#00bfa5] hover:text-[#00bfa5]",
                )}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className={cn(
            URW,
            "m-4 bg-gradient-to-br from-[#00bfa5] to-[#008e76] text-white rounded-[14px]",
            "py-[14px] text-center font-bold text-[0.9rem] no-underline",
            "flex items-center justify-center gap-2",
            "hover:shadow-[0_4px_14px_rgba(0,191,165,0.35)] transition-shadow",
          )}
        >
          <WhatsAppIcon className="w-5 h-5" />
          Agendar cita por WhatsApp
        </a>
      </SheetContent>
    </Sheet>
  );
}
