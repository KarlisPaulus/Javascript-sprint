function filterOutOddNumbers (input) {
    const result = input.filter((input) => input % 2 === 0);
    return result;
}

function filterObjectsByNameLength (input, length) {
    const result = input.filter((input) => input.name.length <= length);
    return result;
}

function compoundFilter (products) {
    const result = products.filter((product) => product.code.length > 5 && 
    !product.category.includes("special") && 
    product.price > 50 && 
    !product.location.includes("Underground"));
    return result;
}

/*
const products = [
    {
      code: "ABC123",
      category: "electronics",
      price: 75,
      location: "Store",
    },
    {
      code: "XYZ456",
      category: "clothing",
      price: 30,
      location: "Mall",
    },
    {
      code: "PQR789",
      category: "special items",
      price: 60,
      location: "Underground",
    },
    {
      code: "LMN012",
      category: "accessories",
      price: 90,
      location: "Street",
    },
  ]
  
  console.log(compoundFilter(products))

//console.log(filterOutOddNumbers([1, 2, 3, 4, 5]))

const objects = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ]
  
  console.log(filterObjectsByNameLength(objects, 5))
  */