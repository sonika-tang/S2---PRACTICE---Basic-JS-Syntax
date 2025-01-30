// Example of JS code, printing on console 
const courseName = "Web Developement"; 
console.log("Welcome to " + courseName + "!"); 

//Calculate Sum
function calculateSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
       // Add here the calculation logic
       sum += (i+1);
    }
    return sum;
}
let arr = [1, 2, 3, 4, 5];
console.log(calculateSum(arr));
  
//Challenge 1
function challenge1(width, height) {
    let rectangleString = '';
    // Your code
    for(let i=0; i<=height; i++){
        for(let j=0; j<=width; j++){
            rectangleString += "*";
        }
        rectangleString += "\n";
    }
    return rectangleString;
}
console.log(challenge1(3, 4))  

//Challenge 2
