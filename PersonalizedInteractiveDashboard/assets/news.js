export function getNews(newsUrl, newsElements) {
    fetch(newsUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        return response.json();
      })
      .then((data) => {
        newsElements.forEach((el, i) => {
          const h1 = el.querySelector("h1");
          const p = el.querySelector("p");
          const h3 = el.querySelector("h3 a");
          h1.textContent = data.organic[i].title;
          p.textContent = data.organic[i].snippet;
          h3.href = data.organic[i].link;
        });
      })
      .catch((error) => console.log(error));
  }
  