// letters
const letterContainer = document.createElement("div");
letterContainer.classList.add("letter-container");
document.body.append(letterContainer);

let previouslySelected = null;
let defaultSelection = null;

for (let i = 97; i <= 122; i++) {
    let letter = document.createElement("div");
    letter.classList.add("letter");

    // by default selects "A"
    if (i === 97) {
    letter.classList.add("selected");
    defaultSelection = letter;
    }
    letterContainer.appendChild(letter);
    
    const char = String.fromCharCode(i);
    letter.id = char;
    letter.textContent = char.toUpperCase();

    // selecting by clicking
    letter.addEventListener("click", () => {
        defaultSelection.classList.remove("selected");
        
        if (previouslySelected) {
            previouslySelected.classList.remove("selected");
        }
        
        letter.classList.add("selected");
        previouslySelected = letter;
    })
}

// button container
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");
document.body.append(buttonContainer);

// previous button
const prevButton = document.createElement("button");
prevButton.id = "prev";
prevButton.textContent = " < ";
buttonContainer.appendChild(prevButton);

prevButton.addEventListener("click", () => {
    let selectedElement = letterContainer.querySelector(".selected");
    if (selectedElement) {
        let selectedCharCode = selectedElement.id.charCodeAt(0);
        if (selectedCharCode === 97) {
            selectedCharCode = 122;
        } else {
            selectedCharCode -= 1;
        }
        const previousLetter = String.fromCharCode(selectedCharCode);
        let nextElement = letterContainer.querySelector(`#${previousLetter}`);

        if (selectedElement) {
            selectedElement.classList.remove("selected");
        } else if (previouslySelected) {
            previouslySelected.classList.remove("selected");
        }

        nextElement.classList.add("selected");
        previouslySelected = nextElement;
    }
});

// next button
const nextButton = document.createElement("button");
nextButton.id = "next";
nextButton.textContent = " > ";
buttonContainer.appendChild(nextButton);

nextButton.addEventListener("click", () => {
    let selectedElement = letterContainer.querySelector(".selected");
    if (selectedElement) {
        let selectedCharCode = selectedElement.id.charCodeAt(0);
        if (selectedCharCode === 122) {
            selectedCharCode = 97;
        } else {
            selectedCharCode += 1;
        }
        const nextLetter = String.fromCharCode(selectedCharCode);
        let previousElement = letterContainer.querySelector(`#${nextLetter}`);

        if (selectedElement) {
            selectedElement.classList.remove("selected");
        } else if (previouslySelected) {
            previouslySelected.classList.remove("selected");
        }

        previousElement.classList.add("selected");
        previouslySelected = previousElement;
    }
});

// decrease font size button
const decreaseButton = document.createElement("button");
decreaseButton.id = "decrease";
decreaseButton.textContent = " - ";
buttonContainer.appendChild(decreaseButton);

decreaseButton.addEventListener("click", () => {
    if (previouslySelected) {
        let currentSize = parseInt(window.getComputedStyle(previouslySelected).fontSize);
        if (currentSize >= 12) {
        previouslySelected.style.fontSize = (currentSize - 2) + "px";
        }
    } else if (defaultSelection) {
        let currentSize = parseInt(window.getComputedStyle(defaultSelection).fontSize);
        if (currentSize >= 12) {
        defaultSelection.style.fontSize = (currentSize - 2) + "px";
        }
    }
});

// increase font size button
const increaseButton = document.createElement("button");
increaseButton.id = "increase";
increaseButton.textContent = " + ";
buttonContainer.appendChild(increaseButton);

increaseButton.addEventListener("click", () => {
    if (previouslySelected) {
        let currentSize = parseInt(window.getComputedStyle(previouslySelected).fontSize);
        if (currentSize <= 24)
        previouslySelected.style.fontSize = (currentSize + 2) + "px";
    } else if (defaultSelection) {
        let currentSize = parseInt(window.getComputedStyle(defaultSelection).fontSize);
        if (currentSize <= 24) {
        defaultSelection.style.fontSize = (currentSize + 2) + "px";
        }
    } 
});