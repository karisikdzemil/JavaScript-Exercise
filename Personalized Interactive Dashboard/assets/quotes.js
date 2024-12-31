const quote = document.querySelector("#quotes-container p");
const author = document.querySelector("h3");
const quoteBtn = document.getElementById("quote-btn");

const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=happiness";
const apiKey = "4Btk7yFMCFwC7U+9OYBHZw==qZWTb36WTO8TJv76";

getQuote();

async function getQuote() {
  fetch(apiUrl, {
    headers: {
      "X-Api-Key": apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
        quote.textContent = data[0].quote;
        author.textContent = data[0].author;
    })
    .catch((error) => console.log(error));
}

quoteBtn.addEventListener("click", getQuote)