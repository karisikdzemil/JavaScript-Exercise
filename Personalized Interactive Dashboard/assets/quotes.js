const quote = document.querySelector("#quotes-container p");
const author = document.querySelector("h3");
const quoteBtn = document.getElementById("quote-btn");

const quoteUrl = "https://go-quote.azurewebsites.net/random-quote?format=json";
// const apiKey = "4Btk7yFMCFwC7U+9OYBHZw==qZWTb36WTO8TJv76";

getQuote();

async function getQuote() {
    try {
      const response = await fetch(quoteUrl);
      if (!response.ok) {
        throw new Error("Something went wrong! Status: " + response.status);
      }
      const data = await response.json();
      quote.textContent = data.text;
      author.textContent = data.author;
      console.log(data)
    } catch (error) {
      console.error("Error fetching the quote:", error);
    }
  }
  

quoteBtn.addEventListener("click", getQuote)