import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const URW = "font-[family-name:var(--font-urw)]";

interface Service {
  icon: string;
  title: string;
  desc: string;
}

const SERVICES: Service[] = [
  {
    icon: "/icons/servicios-icons/syringe.svg",
    title: "Manejo de Diabetes Tipo 1",
    desc: "Ajuste de dosis de insulina, conteo de carbohidratos y manejo de hipoglucemias e hiperglucemias.",
  },
  {
    icon: "/icons/servicios-icons/diabetes.svg",
    title: "Control de Diabetes Tipo 2",
    desc: "Tratamiento farmacológico y no farmacológico, plan de alimentación y seguimiento metabólico.",
  },
  {
    icon: "/hero-bg-icons/heart-cardiogram.svg",
    title: "Riesgo Cardiovascular",
    desc: "Evaluación y manejo del riesgo cardiovascular. Control de presión arterial, lípidos y función renal.",
  },
  {
    icon: "/hero-bg-icons/clinical-fe.svg",
    title: "Consulta General",
    desc: "Diagnóstico y tratamiento de enfermedades agudas y crónicas. Medicina preventiva y chequeos periódicos.",
  },
  {
    icon: "/icons/servicios-icons/register-book.svg",
    title: "Educación Diabetológica",
    desc: "Aprenda a vivir bien con diabetes: glucómetro, conteo de carbohidratos y prevención de complicaciones.",
  },
  {
    icon: "/icons/servicios-icons/people.svg",
    title: "Seguimiento Familiar",
    desc: "Orientación continua para toda la familia, apoyando el cuidado del paciente en casa.",
  },
];

function ServiceCard({ service, featured = false }: { service: Service; featured?: boolean }): React.JSX.Element {
  return (
    <a
      href="#contacto-page"
      className={cn(
        "group bg-white rounded-2xl p-6 flex flex-col gap-4 no-underline transition-all duration-200",
        "hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,191,165,0.14)]",
        featured
          ? "border-2 border-[#00bfa5] shadow-[0_4px_16px_rgba(0,191,165,0.12)]"
          : "border border-[#e8f0f0]",
      )}
    >
      <img src={service.icon} alt="" className="w-10 h-10 service-icon" />
      <div>
        <h3 className={cn(URW, "text-[1rem] font-bold text-[#1e2a3a] mb-1.5 leading-snug")}>
          {service.title}
        </h3>
        <p className="text-[0.85rem] text-[#4a5568] leading-[1.6]">{service.desc}</p>
      </div>
      <span className={cn(
        URW,
        "mt-auto inline-flex items-center gap-1 text-[0.8rem] font-bold transition-colors",
        featured ? "text-[#00bfa5]" : "text-[#008e76]/60 group-hover:text-[#00bfa5]",
      )}>
        Saber más
        <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  );
}

export function Services(): React.JSX.Element {
  const [top, bottom] = [SERVICES.slice(0, 2), SERVICES.slice(2)];

  return (
    <section id="servicios" className="bg-[#f8faf9] py-20 px-[5%] scroll-mt-24">
      <div className="max-w-[1100px] mx-auto space-y-4">

        {/* ── Top row: 2 cards left · text right ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Left — 2 featured cards */}
          <ServiceCard service={top[0]!} featured />
          <ServiceCard service={top[1]!} />

          {/* Right — heading block spanning 2 cols */}
          <div className="sm:col-span-2 flex flex-col justify-center px-2 py-4 lg:py-0">
            <p className={cn(URW, "text-[0.72rem] font-bold tracking-[2px] uppercase text-[#00bfa5] mb-3")}>
              Lo que ofrezco
            </p>
            <h2 className={cn(URW, "text-[clamp(2rem,3.5vw,2.8rem)] font-black text-[#1e2a3a] leading-[1.1] mb-4")}>
              Atención médica integral a tu medida
            </h2>
            <p className="text-[0.95rem] text-[#4a5568] leading-[1.75]">
              Cada consulta es personalizada. Me comprometo a entender tu historia y diseñar
              un tratamiento que se adapte a tu vida.
            </p>
          </div>
        </div>

        {/* ── Bottom row: 4 cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bottom.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>

      </div>
    </section>
  );
}
