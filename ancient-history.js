function classifyDate (input) {

    const inputDate = new Date(input);
    const yearAgo = new Date();
    const yearFromNow = new Date ();

    if (inputDate < yearAgo.setFullYear(yearAgo.getFullYear() - 1)) {
        return "ancient";
    } else if (inputDate <= Date.now()) {
            return "past";
    } else if (inputDate > yearFromNow.setFullYear(yearFromNow.getFullYear() + 1)) {
        return "distant future";
    } else if (inputDate > Date.now()) {
        return "future";
    } else {
        return "invalid date";
    }
}

//console.log(classifyDate("2024-10-10"))