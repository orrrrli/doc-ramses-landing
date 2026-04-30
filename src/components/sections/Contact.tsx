import { cn } from "@/lib/utils";
import { MapPin, Clock, Phone, Map, CalendarDays, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const URW = "font-[family-name:var(--font-urw)]";

const WA_LINK =
  "https://wa.me/5213121355297?text=Hola%20Dr.%20Ramses%2C%20quisiera%20agendar%20una%20cita";

interface ContactItem {
  icon: LucideIcon;
  title: string;
  lines: React.ReactNode;
  action?: React.ReactNode;
}

const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: MapPin,
    title: "Consultorio",
    lines: (
      <p className="text-[0.82rem] text-[#4a5568] leading-[1.6]">
        Av. Gonzalo de Sandoval 350A<br />
        Las Víboras, Colima, Col. 28040
      </p>
    ),
    action: (
      <a
        href="https://www.google.com/maps/search/?api=1&query=Av.+Gonzalo+de+Sandoval+350A+Las+Viboras+Colima+Mexico"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 mt-2 bg-[#00bfa5]/10 border border-[#00bfa5]/25 text-[#008e76] px-2.5 py-1 rounded-[8px] text-[0.75rem] font-semibold no-underline hover:bg-[#00bfa5]/20 transition-colors"
      >
        <Map size={12} />
        Ver en Google Maps
      </a>
    ),
  },
  {
    icon: Clock,
    title: "Horario de atención",
    lines: (
      <div className="space-y-0.5">
        <p className="text-[0.82rem] text-[#4a5568]">Lunes, Miércoles y Viernes</p>
        <p className={cn(URW, "text-[0.97rem] font-bold text-[#00bfa5]")}>4:00 pm – 8:00 pm</p>
      </div>
    ),
  },
  {
    icon: Phone,
    title: "Teléfono",
    lines: (
      <p className={cn(URW, "text-[1rem] font-bold text-[#1e2a3a]")}>312 135 5297</p>
    ),
    action: (
      <a
        href="tel:+523121355297"
        className="inline-flex items-center gap-1.5 mt-2 bg-[#00bfa5]/10 border border-[#00bfa5]/25 text-[#008e76] px-2.5 py-1 rounded-[8px] text-[0.75rem] font-semibold no-underline hover:bg-[#00bfa5]/20 transition-colors"
      >
        <Phone size={12} />
        Llamar ahora
      </a>
    ),
  },
  {
    icon: CalendarDays,
    title: "Cita previa",
    lines: (
      <p className="text-[0.82rem] text-[#4a5568] leading-[1.6]">
        Toda consulta requiere cita previa.<br />
        Agenda por WhatsApp en segundos.
      </p>
    ),
  },
];

export function Contact(): React.JSX.Element {
  return (
    <section
      id="contacto"
      className="bg-[#f8faf9] px-[5%] scroll-mt-20"
      style={{ minHeight: "calc(100vh - 80px)", display: "flex", alignItems: "center" }}
    >
      <div className="max-w-[1100px] mx-auto w-full py-10">

        {/* header */}
        <div className="text-center mb-7">
          <span className={cn(URW, "inline-flex items-center gap-1.5 text-[0.68rem] font-bold tracking-[2px] uppercase text-[#008e76] bg-[#00bfa5]/10 border border-[#00bfa5]/25 px-3.5 py-1 rounded-full mb-3")}>
            <MessageCircle size={12} />
            Atención personalizada
          </span>
          <h2 className={cn(URW, "text-[clamp(1.5rem,2.8vw,2.1rem)] font-black text-[#1e2a3a] leading-tight mb-2")}>
            ¿Listo para agendar tu consulta?
          </h2>
          <p className="text-[#4a5568] text-[0.9rem] max-w-[460px] mx-auto leading-[1.65]">
            Atención con cita previa en Colima. Escríbeme por WhatsApp y te respondo a la brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-center">

          {/* Left — info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CONTACT_ITEMS.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[#dce6f7] rounded-2xl p-4 shadow-[0_2px_12px_rgba(19,70,160,0.06)] hover:shadow-[0_4px_20px_rgba(19,70,160,0.1)] transition-shadow"
              >
                <div className="w-9 h-9 bg-[#00bfa5]/10 border border-[#00bfa5]/20 rounded-[10px] flex items-center justify-center mb-3">
                  <item.icon size={17} className="text-[#00bfa5]" />
                </div>
                <p className={cn(URW, "font-bold text-[#1e2a3a] text-[0.82rem] mb-1.5 uppercase tracking-wide")}>
                  {item.title}
                </p>
                {item.lines}
                {item.action}
              </div>
            ))}
          </div>

          {/* Right — WhatsApp CTA */}
          <div className="bg-[#1346a0] rounded-3xl p-6 flex flex-col items-center text-center shadow-[0_8px_32px_rgba(19,70,160,0.22)]">
            <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mb-4">
              <WhatsAppIcon className="w-8 h-8 text-white" />
            </div>

            <h3 className={cn(URW, "font-black text-[1.1rem] text-white mb-1.5")}>
              Agenda en segundos
            </h3>
            <p className="text-white/70 text-[0.82rem] leading-[1.55] mb-1.5">
              Disponible todos los días.<br />Te respondo a la brevedad.
            </p>
            <p className={cn(URW, "font-bold text-[1rem] text-[#7dd3fc] mb-5")}>
              312 135 5297
            </p>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                URW,
                "w-full inline-flex items-center justify-center gap-2",
                "bg-[#00bfa5] hover:bg-[#008e76] text-white font-bold text-[0.88rem]",
                "rounded-xl px-5 py-3 no-underline",
                "transition-all duration-200 hover:-translate-y-px",
                "shadow-[0_4px_16px_rgba(0,191,165,0.35)] hover:shadow-[0_6px_24px_rgba(0,191,165,0.5)]",
              )}
            >
              <WhatsAppIcon className="w-4 h-4" />
              Abrir WhatsApp
            </a>

            <p className="mt-3 text-[0.7rem] text-white/40">
              Sin llamadas. Sin formularios. Solo WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
