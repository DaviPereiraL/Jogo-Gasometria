const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-btn');
const correctCountElement = document.getElementById('correct-count');
const wrongCountElement = document.getElementById('wrong-count');

// Contadores de acertos e erros
let correctCount = 0;
let wrongCount = 0;

// Lista de perguntas e respostas
const questions = [
    {
        question: "1 - Paciente com diabetes apresenta gasometria arterial: pH: 7,30, pCO2: 35 mmHg, HCO3-: 18 mEq/L. Qual o diagnóstico?",
        answers: {
            A: "Alcalose respiratória não compensada",
            B: "Acidose metabólica não compensada",
            C: "Acidose respiratória compensada",
            D: "Alcalose metabólica compensada"
        },
        correct: "B"
    },
    {
        question: "2 - Paciente de 60 anos com histórico de DPOC apresenta gasometria: pH: 7,38, pCO2: 50 mmHg, HCO3-: 30 mEq/L. Qual o diagnóstico?",
        answers: {
            A: "Acidose respiratória compensada",
            B: "Acidose metabólica compensada",
            C: "Alcalose metabólica compensada",
            D: "Alcalose respiratória compensada"
        },
        correct: "A"
    },
    {
        question: "3 - Paciente com insuficiência renal crônica: pH: 7,28, pCO2: 32 mmHg, HCO3-: 18 mEq/L. Qual o diagnóstico?",
        answers: {
            A: "Acidose metabólica parcialmente compensada",
            B: "Alcalose respiratória compensada",
            C: "Acidose respiratória descompensada",
            D: "Acidose metabólica descompensada"
        },
        correct: "A"
    },
    {
        question: "4 - Paciente com vômitos há 3 dias apresenta gasometria: pH: 7,48, pCO2: 46 mmHg, HCO3-: 30 mEq/L. Qual o diagnóstico?",
        answers: {
            A: "Alcalose metabólica compensada",
            B: "Alcalose respiratória compensada",
            C: "Acidose respiratória compensada",
            D: "Acidose metabólica compensada"
        },
        correct: "A"
    },
    {
        question: "5 - Paciente com crise de asma apresenta gasometria: pH: 7,33, pCO2: 55 mmHg, HCO3-: 26 mEq/L. Qual o diagnóstico?",
        answers: {
            A: "Acidose metabólica compensada",
            B: "Acidose respiratória descompensada",
            C: "Alcalose metabólica compensada",
            D: "Alcalose respiratória descompensada"
        },
        correct: "B"
    },
    {
        question: "6 - Paciente com ansiedade apresenta gasometria: pH: 7,49, pCO2: 30 mmHg, HCO3-: 24 mEq/L. Qual o diagnóstico?",
        answers: {
            A: "Alcalose metabólica descompensada",
            B: "Alcalose respiratória descompensada",
            C: "Acidose respiratória compensada",
            D: "Acidose metabólica compensada"
        },
        correct: "B"
    },
    {
        question: "7 - Paciente com insuficiência cardíaca congestiva: pH: 7,42, pCO2: 38 mmHg, HCO3-: 24 mEq/L. Qual o diagnóstico?",
        answers: {
            A: "Gasometria normal",
            B: "Alcalose respiratória descompensada",
            C: "Acidose respiratória compensada",
            D: "Acidose metabólica descompensada"
        },
        correct: "A"
    },
    {
        question: "8 - Paciente com sepse apresenta gasometria: pH: 7,32, pCO2: 38 mmHg, HCO3-: 20 mEq/L. Qual o diagnóstico?",
        answers: {
            A: "Alcalose respiratória compensada",
            B: "Acidose metabólica compensada",
            C: "Acidose metabólica não compensada",
            D: "Acidose respiratória descompensada"
        },
        correct: "C"
    },
    {
        question: "9 - Paciente com overdose de opioides apresenta: pH: 7,25, pCO2: 60 mmHg, HCO3-: 26 mEq/L. Qual o diagnóstico?",
        answers: {
            A: "Acidose respiratória descompensada",
            B: "Acidose metabólica compensada",
            C: "Alcalose metabólica compensada",
            D: "Alcalose respiratória descompensada"
        },
        correct: "A"
    },
    {
        question: "10 - Paciente com insuficiência respiratória apresenta: pH: 7,19, pCO2: 70 mmHg, HCO3-: 24 mEq/L. Qual o diagnóstico?",
        answers: {
            A: "Acidose respiratória descompensada",
            B: "Acidose metabólica descompensada",
            C: "Alcalose metabólica compensada",
            D: "Alcalose respiratória descompensada"
        },
        correct: "A"
    },
    {
        question: "11 - Paciente com diarreia intensa apresenta gasometria: pH: 7,29, pCO2: 40 mmHg, HCO3-: 18 mEq/L. Qual o diagnóstico?",
        answers: {
            A: "Acidose metabólica descompensada",
            B: "Acidose respiratória compensada",
            C: "Alcalose metabólica compensada",
            D: "Alcalose respiratória compensada"
        },
        correct: "A"
    },
    {
        question: "12 - Paciente com cetoacidose diabética: pH: 7,10, pCO2: 22 mmHg, HCO3-: 10 mEq/L. Qual o diagnóstico?",
        answers: {
            A: "Acidose metabólica parcialmente compensada",
            B: "Acidose respiratória compensada",
            C: "Alcalose metabólica compensada",
            D: "Alcalose respiratória compensada"
        },
        correct: "A"
    },
    {
        question: "13 - Paciente em pós-operatório de grande cirurgia: pH: 7,44, pCO2: 36 mmHg, HCO3-: 25 mEq/L. Qual o diagnóstico?",
        answers: {
            A: "Gasometria normal",
            B: "Alcalose respiratória compensada",
            C: "Acidose respiratória compensada",
            D: "Acidose metabólica descompensada"
        },
        correct: "A"
    },
    {
        question: "14 - Paciente em uso crônico de diuréticos: pH: 7,46, pCO2: 44 mmHg, HCO3-: 29 mEq/L. Qual o diagnóstico?",
        answers: {
            A: "Alcalose metabólica compensada",
            B: "Alcalose respiratória compensada",
            C: "Acidose respiratória compensada",
            D: "Acidose metabólica descompensada"
        },
        correct: "A"
    },
    {
        question: "15 - Paciente com pneumotórax: pH: 7,28, pCO2: 50 mmHg, HCO3-: 24 mEq/L. Qual o diagnóstico?",
        answers: {
            A: "Acidose respiratória descompensada",
            B: "Acidose metabólica compensada",
            C: "Alcalose metabólica compensada",
            D: "Alcalose respiratória descompensada"
        },
        correct: "A"
    },
];

