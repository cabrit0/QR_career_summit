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
    // Motivacionais
    "És capaz de conquistar tudo aquilo que sonhas.",
    "O teu sucesso depende da tua determinação. Segue em frente!",
    "És mais forte do que imaginas. Prova isso hoje!",
    "Constrói o teu futuro um passo de cada vez.",
    "Tu és o arquiteto do teu destino. Desenha-o como quiseres.",
    "Não esperes pela oportunidade perfeita. Cria-a tu mesmo!",
    "És tu quem define os teus limites. Ultrapassa-os!",
    "Acredita no teu potencial. És capaz de coisas incríveis.",
    "O teu esforço de hoje é o teu sucesso de amanhã.",
    "Transforma os desafios em oportunidades de crescimento.",
    "És tu quem escolhe o teu caminho. Faz que valha a pena!",
    "O teu momento é agora. Aproveita-o!",
    "Foca-te nos teus objetivos. És capaz de os alcançar.",
    "O teu potencial não tem limites. Explora-o!",
    "És tu quem escreve a tua história. Faz dela uma inspiração.",
    "Cada pequeno progresso é uma vitória. Celebra-as todas!",
    "A persistência é o caminho do êxito.",
    "O conhecimento é a chave que abre todas as portas.",
    "Hoje é um novo dia para seres ainda melhor.",
    "A tua dedicação vai dar frutos. Continua!",
    "O sucesso é a soma de pequenos esforços repetidos.",
    "Acredita em ti como nós acreditamos.",
    "O teu futuro começa com as escolhas de hoje.",
    "Cada desafio é uma oportunidade para cresceres.",
    "A tua jornada é única. Aproveita cada momento.",

    // Humor (IPCB Themed)
    "És como a biblioteca do IPCB: cheio de conhecimento valioso!",
    "És mais organizado que o horário das aulas práticas!",
    "O teu potencial é maior que a rede Wi-Fi do campus!",
    "És como os serviços académicos: fundamental para o sucesso!",
    "És mais pontual que o sino da ESE!",
    "És como o portal académico: sempre pronto a ajudar!",
    "És mais dedicado que um estudante na véspera de exames!",
    "O teu futuro é mais brilhante que o novo campus!",
    "És como o cartão de estudante: cheio de possibilidades!",
    "És mais eficiente que a cantina em hora de ponta!",
    "És como a Moita do Ribeiro: cheio de vida e energia!",
    "És mais valioso que um lugar de estacionamento às 9h!",
    "És como o IPCB: sempre a crescer e a inovar!",
    "És mais versátil que a sala de estudos 24h!",
    "És mais popular que a fila do microondas na hora de almoço!",
    "És mais refrescante que a fonte do jardim do campus!",
    "És como o bar da escola: um ponto de encontro essencial!",
    "És mais aguardado que o fim das aulas à sexta-feira!",
    "És como o elevador da ESE: sempre a elevar os outros!",
    "És mais acolhedor que o sofá da sala de convívio!",
    "És como a reprografia: sempre a reproduzir excelência!",
    "És mais inspirador que uma aula ao ar livre!",
    "És como o Spotify na sala de estudo: fundamental para a concentração!",
    "És mais útil que os apontamentos partilhados antes do exame!",
    "És como o ar condicionado no verão: indispensável!"
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