function printPrettyDate (input) {
    const inputDate = new Date(input);
    const dayNumber = inputDate.getDay();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = dayNames[dayNumber];
    const monthNumber = inputDate.getMonth();
    const monthNames = ["January", "February", "March", "May", "April", "June", "July", "August", "September", "October", "November", "Decemeber"];
    const month = monthNames[monthNumber];
    const date = inputDate.getDate();
    const year = inputDate.getFullYear();
    let hours = inputDate.getHours();
    const minutes = inputDate.getMinutes();
    const seconds = inputDate.getSeconds();
    let amOrPm = "AM";
    if (hours >= 12) {
        amOrPm = "PM";
    }
    hours = hours % 12;
    if (hours === 0) {
        hours = 12;
    }
    
    const result = ("Today is " + day + ", " + month + " " + date + ", " + year + ", " + "and the time is "
         + hours + ":" + minutes + ":" + seconds + " " + amOrPm);
    return result;
}
console.log(printPrettyDate("2025-10-10T12:00:00"))