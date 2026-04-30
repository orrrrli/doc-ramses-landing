import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Target, BookOpen, Shield, Microscope } from "lucide-react";

const URW = "font-[family-name:var(--font-urw)]";

const VALUES = [
  {
    icon: Target,
    title: "Enfoque personalizado",
    desc: "Cada paciente es único. El tratamiento se adapta a su vida, no al revés.",
  },
  {
    icon: BookOpen,
    title: "Educación en salud",
    desc: "Explico con claridad para que usted entienda y participe en su cuidado.",
  },
  {
    icon: Shield,
    title: "Confianza y cercanía",
    desc: "Un ambiente sin juicios donde usted puede expresarse libremente.",
  },
  {
    icon: Microscope,
    title: "Medicina basada en evidencia",
    desc: "Tratamientos respaldados por las guías clínicas más actualizadas.",
  },
];

export function About(): React.JSX.Element {
  return (
    <section id="quien-soy" className="bg-[#f8faf9] py-20 px-[5%] scroll-mt-24">
      <div className="max-w-[1100px] mx-auto">
        <p className={cn(URW, "text-[0.72rem] font-bold tracking-[2px] uppercase text-[#008e76] mb-2")}>
          Quién soy
        </p>
        <h2 className={cn(URW, "text-[clamp(1.6rem,3vw,2.4rem)] font-black text-[#00bfa5] leading-tight mb-8")}>
          Un médico comprometido con su salud y bienestar
        </h2>

        <div className="space-y-[18px] text-[#4a5568] text-[1rem] leading-[1.8] mb-6">
          <p>
            Soy médico general con especialización en el manejo de la diabetes mellitus y
            enfermedades crónicas. Mi práctica está orientada a brindar atención de calidad,
            accesible y centrada en el paciente, con especial énfasis en la educación y el
            autocuidado.
          </p>
          <p>
            Creo firmemente que un paciente bien informado tiene mejores resultados. Por eso
            desarrollo materiales educativos y herramientas digitales que mis pacientes pueden usar
            en casa para tomar decisiones más seguras sobre su salud.
          </p>
        </div>

        <blockquote className="border-l-4 border-[#00bfa5] bg-[#f0fdfb] text-[#1e2a3a] rounded-r-2xl px-6 py-5 mb-8 text-[1.05rem] leading-[1.6] italic">
          &quot;Mi objetivo no es sólo tratar la enfermedad, sino acompañar a cada paciente para
          que comprenda su condición y viva con mayor calidad de vida.&quot;
        </blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
          {VALUES.map((v) => (
            <Card key={v.title} className="border border-[#b2e0d8] shadow-sm bg-white">
              <CardContent className="flex gap-[10px] items-start p-[14px]">
                <div className="w-8 h-8 rounded-[8px] bg-[#e0f7f4] flex items-center justify-center flex-shrink-0">
                  <v.icon size={16} className="text-[#00bfa5]" />
                </div>
                <div className="text-[0.88rem] text-[#4a5568] leading-[1.4]">
                  <strong className={cn(URW, "block text-[#1e2a3a] font-semibold mb-0.5")}>{v.title}</strong>
                  {v.desc}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
