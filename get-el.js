function getElementsByTag (input) {
return document.getElementsByTagName(input);
}

function getElementsByClassName (input) {
    return document.getElementsByClassName(input);
}

function getElementById (id) {
    const byId = document.getElementById(id);
    if (byId) {
        return byId;
    } else {
        return undefined;
    }
}

function getElementsByAttribute (attrName, attrValue = null) {
    let finder;

    if (attrValue !== null) {
        finder = `[${attrName}="${attrValue}"]`;
    } else {
        finder = `[${attrName}]`;
    }
    return document.querySelectorAll(finder);
}