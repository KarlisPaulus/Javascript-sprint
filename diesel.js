function calculateFines (input) {
    let totalFines = 0;
    const finedCars = [];
    const cars = JSON.parse(input);

    cars.forEach(element => {
        const [make, model, reg, year, fuel] = element; // destructures. assigns elements of the array to variables based on positions 
        let fine = 0;
        if (year < 2000) {
            fine = 20;
        } else if (year < 2015 && fuel === "diesel") {
            fine = 10;
        }

        if (fine > 0) {
            totalFines += fine;
            finedCars.push({reg, year, fuel, fine});   
        }
    });
    return JSON.stringify({totalFines, cars: finedCars});
}

/*
const carData = '[["Toyota", "Camry", "ABC123", 2014, "diesel"], ["Ford", "Focus", "XYZ456", 1999, "petrol"]]'

console.log(calculateFines(carData)) 
*/

// {"totalFines":30,"cars":[{"reg":"ABC123","year":2014,"fuel":"diesel","fine":10},
// {"reg":"XYZ456","year":1999,"fuel":"petrol","fine":20}]}