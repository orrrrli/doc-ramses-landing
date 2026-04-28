"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { SideMenu } from "./SideMenu";
import { InkUnderline } from "@/components/icons/InkUnderline";

const NAV_LINKS = [
  { label: "Inicio",        href: "#" },
  { label: "Perfil Médico", href: "#perfil-medico" },
  { label: "Mis Servicios", href: "#servicios" },
  { label: "Enfermedades",  href: "#enfermedades" },
  { label: "Contacto",      href: "#contacto" },
];

export function Navbar(): React.JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#");

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const SECTION_IDS = ["inicio", "perfil-medico", "servicios", "enfermedades", "contacto"];
    const SECTION_TO_HREF: Record<string, string> = {
      inicio: "#",
      "perfil-medico": "#perfil-medico",
      servicios: "#servicios",
      enfermedades: "#enfermedades",
      contacto: "#contacto",
    };
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(SECTION_TO_HREF[id]); },
        { threshold: 0.35, rootMargin: "-72px 0px 0px 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
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
          <span className="block font-be-vietnam font-semibold text-[1.15rem] text-[#00bfa5] tracking-wide">
            Dr. Ramses Castañeda
          </span>
          <span className="block font-be-vietnam font-bold text-[0.58rem] text-[#00bfa5]/60 tracking-[1.5px] uppercase">
            Médico General · Diabetólogo · Colima
          </span>
        </div>
      </a>

      <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 list-none m-0 p-0">
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = activeSection === href;
          return (
            <li key={href}>
              <a
                href={href}
                className="relative inline-block font-be-vietnam font-bold text-[0.9rem] tracking-wide no-underline transition-colors duration-200 pb-3 group"
                style={{ color: isActive ? "#00bfa5" : "rgba(0,191,165,0.65)" }}
              >
                {label}
                {!isActive && (
                  <span className="absolute bottom-1 left-0 h-[1.5px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-250 rounded-full bg-[#00bfa5]/50" />
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full">
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
          className="hidden md:flex items-center font-be-vietnam font-semibold text-[1rem] text-white bg-[#00bfa5] hover:bg-[#008e76] px-5 py-2 rounded-full no-underline transition-colors shrink-0"
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
