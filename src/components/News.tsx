import { Calendar, Tag } from 'lucide-react';
import { NewsItem } from '../data';

interface Props {
  news: NewsItem[];
}

function NewsCard({ item, featured }: { item: NewsItem; featured?: boolean }) {
  const CATEGORY_COLORS: Record<string, string> = {
    Institucional: 'text-[#1019D6] bg-[#1019D6]/10 border-[#1019D6]/20',
    Programação: 'text-[#4B168D] bg-[#4B168D]/10 border-[#4B168D]/20',
    Instituto: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    'Cobertura Especial': 'text-[#D9150B] bg-[#D9150B]/10 border-[#D9150B]/20',
  };
  const colorClass = CATEGORY_COLORS[item.category] ?? 'text-slate-400 bg-white/5 border-white/10';

  function formatDate(dateStr: string) {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  if (featured) {
    return (
      <div className="group glass rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/[0.16] transition-all duration-300 hover:shadow-xl hover:shadow-black/40 lg:col-span-2">
        <div className="relative h-52 sm:h-64 bg-gradient-to-br from-[#1019D6]/30 via-[#4B168D]/20 to-[#070814]">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Tag className="w-32 h-32 text-white" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#070814] via-transparent to-transparent" />
        </div>
        <div className="p-6">
          <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border w-fit mb-3 ${colorClass}`}>
            <Tag className="w-3 h-3" />
            {item.category}
          </span>
          <h3 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-[#1019D6] transition-colors duration-200">
            {item.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.excerpt}</p>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(item.date)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group glass rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40">
      <div className="relative h-36 bg-gradient-to-br from-slate-800/60 to-slate-900/60">
        <div className="absolute inset-0 bg-gradient-to-t from-[#070814] via-transparent to-transparent" />
      </div>
      <div className="p-5">
        <span className={`inline-flex items-center gap-1.5 text-[10px] font-medium px-2 py-0.5 rounded-full border w-fit mb-3 ${colorClass}`}>
          {item.category}
        </span>
        <h3 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-[#1019D6] transition-colors duration-200">
          {item.title}
        </h3>
        <p className="text-slate-400 text-xs leading-relaxed mb-3 line-clamp-2">{item.excerpt}</p>
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <Calendar className="w-3 h-3" />
          {formatDate(item.date)}
        </div>
      </div>
    </div>
  );
}

export default function News({ news }: Props) {
  return (
    <section id="noticias" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-3 block">
            Notícias
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Bastidores e atualizações
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed">
            Novidades institucionais, bastidores da produção e o que acontece nos territórios cobertos pela emissora.
          </p>
        </div>

        {/* Editorial grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {news.map((item, idx) => (
            <NewsCard key={item.id} item={item} featured={idx === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
