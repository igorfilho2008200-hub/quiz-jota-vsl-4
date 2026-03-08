export type ProfileType = 'Explorador' | 'Protetor' | 'Visionário' | 'Estrategista';

export interface Answer {
  text: string;
  profile: ProfileType;
}

export interface Question {
  id: number;
  text: string;
  options: Answer[];
}

export interface ProfileInfo {
  title: ProfileType;
  description: string;
  benefits: string;
  challenges: string;
  regulated: string;
  thought: string;
  icon: string;
}

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Quando você precisa tomar uma decisão importante, o que mais pesa primeiro na sua cabeça?",
    options: [
      { text: "Perceber que possibilidades interessantes essa decisão pode abrir", profile: "Explorador" },
      { text: "Garantir que essa decisão não coloque minha estabilidade em risco", profile: "Protetor" },
      { text: "Sentir se essa decisão realmente faz sentido para a vida que quero construir", profile: "Visionário" },
      { text: "Entender qual caminho faz mais sentido estruturalmente", profile: "Estrategista" },
    ]
  },
  {
    id: 2,
    text: "Se uma pessoa muito próxima de você tivesse que te definir em uma frase, qual delas provavelmente diria?",
    options: [
      { text: "“Ele sempre acaba encontrando um jeito diferente de fazer as coisas.”", profile: "Explorador" },
      { text: "“Se tem alguém que sempre segura as pontas quando precisa, é ele.”", profile: "Protetor" },
      { text: "“Ele dificilmente faz algo sem antes pensar bem no que está fazendo.”", profile: "Estrategista" },
      { text: "“Ele vive tentando descobrir o que realmente quer fazer da vida.”", profile: "Visionário" },
    ]
  },
  {
    id: 3,
    text: "Quando você olha para as escolhas que fez na vida até hoje, elas tendem a seguir mais qual lógica?",
    options: [
      { text: "Buscar algo que tivesse mais significado ou propósito", profile: "Visionário" },
      { text: "Construir algo consistente e bem planejado", profile: "Estrategista" },
      { text: "Aproveitar oportunidades e experiências que apareceram", profile: "Explorador" },
      { text: "Manter estabilidade e segurança ao longo do tempo", profile: "Protetor" },
    ]
  },
  {
    id: 4,
    text: "Se sua vida fosse um filme, qual desses títulos pareceria mais próximo da sua história?",
    options: [
      { text: "Entre caminhos inesperados", profile: "Explorador" },
      { text: "Arquitetando o futuro", profile: "Estrategista" },
      { text: "Uma história ainda sendo escrita", profile: "Visionário" },
      { text: "Mantendo tudo de pé", profile: "Protetor" },
    ]
  },
  {
    id: 5,
    text: "Imagine que aparece uma nova oportunidade na sua vida. O que você analisa primeiro?",
    options: [
      { text: "Se aquilo está alinhado com a direção que você quer construir", profile: "Visionário" },
      { text: "Se existe um caminho claro e estruturado para aquilo funcionar", profile: "Estrategista" },
      { text: "Se aquilo pode comprometer sua segurança ou estabilidade atual", profile: "Protetor" },
      { text: "Se aquilo pode abrir novas experiências ou caminhos interessantes", profile: "Explorador" },
    ]
  },
  {
    id: 6,
    text: "Você encontra uma caixa misteriosa na sua porta com um bilhete dizendo: “isso pode mudar sua vida”. O que você faz primeiro?",
    options: [
      { text: "Analiso a caixa com cuidado para entender exatamente o que tem ali", profile: "Estrategista" },
      { text: "Desconfio e tento descobrir se aquilo pode dar algum problema", profile: "Protetor" },
      { text: "Abro na hora só para ver o que tem dentro", profile: "Explorador" },
      { text: "Fico curioso sobre por que aquilo apareceu para mim", profile: "Visionário" },
    ]
  },
  {
    id: 7,
    text: "Qual dessas perguntas te deixa mais curioso ou intrigado?",
    options: [
      { text: "“Como algumas pessoas conseguem transformar uma ideia em algo gigantesco?”", profile: "Estrategista" },
      { text: "“Por que algumas pessoas parecem atravessar qualquer crise sem desmoronar?”", profile: "Protetor" },
      { text: "“E se existir um caminho totalmente diferente que ninguém percebeu ainda?”", profile: "Explorador" },
      { text: "“Será que existe uma forma de viver que a maioria das pessoas nunca descobre?”", profile: "Visionário" },
    ]
  },
  {
    id: 8,
    text: "Qual dessas imagens mais chama sua atenção ou te prende por alguns segundos?",
    options: [
      { text: "Uma mesa cheia de anotações e um grande plano sendo desenhado", profile: "Estrategista" },
      { text: "Uma casa iluminada resistindo firme no meio de uma grande tempestade", profile: "Protetor" },
      { text: "Uma estrada que se divide em vários caminhos diferentes", profile: "Explorador" },
      { text: "Uma pessoa parada no topo de uma montanha olhando o horizonte", profile: "Visionário" },
    ]
  },
  {
    id: 9,
    text: "Você descobre um mapa antigo com quatro caminhos possíveis. Qual deles te chama mais atenção?",
    options: [
      { text: "O caminho marcado com a frase: “aqui tudo começa a fazer sentido”", profile: "Visionário" },
      { text: "O caminho descrito como: “o lugar onde poucos se perdem”", profile: "Protetor" },
      { text: "O caminho anotado com: “ninguém sabe exatamente o que existe no final”", profile: "Explorador" },
      { text: "O caminho que aponta para algo descrito como: “vale a pena chegar”", profile: "Estrategista" },
    ]
  }
];

