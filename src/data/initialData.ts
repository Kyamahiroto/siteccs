import { EventItem, PrayerItem, TestimonialItem, WordPressTemplateFile, SocialProject } from '../types';

export const INSTITUTIONAL_DATA = {
  name: 'Instituto Cristo Servo',
  foundationDate: '12/06/2005',
  foundationCity: 'Cuiabá - MT',
  founders: ['José Rosa Pereira', 'Nila Florentina de Lara Pereira', 'Dalvinha Chaves Amaral'],
  yearsOfHistory: 21,
  coverageAreas: 'Grande Cuiabá, Porto Velho e diversos municípios dos estados de Mato Grosso (MT) e Rondônia (RO)',
  locations: [
    'Nossa Sede de Projetos',
    'Faculdade e Complexo Educacional',
    'Instituições Parceiras e Empresas Conveniadas',
    'Órgãos Públicos e Centros Comunitários'
  ],
  articulations: [
    'Entidades comunitárias e organizações da sociedade civil',
    'CRAS, CREAS e demais serviços de assistência social',
    'Sistema de Garantia de Direitos (SGD)',
    'Políticas públicas de saúde, educação, trabalho, cultura e juventude',
    'Órgãos públicos municipais, estaduais e federais'
  ],
  workAreas: [
    {
      title: 'Juventude e Aprendizagem Profissional (PROJACS)',
      description: 'Capacitação técnica, ética e inserção no mercado de trabalho com carteira assinada e conformidade MTE.'
    },
    {
      title: 'Convivência Comunitária, Cidadania e Cultura',
      description: 'Projetos artísticos, oficinas de cidadania e fortalecimento de vínculos comunitários.'
    },
    {
      title: 'Trabalho Social com as Famílias',
      description: 'Acolhimento, orientação, apoio psicossocial e distribuição de auxílios emergenciais e alimentos.'
    },
    {
      title: 'Esporte, Lazer e Virtudes',
      description: 'Práticas esportivas e recreativas focadas na disciplina, respeito, espírito de equipe e virtudes morais.'
    }
  ],
  mission: 'Promover a formação integral da pessoa humana, unindo virtudes e capacitação técnica de excelência para a vida e o mercado de trabalho a fim de valorizar a dignidade humana, a sociedade, o mercado de trabalho e as empresas parceiras.',
  vision: 'Consolidar-se como um complexo educacional de alcance nacional — da aprendizagem ao ensino superior —, sendo o principal parceiro estratégico das empresas e da sociedade. Queremos ser reconhecidos como uma parceira ágil e por um modelo de ensino indissociável entre o rigor técnico e a virtude moral, formando cidadãos que transformam o Brasil.',
  values: [
    {
      id: 'val-1',
      title: 'O Trabalho como Serviço',
      description: 'Compreender que o exercício profissional, quando executado com excelência técnica e guiado pela virtude moral, é um ato diário e concreto de serviço ao próximo.'
    },
    {
      id: 'val-2',
      title: 'Ensino Integrado (Técnica e Moral)',
      description: 'Garantir que o domínio da técnica e a prática das virtudes ocorram de maneira simultânea. A instrução profissional é o campo contínuo para o exercício da moral.'
    },
    {
      id: 'val-3',
      title: 'Sustentabilidade e Parcerias Estratégicas',
      description: 'Buscar ativamente o crescimento institucional e a viabilidade do nosso propósito através de relações comerciais éticas, oferecendo às pessoas, a sociedade e as empresas serviços de excelência que resolvem suas necessidades e geram valor mútuo.'
    },
    {
      id: 'val-4',
      title: 'Educação Clássica e Busca pela Verdade',
      description: 'Focar na formação do caráter e da sabedoria, valorizando o pensamento crítico, o significado real das palavras e a honestidade intelectual.'
    },
    {
      id: 'val-5',
      title: 'Prudência e Inovação',
      description: 'Respeitar e conservar a sabedoria e as bases do passado que dão resultado, mantendo o olhar aberto para aperfeiçoar e inovar no presente e no futuro.'
    },
    {
      id: 'val-6',
      title: 'Cuidado Integral',
      description: 'Enxergar e acolher o jovem, o ser humano real — corpo, mente, espírito e história —, orientando, lapidando e exigindo a postura ética correta durante toda a sua jornada de desenvolvimento.'
    }
  ]
};

