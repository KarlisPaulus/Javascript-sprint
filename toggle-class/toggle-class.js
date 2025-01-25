const content = document.createElement("div");
content.id = "content";
document.body.append(content);

const code = document.createElement("p");
code.textContent = "code";
content.appendChild(code);

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
    code.classList.toggle("bold");
});

// italic
const italic = document.createElement("button");
italic.id = "italic";
italic.textContent = "I";
controls.appendChild(italic);

// underline
const underline = document.createElement("button");
underline.id = "underline";
underline.textContent = "U";
controls.appendChild(underline);

// highlight
const highlight = document.createElement("button");
highlight.id = "highlight";
highlight.textContent = "Highlight";
controls.appendChild(highlight);
