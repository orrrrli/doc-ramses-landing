import { Card, CardContent } from "@/components/ui/card";

const VALUES = [
  {
    icon: "🎯",
    title: "Enfoque personalizado",
    desc: "Cada paciente es único. El tratamiento se adapta a su vida, no al revés.",
  },
  {
    icon: "📚",
    title: "Educación en salud",
    desc: "Explico con claridad para que usted entienda y participe en su cuidado.",
  },
  {
    icon: "🤝",
    title: "Confianza y cercanía",
    desc: "Un ambiente sin juicios donde usted puede expresarse libremente.",
  },
  {
    icon: "🔬",
    title: "Medicina basada en evidencia",
    desc: "Tratamientos respaldados por las guías clínicas más actualizadas.",
  },
];

export function About(): React.JSX.Element {
  return (
    <section id="quien-soy" className="bg-[#f4f7fe] py-20 px-[5%]">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[0.72rem] font-bold tracking-[2px] uppercase text-[#008e76] mb-2">
          Quién soy
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-[#1e2a3a] leading-tight mb-4">
          Un médico comprometido con su salud y bienestar
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-[#00bfa5] to-[#008e76] rounded-full mb-8" />

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

        <blockquote className="bg-gradient-to-br from-[#1346a0] to-[#1a5cc8] text-white rounded-2xl px-6 py-5 mb-8 text-[1.05rem] leading-[1.6] italic">
          &quot;Mi objetivo no es sólo tratar la enfermedad, sino acompañar a cada paciente para
          que comprenda su condición y viva con mayor calidad de vida.&quot;
        </blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
          {VALUES.map((v) => (
            <Card key={v.title} className="border border-[#dce6f7] shadow-sm">
              <CardContent className="flex gap-[10px] items-start p-[14px]">
                <span className="text-[1.3rem] flex-shrink-0">{v.icon}</span>
                <div className="text-[0.88rem] text-[#4a5568] leading-[1.4]">
                  <strong className="block text-[#1e2a3a] font-semibold mb-0.5">{v.title}</strong>
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
