import { useState, useEffect } from 'react';
import { Menu, X, Radio, Tv, MapPin, Calendar, Newspaper, Shield, Home, Zap } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#hero', icon: Home },
  { label: 'Ao Vivo', href: '#aovivo', icon: Zap },
  { label: 'Programação', href: '#programacao', icon: Tv },
  { label: 'Rádio', href: '#radio', icon: Radio },
  { label: 'Eventos', href: '#eventos', icon: Calendar },
  { label: 'Territórios', href: '#eventos', icon: MapPin },
  { label: 'Notícias', href: '#noticias', icon: Newspaper },
  { label: 'Admin', href: '#admin', icon: Shield },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#070814]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1019D6] via-[#4B168D] to-[#D9150B] opacity-90" />
              <Tv className="relative z-10 text-white w-5 h-5" />
            </div>
            <span className="text-white font-bold text-lg tracking-tight leading-tight">
              Flávio Araújo<span className="text-[#1019D6]"> TV</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${label === 'Admin'
                    ? 'text-[#D9150B] hover:bg-[#D9150B]/10 border border-[#D9150B]/30 hover:border-[#D9150B]/60 ml-2'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
              >
                {label === 'Ao Vivo' && (
                  <span className="relative flex h-2 w-2 mr-0.5">
                    <span className="ping-ring absolute inline-flex h-full w-full rounded-full bg-[#D9150B] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D9150B]" />
                  </span>
                )}
                {label !== 'Ao Vivo' && <Icon className="w-3.5 h-3.5 opacity-70" />}
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] text-white hover:bg-white/[0.1] transition-colors"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-[#070814]/95 backdrop-blur-xl border-t border-white/[0.06] px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                ${label === 'Admin'
                  ? 'text-[#D9150B] border border-[#D9150B]/30 hover:bg-[#D9150B]/10 mt-2'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
            >
              <Icon className="w-4 h-4 opacity-70" />
              {label}
              {label === 'Ao Vivo' && (
                <span className="ml-auto flex h-2 w-2">
                  <span className="ping-ring absolute inline-flex h-2 w-2 rounded-full bg-[#D9150B] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D9150B]" />
                </span>
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
