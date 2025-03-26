function copyPassword() {
    const passwordElement = document.querySelector('.password-value');
    const password = passwordElement.innerText;

    navigator.clipboard.writeText(password).then(() => {
        const feedbackElement = document.getElementById('copy-feedback');
        feedbackElement.innerText = 'Password copiada!';
        setTimeout(() => {
            feedbackElement.innerText = '';
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar a password: ', err);
        const feedbackElement = document.getElementById('copy-feedback');
        feedbackElement.innerText = 'Erro ao copiar.';
        setTimeout(() => {
            feedbackElement.innerText = '';
        }, 2000);
    });
}


const motivationalQuotes = [
    // --- Motivação, Carreira & Futuro ---
    "O teu futuro profissional começa a desenhar-se hoje. Usa bem o lápis.",
    "Acredita no potencial que o IPCB viu em ti. Agora, mostra-o ao mundo.",
    "Cada conversa neste Summit é uma semente. Rega-as com curiosidade.",
    "O caminho para o sucesso está sempre em construção. Continua a colocar 'tijolos'.",
    "O conhecimento é o teu passaporte para o futuro. Carimba-o com novas experiências.",
    "Não temas os desafios; eles são oportunidades disfarçadas de trabalho árduo.",
    "A tua carreira ideal não se encontra, constrói-se. Mãos à obra!",
    "A preparação encontra a oportunidade. Este evento é o teu 'campo de treino'.",
    "Sê a inovação que o mercado procura. O IPCB deu-te as bases, voa alto.",
    "Num mundo em mudança, a capacidade de aprender é o teu superpoder.",
    "O teu valor multiplica-se a cada nova competência que adquires.",
    "Encare os 'nãos' como desvios para o 'sim' certo.",
    "O teu potencial é imenso. Explora-o sem reservas.",
    "As perguntas certas abrem mais portas do que as respostas prontas.",
    "Mostra o teu entusiasmo. É o teu melhor cartão de visita.",
    "Celebra o progresso, não apenas a perfeição. Cada passo conta.",
    "Transforma a visão em ação. As ideias só ganham vida fora da cabeça.",
    "A iniciativa é a faísca que acende grandes projetos.",
    "A diversidade do IPCB prepara-te para a complexidade do mundo real.",
    "O teu currículo (CV) é a tua narrativa profissional. Torna-a cativante.",
    "Aprender a 'desaprender' para reaprender é crucial. Mantém a mente aberta.",
    "A tua marca pessoal começa a ser construída agora. Sê autêntico.",
    "Não esperes que te descubram. Mostra o que vales.",
    "A excelência não é um ato, é um hábito. Cultiva-o diariamente.",
    "Colabora. As melhores sinfonias são tocadas por orquestras, não por solistas.",
    "O futuro pertence àqueles que se preparam para ele hoje.",
    "Não te limites a sonhar com o sucesso, trabalha para o alcançar.",
    "A paixão pelo que fazes transforma o trabalho em realização.",
    "Sê curioso. A curiosidade é o combustível da aprendizagem e da inovação.",
    "A tua atitude determina a tua altitude. Pensa positivo, voa alto.",

    // --- Inteligência, Reflexão & Sabedoria ---
    "Conhecimento aplicado é poder. Usa o que aprendeste.",
    "A maior sabedoria é saber que há sempre mais para saber.",
    "Não procures apenas um salário, procura significado no que fazes.",
    "Ousadia com preparação é estratégia. Ousadia sem ela é lotaria.",
    "A criatividade é a inteligência a divertir-se. Permite-te brincar com ideias.",
    "Com raízes na Beira, mas com os olhos no mundo. A perspetiva IPCB.",
    "O pensamento crítico é o teu melhor filtro num mundo de informação.",
    "A tua jornada é única. Inspira-te nos outros, mas segue o teu próprio trilho.",
    "Competências técnicas abrem portas, competências humanas ('soft skills') mantêm-nas abertas.",
    "Dedica tempo a refletir. A clareza surge na pausa, não na correria.",
    "Um bom 'pitch' vale ouro. Aprende a comunicar o teu valor de forma concisa.",
    "Sustentabilidade: pensar no amanhã, agindo hoje, em todas as áreas.",
    "A inteligência emocional é tão vital quanto o QI no sucesso profissional.",
    "A curiosidade é o motor da descoberta. Nunca deixes de explorar.",
    "O planeamento estratégico aplica-se à carreira tanto quanto aos projetos.",
    "Escuta ativamente. Muitas vezes, a melhor resposta está na pergunta do outro.",
    "A simplicidade é o último grau de sofisticação.",
    "A dúvida é o princípio da sabedoria.",

    // --- Citações de Autores Portugueses ---
    "Pedras no caminho? Guardo-as todas, um dia construo um castelo. - Fernando Pessoa (atrib.)",
    "O valor das coisas não está no tempo que elas duram, mas na intensidade com que acontecem. - Fernando Pessoa",
    "Tudo vale a pena se a alma não é pequena. - Fernando Pessoa",
    "Há um tempo em que é preciso abandonar as roupas usadas, que já têm a forma do nosso corpo, e esquecer os nossos caminhos, que nos levam sempre aos mesmos lugares. - Fernando Pessoa",
    "Para viajar basta existir. - Fernando Pessoa (Alberto Caeiro)",
    "Segue o teu destino, rega as tuas plantas, ama as tuas rosas. O resto é a sombra de árvores alheias. - Fernando Pessoa (Ricardo Reis)",
    "Não tenhamos pressa, mas não percamos tempo. - José Saramago",
    "O caos é uma ordem por decifrar. - José Saramago",
    "É preciso sair da ilha para ver a ilha. - José Saramago",
    "A viagem não acaba nunca. Só os viajantes acabam. - José Saramago",
    "Cria! Eis o segredo. Fecunda! Ilumina! Anima! Faz obra! - Miguel Torga",
    "O que torna um rio bonito não é ele não ter margens, é tê-las. - Miguel Torga",
    "O universo não me deve nada porque ma deu já todo quando me deu os sentidos para o sentir. - Alberto Caeiro (Fernando Pessoa)",
    "Liberta-te. Cria. Existe. - Agostinho da Silva",
    "Pensar também é fazer. - Agostinho da Silva",

    // --- Humor Inteligente & Contextual (pt-PT / IPCB) ---
    "Que a tua ligação à net seja estável e as tuas ligações profissionais mais ainda!",
    "Lembra-te: até a cadeira mais 'design' da ESART começou com um esboço.",
    "Sobreviveste às praxes (se as houve!) e à época de exames. O mercado de trabalho? Um passeio no Parque do Barrocal.",
    "Se precisares de inspiração, pensa no pôr do sol visto do castelo. Ou vai buscar um café.",
    "Dizem que o segredo está nos detalhes... e em entregar os relatórios da EST a tempo.",
    "Encontrar o emprego certo é como encontrar mesa livre na cantina ao meio-dia: requer estratégia e 'timing'.",
    "Aprender a programar na EST é como aprender a falar 'beirão': no início custa, mas depois entranha-se!",
    "Na dúvida entre dois caminhos, escolhe aquele que tem melhor cobertura de rede móvel.",
    "O teu potencial é mais vasto que os campos da ESA.",
    "Manter a calma numa entrevista é como fazer um exame na ESALD: respira fundo, confia na preparação.",
    "O elevador da ESE pode demorar, mas a tua carreira não precisa de o fazer. Usa as escadas!",
    "Dica de ouro: Um sorriso abre mais portas do que uma chave mestra (mas a chave também ajuda).",
    "Não te esqueças de onde vieste. E de trazer um queijo da região para o escritório novo.",
    "Objetivo: Ser tão eficiente como os Serviços Académicos em setembro (mas com menos filas).",
    "Nível de stress: Gerir projetos múltiplos vs. Tentar imprimir na reprografia 5 minutos antes da aula.",
    "Lembra-te das aulas de Estatística (ou da ESG!): a probabilidade de sucesso aumenta com o número de tentativas (e um bom plano).",
    "Se a vida te der 'bugs', 'debuga' e continua. Mentalidade de programador.",
    "Que o teu 'networking' seja tão produtivo quanto uma visita de estudo bem organizada.",
    "A persistência é chave. Tal como encontrar estacionamento legal perto do campus.",
    "A vida é muito curta para não aproveitar o sol na esplanada... depois de enviares o CV.",
    "A receita do sucesso pode incluir 'farinha amparo' (metaforicamente!), mas leva sobretudo muito trabalho.",
    "Sê como a água do Ocreza: adapta-te, contorna obstáculos e segue em frente.",
    "Gerir a carreira é como gerir uma empresa. Felizmente, tiveste aulas na ESG sobre isso!",
    "Navegar no mercado de trabalho pode ser como encontrar sala na ESE no primeiro dia. Mas tu consegues!",
    "A fórmula para o sucesso pode não estar nos manuais da ESALD, mas a saúde para o alcançar, sim!",

    // --- Impulso Final & Encorajamento ---
    "Este Summit é um catalisador. Usa a energia para impulsionar a tua carreira.",
    "O diploma do IPCB é a prova da tua capacidade. O teu futuro é a tua tela.",
    "De Castelo Branco para o mundo: as tuas ambições não têm fronteiras.",
    "Conecta. Aprende. Cresce. O Career Summit é o teu palco.",
    "O futuro é brilhante. E começa agora, aqui mesmo.",
    "Confia na tua formação, acredita na tua visão.",
    "Que saias daqui hoje mais inspirado/a e preparado/a para conquistar os teus sonhos.",
    "Lembra-te: és parte da comunidade IPCB. Uma rede forte que te apoia.",
    "Aproveita cada momento. As oportunidades estão por todo o lado.",
    "És capaz. Vai e mostra!"
];

function displayRandomQuote() {
    const quoteElement = document.getElementById('quote-text');
    if (quoteElement) {

        quoteElement.style.transform = 'translateY(10px)';
        quoteElement.style.opacity = '0';

        setTimeout(() => {
            // Escolhe e define a nova frase
            const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
            quoteElement.innerText = motivationalQuotes[randomIndex];

            // Animação de entrada
            quoteElement.style.transform = 'translateY(0)';
            quoteElement.style.opacity = '1';
        }, 300); // Tempo para a animação de saída acontecer
    }
}

displayRandomQuote();
setInterval(displayRandomQuote, 8000); // 8000ms = 8 segundos