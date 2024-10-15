const btn = document.getElementById("btn");
const p = document.getElementById("paragraph");

const randomJoke = () =>{
    const num1 = (Math.random() * 20).toFixed(0);
    const num2 = (Math.random() * 20).toFixed(0);
    const findEl = jokes.find((el)=>{
        return el.id == num1;
    })
    // return findEl;
    console.log(num1, findEl)
}

const joke = () =>{
    randomJoke()
}

btn.addEventListener("click", joke);