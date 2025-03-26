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
    "A resiliência é tão importante quanto o talento. Levanta-te sempre.",
    "Define a tua meta. O Politécnico de Castelo Branco ensinou-te a planear o percurso.",
    "A tua formação é sólida. Confia nas tuas competências.",
    "Networking: menos 'adicionar ligação', mais 'construir relação'.",
    "Pensa. Cria. Inova. O ADN do Politécnico.",
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
    "O teu currículo é a tua narrativa profissional. Torna-a cativante.",
    "Aprender a 'desaprender' para reaprender é crucial. Mantém a mente aberta.",
    "A tua marca pessoal começa a ser construída agora. Sê autêntico.",
    "Não esperes que te descubram. Mostra o que vales.",
    "A excelência não é um ato, é um hábito. Cultiva-o diariamente.",
    "Colabora. As melhores sinfonias são tocadas por orquestras, não por solistas.",

    // --- Inteligência, Reflexão & Sabedoria ---
    "Conhecimento aplicado é poder. Usa o que aprendeste.",
    "A maior sabedoria é saber que há sempre mais para saber.",
    "Não procures apenas um salário, procura significado no que fazes.",
    "Ousadia com preparação é estratégia. Ousadia sem ela é lotaria.",
    "A criatividade é a inteligência a divertir-se. Permite-te brincar com ideias.",
    "Com raízes na Beira, mas com os olhos no mundo. A perspetiva IPCB.",
    "O pensamento crítico é o teu melhor filtro num mundo de informação.",
    "A tua jornada é única. Inspira-te nos outros, mas segue o teu próprio trilho.",
    "Competências técnicas abrem portas, competências sociais mantêm-nas abertas.",
    "Dedica tempo a refletir. A clareza surge na pausa, não na correria.",
    "Um bom 'pitch' vale ouro. Aprende a comunicar o teu valor.",
    "Sustentabilidade: pensar no amanhã, agindo hoje, em todas as áreas.",
    "A inteligência emocional é tão vital quanto o QI no sucesso profissional.",
    "A curiosidade é o motor da descoberta. Nunca deixes de explorar.",
    "O planeamento estratégico aplica-se à carreira tanto quanto aos projetos.",
    "Escuta ativamente. Muitas vezes, a melhor resposta está na pergunta do outro.",

    // --- Humor Inteligente & Contextual (pt-PT / IPCB) ---
    "Que a tua ligação à net seja estável e as tuas ligações profissionais mais ainda!",
    "Lembra-te: até a cadeira mais 'design' da ESART começou com um esboço.",
    "Sobreviveste às 'práxis' e à época de exames. O mercado de trabalho? Um passeio no Parque do Barrocal.",
    "Se precisares de inspiração, pensa no pôr do sol visto do castelo. Ou vai buscar um café.",
    "Dizem que o segredo está nos detalhes... e em entregar os relatórios da ESTCB a tempo.",
    "Encontrar o emprego certo é como encontrar mesa livre na cantina ao meio-dia: requer estratégia e timing.",
    "Aprender a programar é como aprender a falar 'beirão': no início custa, mas depois entranha-se!",
    "Na dúvida entre dois caminhos, escolhe aquele que tem melhor cobertura de rede.",
    "O teu potencial é mais vasto que os campos da ESAg.",
    "Manter a calma numa entrevista é como fazer um exame na ESSA: respira fundo, confia na preparação.",
    "O elevador da ESE pode demorar, mas a tua carreira não precisa de o fazer. Usa as escadas!",
    "Pro Tip: Um sorriso abre mais portas do que uma chave mestra (mas a chave também ajuda).",
    "Não te esqueças de onde vieste. E de trazer um queijo da região para o escritório novo.",
    "Objetivo: Ser tão eficiente como os Serviços Académicos em setembro (mas com menos filas).",
    "Nível de stress: Gerir projetos múltiplos vs. Tentar imprimir na reprografia 5 minutos antes da aula.",
    "Lembra-te das aulas de Estatística: a probabilidade de sucesso aumenta com o número de tentativas (e um bom plano).",
    "Se a vida te der 'bugs', 'debuga' e continua. Mentalidade de engenheiro.",
    "Que o teu 'networking' seja tão produtivo quanto uma visita de estudo bem organizada.",
    "A persistência é chave. Tal como encontrar estacionamento legal perto do campus.",
    "A vida é muito curta para não aproveitar o sol na esplanada... depois de enviares o CV.",
    "A receita do sucesso pode incluir 'farinha amparo', mas leva sobretudo muito trabalho.",
    "Sê como a água do Ocreza: adapta-te, contorna obstáculos e segue em frente.",

    // --- Impulso Final & Encorajamento ---
    "Este Summit é um catalisador. Usa a energia para impulsionar a tua carreira.",
    "O diploma do IPCB é a prova da tua capacidade. O teu futuro é a tua tela.",
    "De Castelo Branco para o mundo: as tuas ambições não têm fronteiras.",
    "Conecta. Aprende. Cresce. O Career Summit é o teu palco.",
    "O futuro é brilhante. E começa agora, aqui mesmo.",
    "Confia na tua formação, acredita na tua visão.",
    "Que saias daqui hoje mais inspirado e preparado para conquistar os teus sonhos.",
    "Lembra-te: és parte da comunidade IPCB. Uma rede forte que te apoia.",
    "Aproveita cada momento. As oportunidades estão por todo o lado.",
    "És capaz. Vai e mostra!",
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