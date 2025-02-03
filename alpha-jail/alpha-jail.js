// left side, "free world"
const outside = document.createElement("div");
outside.classList.add("outside", "zone");

// right side, "jail"
const inside = document.createElement("div");
inside.classList.add("inside", "zone");

document.body.style.overflow = "hidden";
document.body.append(outside, inside);

// for keeping track of current character
let currentChar = null;
let inJail = false;
let lastCursorPosX = 0;
let lastCursorPosY = 0;

// stores mouse position for keyup listener
outside.addEventListener("mousemove", (e) => {
    inJail = false;
    lastCursorPosX = e.clientX;
    lastCursorPosY = e.clientY;
});

// specially checking if movement in the inside class
inside.addEventListener("mousemove", (e) => {
    inJail = true;
    lastCursorPosX = e.clientX;
    lastCursorPosY = e.clientY;
});

// keyboard events
document.addEventListener("keyup", (e) => {
    if (e.key >= "a" && e.key <= "z") {
        // if already current character exist then remove follow class
        if (currentChar) {
            currentChar.classList.remove("follow");
        }
        const character = document.createElement("div");
        character.classList.add("character", "follow");
        currentChar = character;
        currentChar.textContent = e.key;
        currentChar.style.backgroundColor = "white";
        document.body.append(currentChar);
        // adds last stored mouse position to character, cursor points character center point
        currentChar.style.left = `${lastCursorPosX - currentChar.offsetWidth / 2}px`;
        currentChar.style.top = `${lastCursorPosY - currentChar.offsetHeight / 2}px`;
        if (inJail) {
            character.classList.add("trapped");
            currentChar.style.backgroundColor = "var(--orange)";
        } else {
            currentChar.style.backgroundColor = "white";
        }
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
        const rect = inside.getBoundingClientRect();
        const charWidth = currentChar.offsetWidth / 2;
        const charHeight = currentChar.offsetHeight / 2;

        let constrainedX = Math.max(rect.left + charWidth, Math.min(pointer.clientX, rect.right - charWidth));
        let constrainedY = Math.max(rect.top + charHeight, Math.min(pointer.clientY, rect.bottom - charHeight));

        currentChar.style.left = `${constrainedX - charWidth}px`;
        currentChar.style.top = `${constrainedY - charHeight}px`;
        currentChar.style.backgroundColor = "var(--orange)";
        currentChar.classList.add("trapped");
    }
});


// listens mouse movements in the outside class
outside.addEventListener("mousemove", (pointer) => {
    if (currentChar && currentChar.classList.contains("follow")) {
    // center of the character follows the position of the cursor
    currentChar.style.left = `${pointer.clientX - currentChar.offsetWidth / 2}px`;
    currentChar.style.top = `${pointer.clientY - currentChar.offsetHeight / 2}px`;
    currentChar.style.backgroundColor = "white";
    }
});

// if pointer with character leaves inside class then removes follow class and no more follows the pointer.
inside.addEventListener("mouseleave", () => {
    if (currentChar && currentChar.classList.contains("follow")) {
    currentChar.classList.remove("follow");
    }
});