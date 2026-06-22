import { useState } from 'react';
import { Calendar, MapPin, Megaphone } from 'lucide-react';
import { Event, Territory, TERRITORIES } from '../data';

interface Props {
  events: Event[];
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
}

function EventCard({ event }: { event: Event }) {
  return (
    <div className="group glass rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 flex flex-col">
      {/* Color accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-[#1019D6] via-[#4B168D] to-[#D9150B]" />

      <div className="p-5 flex flex-col flex-1">
        {/* Territory badge */}
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1019D6] bg-[#1019D6]/10 px-2.5 py-1 rounded-full w-fit mb-3 border border-[#1019D6]/20">
          <MapPin className="w-3 h-3" />
          {event.territory}
        </span>

        <h3 className="text-white font-semibold text-sm sm:text-base leading-snug mb-2 group-hover:text-[#1019D6] transition-colors duration-200 flex-1">
          {event.title}
        </h3>

        <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2">{event.description}</p>

        <div className="mt-auto space-y-2 pt-3 border-t border-white/[0.05]">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Ad slot */}
        <div className="mt-4 rounded-lg border border-dashed border-white/[0.12] bg-white/[0.02] px-3 py-2.5 flex items-center gap-2">
          <Megaphone className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
          <span className="text-[10px] text-slate-600 tracking-wider uppercase">Publicidade Local</span>
        </div>
      </div>
    </div>
  );
}

export default function Events({ events }: Props) {
  const [activeTerritory, setActiveTerritory] = useState<Territory>('Todos');

  const filtered = activeTerritory === 'Todos'
    ? events
    : events.filter((e) => e.territory === activeTerritory);

  return (
    <section id="eventos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-[#D9150B] mb-3 block">
            Eventos & Territórios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Agenda territorial da Bahia
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed">
            Encontre eventos culturais, feiras e encontros comunitários em cada território de identidade.
          </p>
        </div>

        {/* Territory filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TERRITORIES.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTerritory(t)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeTerritory === t
                  ? 'bg-[#1019D6] text-white shadow-md shadow-[#1019D6]/30'
                  : 'glass text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Events grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass rounded-2xl border border-white/[0.06]">
            <MapPin className="w-8 h-8 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-400 text-sm">Nenhum evento neste território no momento.</p>
          </div>
        )}
      </div>
    </section>
  );
}
