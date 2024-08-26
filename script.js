const quizData = [
    {
        question: "Up until 2019, which cricketers have the record for the highest-run partnership in the ODI World Cup for India?",
        options: [
            "Sachin Tendulkar and Saurav Ganguly",
            "Saurav Ganguly and Rahul Dravid",
            "Saurav Ganguly and Virender Sehwag",
            "Rahul Dravid and Sachin Tendulkar"
        ],
        correct: "Saurav Ganguly and Rahul Dravid"
    },
    {
        question: "As of 2023, what is the lowest score defended in an ODI World Cup final?",
        options: [
            "183 runs",
            "241 runs",
            "200 runs",
            "228 runs"
        ],
        correct: "183 runs"
    },
    {
        question: "Who was the wicket-keeper of the Indian Cricket Team during the World Cup 2003 tournament?",
        options: [
            "Parthiv Patel",
            "Nayan Mongia",
            "Rahul Dravid",
            "Mahendra Singh Dhoni"
        ],
        correct: "Rahul Dravid"
    },
    {
        question: "Which cricketer had scored the most runs at the ODI World Cup until 2019?",
        options: [
            "Sachin Tendulkar",
            "Mohammad Azharuddin",
            "Saurav Ganguly",
            "Rahul Dravid"
        ],
        correct: "Sachin Tendulkar"
    },
    {
        question: "In which year were the World Cup matches reduced to 50 overs from the previous 60 overs?",
        options: [
            "1983",
            "1979",
            "1992",
            "1987"
        ],
        correct: "1987"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    const quizQuestionElement = document.querySelector('.quiz-question');
    const quizOptionsElements = document.querySelectorAll('.quiz-option label');

    const currentQuizData = quizData[currentQuestion];

    quizQuestionElement.textContent = currentQuizData.question;
    quizOptionsElements.forEach((label, index) => {
        label.textContent = currentQuizData.options[index];
    });
}

function getSelectedOption() {
    const quizOptions = document.querySelectorAll('.quiz-option input');
    let selectedOption;
    quizOptions.forEach((option) => {
        if (option.checked) {
            selectedOption = option.nextElementSibling.textContent;
        }
    });
    return selectedOption;
}

function clearSelection() {
    const quizOptions = document.querySelectorAll('.quiz-option input');
    quizOptions.forEach((option) => {
        option.checked = false;
    });
}

document.querySelector('.submit-btn').addEventListener('click', () => {
    const selectedOption = getSelectedOption();
    if (selectedOption) {
        if (selectedOption === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            clearSelection();
            loadQuiz();
        } else {
            document.querySelector('.quiz-container').innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    } else {
        alert('Please select an option before submitting');
    }
});

loadQuiz();