export const SOCIAL_PROJECTS: SocialProject[] = [
  {
    id: 'projacs',
    name: 'PROJACS - Programa de Jovens Aprendizes Cristo Servo',
    tagline: 'Entidade Formadora Habilitada pelo MTE · Conexão entre Jovens e Empresas',
    since: '2005',
    category: 'Aprendizagem',
    description: 'Oferece às empresas que necessitam contratar Jovens Aprendizes um banco de dados qualificado e a capacitação continuada dos aprendizes, unindo rigor técnico, desenvolvimento de postura e virtudes morais.',
    highlights: [
      'Zero taxa de adesão para as empresas parceiras',
      'Cumprimento ágil e com segurança jurídica da Lei da Aprendizagem',
      'Primeiro emprego formal com carteira assinada para jovens',
      'Formação técnica, comportamental e acompanhamento pedagógico contínuo'
    ],
    imagePlaceholderText: '[Espaço reservado para Fotos Oficiais do PROJACS em Sala de Aula e Empresas]',
    status: 'Ativo'
  },
  {
    id: 'livre-aprender',
    name: 'Projeto Livre Aprender',
    tagline: 'Cursos Livres, Palestras e Desenvolvimento de Habilidades',
    since: '2010',
    category: 'Social & Oficinas',
    description: 'Reúne cursos livres, palestras e ações que ensinam gratuitamente uma profissão, desenvolvendo habilidades manuais, artísticas, intelectuais, sensitivas e sensoriais dos participantes.',
    highlights: [
      'Ensino gratuito de profissões e ofícios práticos',
      'Desenvolvimento de autonomia financeira e autoestima',
      'Estímulo às habilidades manuais, intelectuais e artísticas',
      'Mais de 16 anos transformando realidades familiares'
    ],
    imagePlaceholderText: '[Espaço reservado para Fotos do Projeto Livre Aprender - envio no próximo prompt]',
    status: 'Ativo'
  },
  {
    id: 'evangeliza-brincando',
    name: 'Evangeliza Brincando',
    tagline: 'Formação Lúdica, Afetiva e Espiritual Infantil',
    category: 'Infantil',
    description: 'Iniciativa que acolhe crianças da comunidade através de jogos cooperativos, contação de histórias, vivências de virtudes e momentos de oração afetuosa.',
    highlights: [
      'Atividades lúdicas com princípios cristãos',
      'Apoio ao desenvolvimento cognitivo e emocional',
      'Ambiente seguro e protetor para os pequenos',
      'Envolvimento fraterno com os pais e responsáveis'
    ],
    imagePlaceholderText: '[Espaço reservado para Fotos do Evangeliza Brincando - envio no próximo prompt]',
    status: 'Ativo'
  },
  {
    id: 'samuel',
    name: 'Projeto Samuel',
    tagline: 'Formação de Caráter, Virtudes e Liderança Juvenil',
    category: 'Virtudes & Caráter',
    description: 'Inspirado na fidelidade e escuta atenta, o Projeto Samuel orienta jovens e adolescentes no desenvolvimento de honra, disciplina, vida interior e liderança servidora.',
    highlights: [
      'Mentoria individual e em pequenos grupos',
      'Estudos de virtudes cardeais e ética prática',
      'Formação de liderança para transformar a sociedade',
      'Retiros e vivências em equipe'
    ],
    imagePlaceholderText: '[Espaço reservado para Fotos do Projeto Samuel - envio no próximo prompt]',
    status: 'Ativo'
  },
  {
    id: 'bordados-pedraria',
    name: 'Bordados em Pedraria',
    tagline: 'Capacitação Artesanal, Arte e Geração de Renda Familiar',
    category: 'Geração de Renda',
    description: 'Oficina especializada no ensino de bordados artesanais em pedraria e alta costura, proporcionando capacitação técnica e autonomia financeira para mulheres e chefes de família.',
    highlights: [
      'Técnicas de bordado de alto valor agregado',
      'Apoio à precificação e comercialização de peças',
      'Espaço de convivência, escuta e terapia ocupacional',
      'Geração de renda sustentável para o lar'
    ],
    imagePlaceholderText: '[Espaço reservado para Fotos de Bordados em Pedraria - envio no próximo prompt]',
    status: 'Ativo'
  },
  {
    id: 'complexo-educacional',
    name: 'Complexo Educacional & Ensino Superior',
    tagline: 'Da Aprendizagem à Faculdade com Rigor Técnico e Virtude',
    category: 'Aprendizagem',
    description: 'A visão de consolidação como complexo educacional de alcance nacional, integrando escolas, cursos técnicos e graduação universitária pautados na busca da verdade e excelência.',
    highlights: [
      'Educação clássica e pensamento crítico fundamentado',
      'Articulação direta com necessidades de grandes empresas',
      'Infraestrutura moderna e corpo docente qualificado',
      'Formação de cidadãos que transformam o Brasil'
    ],
    imagePlaceholderText: '[Espaço reservado para Projeto da Faculdade e Complexo Educacional]',
    status: 'Em Expansão'
  }
];

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: 'evt-1',
    title: 'Retiro Anual: O Coração do Servo',
    date: '15 e 16 de Novembro de 2026',
    time: '08:00 às 18:00',
    location: 'Sede Instituto Cristo Servo - Capela Cenáculo',
    category: 'Retiro',
    description: 'Dois dias de profundo silêncio, oração contemplativa, santa missa e reflexão sobre a humildade e a entrega evangélica.',
    speakerOrResponsible: 'Pe. Marcos e Conselho Vocacional',
    capacity: 120,
    registeredCount: 84
  },
  {
    id: 'evt-2',
    title: 'Sopão Fraterno e Acolhimento Comunitário',
    date: 'Todos os Sábados',
    time: '18:30 às 21:00',
    location: 'Centro Social Betânia - Setor Obras de Misericórdia',
    category: 'Ação Fraterna',
    description: 'Preparo comunitário e partilha de mais de 250 refeições nutritivas com famílias e pessoas em situação de vulnerabilidade.',
    speakerOrResponsible: 'Equipe de Ação Social',
    capacity: 40,
    registeredCount: 28
  },
  {
    id: 'evt-3',
    title: 'Vigília Eucarística: Em Teus Braços, Senhor',
    date: 'Toda Primeira Sexta-Feira do Mês',
    time: '20:00 às 00:00',
    location: 'Capela Cristo Servo',
    category: 'Vigília',
    description: 'Adoração perpétua ao Santíssimo Sacramento, confissões, cantos gregorianos e oração de intercessão pelo mundo.',
    speakerOrResponsible: 'Ministério de Liturgia e Intercessão',
    capacity: 150,
    registeredCount: 96
  },
  {
    id: 'evt-4',
    title: 'Encontro de Boas-Vindas para Novos Membros',
    date: '28 de Novembro de 2026',
    time: '19:30 às 21:30',
    location: 'Salão Fraterno São Francisco & Transmissão Online',
    category: 'Formação',
    description: 'Apresentação do carisma de Cristo Servo, caminhada vocacional, dons pastorais e acolhimento dos que desejam somar nessa missão.',
    speakerOrResponsible: 'Coordenação de Integração',
    capacity: 80,
    registeredCount: 52
  }
];

