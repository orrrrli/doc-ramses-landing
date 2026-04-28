import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WA_LINK =
  "https://wa.me/5213121355297?text=Hola%20Dr.%20Ramses%2C%20quisiera%20agendar%20una%20cita";

const CONTACT_ITEMS = [
  {
    icon: "📍",
    title: "Dirección",
    content: (
      <>
        <p className="text-[0.85rem] text-white/85 leading-[1.6]">
          Av. Gonzalo de Sandoval 350A
          <br />
          Las Víboras, Colima, Col. 28040
        </p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Av.+Gonzalo+de+Sandoval+350A+Las+Viboras+Colima+Mexico"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-2 bg-white/15 border border-white/30 text-white px-3 py-1 rounded-[10px] text-[0.78rem] font-semibold no-underline hover:bg-white/25 transition-colors"
        >
          🗺️ Ver en Google Maps
        </a>
      </>
    ),
  },
  {
    icon: "🕐",
    title: "Horario",
    content: (
      <p className="text-[0.85rem] text-white/85 leading-[1.6]">
        Lunes, Miércoles y Viernes
        <br />
        4:00 pm – 8:00 pm
      </p>
    ),
  },
  {
    icon: "📞",
    title: "Llámame",
    content: (
      <>
        <p className="text-[0.85rem] text-white/85">312 135 5297</p>
        <a
          href="tel:+523121355297"
          className="inline-flex items-center gap-1 mt-2 bg-white/15 border border-white/30 text-white px-3 py-1 rounded-[10px] text-[0.78rem] font-semibold no-underline hover:bg-white/25 transition-colors"
        >
          📞 Llamar ahora
        </a>
      </>
    ),
  },
];

export function Contact(): React.JSX.Element {
  return (
    <section
      id="contacto-page"
      className="bg-gradient-to-br from-[#0a1f4a] to-[#006d5b] py-16 px-[5%] text-white"
    >
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.5rem,3vw,2.2rem)] font-bold mb-3">
          📍 Contáctame
        </h2>
        <p className="text-[0.97rem] text-white/85 mb-8 leading-[1.7]">
          Atención con cita previa. Escríbeme por WhatsApp para agendar tu consulta.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {CONTACT_ITEMS.map((item) => (
            <div key={item.title} className="bg-white/10 rounded-2xl p-5 text-left">
              <div className="text-[1.5rem] mb-2">{item.icon}</div>
              <div className="font-bold mb-1">{item.title}</div>
              {item.content}
            </div>
          ))}
        </div>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "default" }),
            "bg-white text-[#1346a0] hover:bg-white/90 rounded-full px-8 py-[14px] h-auto font-bold text-[0.97rem] shadow-[0_4px_20px_rgba(0,0,0,0.2)]",
          )}
        >
          📅 Agendar cita por WhatsApp
        </a>
      </div>
    </section>
  );
}
