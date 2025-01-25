const content = document.createElement("div");
content.id = "content";
document.body.append(content);

// paragraph
const paragraph = document.createElement("p");
paragraph.textContent = "code";
content.appendChild(paragraph);

// controls
const controls = document.createElement("div");
controls.classList.add("controls");
document.body.append(controls);

// bold
const bold = document.createElement("button");
bold.id = "bold";
bold.textContent = "B";
controls.appendChild(bold);

let isClicked = false;
bold.addEventListener("click", () => {
    paragraph.classList.toggle("bold");
});

// italic
const italic = document.createElement("button");
italic.id = "italic";
italic.textContent = "I";
controls.appendChild(italic);

italic.addEventListener("click", () => {
    paragraph.classList.toggle("italic");
})

// underline
const underline = document.createElement("button");
underline.id = "underline";
underline.textContent = "U";
controls.appendChild(underline);

underline.addEventListener("click", () => {
    paragraph.classList.toggle("underline");
})

// highlight
const highlight = document.createElement("button");
highlight.id = "highlight";
highlight.textContent = "Highlight";
controls.appendChild(highlight);

highlight.addEventListener("click", () => {
    paragraph.classList.toggle("highlight");
}) 
