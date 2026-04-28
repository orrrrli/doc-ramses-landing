import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const WA_LINK =
  "https://wa.me/5213121355297?text=Hola%20Dr.%20Ramses%2C%20quisiera%20agendar%20una%20cita";

const SPECIALTY_TAGS = [
  "💉 Insulinoterapia",
  "🍽️ Hidratos de carbono",
  "📊 Control glucémico",
  "🫀 Prev. cardiovascular",
];

export function Hero(): React.JSX.Element {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-gradient-to-br from-[#0a1f4a] via-[#1346a0] to-[#006d5b] flex items-center pt-[90px] pb-16 px-[5%] relative overflow-hidden"
    >
      {/* Subtle cross pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute w-[520px] h-[520px] bg-[radial-gradient(circle,rgba(14,165,233,0.18),transparent_70%)] rounded-full top-[-100px] right-[-80px]" />

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center relative z-10 w-full">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/12 border border-white/25 rounded-full px-4 py-1.5 text-[0.75rem] font-bold text-white/90 tracking-[1px] uppercase mb-5 animate-fade-up">
            <span className="text-green-400 text-[0.6rem]">●</span>
            Consultorio en Colima, Col.
          </div>

          <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4vw,3.2rem)] font-black text-white leading-tight mb-5 animate-fade-up animate-fade-up-d1">
            Dr. Ramses Rodrigo
            <br />
            <em className="not-italic text-[#7dd3fc]">Castañeda Valenzuela</em>
          </h1>

          <p className="text-[1.05rem] text-white/80 leading-[1.7] mb-9 max-w-[480px] animate-fade-up animate-fade-up-d2">
            Médico General y Diabetólogo con enfoque en el control integral de la diabetes y
            enfermedades crónicas. Atención personalizada, educación en salud y acompañamiento
            continuo para usted y su familia.
          </p>

          <div className="flex gap-[14px] flex-wrap animate-fade-up animate-fade-up-d3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-white text-[#1346a0] hover:bg-white/90 rounded-full px-7 py-[14px] h-auto font-bold text-[0.9rem] shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-transform",
              )}
            >
              <WhatsAppIcon className="w-4 h-4 mr-2" />
              Agendar cita por WhatsApp
            </a>
            <a
              href="/login"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "bg-white/12 text-white border-white/30 hover:bg-white/20 rounded-full px-7 py-[14px] h-auto font-semibold text-[0.9rem] hover:-translate-y-0.5 transition-transform",
              )}
            >
              🔐 Iniciar sesión
            </a>
          </div>
        </div>

        {/* Right — photo */}
        <div className="flex flex-col items-center gap-[18px] animate-fade-up animate-fade-up-d1">
          <div className="relative w-[280px] h-[280px]">
            <Image
              src="/logo_circulo.png"
              alt=""
              fill
              className="object-contain brightness-0 invert opacity-[0.15]"
              aria-hidden
            />
            <Image
              src="/perfil_-_Ramses.jpg"
              alt="Dr. Ramses Castañeda"
              width={280}
              height={280}
              className="w-[280px] h-[280px] rounded-full object-cover border-4 border-[rgba(0,191,165,0.6)] shadow-[0_20px_60px_rgba(0,0,0,0.35)] animate-pulse-ring"
              priority
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {SPECIALTY_TAGS.map((tag) => (
              <Badge
                key={tag}
                className="bg-[rgba(0,191,165,0.2)] border border-[rgba(0,191,165,0.4)] text-[#7dd3fc] rounded-full px-[14px] py-1 text-[0.78rem] font-semibold hover:bg-[rgba(0,191,165,0.3)]"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
