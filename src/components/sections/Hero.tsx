import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const WA_LINK =
  "https://wa.me/5213121355297?text=Hola%20Dr.%20Ramses%2C%20quisiera%20agendar%20una%20cita";

const URW = "font-[family-name:var(--font-urw)]";

export function Hero(): React.JSX.Element {
  return (
    <section
      id="inicio"
      className="bg-[#f8faf9] pt-[112px] px-[5%] relative overflow-hidden"
    >

      {/* ── Background icons ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* top strip */}
        <img src="/hero-bg-icons/stethoscope.svg"      className="hero-icon absolute top-[3%]   left-[2%]   w-9 opacity-[0.15] rotate-[-15deg]" alt="" />
        <img src="/hero-bg-icons/biomarker.svg"        className="hero-icon absolute top-[2%]   left-[22%]  w-8 opacity-[0.12] rotate-[12deg]"  alt="" />
        <img src="/hero-bg-icons/clinical-fe.svg"      className="hero-icon absolute top-[4%]   left-[44%]  w-8 opacity-[0.12] rotate-[-8deg]"  alt="" />
        <img src="/hero-bg-icons/health.svg"           className="hero-icon absolute top-[3%]   left-[66%]  w-9 opacity-[0.15] rotate-[20deg]"  alt="" />
        <img src="/hero-bg-icons/heart-cardiogram.svg" className="hero-icon absolute top-[2%]   left-[85%]  w-8 opacity-[0.12] rotate-[-18deg]" alt="" />
        {/* upper-mid strip */}
        <img src="/hero-bg-icons/heart-cardiogram.svg" className="hero-icon absolute top-[22%]  left-[6%]   w-8 opacity-[0.12] rotate-[25deg]"  alt="" />
        <img src="/hero-bg-icons/health.svg"           className="hero-icon absolute top-[20%]  left-[28%]  w-9 opacity-[0.15] rotate-[-20deg]" alt="" />
        <img src="/hero-bg-icons/stethoscope.svg"      className="hero-icon absolute top-[24%]  left-[52%]  w-8 opacity-[0.12] rotate-[14deg]"  alt="" />
        <img src="/hero-bg-icons/biomarker.svg"        className="hero-icon absolute top-[20%]  left-[74%]  w-8 opacity-[0.12] rotate-[-25deg]" alt="" />
        <img src="/hero-bg-icons/clinical-fe.svg"      className="hero-icon absolute top-[22%]  left-[92%]  w-8 opacity-[0.12] rotate-[30deg]"  alt="" />
        {/* mid strip */}
        <img src="/hero-bg-icons/clinical-fe.svg"      className="hero-icon absolute top-[44%]  left-[3%]   w-9 opacity-[0.15] rotate-[-10deg]" alt="" />
        <img src="/hero-bg-icons/heart-cardiogram.svg" className="hero-icon absolute top-[42%]  left-[24%]  w-8 opacity-[0.12] rotate-[18deg]"  alt="" />
        <img src="/hero-bg-icons/biomarker.svg"        className="hero-icon absolute top-[45%]  left-[48%]  w-8 opacity-[0.12] rotate-[-30deg]" alt="" />
        <img src="/hero-bg-icons/stethoscope.svg"      className="hero-icon absolute top-[43%]  left-[70%]  w-9 opacity-[0.15] rotate-[22deg]"  alt="" />
        <img src="/hero-bg-icons/health.svg"           className="hero-icon absolute top-[44%]  left-[90%]  w-8 opacity-[0.12] rotate-[-14deg]" alt="" />
        {/* lower-mid strip */}
        <img src="/hero-bg-icons/health.svg"           className="hero-icon absolute top-[64%]  left-[8%]   w-8 opacity-[0.12] rotate-[35deg]"  alt="" />
        <img src="/hero-bg-icons/stethoscope.svg"      className="hero-icon absolute top-[62%]  left-[30%]  w-9 opacity-[0.15] rotate-[-18deg]" alt="" />
        <img src="/hero-bg-icons/clinical-fe.svg"      className="hero-icon absolute top-[65%]  left-[55%]  w-8 opacity-[0.12] rotate-[10deg]"  alt="" />
        <img src="/hero-bg-icons/heart-cardiogram.svg" className="hero-icon absolute top-[63%]  left-[78%]  w-8 opacity-[0.12] rotate-[-28deg]" alt="" />
        <img src="/hero-bg-icons/biomarker.svg"        className="hero-icon absolute top-[64%]  left-[95%]  w-8 opacity-[0.12] rotate-[20deg]"  alt="" />
        {/* bottom strip */}
        <img src="/hero-bg-icons/biomarker.svg"        className="hero-icon absolute top-[84%]  left-[4%]   w-9 opacity-[0.15] rotate-[-22deg]" alt="" />
        <img src="/hero-bg-icons/health.svg"           className="hero-icon absolute top-[82%]  left-[26%]  w-8 opacity-[0.12] rotate-[28deg]"  alt="" />
        <img src="/hero-bg-icons/heart-cardiogram.svg" className="hero-icon absolute top-[85%]  left-[50%]  w-8 opacity-[0.12] rotate-[-12deg]" alt="" />
        <img src="/hero-bg-icons/stethoscope.svg"      className="hero-icon absolute top-[83%]  left-[72%]  w-9 opacity-[0.15] rotate-[16deg]"  alt="" />
        <img src="/hero-bg-icons/clinical-fe.svg"      className="hero-icon absolute top-[84%]  left-[90%]  w-8 opacity-[0.12] rotate-[-30deg]" alt="" />
      </div>

      {/* ── Desktop layout (md+) ── */}
      <div className="hidden md:flex flex-col max-w-[1200px] mx-auto h-[670px] relative">

{/* HEADING — full width, centered */}
        <div className="w-full text-center pt-4 pointer-events-none select-none animate-fade-up">
          <h1 className={cn(URW, "text-[clamp(3.5rem,8vw,6.5rem)] font-black text-[#00bfa5] leading-[1.05] tracking-wide")}>
            Date la oportunidad
            <br />
            <em className={cn("not-italic text-[#008e76] font-[850]")}>de vivir mejor.</em>
          </h1>
        </div>

        {/* PHOTO — absolutely centered, sits on top of heading */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
          <div className="relative flex flex-col items-center">
            {/* Glow behind doctor */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-[#00bfa5]/20 blur-3xl -z-10" />
            <Image
              src="/images/perfil-ramses2.png"
              alt="Dr. Ramses Castañeda"
              width={284}
              height={390}
              className="relative z-10 w-[380px] h-[510px] object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* MIDDLE ROW — left stats | empty center (photo sits here) | right testimonial */}
        <div className="flex-1 grid grid-cols-[1fr_300px_1fr] gap-x-10">
          <div className="flex flex-col justify-end pb-16 gap-8 animate-fade-up">
            <div>
              <p className={cn(URW, "text-[3.8rem] font-black text-[#00bfa5] leading-none")}>+10</p>
              <p className={cn(URW, "font-bold text-[#00bfa5]/55 text-[0.75rem] tracking-[2.5px] uppercase mt-1")}>
                Años de experiencia
              </p>
            </div>
            <div>
              <p className={cn(URW, "text-[3.8rem] font-black text-[#00bfa5] leading-none")}>500+</p>
              <p className={cn(URW, "font-bold text-[#00bfa5]/55 text-[0.75rem] tracking-[2.5px] uppercase mt-1")}>
                Pacientes atendidos
              </p>
            </div>
          </div>

          {/* empty center column — photo sits above */}
          <div />

          <div className="flex flex-col justify-end items-end text-right pb-16 animate-fade-up">
            <p className={cn(URW, "font-bold text-[#00bfa5] text-[1.1rem] leading-[1.4] max-w-[270px] mb-3")}>
              Cada paciente es único, cada tratamiento también.
            </p>
            <p className={cn(URW, "font-light text-[#00bfa5]/70 text-[1.1rem] leading-[1.75] max-w-[270px]")}>
              Cada persona llega con su historia<br />y sus metas. Tu tratamiento<br />se construye contigo, adaptado a ti.
            </p>
          </div>
        </div>

      </div>

      {/* ── Mobile layout (< md) ── */}
      <div className="flex md:hidden flex-col items-center text-center gap-6 pt-10 pb-16 relative z-10">
        <h1 className={cn(URW, "text-[clamp(2.8rem,12vw,4rem)] font-black text-[#00bfa5] leading-[1.05] tracking-tight animate-fade-up")}>
          Date la oportunidad
          <br />
          <em className="not-italic text-[#008e76] font-[850]">de vivir mejor.</em>
        </h1>

        <div className="relative flex flex-col items-center animate-fade-up animate-fade-up-d1">
          <Image
            src="/images/perfil-ramses2.png"
            alt="Dr. Ramses Castañeda"
            width={240}
            height={320}
            className="relative z-10 w-[240px] h-[320px] object-cover object-top shadow-[0_20px_60px_rgba(0,191,165,0.2)] "
            priority
          />
        </div>

        <p className={cn(URW, "font-light text-[#00bfa5]/70 text-[0.93rem] leading-[1.7] max-w-[320px] animate-fade-up animate-fade-up-d2")}>
          Médico General y Diabetólogo con enfoque en el control integral de la diabetes.
          Atención personalizada en Colima.
        </p>

      </div>
    </section>
  );
}
