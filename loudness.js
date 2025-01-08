function makeLouder (input) {
    let result = "";
    for (const i of input) {
        if (i >= 'a' && i <= 'z') {
            result += String.fromCharCode(i.charCodeAt(0) - 'a'.charCodeAt(0) + 'A'.charCodeAt(0));
        } else {
            result += i
        }
    }
    return result;
}

function makeQuieter (input) {
    let result = "";
    for (const i of input) {
        if (i >= 'A' && i <= 'Z') {
            result += String.fromCharCode(i.charCodeAt(0)-'A'.charCodeAt(0)+'a'.charCodeAt(0))
        } else {
            result += i;
        }
    }
    return result;
}

//console.log(makeLouder("tere123"));
//console.log(makeQuieter("TERE1#€"))