const poemContainer = document.getElementById("poems");
const sidebar = document.getElementById("poem-list");

if (!location.hash) {
  location.hash = 0;
}

poems.forEach((poem, i) => {
  const poemDiv = document.createElement("div");
  poemDiv.classList.add(`${i}`, "selectable", "poem")

  // create header
  const header = document.createElement("h2");
  header.innerText = poem.title;
  poemDiv.appendChild(header);

  // create content
  const poemContent = createTelescopicTextFromBulletedList(poem.content, {
    htmlContainerTag: "div",
    specialCharacters: {
      "^> (.*)$": (lineText) => {
        const el = document.createElement("blockquote");
        const span = document.createElement("span");
        span.appendChild(document.createTextNode(lineText));
        el.appendChild(span);
        return el;
      },
      "---": () => {
        const el = document.createElement("hr");
        el.classList.add("spacer");
        return el;
      }
    }
  });
  poemDiv.appendChild(poemContent);

  // create signoff
  const signoff = document.createElement("p");
  signoff.innerHTML = `&mdash; ${poem.author}`;
  poemDiv.appendChild(signoff);

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

  if (i === parseInt(location.hash.substring(1))) {
    poemDiv.classList.add("active");
    entry.classList.add("active");
  }

  entry.addEventListener("click", () => {
    // clear old
    const old = document.getElementsByClassName("selectable");
    for (const o of old) {
      o.classList.remove("active");
    }

    // set current
    poemDiv.classList.add("active");
    entry.classList.add("active");
    location.hash = i;
  });

  poemContainer.appendChild(poemDiv);
});
