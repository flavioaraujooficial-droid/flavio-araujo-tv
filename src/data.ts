export type Territory =
  | 'Todos'
  | 'Recôncavo'
  | 'Sisal'
  | 'RMS'
  | 'Chapada Diamantina'
  | 'Litoral Norte'
  | 'Sul'
  | 'Extremo Sul'
  | 'Oeste'
  | 'Sertão'
  | 'Portal do Sertão';

export interface Program {
  id: string;
  title: string;
  description: string;
  category: string;
  gradient: string;
  schedule: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  territory: Territory;
  description: string;
  image?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image?: string;
}

export const TERRITORIES: Territory[] = [
  'Todos', 'Recôncavo', 'Sisal', 'RMS', 'Chapada Diamantina',
  'Litoral Norte', 'Sul', 'Extremo Sul', 'Oeste', 'Sertão', 'Portal do Sertão',
];

export const DEFAULT_PROGRAMS: Program[] = [
  {
    id: '1',
    title: 'Território Sonoro',
    description: 'Música e cultura popular das raízes da Bahia. Forró, axé, samba de roda e toda a riqueza sonora do nosso povo.',
    category: 'Cultura & Música',
    gradient: 'from-[#1019D6] to-[#4B168D]',
    schedule: 'Seg–Sex, 10h',
  },
  {
    id: '2',
    title: 'Ao Vivo Bahia',
    description: 'Cobertura ao vivo dos principais acontecimentos dos 27 territórios de identidade do estado da Bahia.',
    category: 'Jornalismo',
    gradient: 'from-[#D9150B] to-[#7c0a06]',
    schedule: 'Diário, 12h e 18h',
  },
  {
    id: '3',
    title: 'Conexão Popular',
    description: 'Vozes das comunidades, saberes tradicionais e histórias que constroem o território baiano.',
    category: 'Comunidade',
    gradient: 'from-[#4B168D] to-[#1019D6]',
    schedule: 'Ter e Qui, 15h',
  },
  {
    id: '4',
    title: 'Eventos da Bahia',
    description: 'Cobertura completa de festivais, feiras culturais, encontros e celebrações em todo o território.',
    category: 'Eventos',
    gradient: 'from-[#0f5c2e] to-[#1019D6]',
    schedule: 'Sáb, 14h',
  },
  {
    id: '5',
    title: 'Rota Cultural',
    description: 'Roteiros pelos patrimônios históricos, museus, quilombos e sítios culturais da Bahia profunda.',
    category: 'Turismo & Cultura',
    gradient: 'from-[#b45309] to-[#D9150B]',
    schedule: 'Dom, 11h',
  },
  {
    id: '6',
    title: 'Instituto em Ação',
    description: 'Projetos sociais, educação territorial e iniciativas de transformação que moldam o futuro da Bahia.',
    category: 'Institucional',
    gradient: 'from-[#1019D6] to-[#0f5c2e]',
    schedule: 'Qua, 16h',
  },
];

export const DEFAULT_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Festival de Música do Recôncavo',
    date: '2026-07-12',
    location: 'Cachoeira, BA',
    territory: 'Recôncavo',
    description: 'Celebração anual da cultura musical baiana com artistas regionais e nacionais.',
  },
  {
    id: '2',
    title: 'Feira do Sisal Sustentável',
    date: '2026-08-03',
    location: 'Feira de Santana, BA',
    territory: 'Sisal',
    description: 'Exposição e comercialização de produtos artesanais do sisal e desenvolvimento regional.',
  },
  {
    id: '3',
    title: 'Encontro Cultural Chapada',
    date: '2026-07-25',
    location: 'Lençóis, BA',
    territory: 'Chapada Diamantina',
    description: 'Evento de artes, gastronomia e saberes populares na Chapada Diamantina.',
  },
  {
    id: '4',
    title: 'Fórum RMS de Comunicação',
    date: '2026-08-15',
    location: 'Salvador, BA',
    territory: 'RMS',
    description: 'Debate sobre comunicação comunitária e mídia territorial na Região Metropolitana.',
  },
  {
    id: '5',
    title: 'Festival Litoral Norte',
    date: '2026-07-18',
    location: 'Mata de São João, BA',
    territory: 'Litoral Norte',
    description: 'Música, dança e gastronomia à beira-mar no Litoral Norte da Bahia.',
  },
];

export const DEFAULT_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Bahia Play expande cobertura para novos territórios baianos',
    excerpt: 'A plataforma anuncia parceria com comunidades do Sertão e do Extremo Sul para ampliar a representatividade territorial.',
    category: 'Institucional',
    date: '2026-06-18',
  },
  {
    id: '2',
    title: 'Território Sonoro celebra 1 ano com especial de MPB baiana',
    excerpt: 'O programa de maior audiência da plataforma prepara transmissão especial com nomes históricos da música baiana.',
    category: 'Programação',
    date: '2026-06-15',
  },
  {
    id: '3',
    title: 'Instituto lança edital para comunicadores populares 2026',
    excerpt: 'Inscrições abertas para jovens comunicadores de territórios de identidade com bolsas e formação profissional.',
    category: 'Instituto',
    date: '2026-06-10',
  },
  {
    id: '4',
    title: 'Cobertura ao vivo: São João nos territórios baianos',
    excerpt: 'A plataforma realizou transmissão simultânea de quadrilhas e forró de 12 municípios durante o São João 2026.',
    category: 'Cobertura Especial',
    date: '2026-06-05',
  },
];
