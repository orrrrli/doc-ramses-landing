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

interface MenuSection {
  label: string;
  items: { icon: string; text: string; href: string }[];
}

const MENU_SECTIONS: MenuSection[] = [
  {
    label: "Conócenos",
    items: [
      { icon: "👨‍⚕️", text: "Quién soy", href: "#quien-soy" },
      { icon: "🩺", text: "Servicios", href: "#servicios" },
      { icon: "📍", text: "Contáctame", href: "#contacto-page" },
    ],
  },
  {
    label: "Portal del paciente",
    items: [
      { icon: "🔐", text: "Iniciar sesión", href: "/login" },
    ],
  },
  {
    label: "Herramientas",
    items: [
      { icon: "⚖️", text: "Calculadora IMC", href: "/tools/imc" },
      { icon: "🔬", text: "Conversor HbA1c", href: "/tools/hba1c" },
      { icon: "🩺", text: "Riesgo de diabetes", href: "/tools/diabetes-risk" },
      { icon: "🫀", text: "Riesgo cardiovascular", href: "/tools/cardiovascular-risk" },
      { icon: "🦶", text: "Neuropatía", href: "/tools/neuropathy" },
      { icon: "🫘", text: "Filtración glomerular", href: "/tools/cockcroft" },
    ],
  },
  {
    label: "Consejos de salud",
    items: [
      { icon: "⚠️", text: "Hipoglucemia", href: "/advice/hypoglycemia" },
      { icon: "🥗", text: "Alimentación", href: "/advice/nutrition" },
      { icon: "🏃", text: "Ejercicio", href: "/advice/exercise" },
      { icon: "🦶", text: "Pie diabético", href: "/advice/diabetic-foot" },
      { icon: "💉", text: "Insulina", href: "/advice/insulin" },
      { icon: "📱", text: "Monitoreo", href: "/advice/monitoring" },
    ],
  },
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
            src="/logo_circulo.png"
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

        <nav className="flex-1 overflow-y-auto py-3">
          {MENU_SECTIONS.map((section) => (
            <div key={section.label}>
              <p className="text-[0.67rem] font-bold uppercase tracking-[1px] text-slate-400 px-6 pt-3 pb-1">
                {section.label}
              </p>
              {section.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-[14px] px-6 py-[13px] text-[0.88rem] font-semibold text-[#1e2a3a] no-underline border-l-[3px] border-transparent hover:bg-[#f4f7fe] hover:border-l-[#1346a0] hover:text-[#1346a0] transition-all"
                >
                  <span className="w-[22px] text-center text-[1.1rem]">{item.icon}</span>
                  {item.text}
                </a>
              ))}
              <div className="h-px bg-[#f0f4f8] my-2 mx-0" />
            </div>
          ))}
        </nav>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="m-4 bg-gradient-to-br from-[#1346a0] to-[#1a5cc8] text-white rounded-[14px] py-[14px] text-center font-bold text-[0.9rem] no-underline block"
        >
          📅 Agendar cita por WhatsApp
        </a>
      </SheetContent>
    </Sheet>
  );
}
