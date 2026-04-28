export function Footer(): React.JSX.Element {
  return (
    <footer className="bg-[#07183d] text-white/60 py-6 px-[5%] text-center text-[0.8rem] leading-[1.8]">
      <div className="mb-2 text-white/85 font-semibold">
        Dr. Ramses Rodrigo Castañeda Valenzuela
      </div>
      <div>Médico General · Diabetólogo · Cédula Prof. 6823687 · Colima, México</div>
      <div className="mt-2 text-[0.75rem]">
        Este sitio es informativo y no sustituye la consulta médica.{" "}
        <a href="/login" className="text-[#7dd3fc] no-underline">
          Portal del paciente
        </a>
      </div>
    </footer>
  );
}
