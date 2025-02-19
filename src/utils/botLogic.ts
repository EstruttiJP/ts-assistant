import { BotResponse } from "@/types/chat";

type ResponsesMap = Map<string, string[]>;

const responses: ResponsesMap = new Map([
  // Saudações
  ["olá", ["Olá! Como posso ajudar você hoje?", "Oi! Em que posso ser útil?", "Olá! O que você precisa?"]],
  ["oi", ["Olá! Como posso ajudar você hoje?", "Oi! Em que posso ser útil?", "Olá! O que você precisa?"]],
  ["bom dia", ["Bom dia! Como posso ajudar?", "Bom dia! Em que posso ser útil?", "Bom dia! O que você precisa?"]],
  ["boa tarde", ["Boa tarde! Como posso ajudar?", "Boa tarde! Em que posso ser útil?", "Boa tarde! O que você precisa?"]],
  ["boa noite", ["Boa noite! Como posso ajudar?", "Boa noite! Em que posso ser útil?", "Boa noite! O que você precisa?"]],
  ["estou bem", ["Que bom, como posso ajudar?"]],
  ["tudo bem", ["Que ótimo! Em que posso ajudar você hoje?","Tudo certo! Como posso ajudar?"]],
  ["como vai", ["Estou indo bem, obrigado! E você?","Vou bem, e você?"]],
  ["preciso de ajuda", ["Claro, estou aqui para ajudar! O que você precisa?","Conte comigo! Em que posso ajudar?"]],
  ["obrigado", ["De nada! Estou aqui para ajudar.","Por nada! Sempre à disposição."]],
  ["obrigada", ["De nada! Fico feliz em ajudar.","Por nada! Se precisar, é só chamar."]],
  ["tudo certo", ["Que bom que está tudo certo! Como posso ajudar?","Ótimo! Se precisar de algo, estou aqui."]],
  ["estou triste", ["Sinto muito que você esteja se sentindo assim. Quer conversar sobre isso?","Lamento ouvir isso. Se precisar desabafar, estou aqui para ouvir."]],

  // Despedidas
  ["tchau", ["Até logo!", "Tchau! Volte sempre que precisar.", "Adeus! Cuide-se."]],
  ["adeus", ["Adeus! Cuide-se.", "Até a próxima!", "Espero que nos falemos em breve!"]],
  ["até logo", ["Até logo! Tenha um bom dia.", "Até mais!", "Nos vemos em breve!"]],
  ["até mais", ["Até mais! Cuide-se.", "Até a próxima!", "Volte logo!"]],

  // Perguntas comuns
  ["como você está?", ["Estou bem, obrigado por perguntar! E você?", "Estou ótimo, e você?", "Estou aqui para ajudar!"]],
  ["qual é o seu nome?", ["Eu sou um chatbot aqui para ajudar! pode me chamar de ts assistant", "Pode me chamar de Assistente!", "Sou ts assistant, pronto para te ajudar."]],
  ["que horas são?", ["Infelizmente, eu não posso ver as horas no momento. Que tal verificar em seu dispositivo?"]],
  ["o que você pode fazer?", ["Posso responder perguntas, dar conselhos, e te ajudar com informações básicas.", "Estou aqui para ajudar você com o que precisar.", "Sou capaz de responder questões gerais e auxiliar no que for possível."]],

  // Conhecimentos gerais
  ["quem é o presidente do brasil?", ["O presidente atual do Brasil é [substitua pelo presidente atual].", "No momento, o presidente do Brasil é [substitua pelo presidente atual]."]],
  ["quem descobriu o brasil?", ["Pedro Álvares Cabral é reconhecido como o descobridor do Brasil, em 1500."]],
  ["qual a capital do brasil?", ["A capital do Brasil é Brasília.", "Brasília é a capital do Brasil."]],
  ["quem foi albert einstein?", ["Albert Einstein foi um físico teórico alemão, conhecido por desenvolver a teoria da relatividade."]],
  ["qual o maior país do mundo?", ["O maior país do mundo em termos de área é a Rússia.", "A Rússia é o maior país do mundo."]],

  // Perguntas sobre tecnologia
  ["o que é inteligência artificial?", ["Inteligência Artificial (IA) é o campo da ciência da computação que foca em criar sistemas que realizam tarefas que normalmente requerem inteligência humana."]],
  ["o que é machine learning?", ["Machine Learning é uma subárea da IA focada em criar sistemas que aprendem e melhoram a partir de dados sem serem explicitamente programados."]],
  ["o que é blockchain?", ["Blockchain é uma tecnologia de registro descentralizado, usada principalmente para transações seguras e transparentes, como as de criptomoedas."]],
  ["o que é bitcoin?", ["Bitcoin é uma criptomoeda descentralizada que permite transações ponto a ponto sem a necessidade de intermediários."]],

  // Clima e tempo
  ["vai chover hoje?", ["Não tenho acesso ao clima no momento. Recomendo verificar um aplicativo de meteorologia.", "Para saber sobre o clima, por favor, use uma fonte confiável como um app de previsão do tempo."]],
  ["qual a temperatura agora?", ["Eu não consigo verificar a temperatura no momento. Veja um app de clima para uma resposta mais precisa.", "Consulte um app de meteorologia para saber a temperatura atual."]],

  // Diversão e entretenimento
  ["qual o filme mais assistido de todos os tempos?", ["O filme mais assistido de todos os tempos é discutível, mas 'Avatar' e 'Vingadores: Ultimato' são considerados alguns dos maiores sucessos de bilheteria."]],
  ["quem ganhou o oscar de melhor filme?", ["Você pode conferir os últimos vencedores do Oscar no site oficial da premiação."]],
  ["qual o melhor time de futebol?", ["Isso depende de qual liga você está falando! Há muitos times excelentes, como Barcelona, Real Madrid, Flamengo e Palmeiras."]],
  ["quem é o melhor jogador de futebol?", ["Isso é uma questão de opinião, mas Lionel Messi e Cristiano Ronaldo são frequentemente considerados os melhores jogadores da atualidade."]],

  // Ciência
  ["o que é gravidade?", ["Gravidade é uma força que atrai objetos uns aos outros. Foi descrita por Isaac Newton e posteriormente expandida pela teoria da relatividade de Albert Einstein."]],
  ["o que é um buraco negro?", ["Um buraco negro é uma região do espaço onde a gravidade é tão forte que nem a luz consegue escapar."]],
  ["o que é a teoria da relatividade?", ["A Teoria da Relatividade, desenvolvida por Albert Einstein, consiste em duas partes: a relatividade restrita e a geral, explicando como o espaço e o tempo são afetados pela gravidade e pela velocidade."]],

  // Dicas e conselhos
  ["como posso me organizar melhor?", ["Tente usar uma lista de tarefas diárias, definir metas claras e priorizar suas atividades mais importantes.", "Ferramentas como calendários e aplicativos de produtividade podem ser ótimos para te ajudar a organizar suas tarefas."]],
  ["como posso melhorar minha produtividade?", ["Experimente técnicas como o método Pomodoro para gerenciar seu tempo de trabalho e pausas."]],
  ["como ter uma alimentação saudável?", ["Tente incluir mais frutas, verduras e proteínas em sua dieta, e beba bastante água ao longo do dia.", "Evitar alimentos processados e equilibrar os macronutrientes pode ser um bom ponto de partida."]],

  // Frases de motivação
  ["me diga algo motivacional", ["Acredite em você mesmo, você é capaz de alcançar grandes coisas!", "O sucesso é a soma de pequenos esforços repetidos dia após dia.", "Não desista, os melhores resultados vêm com perseverança."]],
  ["preciso de motivação", ["Lembre-se de que cada passo, por menor que seja, é um progresso rumo ao seu objetivo.", "A jornada pode ser difícil, mas cada esforço vale a pena no final."]],
]);

