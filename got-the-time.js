function printPrettyDate (input) {
    const inputDate = new Date(input);
    const dayNumber = inputDate.getUTCDay();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = dayNames[dayNumber];
    const monthNumber = inputDate.getUTCMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber"];
    const month = monthNames[monthNumber];
    const date = inputDate.getUTCDate();
    const year = inputDate.getUTCFullYear();
    let hours = inputDate.getUTCHours();
    const minutes = inputDate.getUTCMinutes().toString().padStart(2, '0');
    const seconds = inputDate.getUTCSeconds().toString().padStart(2, '0');
    let amOrPm = "AM";
    if (hours >= 12) {
        amOrPm = "PM";
    }
    hours = hours % 12;
    if (hours === 0) {
        hours = 12;
    }
    const paddedHours = hours.toString().toString().padStart(2, '0')
    const result = `Today is ${day}, ${month} ${date}, ${year}, and the time is ${paddedHours}:${minutes}:${seconds} ${amOrPm}.`;
    console.log(result);
}
//console.log(printPrettyDate("1940-06-06T05:06:13.723Z"))