export const INITIAL_PRAYERS: PrayerItem[] = [
  {
    id: 'pry-1',
    author: 'Maria Clara dos Santos',
    city: 'Belo Horizonte, MG',
    intention: 'Peço orações pela restauração da saúde do meu pai Antônio e pela paz em nossa família durante este momento de provação.',
    category: 'Saúde',
    prayerCount: 47,
    createdAt: 'Hoje às 08:30'
  },
  {
    id: 'pry-2',
    author: 'Lucas Eduardo Silveira',
    city: 'São Paulo, SP',
    intention: 'Agradeço a Deus pelo discernimento vocacional encontrado nas orações do Instituto e peço forças para servir na pastoral social.',
    category: 'Vocação',
    prayerCount: 32,
    createdAt: 'Ontem às 21:15'
  },
  {
    id: 'pry-3',
    author: 'Família Oliveira',
    city: 'Curitiba, PR',
    intention: 'Pela libertação espiritual e emprego para nossos dois filhos que estão em busca de novas oportunidades honestas.',
    category: 'Família',
    prayerCount: 65,
    createdAt: 'Há 2 dias'
  }
];

export const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Helena Ribeiro Fontes',
    role: 'Voluntária e Membro de Aliança',
    timeInCommunity: '3 anos no Instituto',
    quote: 'No Instituto Cristo Servo entendi que a maior grandeza do cristão é se abaixar para lavar os pés dos irmãos. Minha vida ganhou um propósito verdadeiro.',
    avatarFallback: 'HR'
  },
  {
    id: 't-2',
    name: 'Gabriel Santana Castro',
    role: 'Coordenador da Juventude Servidora',
    timeInCommunity: '2 anos no Instituto',
    quote: 'Aqui não encontramos apenas um grupo, mas uma família fraterna que reza junta e sai às ruas para abraçar os que mais precisam de esperança.',
    avatarFallback: 'GS'
  },
  {
    id: 't-3',
    name: 'Dra. Beatriz Nogueira',
    role: 'Benfeitora e Médica Voluntária',
    timeInCommunity: '4 anos no Instituto',
    quote: 'A transparência nas contas e o carinho com que cada pessoa é atendida me deram a certeza de que meu apoio financeiro e meu tempo geram frutos santos.',
    avatarFallback: 'BN'
  }
];

