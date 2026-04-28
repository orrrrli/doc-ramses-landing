import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BarChart2, Sparkles, Target, Stethoscope, LogIn, CheckCircle, AlertCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const URW = "font-[family-name:var(--font-urw)]";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const FEATURES: Feature[] = [
  {
    icon: BarChart2,
    title: "Dashboard con gráficas en tiempo real",
    desc: "Glucosa, presión, peso, HbA1c, colesterol y más — todo graficado con sus metas personales.",
  },
  {
    icon: Sparkles,
    title: "Recomendaciones con IA basadas en SCD 2026",
    desc: "El sistema analiza sus resultados y le explica qué significan y qué puede mejorar.",
  },
  {
    icon: Target,
    title: "Metas individualizadas según su condición",
    desc: "Diferente si vive con diabetes tipo 1, tipo 2, o sin diabetes. Basado en ADA SCD 2026.",
  },
  {
    icon: Stethoscope,
    title: "Su médico ve su progreso en tiempo real",
    desc: "El Dr. Castañeda puede revisar sus registros antes de su consulta para optimizar el tiempo.",
  },
];

interface PreviewStat {
  value: string;
  label: string;
  color: string;
  status: "ok" | "warn";
}

const PREVIEW_STATS: PreviewStat[] = [
  { value: "6.8%",   label: "HbA1c — En meta",  color: "text-green-400",  status: "ok" },
  { value: "142",    label: "Glucosa — Revisar", color: "text-orange-400", status: "warn" },
  { value: "118/76", label: "Presión — Normal",  color: "text-green-400",  status: "ok" },
  { value: "24.1",   label: "IMC — Normal",      color: "text-green-400",  status: "ok" },
];

export function Portal(): React.JSX.Element {
  return (
    <section
      id="mi-portal"
      className="bg-gradient-to-br from-[#0a1f4a] via-[#1346a0] to-[#006d5b] py-20 px-[5%] overflow-hidden relative scroll-mt-20"
    >
      <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(14,165,233,0.2),transparent_70%)] rounded-full" />

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center relative z-10">
        {/* Left — feature list */}
        <div className="text-white">
          <p className={cn(URW, "text-[0.72rem] font-bold tracking-[2px] uppercase text-[#7dd3fc] mb-3")}>
            Portal de pacientes — Gratis
          </p>
          <h2 className={cn(URW, "text-[clamp(1.6rem,3vw,2.3rem)] font-black leading-tight mb-[18px]")}>
            Lleve un registro inteligente de su salud
          </h2>
          <p className="text-[0.97rem] text-white/85 leading-[1.75] mb-7">
            Cree su cuenta gratuita y acceda a su dashboard personal donde podrá registrar y
            monitorear todos sus marcadores de salud. La inteligencia artificial analizará sus datos
            y le dará orientación personalizada basada en las guías ADA 2026.
          </p>

          <ul className="space-y-[14px] mb-8">
            {FEATURES.map((f) => (
              <li key={f.title} className="flex items-start gap-[14px]">
                <div className="w-9 h-9 bg-white/10 rounded-[10px] flex items-center justify-center flex-shrink-0">
                  <f.icon size={18} className="text-[#7dd3fc]" />
                </div>
                <div>
                  <strong className="block mb-0.5 text-[0.95rem]">{f.title}</strong>
                  <span className="text-[0.85rem] text-white/80">{f.desc}</span>
                </div>
              </li>
            ))}
          </ul>

          <a
            href="/login"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-white text-[#1346a0] hover:bg-white/90 rounded-full px-7 py-[14px] h-auto font-bold text-[0.92rem] shadow-[0_4px_16px_rgba(0,0,0,0.2)] gap-2",
            )}
          >
            <LogIn size={16} />
            Iniciar sesión o registrarse
          </a>
        </div>

        {/* Right — dashboard preview */}
        <div className="bg-white/6 backdrop-blur-sm border border-white/15 rounded-3xl p-7 text-white">
          <p className={cn(URW, "text-[0.8rem] font-bold text-white/70 mb-4 uppercase tracking-[1px]")}>
            Vista previa del dashboard
          </p>

          <div className="grid grid-cols-2 gap-[10px] mb-4">
            {PREVIEW_STATS.map((s) => (
              <div key={s.label} className="bg-white/8 rounded-2xl p-[14px] text-center">
                <div className={cn(URW, `text-[1.6rem] font-black leading-none mb-1 ${s.color}`)}>
                  {s.value}
                </div>
                <div className="flex items-center justify-center gap-1 text-[0.72rem] text-white/75">
                  {s.status === "ok"
                    ? <CheckCircle size={11} className="text-green-400" />
                    : <AlertCircle size={11} className="text-orange-400" />
                  }
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[rgba(14,165,233,0.15)] border border-[rgba(14,165,233,0.3)] rounded-xl p-[14px] text-[0.82rem] leading-[1.6]">
            <p className={cn(URW, "font-bold text-[#7dd3fc] mb-1.5 flex items-center gap-1.5")}>
              <Sparkles size={14} />
              Recomendación IA
            </p>
            <p className="text-white/90">
              Su HbA1c está en meta (&lt;7%). Su glucosa en ayuno de 142 mg/dL está ligeramente por
              encima de su meta de 130 mg/dL. Considere revisar la dosis de insulina basal con su
              médico en la próxima consulta.
            </p>
          </div>

          <p className="mt-3 text-[0.75rem] text-white/60 text-center">
            Basado en ADA Standards of Care 2026
          </p>
        </div>
      </div>
    </section>
  );
}
