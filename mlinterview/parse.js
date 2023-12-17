let parser = new RSSParser();
parser.parseURL('https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml', function(err, feed) {
  if (err) throw err;
  for (let i = 0; i < 3; i++) {
    const entry = feed.items[i];
    printPost(item);
  }
});

function printPost(entry) {
  article = document.createElement("article");

  link = document.createElement("a");
  link.setAttribute("href", entry.link);
  link.setAttribute("target", "_blank");

  h4 = document.createElement("h4");
  h4.innerText = entry.title;

  link.appendChild(h4);
  article.appendChild(link);

  blogs = document.getElementById('blog-posts');
  blogs.appendChild(article);
}