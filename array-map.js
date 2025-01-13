function convert2DArrayToObjectArray (input) {
    const result = input.map(([key, value]) => ({[key]: value}));
    return result;
    // input.map(([key, value]) to destructure each array.
    // ({[key]: value})) to create an object
}

/*
const data = [
    ["name", "Alice"],
    ["age", 30],
    ["city", "New York"],
  ];
  
  console.log(convert2DArrayToObjectArray(data))
  */

  function convertArrayOfObjectsToStrings (input) {
    return input.map(object => {
        return `Name: ${object.name}, Age: ${object.age}, City: ${object.city}`; 
    });
  }

  /*
  const objects = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 25, city: "Los Angeles" },
  ]
  
  console.log(convertArrayOfObjectsToStrings(objects))
  */

function concatenateStrings (input, length) {
    const result = input.map(string => {
        if (string.length > length) {
            return string.slice(0, length) + "...";
        } else {
            return string;
        }
    })
    return result;
}

/*
const strings = ["apple", "banana", "kiwi", "orange", "pineapple"];

console.log(concatenateStrings(strings, 5))
*/