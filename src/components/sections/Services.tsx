import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Service {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
}

const SERVICES: Service[] = [
  {
    icon: "💉",
    title: "Manejo de Diabetes Tipo 1",
    desc: "Consulta especializada para pacientes con DM1. Ajuste de dosis de insulina, educación en conteo de carbohidratos, manejo de hipoglucemias e hiperglucemias.",
    tags: ["Insulinoterapia", "Hidratos de carbono", "HbA1c"],
  },
  {
    icon: "🩸",
    title: "Control de Diabetes Tipo 2",
    desc: "Diagnóstico, tratamiento farmacológico y no farmacológico de DM2. Plan de alimentación, actividad física y seguimiento metabólico.",
    tags: ["Hipoglucemiantes", "Nutrición", "Prevención"],
  },
  {
    icon: "🫀",
    title: "Riesgo Cardiovascular",
    desc: "Evaluación y manejo del riesgo cardiovascular en pacientes diabéticos. Control de presión arterial, lípidos y función renal.",
    tags: ["Hipertensión", "Dislipidemia", "Nefropatía"],
  },
  {
    icon: "📋",
    title: "Consulta General",
    desc: "Atención médica general, diagnóstico y tratamiento de enfermedades agudas y crónicas. Medicina preventiva y chequeos periódicos.",
    tags: ["Check-up", "Preventiva", "Crónicas"],
  },
  {
    icon: "🧠",
    title: "Educación Diabetológica",
    desc: "Sesiones educativas individuales para aprender a vivir bien con diabetes. Conteo de carbohidratos, uso del glucómetro, prevención de complicaciones.",
    tags: ["Autocuidado", "Glucómetro", "Pie diabético"],
  },
  {
    icon: "👨‍👩‍👧",
    title: "Seguimiento Familiar",
    desc: "Atención médica continua para toda la familia. Orientación a familiares de pacientes diabéticos para apoyar el cuidado en casa.",
    tags: ["Todas las edades", "Familia", "Seguimiento"],
  },
];

export function Services(): React.JSX.Element {
  return (
    <section id="servicios" className="bg-white py-20 px-[5%]">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[0.72rem] font-bold tracking-[2px] uppercase text-[#008e76] mb-2">
          Lo que ofrezco
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-[#1e2a3a] leading-tight mb-4">
          Servicios médicos
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-[#00bfa5] to-[#008e76] rounded-full mb-4" />
        <p className="text-[1rem] text-[#4a5568] leading-[1.7] max-w-[560px] mb-9">
          Atención integral para el manejo de la diabetes y enfermedades crónicas en todas las
          etapas de la vida.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <Card
              key={s.title}
              className="bg-[#f4f7fe] border border-[#dce6f7] rounded-[20px] hover:-translate-y-1 hover:shadow-[0_6px_24px_rgba(0,191,165,0.14)] hover:border-[#1a5cc8] transition-all duration-200"
            >
              <CardHeader className="pb-3">
                <div className="w-[52px] h-[52px] bg-gradient-to-br from-[#1346a0] to-[#00bfa5] rounded-[14px] flex items-center justify-center text-[1.5rem] mb-4">
                  {s.icon}
                </div>
                <CardTitle className="font-[family-name:var(--font-playfair)] text-[1.1rem] text-[#1e2a3a]">
                  {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <p className="text-[0.88rem] text-[#4a5568] leading-[1.65]">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-[#e8f0fd] text-[#1346a0] rounded-[10px] text-[0.73rem] font-semibold hover:bg-[#e8f0fd]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
