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
* This is a living library of
* shapeshifting
* transforming
  * morphing
    * evolving
* verses., created by
* the <a href="https://verses.xyz">verses community</a>
  * the <a href="https://verses.xyz">verses collective</a>
    * artists, researchers, and technologists of <a href="https://verses.xyz">verses</a>
      * friends who co-exist and co-create together in <a href="https://verses.xyz">verses</a>
* because
* we wanted to explore mediums for
 * we were curious about
   * we were nerd-sniped by
     * we like
* software poetry.
  * software that allows for different kinds of poetry.
    * software that enables different kinds of beauty.
      * poems and art and technology and different combinations thereof.
        * creating beautiful technology.
          * creating beautiful things with beautiful people :)
* <br/>
* <br/>
* <p>These poems&#39;s are written with an open-source <a href="github.com/jackyzha0/telescopic-text/'' > library for representing text</a> that</p>
* <p>changes, morphs, and evolves with the attention of the reader.</p>
* <p>changes, morphs, and evolves with the attention of the reader. This library was originally inspired by the work done around <a href="https://www.telescopictext.org/">telescopic text</a>, text that expands and collapses. This work was done for a very functional reason, allowing writers to display a high-level summary for more context that dynamically appears as the user desires, a form of in-line footnotes. </p>
* <br/>
* <br/>
* <p>But what about text that changes for the sole purpose of changing, or for purely poetic reasons?</p>
  * <p>How does meaning shift as the text changes with engagement?</p>
    * <p>How can the reader create, and choose, their own meaning as they explore in the textual landscape?</p>
      * <p>Most interestingly, how would this new affordance shape what kinds of verses people feel moved to, and able to, write? </p>
* <br/>
* <br/>
* <p>With this experiment, we wanted to explore the uniquely dynamic capability of software, which are hard to replicate in a printed, linear medium, for writing.</p>
* <br/>
* <br/>
* <p>If you&#39;re interested in creating your own, we&#39;ve provided a <a href="https://poems.verses.xyz/test">test bed</a> that leverages normal text editing to create interactive, shapeshifting texts.`;

poemContainer.appendChild(
  createTelescopicTextFromBulletedList(about, { textMode: TextMode.Html })
);
