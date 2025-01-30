// // Example of JS code, printing on console 
// const courseName = "Web Developement"; 
// console.log("Welcome to " + courseName + "!"); 

// function calculateSum(array) {
//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//        // Add here the calculation logic
//        sum += (i+1);
//     }
//     return sum;
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(calculateSum(arr));

// function myFunction(min, max) {
//     var result = "";
//     for (let number = min; number <= max; number++) {
//       if (number % 2 === 0) {
//         result += number + " - ";
//       }
//     }
//     return result;
//   }
  
function myFunction(min, max) {
    var result = "";
    for (let number = min; number <= max; number++) {
      if (number % 2 === 0) {
        result += number + " - ";
      }
    }
    return result;
  }
  console.log(myFunction(7, 3))  