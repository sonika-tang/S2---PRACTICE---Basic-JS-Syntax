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
function challenge2(array){
    let reverseArray = [];
    for (let i = array.length - 1; i >= 0; i--){
        reverseArray.push(array[i]);
    }
    return reverseArray;
}

let array = [14,15,16,20];
console.log(challenge2(array));

//Challenge 3
function challenge3(scores){
    let result = 0;
    let avg = 0;
    for (let i = 0; i<scores.length; i++){
        result += scores[i];
    }
    avg = result / scores.length;
    return avg;
}

let scores = [85, 90, 78, 92];
console.log(challenge3(scores))

//Challenge 4
function challenge4(text, char){
    let count = 0;
    if(text.length == 0) return 0;
    for(let i = 0; i<text.length; i++){
        if(text[i] == char){
            count ++;
        }
    }
    return count;
}
let text = "aaa bbb a"
let char = 'a'
console.log(challenge4(text, char));

//Challenge 5
function challenge5(txt){
    if(txt.length == 0){
        return 0;
    }
    let word = [];
    var temp = "";
    for(let i = 0; i<=txt.length; i++){
        if(txt[i] == " "){
            word.push(temp);
            temp = "";
        }
        else{
            temp += txt[i];
        }
    }
    var count = 1;
    for (var i = 0; i < word.length; i++) {
        if (word[i].length != 0)
          count++;
    }
    return count;
}
let txt = "hello world";
console.log(challenge5(txt));

//Challenge 6
function challenge6(votes){
    let countVote = {A: 0, B: 0, C: 0};
    for(let vote of votes){
        countVote[vote] += 1;
    }

    console.log("Vote count:", countVote);

    let winnerVote = Math.max(...Object.values(countVote));
    let winner = [];
    for(let candidate in countVote){
        if(countVote[candidate] === winnerVote){
            winner.push(candidate);
        }
    }

    if(winner.length === 1){
        console.log(winner, "is the winner")
    } else{
        console.log(`It's a tie between: ${winner.join(" and ")}`)
    }
}

let votes = ['A', 'B', 'B', 'C', 'A'];
console.log(challenge6(votes));