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
    text: "Ao se deparar com uma encruzilhada desconhecida em sua jornada, qual é o seu primeiro impulso?",
    options: [
      { text: "Escolher o caminho que parece mais novo e inexplorado.", profile: "Explorador" },
      { text: "Consultar os mapas e garantir que o caminho escolhido seja seguro.", profile: "Protetor" },
      { text: "Tentar visualizar onde cada caminho pode terminar antes de decidir.", profile: "Visionário" },
      { text: "Analisar qual caminho oferece a melhor eficiência de tempo e esforço.", profile: "Estrategista" },
    ]
  },
  {
    id: 2,
    text: "Em um momento de conflito entre razão e intuição, você tende a:",
    options: [
      { text: "Seguir a intuição, mesmo sem saber exatamente o porquê.", profile: "Explorador" },
      { text: "Priorizar a razão para evitar danos desnecessários.", profile: "Protetor" },
      { text: "Equilibrar ambos visando um propósito maior no futuro.", profile: "Visionário" },
      { text: "Utilizar a lógica para estruturar o que a intuição sugere.", profile: "Estrategista" },
    ]
  },
  {
    id: 3,
    text: "Como você define o sucesso de uma decisão importante?",
    options: [
      { text: "Pela riqueza da experiência e pelo aprendizado gerado.", profile: "Explorador" },
      { text: "Pela estabilidade e segurança mantidas após a escolha.", profile: "Protetor" },
      { text: "Pelo impacto transformador que ela gera a longo prazo.", profile: "Visionário" },
      { text: "Pela clareza dos resultados e o cumprimento das metas.", profile: "Estrategista" },
    ]
  },
  {
    id: 4,
    text: "O que mais te motiva a agir no seu dia a dia?",
    options: [
      { text: "A curiosidade pelo desconhecido e novas possibilidades.", profile: "Explorador" },
      { text: "A preservação do que é valioso e a paz de espírito.", profile: "Protetor" },
      { text: "A materialização de ideais e sonhos inspiradores.", profile: "Visionário" },
      { text: "A otimização de sistemas e a conquista de eficiência.", profile: "Estrategista" },
    ]
  },
  {
    id: 5,
    text: "Qual destas palavras melhor descreve sua atitude perante a vida?",
    options: [
      { text: "Liberdade", profile: "Explorador" },
      { text: "Cuidado", profile: "Protetor" },
      { text: "Horizonte", profile: "Visionário" },
      { text: "Direção", profile: "Estrategista" },
    ]
  },
  {
    id: 6,
    text: "Como você lida com a pressão de prazos imediatos?",
    options: [
      { text: "Mantenho-me flexível e adaptável às mudanças de última hora.", profile: "Explorador" },
      { text: "Busco garantir que nada essencial seja negligenciado sob pressão.", profile: "Protetor" },
      { text: "Lembro-me do objetivo final para não perder a perspectiva.", profile: "Visionário" },
      { text: "Organizo cada passo metodicamente para cumprir o tempo.", profile: "Estrategista" },
    ]
  },
  {
    id: 7,
    text: "Sua maior preocupação ao tomar uma decisão coletiva é:",
    options: [
      { text: "Garantir que todos tenham espaço para novas ideias.", profile: "Explorador" },
      { text: "Proteger o bem-estar e a integridade de todos os envolvidos.", profile: "Protetor" },
      { text: "Inspirar o grupo a ver além das dificuldades presentes.", profile: "Visionário" },
      { text: "Estruturar o processo para que seja o mais justo e eficaz possível.", profile: "Estrategista" },
    ]
  },
  {
    id: 8,
    text: "Em um ambiente caótico, você geralmente é quem:",
    options: [
      { text: "Encontra oportunidades onde outros veem apenas problemas.", profile: "Explorador" },
      { text: "Cria um porto seguro para restaurar a ordem e a calma.", profile: "Protetor" },
      { text: "Aponte a direção que devemos seguir após a tempestade.", profile: "Visionário" },
      { text: "Analisa a situação e propõe um plano de ação imediato.", profile: "Estrategista" },
    ]
  },
  {
    id: 9,
    text: "Ao finalizar um projeto, seu pensamento final costuma ser:",
    options: [
      { text: "Qual será a próxima grande descoberta?", profile: "Explorador" },
      { text: "Tudo foi concluído com segurança e respeito.", profile: "Protetor" },
      { text: "O quanto evoluímos em direção à nossa visão.", profile: "Visionário" },
      { text: "Como podemos fazer isso melhor na próxima vez?", profile: "Estrategista" },
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
