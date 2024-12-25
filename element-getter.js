function getFirstElement (input) {
    if (Array.isArray(input)) {
        return input[0];
    }
    else if (typeof input === 'string' ) {
        return input.charAt(0);
    }
    else {
        return null;
    }
}

function getLastElement (input) {
    if (Array.isArray(input)) {
        return input[input.length-1];
    }
    else if (input === 'string') {
        return input.charAt(input.length-1);
    }
    else {
        return null;
    }
}

function getElementByIndex (input, index) {
    if (Array.isArray(input)) {
        return input[index];
    }
    else if (input === 'string') {
        return input.charAt(index);
    }
    else {
        return null;
    }
}