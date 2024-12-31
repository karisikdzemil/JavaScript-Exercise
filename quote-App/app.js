const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const quoteBtn = document.getElementById("new-quote-button");

const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=happiness";
const apiKey = "4Btk7yFMCFwC7U+9OYBHZw==qZWTb36WTO8TJv76";

async function getQuote(){
    try{
        fetch(apiUrl, {
            method: "GET",
            headers: {
              "X-Api-Key": apiKey,
            },
          })
            .then((response) => response.json())
            .then((data) => {
                quoteText.textContent = data[0].quote;
                quoteAuthor.textContent = data[0].author;
            })
            .catch((error) => console.log(error));
          
          
    }catch(error){
        console.log("Something went wrong!", error);
    }
}
quoteBtn.addEventListener("click", getQuote);
