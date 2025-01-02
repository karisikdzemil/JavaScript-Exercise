const news = document.querySelectorAll(".newsLi");

const url = "https://google.serper.dev/search?q=apple+inc&apiKey=445cda4e923f475041711e363685a27fcf52ccf0";

getNews();

function getNews(){

        fetch(url).then(response =>{
            if(!response.ok){
                throw new Error("Something went wrong!");
            }
            return response.json();
        })
        .then(data => {
            console.log(data.organic[0])
            news.forEach((el, i) => {
                const h1 = el.querySelector("h1");
                const p = el.querySelector("p");
                const h3 = el.querySelector("h3 a");
                h1.textContent = data.organic[i].title;
                p.textContent  = data.organic[i].snippet;
                h3.href = data.organic[i].link;
                console.log(h3)
                
            })
        }
        )
        .catch(error => console.log(error))
  
}