const normalizeMessage = (message: string): string => {
  return message.toLowerCase().trim();
};

const extractKeywords = (text: string): string[] => {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(Boolean);
};

const getRandomResponse = (responses: string[]): string => {
  const index = Math.floor(Math.random() * responses.length);
  return responses[index];
};

/**
 * Converte expressões em linguagem natural para uma sintaxe válida.
 *
 * Exemplos:
 * - "raiz de 9"         -> "Math.sqrt(9)"
 * - "2 elevado a 3"      -> "2**3"
 * - "5 ao quadrado"      -> "5**2"
 */
const preprocessExpression = (expression: string): string => {
  let processed = expression;
  // Substitui "raiz de <número>" ou "raiz <número>" por "Math.sqrt(<número>)"
  processed = processed.replace(/raiz\s*(?:de)?\s*([0-9]+(?:\.[0-9]+)?)/gi, "Math.sqrt($1)");
  // Substitui "<número> elevado a <número>" por "<número>**<número>"
  processed = processed.replace(/([0-9]+(?:\.[0-9]+)?)\s*elevado\s*a\s*([0-9]+(?:\.[0-9]+)?)/gi, "$1**$2");
  // Substitui "<número> ao quadrado" por "<número>**2"
  processed = processed.replace(/([0-9]+(?:\.[0-9]+)?)\s*ao\s*quadrado/gi, "$1**2");
  return processed;
};

