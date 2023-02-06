// Basic
// ex 1 | Highest value in an array

let array = [1, 7, -3, 9];
let max = array[0]

for (let index of array) {
    if (max < index) {
        max = index;
    }
}
console.log(max);

// ex 2 | Temperature v2.0
let temp = Math.floor(Math.random() * (25 - (-5)) + (-5));
console.log(temp);
if (temp <= 10) {
    console.log("The weather is cold");
    document.getElementById("image").innerHTML = "<img src=https://cdn.pixabay.com/photo/2014/12/02/22/05/snowflakes-554635__340.jpg>"
} else if (temp <= 20) {
    console.log("The weather is moderate")
    document.getElementById("image").innerHTML = "<img src=https://cdn.pixabay.com/photo/2018/04/27/02/29/tree-3353617__340.jpg>"
} else {
    console.log("The weather is hot");
    document.getElementById("image").innerHTML = "<img src=https://media.istockphoto.com/id/176230653/photo/beach-dog.jpg?b=1&s=170667a&w=0&k=20&c=ajot5CSkoBsLIwjAxY0eIKSDJtGpUZomjs4n-9ClAAk=>"
}
// Intermediate
// ex 1 | Compare two numbers
let students = ["Martin", "Thomas", "Klaus", "Maria", "David"]
let grades = [76, 85, 65, 93, 81]
average = 0
for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 60) {
        console.log(average = "F")
    } else if (grades[i] < 70) {
        console.log(average = "D")
    } else if (grades[i] < 80) {
        console.log(average = "C")
    } else if (grades[i] < 90) {
        console.log(average = "B")
    } else {
        console.log(average = "A")
    }
}
// Finally, calculate the class average and output it (e.g. if the class average is 74 points, their average grade will be C).
let arr = [76, 85, 65, 93, 81];
let average1 = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(average1);