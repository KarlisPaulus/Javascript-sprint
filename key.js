function getValueFromKey (object, key) {
    return object[key];
}

function setValueForKey (object, key) {
    const object2 = { ...object, ...key };
    return object2;
}