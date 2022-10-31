// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"







// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:

// I need to first think of what structure I will use. I am thinking a function w/ conditionals, that way I can get different answers depending on the degree its at; below, at, or above boiling point.

// I also need to decide on what declaration I will give our variable (const), most likely i'll use "boilingPoint" to keep it on topic.

// For the parameter I will be using "temp" to also keep this relative. 

// In the curly braces/code block is where my conditional will go in for below, at, or above boiling point.

// I am going to put string interpolation so it will match the expected outputs layout of the parameter and the "is below boiling point" etc.

// Next I have to give it a shot and call on the function with console.log

const boilingPoint = (temp) => {
    if (temp < 212)
        return `${temp} F° is below boiling point`
    else if (temp > 212)
        return `${temp} F° is above boiling point`
    else if (temp == 212) 
        return `${temp} F° is at boiling point`
    else 
       return '---.--'
}
console.log (boilingPoint ())

//I had to play around in line 42 and finally made it == (loose equality) so my else statement would return '---.--' so it would look like a cooking thermometer before checking a temperature. Leaving it = weirdly gave me '212 F° is at boiling point'. Making it a === (strict equality) is also now working, it wasn't working, I forgot in what circumstance it wasn't working... weird 

//Had to Google the '°' symbol to make it look fancy. (option + shift + 8)


const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"











// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:

//I am gonna see if I can somehow use a accessor for this.
// First I need to create a variable with 'var'.
// Next for the variable I need a name, probably 'padresWorldSeriesRuns'.
// Then stick both const together so I can just call upon my var
// Lastly all I should need is .length property 




const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

var padresWorldSeriesRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(padresWorldSeriesRuns.length)

//Found concat is exactly what I needed
//My theory worked! Easy peasy











// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:

// When I saw reverse, I instantly thought of some array mutator or accessor must do the trick.
// I will have to do var again for variable delcaration.
// I am going to need something like reverse (did not work).

const currentCohort = "Golf 2022"
// Expected output: "2202 floG"
 
const cohortReversed = currentCohort
    .split(``)
    .reverse()
    .join(``)

console.log(cohortReversed)

// Had to look this up, needed a combination mutators and accessors. Looks easy now but its kinda insane.









// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:
// First thing that I know I will need and use is .lastIndexOf()
// I decided thats all I needed, and it worked. Sometimes its not as hard as you think and I really need to practice that more often.
// So I called upon myNumbers and added accessor .lastIndexOf and targeted number 42 and 10

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

console.log(myNumbers.lastIndexOf(42))

console.log(myNumbers.lastIndexOf(10))









// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:

//I will need another accessor for this array
//I will need .sort()
// Going to need an argument since its numbers not strings of words

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

sanDiegoSummerTemperatures.sort((a, b) => b - a)

sanDiegoWinterTemperatures.sort((a, b) => b - a)



console.log(sanDiegoWinterTemperatures);

console.log(sanDiegoSummerTemperatures);

// I used the sort() mutator and made it b - a so it would sort from greatest to least instead

