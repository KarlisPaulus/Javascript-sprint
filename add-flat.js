function sumNestedArray (input){
    const flat = input.flat(Infinity);
    let result = 0;
    for(const i of flat) {
        if (Number.isInteger(i)) {
            result += i;
        }
    }
    return result;
}
//console.log(sumNestedArray([1, 2, [3, 'cat', 4, [5, 6]]]))