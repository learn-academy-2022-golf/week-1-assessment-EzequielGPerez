// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: .push() is a mutator that will add whatever is in the arguement to the end of the array so indigo in this case will end up after daffodil. I think it will list all of the strings in order with indigo added.

// b) Verify and explain: It actually gave me a index value of how many are in the array. It tricked me. What you would need to get them all written out is console.log(colors) after the first console.log 

// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: It will tell me how many elements are in the array so 10

// b) Verify and explain: So in the syllabus it says it adds them plus 1 so pretty much the same thing I was thinking 

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: I am not too sure. If I had to guess it'll give us the 4th index value back so 'o'. 

// b) Verify and explain: So this is what is called accessing elements. We target the element depending on what index it is on and calling upon it will give us whatever element is in that index. If there were other strings then each string is given an index not each element. 

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: This one is kinda weird, never seen this done so my guess would be that we are going to be given back "ruby" as we are calling on languages targeting index and index = 1 so index value 1 ??? 

// b) Verify and explain: Okay my guess was correct then lol 

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: Should all caps the whole array
// b) Verify and explain: After doing some research, arrays don't support .toUpperCase (kinda sucky). 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: a logical guess would be string 4

// b) Verify and explain: typeof does return a kind of data type or object but what happened here is since datatypes.length turns out to equal the index number (4), typeof read the number 4 and said "oh thats a number so I'll output 'number'".