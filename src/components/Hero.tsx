import { Users, MapPin, Play } from 'lucide-react';

const STATS = [
  { value: '27', label: 'Territórios Cobertos', icon: MapPin },
  { value: '417', label: 'Municípios Baianos', icon: Users },
  { value: '15M+', label: 'Espectadores Potenciais', icon: Play },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background radial gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#1019D6]/10 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#4B168D]/10 blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-[#D9150B]/8 blur-[80px]" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-[#1019D6]/30 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#D9150B] ping-ring" />
          <span className="text-xs font-medium text-slate-300 tracking-widest uppercase">
            Transmitindo ao vivo — Bahia
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-bold text-white leading-[1.1] mb-6 animate-slide-up">
          <span className="block text-4xl sm:text-6xl lg:text-7xl italic font-light text-slate-200 mb-1">
            Conectando território
          </span>
          <span className="block text-4xl sm:text-6xl lg:text-7xl italic text-transparent bg-clip-text bg-gradient-to-r from-[#1019D6] via-white to-[#4B168D]">
            e propósito.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10 animate-slide-up">
          A mídia digital que nasce da Bahia, fala com seus territórios e amplifica
          as vozes que constroem o presente e o futuro do nosso povo.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in">
          <a
            href="#aovivo"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#1019D6] to-[#4B168D] text-white font-semibold text-sm tracking-wide hover:scale-105 hover:shadow-lg hover:shadow-[#1019D6]/30 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <span className="relative flex h-2 w-2">
              <span className="ping-ring absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Assistir Ao Vivo
          </a>
          <a
            href="#programacao"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl glass text-white font-semibold text-sm tracking-wide hover:scale-105 hover:bg-white/[0.08] transition-all duration-300 w-full sm:w-auto justify-center border border-white/[0.1]"
          >
            Ver Programação
          </a>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-slide-up">
          {STATS.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="glass rounded-2xl px-6 py-5 flex flex-col items-center gap-2 hover:bg-white/[0.06] transition-colors duration-300"
            >
              <Icon className="w-5 h-5 text-[#1019D6] mb-1" />
              <span className="text-3xl font-bold text-white tracking-tight">{value}</span>
              <span className="text-xs text-slate-400 font-medium text-center leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070814] to-transparent pointer-events-none" />
    </section>
  );
}
