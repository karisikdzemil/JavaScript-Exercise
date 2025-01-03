import { getQuote } from './assets/quotes.js';
import { getNews } from './assets/news.js';

// URLs
const newsUrl = "https://google.serper.dev/search?q=apple+inc&apiKey=445cda4e923f475041711e363685a27fcf52ccf0";
const quoteUrl = "https://go-quote.azurewebsites.net/random-quote?format=json";

// DOM elementi
const quote = document.querySelector("#quotes-container p");
const author = document.querySelector("#h3");
const news = document.querySelectorAll(".newsLi");
const note = document.getElementById("note");
const noteBtn = document.querySelector("#notes-form button");
const noteList = document.getElementById("notes-list");
const quoteBtn = document.getElementById("quote-btn");

// Pozivanje funkcija
getQuote(quoteUrl, quote, author);
getNews(newsUrl, news);

// Dugmad i beleške
quoteBtn.addEventListener("click", () => getQuote(quoteUrl, quote, author));

noteBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (note.value === "") {
    return;
  }
  const li = document.createElement("li");
  const button = document.createElement("button");
  li.classList.add("notes-li");
  button.textContent = "X";
  li.textContent = note.value;
  li.append(button);
  noteList.append(li);
  note.value = "";
});

noteList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const li = event.target.closest("li");
    li.remove();
  }
});
