let myBookmarks = [];
const inputEl = document.getElementById("input-el"); 
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
const bookmarksFromLocalStorage = JSON.parse(localStorage.getItem("myBookmarks"));
const tabBtn = document.getElementById("tab-btn");

if (bookmarksFromLocalStorage) {
  myBookmarks = bookmarksFromLocalStorage;
  render(myBookmarks);
}

function render(bookmarks) {
  let listItems = "";

  for (let i = 0; i < bookmarks.length; i++) {
    listItems += `
    <li> 
      <a href='${bookmarks[i]}' target='_blank'>
      ${bookmarks[i]}
      </a>
    </li>
    `;
  }

  ulEl.innerHTML = listItems;
};

inputBtn.addEventListener("click", function() {
  myBookmarks.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myBookmarks", JSON.stringify(myBookmarks));
  console.log(localStorage.getItem("myBookmarks"));
  render(myBookmarks);
});

tabBtn.addEventListener("click", function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    myBookmarks.push(tabs[0].url);
    localStorage.setItem("myBookmarks", JSON.stringify(myBookmarks));
    render(myBookmarks);
  })


})

deleteBtn.addEventListener("dblclick", function() {
  localStorage.clear();
  myBookmarks = [];
  render(myBookmarks);
})





/*function saveLead() {
  inputBtn.addEventListener("click", function() {
    console.log("Button clicked")
  })
}*/