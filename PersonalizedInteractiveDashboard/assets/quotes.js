export async function getQuote(quoteUrl, quoteElement, authorElement) {
  try {
    const response = await fetch(quoteUrl);
    if (!response.ok) {
      throw new Error("Something went wrong! Status: " + response.status);
    }
    const data = await response.json();
    quoteElement.textContent = data.text;
    authorElement.textContent = data.author;
  } catch (error) {
    console.error("Error fetching the quote:", error);
  }
}

  
