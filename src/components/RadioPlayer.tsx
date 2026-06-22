import { useState } from 'react';
import { Play, Pause, Music2, Radio } from 'lucide-react';

const BARS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const DELAY_MAP = ['', 'wave-delay-1', 'wave-delay-2', 'wave-delay-3', 'wave-delay-4', 'wave-delay-3', 'wave-delay-2', 'wave-delay-1', '', 'wave-delay-4', 'wave-delay-2', 'wave-delay-1'];

const TRACKS = [
  { title: 'Raízes do Recôncavo', artist: 'Conjunto Afro-Baiano', duration: '4:32' },
  { title: 'Noite de Feira', artist: 'Trio Nordestino Baiano', duration: '3:48' },
  { title: 'Sertão em Flor', artist: 'Ana Beatriz & Trio Caatinga', duration: '5:10' },
];

export default function RadioPlayer() {
  const [playing, setPlaying] = useState(false);
  const [currentTrack] = useState(0);

  return (
    <section id="radio" className="py-20 px-4 sm:px-6 lg:px-8">
      {/* Background accent */}
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1019D6]/8 via-transparent to-[#4B168D]/8 pointer-events-none" />

        <div className="relative rounded-3xl glass border border-white/[0.08] overflow-hidden p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: player UI */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Radio className="w-5 h-5 text-[#1019D6]" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#1019D6]">
                  Território Sonoro
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Rádio Cultural da Bahia
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
                MPB, samba de roda, axé, forró e instrumentais que carregam
                a alma e as raízes dos territórios baianos.
              </p>

              {/* Now playing card */}
              <div className="glass rounded-2xl p-5 mb-6 border border-white/[0.06]">
                <div className="flex items-center gap-4">
                  {/* Album art placeholder */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1019D6] to-[#4B168D] flex items-center justify-center flex-shrink-0">
                    <Music2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm truncate">
                      {TRACKS[currentTrack].title}
                    </p>
                    <p className="text-slate-400 text-xs truncate mt-0.5">
                      {TRACKS[currentTrack].artist}
                    </p>
                  </div>
                  <span className="text-slate-500 text-xs font-mono">
                    {TRACKS[currentTrack].duration}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r from-[#1019D6] to-[#4B168D] transition-all duration-1000 ${playing ? 'w-2/5' : 'w-1/4'}`}
                  />
                </div>
              </div>

              {/* Play button */}
              <button
                onClick={() => setPlaying(!playing)}
                className={`flex items-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 ${
                  playing
                    ? 'bg-white/10 border border-white/10 text-white hover:bg-white/15'
                    : 'bg-gradient-to-r from-[#1019D6] to-[#4B168D] text-white hover:shadow-lg hover:shadow-[#1019D6]/30'
                }`}
              >
                {playing ? (
                  <>
                    <Pause className="w-4 h-4 fill-white" />
                    Pausar transmissão
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                    Ouvir agora
                  </>
                )}
              </button>
            </div>

            {/* Right: waveform + playlist */}
            <div className="flex flex-col gap-6">
              {/* Animated waveform */}
              <div className="flex items-center justify-center gap-1 h-20">
                {BARS.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 rounded-full bg-gradient-to-t from-[#1019D6] to-[#4B168D] ${
                      playing ? `animate-wave ${DELAY_MAP[i]}` : 'opacity-30'
                    }`}
                    style={{
                      height: `${20 + Math.sin(i * 0.8) * 16 + 8}px`,
                      transitionDuration: '300ms',
                    }}
                  />
                ))}
              </div>

              {/* Playlist */}
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                  Próximas músicas
                </p>
                {TRACKS.map((track, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors duration-200 ${
                      idx === currentTrack
                        ? 'bg-[#1019D6]/15 border border-[#1019D6]/30'
                        : 'hover:bg-white/[0.04] border border-transparent'
                    }`}
                  >
                    <span className={`text-xs font-mono w-4 ${idx === currentTrack ? 'text-[#1019D6]' : 'text-slate-600'}`}>
                      {idx === currentTrack && playing ? '▶' : idx + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium truncate ${idx === currentTrack ? 'text-white' : 'text-slate-300'}`}>
                        {track.title}
                      </p>
                      <p className="text-xs text-slate-500 truncate">{track.artist}</p>
                    </div>
                    <span className="text-xs text-slate-600 font-mono">{track.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
