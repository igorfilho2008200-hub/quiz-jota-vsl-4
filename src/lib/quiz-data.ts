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
  icon: string;
}

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Quando você precisa tomar uma decisão importante, o que mais pesa primeiro na sua cabeça?",
    options: [
      { text: "Perceber que possibilidades interessantes essa decisão pode abrir.", profile: "Explorador" },
      { text: "Garantir que essa decisão não coloque minha estabilidade em risco.", profile: "Protetor" },
      { text: "Sentir se essa decisão realmente faz sentido para a vida que quero construir.", profile: "Visionário" },
      { text: "Entender qual caminho faz mais sentido estruturalmente.", profile: "Estrategista" },
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
      { text: "Buscar algo que tivesse mais significado ou propósito.", profile: "Visionário" },
      { text: "Construir algo consistente e bem planejado.", profile: "Estrategista" },
      { text: "Aproveitar oportunidades e experiências que apareceram.", profile: "Explorador" },
      { text: "Manter estabilidade e segurança ao longo do tempo.", profile: "Protetor" },
    ]
  },
  {
    id: 4,
    text: "Se sua vida fosse um filme, qual desses títulos pareceria mais próximo da sua história?",
    options: [
      { text: "Entre caminhos inesperados.", profile: "Explorador" },
      { text: "Arquitetando o futuro.", profile: "Estrategista" },
      { text: "Uma história ainda sendo escrita.", profile: "Visionário" },
      { text: "Mantendo tudo de pé.", profile: "Protetor" },
    ]
  },
  {
    id: 5,
    text: "Imagine que aparece uma nova oportunidade na sua vida. O que você analisa primeiro?",
    options: [
      { text: "Se aquilo está alinhado com a direção que você quer construir.", profile: "Visionário" },
      { text: "Se existe um caminho claro e estruturado para aquilo funcionar.", profile: "Estrategista" },
      { text: "Se aquilo pode comprometer sua segurança ou estabilidade atual.", profile: "Protetor" },
      { text: "Se aquilo pode abrir novas experiências ou caminhos interessantes.", profile: "Explorador" },
    ]
  },
  {
    id: 6,
    text: "Você encontra uma caixa misteriosa na sua porta com um bilhete dizendo: “isso pode mudar sua vida”. O que você faz primeiro?",
    options: [
      { text: "Analiso a caixa com cuidado para entender exatamente o que tem ali.", profile: "Estrategista" },
      { text: "Desconfio e tento descobrir se aquilo pode dar algum problema.", profile: "Protetor" },
      { text: "Abro na hora só para ver o que tem dentro.", profile: "Explorador" },
      { text: "Fico curioso sobre por que aquilo apareceu para mim.", profile: "Visionário" },
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
      { text: "Uma mesa cheia de anotações e um grande plano sendo desenhado.", profile: "Estrategista" },
      { text: "Uma casa iluminada resistindo firme no meio de uma grande tempestade.", profile: "Protetor" },
      { text: "Uma estrada que se divide em vários caminhos diferentes.", profile: "Explorador" },
      { text: "Uma pessoa parada no topo de uma montanha olhando o horizonte.", profile: "Visionário" },
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
    description: "Você é movido pela curiosidade e pela liberdade. Seu centro decisor busca o novo, o aprendizado através da experiência direta e a adaptabilidade. Para você, a jornada é tão importante quanto o destino, e o risco é um convite ao crescimento.",
    icon: "Compass"
  },
  Protetor: {
    title: "Protetor",
    description: "Sua prioridade é a segurança, a estabilidade e a preservação do que é valioso. Você decide com cautela, ouvindo a sabedoria do que já foi construído. Seu centro decisor é um guardião da paz e da integridade emocional e material.",
    icon: "Shield"
  },
  Visionário: {
    title: "Visionário",
    description: "Você olha para o horizonte. Suas decisões são guiadas por ideais elevados e pela imagem clara do futuro que deseja criar. Seu centro decisor opera na frequência da inspiração, transcendendo o imediato em busca de um propósito maior.",
    icon: "Eye"
  },
  Estrategista: {
    title: "Estrategista",
    description: "A clareza, a eficiência e a ordem são seus pilares. Você decide baseando-se em lógica, dados e na otimização de recursos. Seu centro decisor é uma bússola de precisão que busca o caminho mais eficaz para atingir objetivos concretos.",
    icon: "Target"
  }
};
