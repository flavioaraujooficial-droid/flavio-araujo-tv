import { Clock, Tag } from 'lucide-react';
import { Program } from '../data';

interface Props {
  programs: Program[];
}

function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden glass border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40">
      {/* Gradient banner */}
      <div className={`h-32 bg-gradient-to-br ${program.gradient} relative flex items-end p-4`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/80 bg-white/10 px-2 py-0.5 rounded-full">
            <Tag className="w-3 h-3" />
            {program.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-white font-semibold text-base mb-2 group-hover:text-[#1019D6] transition-colors duration-200">
          {program.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">{program.description}</p>
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <Clock className="w-3.5 h-3.5" />
          <span>{program.schedule}</span>
        </div>
      </div>
    </div>
  );
}

export default function Schedule({ programs }: Props) {
  return (
    <section id="programacao" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#1019D6] mb-3 block">
            Grade de Programação
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Programas que contam a Bahia
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed">
            Cultura, jornalismo, territorialidade e comunidade em uma grade pensada para cada canto do estado.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
