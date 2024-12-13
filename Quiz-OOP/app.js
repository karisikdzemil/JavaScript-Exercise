const question = document.querySelector("h2");
const answers = document.querySelectorAll(".li");
const next = document.getElementById("next");
const ul = document.querySelector("ul");
const counted = document.querySelector("h3");
const blackDrop = document.querySelector(".black-drop");
const modal = document.querySelector('.modal');
const modalP = document.querySelector("#start-modal-p");
const modalB = document.getElementById("start-modal-but");

let answered = false;
let count = 0;
let correctAnswers = 0


class Quiz{
    constructor(arr){
        this.arr = arr;
        this.init()
    }
    init(){
        answered = true;
        this.show((Math.random() * 10).toFixed(0));
        next.addEventListener("click", () => proba.show((Math.random() * 10).toFixed(0)));
        ul.addEventListener("click", e => {this.checkQuestion(e)});
        modalB.addEventListener("click", this.restart);

    }

    show(randomNumber){
        if(answered === false){
            alert("You need to give answer!");
        }else{
            answered = false;
            answers.forEach(el => el.className = 'li')
            question.innerText = this.arr[randomNumber].question;
            this.arr[randomNumber].wAnswers.forEach((el, i) => {
                answers[i].innerText = el;
            });
            count++;
            this.gameOverCounter();
        }
    }


    
    checkQuestion(e){
        if(e.target.tagName !== "UL" && answered === false){
            const targetEl = this.arr.find((el)=>{
               return el.question === question.textContent;
            })

            if(e.target.textContent === targetEl.cAnswer){
                e.target.classList = 'true';
                answered = true;
                correctAnswers++;
            }else{
                e.target.classList = 'false';
                answered = true;
            }
        }
    }

    gameOverCounter(){
        if(count > 4){
            count = 1;
            blackDrop.classList.add("visible");
            modal.classList.add("visible");
            modalP.innerText = `You had ${correctAnswers} correct answers out of 4!`
                }
        counted.innerText = `${count} of 4`;

    }
    restart(){
        correctAnswers = 0;
        blackDrop.classList.toggle("visible");
        modal.classList.toggle("visible");

    }
    
}
const proba = new Quiz(quiz);
