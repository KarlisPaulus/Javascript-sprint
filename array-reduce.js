function getTotalFromShoppingBasket (input) {
    // accumulator-object that will hold the final result
    // currentValue-current element in the array
   return input.reduce((accumulator, currentValue) => accumulator + currentValue.price,);
}
/*
const shoppingBasket = [
    { name: "Apple", price: 2.5 },
    { name: "Banana", price: 1.5 },
    { name: "Orange", price: 3 },
    { name: "Mango", price: 4 },
  ]
  
  console.log(getTotalFromShoppingBasket(shoppingBasket))
  */

  function getAverageAge (input) {
    const result = input.reduce((accumulator, currentValue) => accumulator + currentValue.age,);
    const counter = input.reduce((accumulator) => accumulator + 1, 0,);
    return result / counter;
  }

  /*
  const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "David", age: 40 },
  ]
  
  console.log(getAverageAge(people))
  */

function concatenateObjects (input) {
   return input.reduce((accumulator, currentValue) => {     // {} needed for multiple line function body
    // if the key doesn't exist in accumulator then creates new empty array
        if (!accumulator[currentValue.key]) {
            accumulator[currentValue.key] = [];
        }
        // push the current value into the corresponding keys array
        accumulator[currentValue.key].push(currentValue.value);
        return accumulator; // returns accumulator for next iteration
    }, {}); // empty object as initial value
}

/*
const objects = [
    { key: "a", value: 1 },
    { key: "b", value: 2 },
    { key: "a", value: 3 },
    { key: "c", value: 4 },
    { key: "b", value: 5 },
  ]
  
  console.log(concatenateObjects(objects))
  */