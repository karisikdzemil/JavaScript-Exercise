const quiz = [
  {
    question: "What is the capital of France?",
    cAnswer: "Paris",
    wAnswers: ["Berlin", "Paris", "Madrid", "Rome"],
  },
  {
    question: "Which planet is known as the Red Planet?",
    cAnswer: "Mars",
    wAnswers: ["Venus", "Jupiter", "Saturn", "Mars"],
  },
  {
    question: "Who wrote the play Romeo and Juliet?",
    cAnswer: "William Shakespeare",
    wAnswers: [
      "William Shakespeare",
      "Charles Dickens",
      "Mark Twain",
      "Jane Austen",
    ],
  },
  {
    question: "What is the largest mammal in the world?",
    cAnswer: "Blue Whale",
    wAnswers: ["Elephand", "Giraffe", "Blue Whale", "Polar Bear"],
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    cAnswer: "Oxygen",
    wAnswers: ["Hydrogen", "Oxygen", "Iron", "Gold"],
  },
  {
    question: "How many continents are there on Earth?",
    cAnswer: "7",
    wAnswers: ["5", "6", "7", "8"],
  },
  {
    question: "Which ocean is the largest?",
    cAnswer: "Pacific Ocean",
    wAnswers: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
  },
  {
    question: "What is the smallest prime number?",
    cAnswer: "2",
    wAnswers: ["0", "1", "2", "3"],
  },
  {
    question: "Who was the first President of the United States?",
    cAnswer: "George Washington",
    wAnswers: [
      "George Washington",
      "Abraham Lincoln",
      "Thomas Jefferson",
      "John Adams",
    ],
  },
  {
    question: "What is the chemical formula for water?",
    cAnswer: "H2O",
    wAnswers: ["CO2", "H2O", "NaCl", "O2"],
  },
];

const question = document.querySelector("h2");
const answers = document.querySelectorAll("li");
const nextQuestion = document.getElementById("next");
const startGameButton = document.getElementById("start-modal-but");
const restartGameButton = document.getElementById("restart-modal-but");
const backDrop = document.querySelector(".black-drop");
const startModal = document.querySelector(".modal");
const questionCounter = document.querySelector("h3");
const ul = document.querySelector("ul");
const gameOverModal = document.getElementById("game-over-modal");
let randomIndex;
let count = 1;
let correctAnswers = 0;
let isCalled = false;

const GameOver = () => {
  gameOverModal.classList.remove("show");
  gameOverModal.style.display = "none";

  backDrop.style.display = "block";
  backDrop.classList.remove("unvisible");
  backDrop.classList.add("black-drop");
  gameOverModal.classList.add("show");

  gameOverModal.style.display = "flex";

  const text = gameOverModal.querySelector("p");
  text.textContent = `You got ${correctAnswers} correct out of 4 possible answers`;
};

const nextQuestionHandler = () => {
  if (count > 4) {
    GameOver();
    return;
  }
  randomIndex = Math.floor(Math.random() * quiz.length);
  question.textContent = quiz[randomIndex].question;
  for (let i = 0; i < 4; i++) {
    answers[i].textContent = quiz[randomIndex].wAnswers[i];
  }
  questionCounter.textContent = `${count} of 4 questions`;
  count++;
  isCalled = false;

  for (const li of answers) {
    li.style.backgroundColor = "rgb(111, 141, 217)";
  }
};

startGameButton.addEventListener("click", () => {
  backDrop.classList.add("unvisible");
  startModal.classList.add("unvisible");
  count = 1;
  correctAnswers = 0;
  nextQuestionHandler();
});

restartGameButton.addEventListener("click", () => {
  backDrop.classList.add("unvisible");
  backDrop.style.display = "none";
  gameOverModal.style.display = "none";
  count = 1;
  correctAnswers = 0;
  nextQuestionHandler();
});

ul.addEventListener("click", (event) => {
  if (!isCalled && event.target.tagName === "LI") {
    if (event.target.textContent === quiz[randomIndex].cAnswer) {
      correctAnswers++;
      event.target.style.backgroundColor = "green";
    } else {
      event.target.style.backgroundColor = "red";
    }
    isCalled = true;
  }
});

nextQuestion.addEventListener("click", nextQuestionHandler);
