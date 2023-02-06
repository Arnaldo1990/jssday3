// Exercise 1 (Basic)

let array = [1, 7, -3, 9];
let max = array[0]

for (let index of array) {
    if (max < index) {
        max = index;
    }
}
console.log(max);