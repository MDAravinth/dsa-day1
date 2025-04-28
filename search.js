/////////////////////////////////  SEARCHING ALGOTIHMS         ////////////////////////////////////////////////


/////////////////////////           LINEAR SEARCH                        ////////////////////////////////

let input = [12, 34, 50, 40, 37, 66, 77, 45, 39, 75, 76]

function linear(array, target) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }
    return -1
}

console.log(linear(input, 39))
console.log(linear(input, 42))
console.log(linear(input, 76))
console.log(linear(input, 66))



//////////////////////////////////////     BINARY SEARCH                   ////////////////////////////////////



function binary(array, target) {

    if (array.length === 0) {
        return -1
    }

    let start = 0;
    let end = array.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (target === array[mid]) {
            return mid
        };
        if (target < array[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1
        }
    }
    return -1
}

console.log(binary(input, 76))