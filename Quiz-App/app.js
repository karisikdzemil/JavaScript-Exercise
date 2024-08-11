const quiz = [
    {
    question: "What is the capital of France?",
    cAnswer: "Paris",
    wAnswers: ["Berlin", "Madrid", "Rome"]
},
{
    question: "Which planet is known as the Red Planet?",
    cAnswer: "Mars",
    wAnswers: ["Venus", "Jupiter", "Saturn"]
},
{
    question: "Who wrote the play Romeo and Juliet?",
    cAnswer: "William Shakespeare",
    wAnswers: ["Charles Dickens", "Mark Twain", "Jane Austen"]
},
{
    question: "What is the largest mammal in the world?",
    cAnswer: "Blue Whale",
    wAnswers: ["Elephand", "Giraffe", "Polar Bear"]
},
{
    question: "Which element has the chemical symbol 'O'?",
    cAnswer: "Oxygen",
    wAnswers: ["Hydrogen", "Iron", "Gold"]
},
{
    question: "How many continents are there on Earth?",
    cAnswer: "7",
    wAnswers: ["5", "6", "8"]
},
{
    question: "Which ocean is the largest?",
    cAnswer: "Pacific Ocean",
    wAnswers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]
},
{
    question: "What is the smallest prime number?",
    cAnswer: "2",
    wAnswers: ["0", "1", "3"]
},
{
    question: "Who was the first President of the United States?",
    cAnswer: "George Washington",
    wAnswers: ["Abraham Lincoln", "Thomas Jefferson", "John Adams"]
},
{
    question: "What is the chemical formula for water?",
    cAnswer: "H2O",
    wAnswers: ["CO2", "NaCl", "O2"]
},
];

for(const que of quiz){
    for(obj in que){
        console.log(que[obj]);
    }
    console.log("------------------")
}