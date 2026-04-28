"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { SideMenu } from "./SideMenu";
import { InkUnderline } from "@/components/icons/InkUnderline";

const NAV_LINKS = [
  { label: "Inicio",        href: "#",           id: "inicio" },
  { label: "Perfil Médico", href: "#quien-soy",  id: "quien-soy" },
  { label: "Mis Servicios", href: "#servicios",  id: "servicios" },
  { label: "Enfermedades",  href: "#enfermedades", id: "enfermedades" },
  { label: "Contacto",      href: "#contacto",   id: "contacto" },
];

const TRIGGER = 96;

export function Navbar(): React.JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#");

  useEffect(() => {
    const update = (): void => {
      setScrolled(window.scrollY > 24);

      let active = "#";
      for (const { id, href } of NAV_LINKS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= TRIGGER) active = href;
      }
      setActiveSection(active);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 h-20 flex items-center pl-[2%] pr-[4%] transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-[#dce6f7]/60 shadow-[0_1px_12px_rgba(19,70,160,0.06)]"
          : "bg-transparent"
      }`}
    >
      <a href="#inicio" className="flex items-center gap-3 no-underline shrink-0">
        <Image
          src="/images/logo-circulo.png"
          alt="Dr. Ramses Castañeda"
          width={46}
          height={46}
          className="object-contain"
        />
        <div className="leading-tight">
          <span className="block font-[family-name:var(--font-urw)] font-semibold text-[1.15rem] text-[#00bfa5] tracking-wide">
            Dr. Ramses Castañeda
          </span>
          <span className="block font-[family-name:var(--font-urw)] font-bold text-[0.58rem] text-[#00bfa5]/60 tracking-[1.5px] uppercase">
            Médico General · Diabetólogo · Colima
          </span>
        </div>
      </a>

      <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-5 list-none m-0 p-0">
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = activeSection === href;
          return (
            <li key={href}>
              <a
                href={href}
                className="relative inline-block font-[family-name:var(--font-urw)] font-bold text-[0.9rem] tracking-wide no-underline transition-all duration-200 px-3 py-1 rounded-full hover:bg-[#e0f7f4]"
                style={{ color: isActive ? "#00bfa5" : "rgba(0,191,165,0.65)" }}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-2 left-3 right-3">
                    <InkUnderline active />
                  </span>
                )}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="ml-auto flex items-center gap-3">
        <a
          href="#contacto"
          className="hidden md:flex items-center font-[family-name:var(--font-urw)] font-semibold text-[1rem] text-white bg-[#00bfa5] hover:bg-[#008e76] px-5 py-2 rounded-full no-underline transition-colors shrink-0"
        >
          Agendar cita
        </a>
        <div className="md:hidden">
          <SideMenu />
        </div>
      </div>
    </nav>
  );
}
