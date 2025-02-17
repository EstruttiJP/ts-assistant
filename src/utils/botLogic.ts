import { BotResponse } from "@/types/chat";

type ResponsesMap = Map<string, string[]>;

const responses: ResponsesMap = new Map([
  ["olá", ["Olá! Como posso ajudar você hoje?", "Oi! Em que posso ser útil?", "Olá! O que você precisa?"]],
  ["oi", ["Olá! Como posso ajudar você hoje?", "Oi! Em que posso ser útil?", "Olá! O que você precisa?"]],
  ["produtos", ["Temos diversas opções! Você pode me dizer qual categoria lhe interessa?", "Quais tipos de produtos você está procurando?", "Posso ajudar você a encontrar algum produto específico?"]],
  ["obrigado", ["De nada! Se precisar de mais alguma coisa, estou por aqui.", "À disposição! Precisa de mais alguma coisa?", "Foi um prazer ajudar! Se precisar de mais algo, avise-me."]],
  ["obrigada", ["De nada! Se precisar de mais alguma coisa, estou por aqui.", "À disposição! Precisa de mais alguma coisa?", "Foi um prazer ajudar! Se precisar de mais algo, avise-me."]],
  ["tchau", ["Até mais! Tenha um ótimo dia!", "Tchau! Volte sempre que precisar.", "Até logo! Foi um prazer ajudar."]],
  ["ajuda", ["Como posso ajudá-lo?", "O que você precisa?", "Estou aqui para ajudar!"]],
  ["preço", ["Qual produto você quer saber o preço?", "Preciso saber o produto para te informar o preço.", "Pergunte sobre o preço do produto que você quer."]],
  ["promoção", ["Temos diversas promoções! Quer saber mais sobre alguma?", "Sim, estamos com promoções! Qual produto te interessa?", "Posso te falar sobre nossas promoções. Que tipo de produto você busca?"]],
  ["entrega", ["Nossos prazos de entrega variam. Qual o seu CEP?", "Posso te informar sobre a entrega. Qual o seu endereço?", "Para saber o prazo de entrega, preciso do seu CEP."]],
  ["pago", ["Você pode pagar com cartão, boleto ou Pix.", "Aceitamos várias formas de pagamento. Qual você prefere?", "Quer pagar com cartão, boleto ou Pix?"]],
  ["devolução", ["Aceitamos devoluções em até 30 dias.", "Nossa política de devolução é de até 30 dias.", "Você pode devolver o produto em até 30 dias."]],
  ["estoque", ["Deixe-me verificar o estoque para você.", "Vamos ver se temos em estoque.", "Posso te ajudar a verificar o estoque."]],
  ["horário", ["Estamos abertos das 9h às 18h.", "Nosso horário de funcionamento é das 9h às 18h.", "Abrimos das 9h às 18h."]],
  ["localização", ["Estamos localizados na Rua Principal, 123.", "Nosso endereço é Rua Principal, 123.", "Você nos encontra na Rua Principal, 123."]],
  ["contato", ["Você pode nos contatar pelo telefone 1234-5678.", "Nosso telefone é 1234-5678.", "Para falar conosco, ligue para 1234-5678."]],
  ["desconto", ["Temos descontos para compras acima de R$100.", "Oferecemos descontos em algumas categorias.", "Quer saber sobre nossos descontos?"]],
  ["suporte", ["Estamos aqui para te ajudar! Qual a sua dúvida?", "Precisa de suporte? Estou aqui.", "Como posso ajudar com o suporte?"]],
  ["informação", ["Qual informação você precisa?", "O que você quer saber?", "Estou aqui para fornecer as informações que você precisa."]],
  ["classificação", ["A classificação dos nossos produtos vai de 1 a 5 estrelas.", "Avaliações ajudam a escolher os melhores produtos.", "Você pode ver as avaliações dos produtos na página de cada um."]]
]);


const normalizeMessage = (message: string): string => {
  return message.toLowerCase().trim();
};

const getRandomResponse = (responses: string[]): string => {
  const index = Math.floor(Math.random() * responses.length);
  return responses[index];
};

export const getBotResponse = (message: string): BotResponse => {
  const normalizedMessage = normalizeMessage(message);

  for (const [key, responseArray] of responses.entries()) {
    if (normalizedMessage.includes(key)) {
      return {
        text: getRandomResponse(responseArray),
        delay: Math.random() * 1000 + 500, // Atraso aleatório entre 500-1500ms
      };
    }
  }

  return {
    text: "Desculpe, não entendi. Poderia reformular sua pergunta?",
    delay: Math.random() * 1000 + 500,
  };
};
