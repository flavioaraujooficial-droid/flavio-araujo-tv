import { Tv, MapPin, Mail, Instagram, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1019D6] via-[#4B168D] to-[#D9150B]" />
                <Tv className="relative z-10 text-white w-5 h-5" />
              </div>
              <span className="text-white font-bold text-lg">
                Flávio Araújo<span className="text-[#1019D6]"> TV</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Mídia digital territorial da Bahia. Conectando os 27 territórios
              de identidade através de cultura, jornalismo e comunidade.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[Instagram, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors border border-white/[0.06]">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Conteúdo</h4>
            <ul className="space-y-2">
              {['Programação', 'Ao Vivo', 'Rádio', 'Eventos', 'Notícias'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-[#1019D6] flex-shrink-0" />
                Salvador, Bahia — Brasil
              </li>
              <li className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-[#1019D6] flex-shrink-0" />
                contato@flavioaraujo.tv
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © 2026 Flávio Araújo TV. Todos os direitos reservados.
          </p>
          <p className="text-slate-700 text-xs">
            Mídia digital territorial da Bahia
          </p>
        </div>
      </div>
    </footer>
  );
}
