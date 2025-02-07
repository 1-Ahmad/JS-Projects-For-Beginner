let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let api_url = "https://api.quotable.io/random";
async function getQuote(url) {
  let response = await fetch(url);
  let data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}
getQuote(api_url);
function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "----by" +
      author.innerHTML,
    "Tweet Window",
    "width=600,height=300"
  );
}
