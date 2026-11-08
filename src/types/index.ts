export type ActivePage = 'inicio' | 'sobre-nos' | 'projacs' | 'projetos' | 'comunidade' | 'obras-sociais' | 'agenda' | 'benfeitor' | 'contato';

export type ProjacsModalType = 'parceiro-login' | 'empresa-contratar' | 'jovem-inscricao' | 'aprendiz-login' | null;

export interface SocialProject {
  id: string;
  name: string;
  tagline: string;
  since?: string;
  description: string;
  highlights: string[];
  category: 'Aprendizagem' | 'Social & Oficinas' | 'Infantil' | 'Virtudes & Caráter' | 'Geração de Renda';
  imagePlaceholderText: string;
  status: 'Ativo' | 'Em Expansão' | 'Inscrições Abertas';
}

export interface MemberApplication {
  name: string;
  email: string;
  phone: string;
  city: string;
  interestArea: 'comunidade' | 'obras-sociais' | 'juventude' | 'projacs' | 'liturgia' | 'benfeitor' | 'geral';
  availability: string;
  talents: string[];
  prayerIntention?: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'Retiro' | 'Liturgia' | 'Ação Fraterna' | 'Formação' | 'Vigília';
  description: string;
  speakerOrResponsible?: string;
  capacity?: number;
  registeredCount: number;
}

export interface PrayerItem {
  id: string;
  author: string;
  city: string;
  intention: string;
  category: 'Saúde' | 'Família' | 'Vocação' | 'Agradecimento' | 'Paz e Conversão';
  prayerCount: number;
  createdAt: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  timeInCommunity: string;
  quote: string;
  avatarFallback: string;
}

export interface WordPressTemplateFile {
  filename: string;
  description: string;
  code: string;
}
