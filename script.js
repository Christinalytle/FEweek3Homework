//1.Create an array called ages values = 3, 9, 23, 64, 2, 8, 28, 93
//1a. subtract the first element from the value in the last element
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
//1b.add a new age to your array to ensure it's dynamic
ages.push(100);   
let firstAge = ages[0];
let lastAge = ages[ages.length-1];
console.log(lastAge - firstAge);

//1c. use loop to iterate through and calculate the average age
console.log("1c"); 
var total = 0;
for (let i = 0; i < ages.length; i++) {
    total += ages[i];  
} console.log(total/ages.length); 


//2.Create an array called names, values: "Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"
//2a. use loop to calculate average number of letters per name
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]; 
var totalCharacters = 0; 
for (i=0; i<names.length; i++) {
    let eachName = names[i]; 
    totalCharacters = totalCharacters + eachName.length; 
    averageCharacters = totalCharacters/names.length
} console.log(averageCharacters); 


//2b. Use a loop to iterate through the array and concatenate all the names with spaces and commas
var listOfNames = ""; 
for (name of names) {
    listOfNames = names.toString(); 
    console.log(listOfNames); 
}

//3. How to access the last element of any array? 
let lastNameInArray = names[names.length - 1]; 

//4. How to access the first element of an array?
let firstNameinArray = names[0]; 

//5.Create new array nameLengths, loop to iterate overnames, add the length to each name in nameLengths
let nameLength = names.map(function(element) {
    return element.length; 
}); 
console.log(nameLength); 
    
//6.calculate the sum of nameLengths
var total = 0;
for (let i = 0; i < nameLength.length; i++) {
    total += nameLength[i];  
} console.log(total);

//7. function takes two parameters, and returns the word concatenated to itself
function wordConcatenated (word, number) {
    let finalWord = ""; 
    for (i = 0; i < number; i++) {
        finalWord += word; 
    }
    console.log(finalWord); 
}
wordConcatenated("hello", 4);

//8. Function takes two parameters and returns full name with space
function fullName (firstName, lastName) {
    return firstName + " " + lastName; 
}

console.log(fullName("Christina", "Lytle")); 

//9. Function takes array of number and returns true if sum of all numbers is > 100
var sampleArray = [5, 10, 20, 30, 88]
function sumOverHundred (arr) {
    total = 0; 
    for (i = 0; i < arr.length; i++) {
        number = arr[i]; 
        total += number; 
    }
    return total > 100; 
}

console.log(sumOverHundred(sampleArray)); 

//10. function takes an array of numbers and returns the average
function averageArray (arr) {
    total = 0; 
    for (i = 0; i < arr.length; i++) {
        number = arr[i]; 
        total += number; 
    }
    return total/arr.length; 
}

console.log(averageArray(sampleArray));

//11. Function takes two arrays of numbers and returns true if the average
// of the first array is greater than the average of the second 

function averageOneIsGreaterThanTwo (arrOne, arrTwo) {
if (averageArray(arrOne) > averageArray(arrTwo)) {
    return true; 
} else {
    return false; 
}
}
var sampleArrayTwo = [20, 35, 6, 8, 100, 105]; 
console.log(averageOneIsGreaterThanTwo(sampleArray, sampleArrayTwo)); 

//12. Function willBuyDrink = boolean isHotOutside + number moneyInPocket, return true if hotoutside and if moneyInPocket
//is greater than 10.50
function willBuyDrink (boolean, number) {
    return (boolean == true) && (number > 10.50); 
}

isHotOutside = true; 
moneyInPocket = 9; 
console.log(willBuyDrink(isHotOutside, moneyInPocket)); 

//13. Create a funtion of your own that solves a problem. 
function getMax (array) {
    maxValue = array[0]; 
    for (i = 0; i < array.length; i++) {
        if(array[i] > maxValue) {
            maxValue = array[i]; 
        }
    }
    return maxValue 
}

function getMin (array) {
    minValue = array[0]; 
    for (i = 0; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i]; 
        }
    }
    return minValue; 
}

console.log(getMax(sampleArrayTwo)); 
//I created functions to find the min and max number in an array to know the number range you're working with 