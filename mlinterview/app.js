// https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml

const RSS_URL = `https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml`;

fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    //items.forEach(el => { uncomment this and comment out for loop initialization below to only get all results
      for (let i = 0; i < Math.min(3, items.length); i++) {
        const el = items[i];
        html += `
          <article>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png">
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
    //document.body.insertAdjacentHTML("beforeend", html); removed to correctly place news items in bottom section
    const bottomSection = document.querySelector('.news');
    if (bottomSection) {
        bottomSection.insertAdjacentHTML("beforeend", html);
    }
  });
  /*
  I did this to limit the returned articles.
  const parent = document.getElementById("newsItem").getElementsByTagName("section")[0];
  let childrenToRemove = parent.getElementsByTagName("article")[0];
  parent.removeChild(childrenToRemove);
  */
