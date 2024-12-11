const question = document.querySelector("h2");
const answers = document.querySelectorAll(".li");
const next = document.getElementById("next");


class Quiz{
    constructor(arr){
        this.arr = arr;

        this.show((Math.random() * 10).toFixed(0));
    }

    show(randomNumber){
        question.innerText = this.arr[randomNumber].question;
        this.arr[randomNumber].wAnswers.forEach((el, i) => {
            answers[i].innerText = el;
        });
    }
}

const proba = new Quiz(quiz);
next.addEventListener("click", () => proba.show((Math.random() * 10).toFixed(0)));
