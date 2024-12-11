const question = document.querySelector("h2");
const answers = document.querySelectorAll(".li");
const next = document.getElementById("next");
const ul = document.querySelector("ul");


class Quiz{
    constructor(arr){
        this.arr = arr;
        this.init()
    }
    init(){
        this.show((Math.random() * 10).toFixed(0));
        next.addEventListener("click", () => proba.show((Math.random() * 10).toFixed(0)));

        ul.addEventListener("click", (e)=>{
            let targetEl;
            if(e.target.tagName === "LI"){
               for(const el of this.arr){
                if(el.question === question.textContent){
                    targetEl = el;
                }
               }

               if(targetEl.cAnswer === e.target.textContent){
                e.target.classList = 'true';
               }else{
                e.target.classList = 'false';
               }

            }
        })
    }
    show(randomNumber){
        question.innerText = this.arr[randomNumber].question;
        this.arr[randomNumber].wAnswers.forEach((el, i) => {
            answers[i].innerText = el;
        });
    }

    // answer(){

    // }
}

const proba = new Quiz(quiz);
ul.addEventListener('click', (el)=>{

});