import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BarChart2,
  Sparkles,
  Target,
  Stethoscope,
  LogIn,
  CheckCircle,
  AlertCircle,
  TrendingUp,
} from "lucide-react";
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
    desc: "Glucosa, presión, peso, HbA1c, colesterol y más — graficado con sus metas personales.",
  },
  {
    icon: Sparkles,
    title: "Recomendaciones con IA — SCD 2026",
    desc: "El sistema analiza sus resultados y le explica qué significan y qué puede mejorar.",
  },
  {
    icon: Target,
    title: "Metas individualizadas según su condición",
    desc: "Diferente si vive con diabetes tipo 1, tipo 2, o sin diabetes.",
  },
  {
    icon: Stethoscope,
    title: "Su médico ve su progreso en tiempo real",
    desc: "El Dr. Castañeda revisa sus registros antes de la consulta para optimizar el tiempo.",
  },
];

interface PreviewStat {
  value: string;
  label: string;
  sublabel: string;
  color: string;
  status: "ok" | "warn";
}

const PREVIEW_STATS: PreviewStat[] = [
  { value: "6.8%",   label: "HbA1c",  sublabel: "En meta",  color: "text-[#4ade80]", status: "ok" },
  { value: "142",    label: "Glucosa", sublabel: "Revisar",  color: "text-[#fb923c]", status: "warn" },
  { value: "118/76", label: "Presión", sublabel: "Normal",   color: "text-[#4ade80]", status: "ok" },
  { value: "24.1",   label: "IMC",     sublabel: "Normal",   color: "text-[#4ade80]", status: "ok" },
];

export function Portal(): React.JSX.Element {
  return (
    <section
      id="mi-portal"
      className="bg-[#f8faf9] px-[5%] scroll-mt-20"
      style={{ minHeight: "calc(100vh - 80px)", display: "flex", alignItems: "center" }}
    >
      <div className="max-w-[1100px] mx-auto w-full py-10">

        {/* header */}
        <div className="text-center mb-7">
          <span className={cn(URW, "inline-flex items-center gap-1.5 text-[0.68rem] font-bold tracking-[2px] uppercase text-[#008e76] bg-[#00bfa5]/10 border border-[#00bfa5]/25 px-3.5 py-1 rounded-full mb-3")}>
            <TrendingUp size={12} />
            Portal de pacientes — Gratis
          </span>
          <h2 className={cn(URW, "text-[clamp(1.5rem,2.8vw,2.1rem)] font-black text-[#1e2a3a] leading-tight mb-2")}>
            Lleve un registro inteligente de su salud
          </h2>
          <p className="text-[#4a5568] text-[0.9rem] max-w-[480px] mx-auto leading-[1.65]">
            Cree su cuenta gratuita y monitoree todos sus marcadores con ayuda de IA clínica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Left — feature list */}
          <div>
            <ul className="space-y-3 mb-6">
              {FEATURES.map((f) => (
                <li key={f.title} className="flex items-start gap-3 group">
                  <div className="w-9 h-9 bg-[#00bfa5]/10 border border-[#00bfa5]/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                    <f.icon size={17} className="text-[#00bfa5]" />
                  </div>
                  <div className="pt-0.5">
                    <strong className="block text-[#1e2a3a] text-[0.88rem] font-bold mb-0.5 leading-snug">{f.title}</strong>
                    <span className="text-[#4a5568] text-[0.8rem] leading-[1.5]">{f.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="/login"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-[#1346a0] hover:bg-[#0f3585] text-white rounded-full px-6 py-3 h-auto font-bold text-[0.88rem]",
                "shadow-[0_4px_16px_rgba(19,70,160,0.25)] gap-2 transition-all duration-200 hover:-translate-y-px hover:shadow-[0_6px_22px_rgba(19,70,160,0.35)]",
              )}
            >
              <LogIn size={15} />
              Iniciar sesión o registrarse
            </a>
          </div>

          {/* Right — dashboard preview (dark floating card) */}
          <div
            className="rounded-3xl p-5 text-white shadow-[0_8px_40px_rgba(19,70,160,0.18)]"
            style={{ background: "linear-gradient(135deg, #07163a 0%, #0f2d6e 55%, #094d3f 100%)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <p className={cn(URW, "text-[0.72rem] font-bold text-white/60 uppercase tracking-[1.5px]")}>
                Vista previa del dashboard
              </p>
              <span className="flex items-center gap-1.5 text-[0.68rem] text-[#4ade80] font-semibold bg-[#4ade80]/10 px-2 py-0.5 rounded-full border border-[#4ade80]/20">
                <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full animate-pulse" />
                En línea
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3">
              {PREVIEW_STATS.map((s) => (
                <div key={s.label}
                     className="bg-white/[0.07] border border-white/[0.08] rounded-xl p-3 text-center">
                  <div className={cn(URW, "text-[1.45rem] font-black leading-none mb-1", s.color)}>
                    {s.value}
                  </div>
                  <div className={cn(URW, "text-[0.63rem] font-bold text-white/50 uppercase tracking-wide mb-1")}>
                    {s.label}
                  </div>
                  <div className="flex items-center justify-center gap-1 text-[0.63rem]">
                    {s.status === "ok"
                      ? <CheckCircle size={9} className="text-[#4ade80]" />
                      : <AlertCircle size={9} className="text-[#fb923c]" />
                    }
                    <span className={s.status === "ok" ? "text-[#4ade80]" : "text-[#fb923c]"}>
                      {s.sublabel}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#00bfa5]/10 border border-[#00bfa5]/25 rounded-xl p-3.5">
              <p className={cn(URW, "font-bold text-[#00bfa5] text-[0.78rem] mb-1.5 flex items-center gap-1.5")}>
                <Sparkles size={13} />
                Recomendación IA
              </p>
              <p className="text-white/80 text-[0.78rem] leading-[1.6]">
                Su HbA1c está en meta (&lt;7%). Su glucosa en ayuno de 142 mg/dL está ligeramente
                por encima de su meta de 130. Considere revisar la dosis de insulina basal con su médico.
              </p>
            </div>

            <p className="mt-2.5 text-[0.68rem] text-white/35 text-center">
              Basado en ADA Standards of Care 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
