/*

Create a script with a function named lowerCaseWords that takes a
mixed array as input. The function will do the following:
- return a promise that is resolved or rejected
- filter the non-strings and lower case the remaining words

*/

const lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr.length === 0 || !Array.isArray(arr)) {
            reject("Array is empty or invalid. Please provide a valid array.");
        }
        else {
            const result = arr
                .filter(item => typeof item === 'string')
                .map(item => item.toLowerCase());
            resolve(result);      
        }
    });
}

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));
