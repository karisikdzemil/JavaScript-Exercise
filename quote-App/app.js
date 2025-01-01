const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const quoteBtn = document.getElementById("new-quote-button");

const apiUrl =
  "https://go-quote.azurewebsites.net/quotes?page=1&page_size=20&format=json";

async function getQuote() {
  try{
    await fetch(apiUrl)
    .then((response) =>  response.json())
    .then((data) => console.log(data));

  }
  catch(error){
    console.log(error);
  }
}
quoteBtn.addEventListener("click", getQuote);