export const PROFILES: Record<ProfileType, ProfileInfo> = {
  Explorador: {
    title: "Explorador",
    description: "Você percebe caminhos onde outros veem bloqueios. É curioso, adaptável e aprende rápido.",
    benefits: "O Explorador percebe caminhos onde outros veem bloqueios. Ele é curioso, adaptável e aprende rápido. Esse operador cria pessoas abertas ao novo, capazes de se reinventar e navegar ambientes diferentes. São pessoas que percebem oportunidades antes de muita gente. E têm coragem de se movimentar.",
    challenges: "O desafio aparece quando movimento vira padrão. Você começa a seguir possibilidades. Experiências. Mudanças. Mas nem sempre constrói uma direção clara. A vida fica interessante. Mas pode ficar fragmentada. Você experimenta muito. Mas às vezes sente que ainda não encontrou um eixo que organize tudo isso.",
    regulated: "Quando o Centro Decisor encontra equilíbrio, o Explorador vira um ativo extraordinário. A curiosidade continua. A abertura continua. Mas agora o movimento acontece dentro de uma direção escolhida. Você continua explorando — só que agora sabe para onde está indo.",
    thought: "“Que possibilidade interessante existe aqui?”",
    icon: "Compass"
  },
  Protetor: {
    title: "Protetor",
    description: "Sua prioridade é a preservação do que é valioso, desenvolvendo uma habilidade profunda de sustentar.",
    benefits: "O Protetor desenvolve uma habilidade profunda de sustentar. Você pensa nas consequências, se antecipa riscos. Você protege o que importa, da estrutura a vida, as pessoas. Pessoas com esse operador forte costumam ser resilientes, responsáveis e extremamente capazes de atravar momentos difíceis e se manter firme, mesmo com o caos instalado. São aquelas pessoas que, quando a vida aperta, continuam de pé.",
    challenges: "Mas quando o Protetor assume o comando absoluto, as decisões começam a ser guiadas principalmente por segurança. Você passa a pensar primeiro no que pode dar errado, quase não consegue ouvir a voz \"e se der certo?\". Isso cria estabilidade, mas te tira o ímpeto, te tira do fluxo da vida que é não opera sobre a certeza e também pode criar uma vida mais estreita do que poderia ser.",
    regulated: "Quando o Centro Decisor se reorganiza, o Protetor não desaparece. Ele se torna um aliado, te dá estrutura, te faz seguir passos firmes, a responsabilidade continua existindo. Mas agora a segurança não define o limite da sua vida, mesmo que em passos seguros, caminhando cada vez mais em direção ao domínio da sua própria vida.",
    thought: "“Qual é a decisão mais segura?”",
    icon: "Shield"
  },
  Visionário: {
    title: "Visionário",
    description: "Você enxerga possibilidades antes delas se tornarem realidade, guiado por algo maior.",
    benefits: "O Visionário enxerga possibilidades antes delas se tornarem realidade. Ele percebe padrões, significado e potencial. Esse operador cria pessoas criativas, intuitivas e orientadas por algo maior. São pessoas que questionam o caminho padrão e buscam construir algo que realmente faça sentido.",
    challenges: "O desafio aparece quando a visão te traz expansão mas não te traz direção, caminho, unidade. Você consegue ver claramente quem poderia ser, mas ainda não organizou os caminhos para chegar lá. Isso pode criar frustração, mas não é por falta de visão, mas por falta de um sistema que transforme visão em decisão.",
    regulated: "Quando o Centro Decisor encontra organização, o Visionário ganha clareza e direção real. A visão deixa de ser apenas possibilidade, ela começa a virar construção, as ideias passam a ganhar forma e aquilo que antes era apenas percepção começa a se transformar em vida concreta.",
    thought: "“Qual caminho realmente faz sentido para a vida que quero construir?”",
    icon: "Eye"
  },
  Estrategista: {
    title: "Estrategista",
    description: "Você observa antes de agir, organizando caminhos consistentes com lógica e precisão.",
    benefits: "O Estrategista observa antes de agir. Ele organiza, estrutura, analisa cenários e constrói caminhos consistentes. Pessoas com esse operador forte costumam ser vistas como confiáveis, inteligentes e capazes de manter a vida funcionando mesmo quando tudo parece caótico. São pessoas que sabem pensar no longo prazo. Sabem planejar. Sabem construir.",
    challenges: "O problema começa quando a estrutura passa a mandar mais que a escolha. Você se torna muito bom em manter o que já está funcionando. Mas pode começar a evitar movimentos que desorganizam a estrutura. A vida fica lógica. Mas às vezes deixa de ser verdadeiramente escolhida.",
    regulated: "Quando o Centro Decisor está equilibrado, o Estrategista vira uma ferramenta poderosa. Você continua estruturando. Continua pensando estrategicamente. Mas agora suas decisões não vêm apenas da lógica. Elas vêm da direção que você decidiu construir. A estrutura passa a servir a sua vida — e não o contrário.",
    thought: "“Qual é o plano mais inteligente aqui?”",
    icon: "Target"
  }
};