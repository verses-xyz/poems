const sidebar = document.getElementById("poem-list");

poems.forEach((poem, i) => {
  // make list entry
  const entry = document.createElement("li");
  entry.classList.add(`${i}`, "selectable", "poem-entry")
  const title = document.createElement("h3");
  title.innerText = poem.title;
  const attr = document.createElement("p");
  attr.innerText = poem.author;
  entry.appendChild(title);
  entry.appendChild(attr);
  sidebar.appendChild(entry);

  entry.addEventListener("click", () => {
    window.location.replace(`/#${i}`)
  });

});

const poemContainer = document.getElementById("about-poem");
poemContainer.appendChild(createTelescopicTextFromBulletedList(`
- We like
- poetry
  - verses :)
`))