/**
 * Avalia a expressão aritmética.
 * Para segurança, a validação permite apenas números, operadores e parênteses.
 */
const evaluateExpression = (expression: string): string => {
  try {
    const processed = preprocessExpression(expression);
    const safeExpression = processed.replace(/Math\.sqrt/g, "");
    if (/^[0-9+\-*/().\s]+$/.test(safeExpression)) {
      const result = eval(processed);
      return `O resultado é ${result}`;
    } else {
      return "Expressão inválida.";
    }
  } catch (error) {
    return "Não foi possível calcular.";
  }
};

// Expressão regular para identificar solicitações de cálculo
// Ela captura as palavras-chave ("quanto é", "calcule", "faça uma conta") seguidas da expressão aritmética.
const arithmeticPattern = /(?:quanto é|calcule|faça uma conta)\s+(.+)/i;

export const getBotResponse = (message: string): BotResponse => {
  const normalizedMessage = normalizeMessage(message);

  // Verifica se há uma solicitação de cálculo
  const arithmeticMatch = normalizedMessage.match(arithmeticPattern);
  if (arithmeticMatch && arithmeticMatch[1]) {
    const expression = arithmeticMatch[1].trim();
    if (expression) {
      const result = evaluateExpression(expression);
      return {
        text: result,
        delay: Math.random() * 1000 + 500, // Atraso entre 500ms e 1500ms
      };
    } else {
      return {
        text: "Por favor, forneça a expressão que deseja calcular.",
        delay: Math.random() * 1000 + 500,
      };
    }
  }

  // Processamento das respostas do chatbot com base em palavras-chave
  const messageKeywords = extractKeywords(normalizedMessage);
  let bestMatchKey: string | null = null;
  let maxCommonCount = 0;

  for (const [key, responseArray] of responses.entries()) {
    const keyKeywords = extractKeywords(key);
    const commonCount = keyKeywords.filter(word => messageKeywords.includes(word)).length;
    if (commonCount > maxCommonCount) {
      maxCommonCount = commonCount;
      bestMatchKey = key;
    }
  }

  if (bestMatchKey && maxCommonCount > 0) {
    const responseArray = responses.get(bestMatchKey);
    return {
      text: getRandomResponse(responseArray!),
      delay: Math.random() * 1000 + 500,
    };
  }

  return {
    text: "Desculpe, não entendi. Poderia reformular sua pergunta?",
    delay: Math.random() * 1000 + 500,
  };
};