export const WORDPRESS_TEMPLATES_INFO: WordPressTemplateFile[] = [
  {
    filename: 'style.css',
    description: 'Cabeçalho oficial do tema WordPress com declaração de compatibilidade e metadados.',
    code: `/*
Theme Name: Instituto Cristo Servo
Theme URI: https://institutocristoservo.org.br
Author: Equipe de Tecnologia do Instituto
Author URI: https://institutocristoservo.org.br
Description: Tema institucional responsivo e de alta conversão para o Instituto Cristo Servo, contemplando os portais da Comunidade e Obras Sociais.
Version: 1.0.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: instituto-cristo-servo
Tags: custom-header, custom-menu, featured-images, full-site-editing, translation-ready, accessibility-ready
*/`
  },
  {
    filename: 'functions.php',
    description: 'Registro de menus, suporte a temas, scripts enfileirados e endpoints para formulários de novos membros e oração.',
    code: `<?php
/**
 * Funções e definições do tema Instituto Cristo Servo
 */
if ( ! defined( 'ABSPATH' ) ) exit;

function cristoservo_setup() {
    load_theme_textdomain( 'instituto-cristo-servo', get_template_directory() . '/languages' );
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'gallery', 'caption' ) );
    add_theme_support( 'custom-logo' );

    register_nav_menus( array(
        'primary-menu' => __( 'Menu Institucional Principal', 'instituto-cristo-servo' ),
        'footer-menu'  => __( 'Menu do Rodapé', 'instituto-cristo-servo' ),
    ) );
}
add_action( 'after_setup_theme', 'cristoservo_setup' );

// Registro de Post Types para Eventos e Pedidos de Oração
function cristoservo_custom_post_types() {
    register_post_type('evento', array(
        'labels' => array('name' => 'Eventos & Agenda', 'singular_name' => 'Evento'),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-calendar-alt',
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields')
    ));
}
add_action( 'init', 'cristoservo_custom_post_types' );
`
  },
  {
    filename: 'header.php',
    description: 'Header padrão WordPress com menu responsivo, logo institucional e CTA de conversão.',
    code: `<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class( 'bg-stone-50 text-stone-900 font-sans' ); ?>>
<?php wp_body_open(); ?>
<header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center gap-3">
            <span class="text-xl sm:text-2xl font-serif font-bold text-stone-900 tracking-tight">Instituto Cristo Servo</span>
        </a>
        <nav class="hidden md:flex items-center gap-6">
            <?php
            wp_nav_menu( array(
                'theme_location' => 'primary-menu',
                'container'      => false,
                'menu_class'     => 'flex items-center gap-6 text-sm font-medium text-stone-700',
                'fallback_cb'    => false,
            ) );
            ?>
        </nav>
        <a href="#seja-membro" class="px-5 py-2.5 bg-amber-700 hover:bg-amber-800 text-white rounded-lg text-sm font-medium transition-colors">
            Seja Membro
        </a>
    </div>
</header>`
  },
  {
    filename: 'front-page.php',
    description: 'Template da página inicial institucional com os dois portais e seções de conversão.',
    code: `<?php
/**
 * Template Name: Página Inicial Cristo Servo
 */
get_header(); ?>

<main id="primary" class="site-main">
    <?php get_template_part( 'template-parts/hero' ); ?>
    <?php get_template_part( 'template-parts/gateways-dois-mundos' ); ?>
    <?php get_template_part( 'template-parts/carisma-valores' ); ?>
    <?php get_template_part( 'template-parts/seja-membro-conversao' ); ?>
    <?php get_template_part( 'template-parts/agenda-eventos' ); ?>
    <?php get_template_part( 'template-parts/seja-benfeitor' ); ?>
    <?php get_template_part( 'template-parts/mural-oracao' ); ?>
</main>

<?php get_footer(); ?>`
  },
  {
    filename: 'page-sobre-nos.php',
    description: 'Template dedicado para a página Sobre Nós com história, missão, visão e valores.',
    code: `<?php
/**
 * Template Name: Sobre Nós - Instituto Cristo Servo
 */
get_header(); ?>

<main class="py-16 bg-stone-50">
    <article class="max-w-5xl mx-auto px-4 sm:px-6">
        <header class="text-center mb-16">
            <span class="text-xs uppercase tracking-widest text-amber-700 font-semibold">Quem Somos & Nossa Vocação</span>
            <h1 class="text-3xl sm:text-5xl font-serif font-bold text-stone-900 mt-3">Sobre o Instituto Cristo Servo</h1>
            <p class="max-w-2xl mx-auto text-stone-600 mt-4 text-base sm:text-lg">Uma família de fé que encontrou no serviço humilde aos irmãos a essência do Evangelho vivido.</p>
        </header>

        <section class="prose prose-stone max-w-none">
            <!-- História da Fundação, Missão, Visão e Valores -->
            <?php the_content(); ?>
        </section>
    </article>
</main>

<?php get_footer(); ?>`
  },
  {
    filename: 'footer.php',
    description: 'Rodapé institucional com dados de transparência, links rápidos e créditos.',
    code: `<?php
/**
 * Rodapé padrão WordPress
 */
?>
<footer class="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
            <h3 class="text-white font-serif font-bold text-lg mb-3">Instituto Cristo Servo</h3>
            <p class="text-xs text-stone-400">"Pois o Filho do Homem não veio para ser servido, mas para servir." — Mc 10,45</p>
        </div>
        <!-- Widgets / Menus -->
    </div>
    <div class="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-stone-800 text-center text-xs text-stone-500">
        &copy; <?php echo date('Y'); ?> Instituto Cristo Servo. Todos os direitos reservados.
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>`
  }
];
