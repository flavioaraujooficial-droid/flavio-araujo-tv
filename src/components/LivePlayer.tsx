import { Play, Volume2, Maximize2, Settings } from 'lucide-react';

export default function LivePlayer() {
  return (
    <section id="aovivo" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="ping-ring absolute inline-flex h-full w-full rounded-full bg-[#D9150B] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#D9150B]" />
              </span>
              <span className="text-[#D9150B] text-xs font-bold tracking-widest uppercase">Ao Vivo Agora</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Flávio Araújo TV</h2>
            <p className="text-slate-400 text-sm mt-1">Transmissão em tempo real para toda a Bahia</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-slate-300">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>12.847 assistindo</span>
          </div>
        </div>

        {/* Player container */}
        <div className="relative rounded-2xl overflow-hidden glass border border-white/[0.08] group">
          {/* 16:9 aspect ratio */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            {/* Bahia cover image */}
            <img
              src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Transmissão ao vivo Bahia"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1019D6]/10 to-[#4B168D]/10" />

            {/* LIVE badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-[#D9150B] rounded-md">
              <span className="relative flex h-2 w-2">
                <span className="ping-ring absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="text-white text-xs font-bold tracking-widest">AO VIVO</span>
            </div>

            {/* HD badge */}
            <div className="absolute top-4 right-4 px-2 py-1 glass rounded text-xs font-bold text-white tracking-wider">
              HD
            </div>

            {/* Center play button */}
            <button className="absolute inset-0 flex items-center justify-center group/btn">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300">
                <Play className="w-7 h-7 sm:w-9 sm:h-9 text-white fill-white ml-1" />
              </div>
            </button>

            {/* Bottom controls bar */}
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center gap-3 bg-gradient-to-t from-black/80 to-transparent">
              <button className="flex items-center justify-center w-9 h-9 rounded-full glass hover:bg-white/10 transition-colors">
                <Play className="w-4 h-4 text-white fill-white ml-0.5" />
              </button>
              <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-gradient-to-r from-[#1019D6] to-[#4B168D] rounded-full" />
              </div>
              <button className="flex items-center justify-center w-8 h-8 glass rounded-full hover:bg-white/10 transition-colors">
                <Volume2 className="w-4 h-4 text-white" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 glass rounded-full hover:bg-white/10 transition-colors">
                <Settings className="w-4 h-4 text-white" />
              </button>
              <button className="flex items-center justify-center w-8 h-8 glass rounded-full hover:bg-white/10 transition-colors">
                <Maximize2 className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Info below player */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'Programa atual', value: 'Ao Vivo Bahia — Edição da Tarde' },
            { label: 'Próximo programa', value: 'Conexão Popular — 18h00' },
            { label: 'Qualidade', value: 'HD 1080p • Dolby Audio' },
          ].map(({ label, value }) => (
            <div key={label} className="glass rounded-xl px-4 py-3">
              <span className="block text-[11px] text-slate-500 uppercase tracking-wider font-medium mb-1">{label}</span>
              <span className="block text-sm text-slate-200 font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
