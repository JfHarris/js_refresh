// https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml

const RSS_URL = `https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml`;

fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    //items.forEach(el => {
      for (let i = 0; i < Math.min(3, items.length); i++) {
        const el = items[i];
        html += `
          <article>
            <h2>
            ${el.querySelector("title").innerHTML}
            </h2>
            <p>
              <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
                ${el.querySelector("description").innerHTML}
              </a>
            </p>
          </article>
        `;
    };
    document.body.insertAdjacentHTML("beforeend", html);
  });

  /*const parent = document.getElementById("newsItem").getElementsByTagName("section")[0];
  let childrenToRemove = parent.getElementsByTagName("article")[0];
  parent.removeChild(childrenToRemove);
*/
