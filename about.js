const sidebar = document.getElementById("poem-list");

poems.forEach((poem, i) => {
  // make list entry
  const entry = document.createElement("li");
  entry.classList.add(`${i}`, "selectable", "poem-entry");
  const title = document.createElement("h3");
  title.innerText = poem.title;
  entry.appendChild(title);
  sidebar.appendChild(entry);

  entry.addEventListener("click", () => {
    window.location.replace(`/#${i}`);
  });
});

const poemContainer = document.getElementById("about-poem");
const about = `
* This website is a gallery of 
* shapeshifting 
	* transforming
		* morphing
			* evolving
* verses (poems, stories, letters, etc.), that play with creating a 
* <a href="https://pluriverse.world/">pluriverse</a> of worlds
	* pluriverse, explicitly <i>not</i> a multiverse, of worlds
* within a single textual artifact, created and curated by 
* the <a href="https://verses.xyz">verses community</a>
	* the <a href="https://verses.xyz">verses</a> collective
		* artists, researchers, and technologists of <a href="https://verses.xyz">verses</a>
			* friends who vibe together in <a href="https://verses.xyz">verses</a>
* because 
* we wanted to explore mediums for
  * we were curious about
    * we were nerd-sniped by
      * we like
* software poetry.
  * software poetry and dynamic art.
    * software poetry and dynamic art and beautiful technology.
      * poems and art and technology and what they look like together.
        * creating beautiful technology.
          * building cool things with fun people :)
* <br/>
* <br/>
* <p>It&#39;s built on top of an open-source <a href="github.com/jackyzha0/telescopic-text/">library for creating transforming text</a>, text that changes, morphs, evolves. With all the new capabilities and mechanics that technology has given us, we still overwhelmingly see it used for utility and functional value. This library was originally inspired by the work done around <a href="https://www.telescopictext.org/">telescopic text</a>, text that expands and collapses. This work was done for a very functional reason, allowing writers to display a high-level summary for more context that dynamically appears as the user desires, a form of in-line footnotes. </p>
* <br/>
* <br/>
* <p>But what about text that changes for the sole purpose of changing? How does meaning shift as the text changes and how can the reader create their own meaning as they explore these crevices in the textual landscape?</p>
* <br/>
* <br/>
* <p>With this gallery, we wanted to highlight the dynamic capabilities of software that are hard to replicate in a physical medium for creating stories and poems and literary art. </p>
* <br/>
* <br/>
* <p>If you&#39;re interested in creating your own, we&#39;ve provided a <a href="https://poems.verses.xyz/test">test bed</a> that leverages normal text editing to create interactive, shapeshifting texts. If you would like to submit your poem to the verses community, please let us know!</p>`;

poemContainer.appendChild(
  createTelescopicTextFromBulletedList(about, { textMode: TextMode.Html })
);
