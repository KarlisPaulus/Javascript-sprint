// left side, "free world"
const outside = document.createElement("div");
outside.classList.add("outside", "zone");

// right side, "jail"
const inside = document.createElement("div");
inside.classList.add("inside", "zone");

document.body.append(outside, inside);

// for keeping track of current character
let currentChar = null;

// keyboard events
document.addEventListener("keyup", (e) => {
    if (e.key >= "a" && e.key <= "z") {
        // if already currentchar exist then remove follow class
        if (currentChar) {
            currentChar.classList.remove("follow");
        }
        const character = document.createElement("div");
        character.classList.add("character", "follow");
        character.textContent = e.key;
        currentChar = character;
        document.body.append(currentChar);
    } else if (e.key === "Escape") {
        // removing all characters
        const removeChars = document.querySelectorAll(".character");
        removeChars.forEach((element) => element.remove());
        currentChar = null; // resets current char to null
    }
});

// listens mouse movements in the inside class
inside.addEventListener("mousemove", (pointer) => {
    if (currentChar && currentChar.classList.contains("follow")) {
    // calculates the center of the character
    const charHalfWidth = currentChar.offsetWidth / 2;  
    const charHalfHeight = currentChar.offsetHeight / 2;
    // center of the character follows the position of the cursor
    currentChar.style.left = `${pointer.clientX - charHalfWidth}px`;
    currentChar.style.top = `${pointer.clientY - charHalfHeight}px`;
    currentChar.style.backgroundColor = "var(--orange)";
    currentChar.classList.add("trapped");
    }
});

// listens mouse movements in the outside class
outside.addEventListener("mousemove", (pointer) => {
    if (currentChar && currentChar.classList.contains("follow")) {
    // calculates the center of the character
    const charHalfWidth = currentChar.offsetWidth / 2;
    const charHalfHeight = currentChar.offsetHeight / 2;
    // center of the character follows the position of the cursor
    currentChar.style.left = `${pointer.clientX - charHalfWidth}px`;
    currentChar.style.top = `${pointer.clientY - charHalfHeight}px`;
    currentChar.style.backgroundColor = "white";
    }
});

// if pointer with character leaves inside class then removes follow class and no more follows the pointer.
inside.addEventListener("mouseleave", () => {
    if (currentChar && currentChar.classList.contains("follow")) {
    currentChar.classList.remove("follow");
    }
})