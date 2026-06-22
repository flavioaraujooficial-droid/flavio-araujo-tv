import { useState } from 'react';
import {
  Shield, ChevronDown, ChevronUp, Plus, Trash2,
  Newspaper, Tv, Calendar, X
} from 'lucide-react';
import { Program, Event, NewsItem, Territory, TERRITORIES } from '../data';

interface Props {
  programs: Program[];
  events: Event[];
  news: NewsItem[];
  onAddProgram: (p: Program) => void;
  onDeleteProgram: (id: string) => void;
  onAddEvent: (e: Event) => void;
  onDeleteEvent: (id: string) => void;
  onAddNews: (n: NewsItem) => void;
  onDeleteNews: (id: string) => void;
}

type Tab = 'news' | 'programs' | 'events';

const GRADIENTS = [
  'from-[#1019D6] to-[#4B168D]',
  'from-[#D9150B] to-[#7c0a06]',
  'from-[#4B168D] to-[#1019D6]',
  'from-[#0f5c2e] to-[#1019D6]',
  'from-[#b45309] to-[#D9150B]',
  'from-[#1019D6] to-[#0f5c2e]',
];

function uid() {
  return Math.random().toString(36).slice(2, 9) + Date.now().toString(36);
}

export default function AdminPanel(props: Props) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<Tab>('news');

  // News form
  const [newsForm, setNewsForm] = useState({ title: '', excerpt: '', category: 'Institucional' });
  // Program form
  const [progForm, setProgForm] = useState({ title: '', description: '', category: '', schedule: '' });
  // Event form
  const [eventForm, setEventForm] = useState({ title: '', date: '', location: '', territory: 'Recôncavo' as Territory, description: '' });

  const submitNews = () => {
    if (!newsForm.title.trim()) return;
    props.onAddNews({
      id: uid(),
      title: newsForm.title,
      excerpt: newsForm.excerpt,
      category: newsForm.category,
      date: new Date().toISOString().slice(0, 10),
    });
    setNewsForm({ title: '', excerpt: '', category: 'Institucional' });
  };

  const submitProgram = () => {
    if (!progForm.title.trim()) return;
    props.onAddProgram({
      id: uid(),
      title: progForm.title,
      description: progForm.description,
      category: progForm.category || 'Cultura',
      schedule: progForm.schedule,
      gradient: GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)],
    });
    setProgForm({ title: '', description: '', category: '', schedule: '' });
  };

  const submitEvent = () => {
    if (!eventForm.title.trim()) return;
    props.onAddEvent({
      id: uid(),
      title: eventForm.title,
      date: eventForm.date || new Date().toISOString().slice(0, 10),
      location: eventForm.location,
      territory: eventForm.territory,
      description: eventForm.description,
    });
    setEventForm({ title: '', date: '', location: '', territory: 'Recôncavo', description: '' });
  };

  const inputClass =
    'w-full bg-white/[0.04] border border-white/[0.1] rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#1019D6]/60 focus:ring-1 focus:ring-[#1019D6]/30 transition-colors';

  const TABS: { key: Tab; label: string; icon: typeof Newspaper }[] = [
    { key: 'news', label: 'Notícias', icon: Newspaper },
    { key: 'programs', label: 'Programas', icon: Tv },
    { key: 'events', label: 'Eventos', icon: Calendar },
  ];

  return (
    <section id="admin" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Toggle button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-6 py-4 rounded-2xl glass border border-[#D9150B]/30 hover:border-[#D9150B]/60 text-white transition-all duration-300 group"
        >
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-[#D9150B]" />
            <span className="font-semibold text-sm tracking-wide">Painel de Administração — MVP Local</span>
            <span className="text-[10px] text-slate-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
              Dados no LocalStorage
            </span>
          </div>
          {open
            ? <ChevronUp className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
            : <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
          }
        </button>

        {/* Panel body */}
        {open && (
          <div className="mt-3 glass rounded-2xl border border-white/[0.08] overflow-hidden animate-slide-up">
            {/* Tab bar */}
            <div className="flex border-b border-white/[0.06]">
              {TABS.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={`flex items-center gap-2 px-5 py-3.5 text-sm font-medium transition-all duration-200 border-b-2 ${
                    tab === key
                      ? 'border-[#1019D6] text-white bg-[#1019D6]/5'
                      : 'border-transparent text-slate-400 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </div>

            <div className="p-6">
              {/* NEWS TAB */}
              {tab === 'news' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input className={inputClass} placeholder="Título da notícia" value={newsForm.title}
                      onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })} />
                    <input className={inputClass} placeholder="Categoria (ex: Institucional)" value={newsForm.category}
                      onChange={(e) => setNewsForm({ ...newsForm, category: e.target.value })} />
                    <textarea className={`${inputClass} sm:col-span-2 resize-none h-20`} placeholder="Resumo"
                      value={newsForm.excerpt} onChange={(e) => setNewsForm({ ...newsForm, excerpt: e.target.value })} />
                  </div>
                  <button onClick={submitNews}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1019D6] text-white text-sm font-semibold hover:bg-[#1019D6]/80 transition-colors">
                    <Plus className="w-4 h-4" />
                    Adicionar Notícia
                  </button>
                  <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                    {props.news.map((item) => (
                      <div key={item.id} className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                        <span className="text-sm text-slate-300 truncate flex-1">{item.title}</span>
                        <button onClick={() => props.onDeleteNews(item.id)}
                          className="flex-shrink-0 p-1.5 rounded-lg hover:bg-[#D9150B]/20 text-slate-500 hover:text-[#D9150B] transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* PROGRAMS TAB */}
              {tab === 'programs' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input className={inputClass} placeholder="Nome do programa" value={progForm.title}
                      onChange={(e) => setProgForm({ ...progForm, title: e.target.value })} />
                    <input className={inputClass} placeholder="Categoria" value={progForm.category}
                      onChange={(e) => setProgForm({ ...progForm, category: e.target.value })} />
                    <input className={inputClass} placeholder="Horário (ex: Seg–Sex, 10h)" value={progForm.schedule}
                      onChange={(e) => setProgForm({ ...progForm, schedule: e.target.value })} />
                    <textarea className={`${inputClass} sm:col-span-2 resize-none h-20`} placeholder="Descrição"
                      value={progForm.description} onChange={(e) => setProgForm({ ...progForm, description: e.target.value })} />
                  </div>
                  <button onClick={submitProgram}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#4B168D] text-white text-sm font-semibold hover:bg-[#4B168D]/80 transition-colors">
                    <Plus className="w-4 h-4" />
                    Adicionar Programa
                  </button>
                  <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                    {props.programs.map((p) => (
                      <div key={p.id} className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                        <span className="text-sm text-slate-300 truncate flex-1">{p.title}</span>
                        <span className="text-xs text-slate-500">{p.schedule}</span>
                        <button onClick={() => props.onDeleteProgram(p.id)}
                          className="flex-shrink-0 p-1.5 rounded-lg hover:bg-[#D9150B]/20 text-slate-500 hover:text-[#D9150B] transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* EVENTS TAB */}
              {tab === 'events' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input className={inputClass} placeholder="Título do evento" value={eventForm.title}
                      onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })} />
                    <input className={`${inputClass}`} type="date" value={eventForm.date}
                      onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })} />
                    <input className={inputClass} placeholder="Local (ex: Cachoeira, BA)" value={eventForm.location}
                      onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })} />
                    <select className={inputClass} value={eventForm.territory}
                      onChange={(e) => setEventForm({ ...eventForm, territory: e.target.value as Territory })}>
                      {TERRITORIES.filter((t) => t !== 'Todos').map((t) => (
                        <option key={t} value={t} className="bg-[#0d0f24]">{t}</option>
                      ))}
                    </select>
                    <textarea className={`${inputClass} sm:col-span-2 resize-none h-20`} placeholder="Descrição"
                      value={eventForm.description} onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })} />
                  </div>
                  <button onClick={submitEvent}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#D9150B] text-white text-sm font-semibold hover:bg-[#D9150B]/80 transition-colors">
                    <Plus className="w-4 h-4" />
                    Adicionar Evento
                  </button>
                  <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                    {props.events.map((ev) => (
                      <div key={ev.id} className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                        <span className="text-sm text-slate-300 truncate flex-1">{ev.title}</span>
                        <span className="text-xs text-slate-500 flex-shrink-0">{ev.territory}</span>
                        <button onClick={() => props.onDeleteEvent(ev.id)}
                          className="flex-shrink-0 p-1.5 rounded-lg hover:bg-[#D9150B]/20 text-slate-500 hover:text-[#D9150B] transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
