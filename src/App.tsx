import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LivePlayer from './components/LivePlayer';
import Schedule from './components/Schedule';
import RadioPlayer from './components/RadioPlayer';
import Events from './components/Events';
import News from './components/News';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';
import {
  Program, Event, NewsItem,
  DEFAULT_PROGRAMS, DEFAULT_EVENTS, DEFAULT_NEWS,
} from './data';

function loadFromStorage<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export default function App() {
  const [programs, setPrograms] = useState<Program[]>(() =>
    loadFromStorage('fatv_programs', DEFAULT_PROGRAMS)
  );
  const [events, setEvents] = useState<Event[]>(() =>
    loadFromStorage('fatv_events', DEFAULT_EVENTS)
  );
  const [news, setNews] = useState<NewsItem[]>(() =>
    loadFromStorage('fatv_news', DEFAULT_NEWS)
  );

  useEffect(() => { saveToStorage('fatv_programs', programs); }, [programs]);
  useEffect(() => { saveToStorage('fatv_events', events); }, [events]);
  useEffect(() => { saveToStorage('fatv_news', news); }, [news]);

  const addProgram = (p: Program) => setPrograms((prev) => [p, ...prev]);
  const deleteProgram = (id: string) => setPrograms((prev) => prev.filter((p) => p.id !== id));

  const addEvent = (e: Event) => setEvents((prev) => [e, ...prev]);
  const deleteEvent = (id: string) => setEvents((prev) => prev.filter((ev) => ev.id !== id));

  const addNews = (n: NewsItem) => setNews((prev) => [n, ...prev]);
  const deleteNews = (id: string) => setNews((prev) => prev.filter((item) => item.id !== id));

  return (
    <div className="min-h-screen bg-[#070814] text-slate-100">
      <Header />
      <main>
        <Hero />
        <LivePlayer />
        <Schedule programs={programs} />
        <RadioPlayer />
        <Events events={events} />
        <News news={news} />
        <AdminPanel
          programs={programs}
          events={events}
          news={news}
          onAddProgram={addProgram}
          onDeleteProgram={deleteProgram}
          onAddEvent={addEvent}
          onDeleteEvent={deleteEvent}
          onAddNews={addNews}
          onDeleteNews={deleteNews}
        />
      </main>
      <Footer />
    </div>
  );
}
