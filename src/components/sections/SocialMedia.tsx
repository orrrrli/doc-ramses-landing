import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const URW = "font-[family-name:var(--font-urw)]";

interface SocialLink {
  name: string;
  desc: string;
  href: string;
  borderColor: string;
  icon: React.JSX.Element;
}

const SOCIALS: SocialLink[] = [
  {
    name: "TikTok",
    desc: "Videos cortos y directos sobre diabetes, glucosa y hábitos saludables",
    href: "https://www.tiktok.com/@dr.ramsescastaneda?_t=8oYV7eCLz77&_r=1",
    borderColor: "#000000",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect width="48" height="48" rx="12" fill="#000" />
        <path
          d="M34.3 16.9c-1.8-.3-3.3-1.4-4.2-3V26c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.3 0 .6 0 .9.1v4.1c-.3-.1-.6-.1-.9-.1-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4V10h4c.4 2.8 2.6 5 5.2 5.4v1.5z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    desc: "Artículos, consejos y noticias sobre salud metabólica",
    href: "https://www.facebook.com/share/7hmg6ehXKVBBEhsF/?mibextid=qi2Omg",
    borderColor: "#1877F2",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect width="48" height="48" rx="12" fill="#1877F2" />
        <path
          d="M26.5 38V25.5h4.2l.6-4.8H26.5v-3.1c0-1.4.4-2.3 2.3-2.3H31.5V11c-.5-.1-2-.2-3.8-.2-3.8 0-6.4 2.3-6.4 6.5v3.4H17v4.8h4.3V38h5.2z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    desc: "Explicaciones en video sobre el control de la diabetes",
    href: "https://youtube.com/@dr.ramsescastanedadiabetol6294?si=s0Sa113l_h6FWUh0",
    borderColor: "#FF0000",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect width="48" height="48" rx="12" fill="#FF0000" />
        <path
          d="M38.5 17.5s-.4-2.5-1.5-3.6c-1.4-1.5-3-.5-3-.5S28.8 13 24 13s-10 .5-10 .5-1.6-1-3 .5c-1.1 1.1-1.5 3.6-1.5 3.6S9 20.3 9 24s.5 6.5.5 6.5 .4 2.5 1.5 3.6c1.4 1.5 3.3 1.4 3.3 1.4S18 35.9 24 36s10-.5 10-.5 1.6.1 3-1.4c1.1-1.1 1.5-3.6 1.5-3.6s.5-2.8.5-6.5-.5-6.5-.5-6.5zm-16 11v-9l8 4.5-8 4.5z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    desc: "Infografías, tips y el día a día del consultorio",
    href: "https://www.instagram.com/dr.ramsescastaneda?igsh=MWE5dGhqc2l5ZGN5aw==",
    borderColor: "#E1306C",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <defs>
          <linearGradient id="igGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFDC80" />
            <stop offset="26%" stopColor="#FCAF45" />
            <stop offset="50%" stopColor="#F77737" />
            <stop offset="74%" stopColor="#F56040" />
            <stop offset="87%" stopColor="#FD1D1D" />
            <stop offset="100%" stopColor="#E1306C" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="12" fill="url(#igGrad)" />
        <rect x="11" y="11" width="26" height="26" rx="7" stroke="white" strokeWidth="2.5" fill="none" />
        <circle cx="24" cy="24" r="6.5" stroke="white" strokeWidth="2.5" fill="none" />
        <circle cx="32.5" cy="15.5" r="1.8" fill="white" />
      </svg>
    ),
  },
];

export function SocialMedia(): React.JSX.Element {
  return (
    <section
      id="redes-sociales"
      className="bg-[#f0fdfb] py-20 px-[5%] scroll-mt-20"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10">
          <p className={cn(URW, "text-[0.72rem] font-bold tracking-[2px] uppercase text-[#008e76] mb-2")}>
            Sígueme en redes
          </p>
          <h2 className={cn(URW, "text-[clamp(1.5rem,3vw,2.2rem)] font-black text-[#1e2a3a] mb-4")}>
            Información útil, sin tecnicismos
          </h2>
          <p className="text-[0.97rem] text-[#4a5568] max-w-[580px] mx-auto leading-[1.75]">
            En mis redes encontrarás información sobre la diabetes y la salud con un{" "}
            <strong>aire fresco y sin terminología médica confusa</strong>. Temas prácticos para el
            día a día, explicados de forma sencilla.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-[900px] mx-auto">
          {SOCIALS.map((s) => (
            <Card
              key={s.name}
              className="rounded-[18px] border-0 shadow-[0_2px_12px_rgba(19,70,160,0.08)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(19,70,160,0.15)] transition-all duration-200"
              style={{ borderTop: `4px solid ${s.borderColor}` }}
            >
              <CardContent className="flex flex-col items-center gap-[10px] p-6 text-center">
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                  {s.icon}
                </a>
                <p className="font-bold text-[0.95rem] text-[#1e2a3a]">{s.name}</p>
                <p className="text-[0.8rem] text-[#4a5568] leading-[1.5]">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
