function sliceFunc(arr, start, end) {
    const startIndex = arr.indexOf(start);
    const endIndex = arr.lastIndexOf(end);
    return arr.slice(startIndex, endIndex + 1);
}
//const numbers = ['ant', 'bison', 'camel', 'duck', 'elephant'];
//console.log(sliceFunc(numbers, 'bison', 'duck'))