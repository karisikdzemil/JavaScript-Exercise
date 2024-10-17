const btn = document.getElementById("btn");
const p = document.getElementById("paragraph");
let i = 0;

const randomJoke = (index) =>{
   const joke = jokes[index];
   return joke;
}

const joke = () =>{
    if(i == 19){
        i = 0;
    }
    p.innerText = ''
    const posalica =  randomJoke(i);
    p.innerText = posalica.joke;
    i++;
}

btn.addEventListener("click", joke);