// Variável para controlar o índice da pergunta atual
let currentQuestionIndex = 0;

function startGame() {
    // Resetar contadores
    correctCount = 0;
    wrongCount = 0;
    updateScoreTable();

    // Esconder o botão de Start e mostrar as perguntas
    startButton.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
    const questionData = questions[index];
    questionElement.innerText = questionData.question;
    
    // Exibir as respostas
    answerButtons.forEach(button => {
        const answerKey = button.getAttribute('data-answer');
        button.innerText = `${answerKey}) ${questionData.answers[answerKey]}`;
        button.onclick = () => checkAnswer(answerKey, questionData.correct);
    });
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        correctCount++;
        alert("Correto!");
    } else {
        wrongCount++;
        alert(`Errado! A resposta correta é: ${correct}) ${questions[currentQuestionIndex].answers[correct]}`);
    }

    // Atualizar a tabela de acertos e erros
    updateScoreTable();

    // Passar para a próxima pergunta
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        alert(`Fim do jogo! Acertos: ${correctCount}, Erros: ${wrongCount}`);
        resetGame();
    }
}

function updateScoreTable() {
    correctCountElement.innerText = correctCount;
    wrongCountElement.innerText = wrongCount;
}

function resetGame() {
    currentQuestionIndex = 0;
    startButton.classList.remove('hidden');
    questionContainer.classList.add('hidden');
}

// Evento para iniciar o jogo
startButton.addEventListener('click', startGame);
