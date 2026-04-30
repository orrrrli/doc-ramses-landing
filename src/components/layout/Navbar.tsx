"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { SideMenu } from "./SideMenu";
import { InkUnderline } from "@/components/icons/InkUnderline";

const URW = "font-[family-name:var(--font-urw)]";

const NAV_LINKS = [
  { label: "Inicio",        href: "#",          id: "inicio" },
  { label: "Perfil Médico", href: "#quien-soy", id: "quien-soy" },
  { label: "Mis Servicios", href: "#servicios",  id: "servicios" },
  { label: "Herramientas",  href: "#mi-portal",  id: "mi-portal" },
  { label: "Contacto",      href: "#contacto",   id: "contacto" },
];

const TRIGGER = 96;

export function Navbar(): React.JSX.Element {
  const [scrolled, setScrolled]       = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#");
  const scrollingRef  = useRef(false);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const update = (): void => {
      setScrolled(window.scrollY > 24);

      if (scrollingRef.current) return;

      let active = NAV_LINKS[0].href;
      for (const { id, href } of NAV_LINKS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= TRIGGER) {
          active = href;
        }
      }
      setActiveSection(active);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 left-0 right-0 z-50 h-20 flex items-center pl-[2%] pr-[4%] transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-[#dce6f7]/60 shadow-[0_1px_12px_rgba(19,70,160,0.06)]"
          : "bg-transparent",
      )}
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
          <span className={cn(URW, "block font-semibold text-[1.15rem] text-[#00bfa5] tracking-wide")}>
            Dr. Ramses Castañeda
          </span>
          <span className={cn(URW, "block font-bold text-[0.58rem] text-[#00bfa5]/60 tracking-[1.5px] uppercase")}>
            Médico General · Diabetólogo · Colima
          </span>
        </div>
      </a>

      <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 list-none m-0 p-0">
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = activeSection === href;
          return (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(href);
                  scrollingRef.current = true;
                  if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
                  scrollTimerRef.current = setTimeout(() => { scrollingRef.current = false; }, 1000);
                  const selector = href === "#" ? "#inicio" : href;
                  const el = document.querySelector(selector);
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className={cn(
                  URW,
                  "relative inline-flex items-center font-bold text-[0.9rem] tracking-wide no-underline",
                  "px-4 py-1.5 rounded-full transition-all duration-200 ease-out",
                  "hover:-translate-y-px hover:bg-[#00bfa5]/10",
                  isActive
                    ? "text-[#00bfa5]"
                    : "text-[#00bfa5]/55 hover:text-[#00bfa5]",
                )}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-2 left-4 right-4">
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
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
          }}
          className={cn(
            URW,
            "hidden md:flex items-center font-semibold text-[0.95rem] text-white",
            "bg-[#00bfa5] hover:bg-[#008e76] px-5 py-2 rounded-full no-underline",
            "transition-all duration-200 hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(0,191,165,0.35)] shrink-0",
          )}
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
