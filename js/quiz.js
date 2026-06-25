let currentQuestion = 0;

let answers = [];

const answersContainer =
document.getElementById("answers");

showQuestion();

function showQuestion() {

    const backgrounds = [

        "assets/backgrounds/quiz-1-bg.jpeg",
        "assets/backgrounds/quiz-2-bg.jpeg",
        "assets/backgrounds/quiz-3-bg.jpeg"

    ];

    const cardImages = [

        [
            "assets/cards/quiz-1-first-card.png",
            "assets/cards/quiz-1-second-card.png",
            "assets/cards/quiz-1-third-card.png"
        ],

        [
            "assets/cards/quiz-2-first-card.png",
            "assets/cards/quiz-2-second-card.png",
            "assets/cards/quiz-2-third-card.png"
        ],

        [
            "assets/cards/quiz-3-first-card.png",
            "assets/cards/quiz-3-second-card.png",
            "assets/cards/quiz-3-third-card.png"
        ]

    ];

    document.querySelector(".quiz-page").style.backgroundImage =
    `url(${backgrounds[currentQuestion]})`;

    answersContainer.innerHTML = "";

    cardImages[currentQuestion].forEach(
        (imagePath, index) => {

            const card =
            document.createElement("img");

            card.src = imagePath;

            card.classList.add(
                "choice-card"
            );

            card.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        index + 1
                    );

                }
            );

            answersContainer.appendChild(
                card
            );

        }
    );

}

function selectAnswer(choice) {

    answers.push(choice);

    currentQuestion++;

    if (currentQuestion < 3) {

        showQuestion();

    } else {

        finishQuiz();

    }

}

function finishQuiz() {

    saveAnswers(answers);

    window.location.href =
    "result.html";

}