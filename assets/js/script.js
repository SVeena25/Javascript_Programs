// Data Structures and Methods in JavaScript

const pet = {
    name: "Boomer",
    species: "dog",
    owner: "Ingrid",
    lengthOfStay: 8,
    activities: [
        "cuddling",
        "walking",
        "startling the staff"
    ]
};

let numOfActivities = pet.activities.length;

let favActivity = pet.activities.sort()[numOfActivities - 1];

let speciesCapitalised = pet.species[0].toUpperCase() + pet.species.slice(1);

let stayReport = `Dear ${pet.owner},

${pet.name} stayed at the Paws & Purrfection Palace luxury pet hotel for ${pet.lengthOfStay} days.
While they were with us, we did ${numOfActivities} activities with them.
Their favourite activity was ${favActivity}.

They won ${speciesCapitalised} of the Week while they were with us, and we'd love to have them stay again.

We hope you had a pawsome time while you were away, and you and ${pet.name} will visit us again soon!

Isabella Whiskerwell
Paws & Purrfection Palace`;

console.log(stayReport);
//Write a function called checkValue that takes any value and logs: "The value X is truthy" or "The value X is falsy"

function checkValue(value) {
  if (value) {
    console.log(`The value ${value} is truthy`);
  } else {
    console.log(`The value ${value} is falsy`);
  }
}

checkValue(0);           // The value 0 is falsy
checkValue("hello");     // The value hello is truthy
checkValue(false);       // The value false is falsy
checkValue([]);          // The value  is truthy
checkValue(null);        // The value null is falsy
// Defining and calling functions in JavaScript
function showMessage() {
    console.log('Hello world!');
    console.log('Welcome to your first function!');
}

showMessage();

console.log("End of Program");

// Write your code here
function addTwoAndFive () {
    console.log("This function adds 2 and 5");
    console.log(2 + 5);
}

addTwoAndFive ();


// Functions: Taking $parameters and returning values
function sayHello(firstName) {
    let message = `Hello ${firstName}`;
    console.log(message);
}
sayHello("Ronan");
sayHello("Elisa");

function sumOfTwoNums(num1, num2) {
    console.log(num1+num2);
}

sumOfTwoNums(3,5);

function sayHello(firstName) {
    let message = `Hello ${firstName}`;
    console.log(message);
}

sayHello("Ronan");
sayHello("Elisa");

//write your code here
function logFullName(firstName, lastName){
    console.log("Hello,", firstName);
    console.log(`Your name is: ${lastName}, ${firstName}`);
}
logFullName("Frida", "Kahlo");
logFullName("Barack", "Kahlo");

// Returning results from functions
function addTwo(num1, num2) {
    let total = num1 + num2;
    return total;
    //console.log("Ending the function");
}

let sum = addTwo(3, 5);
console.log(sum);
// Returning results from functions
function createEmailSignOff(firstName, lastName, title, company){
    return `Sincerely,
    ${firstName} ${lastName}
    ${title}
    ${company}`;
}

const myEmailSignOff = createEmailSignOff("Filius", "Charms professor", "Hogwarts");
console.log(myEmailSignOff);

const myEmailSignOff2 = createEmailSignOff("Jo", "Heyndels", "Content Creator", "Code Institute");
console.log(myEmailSignOff2);

// Variable scope in JavaScript
let variableOne = "variableOne is outside the function";

function myAwesomeFunction() {
    let variableTwo = "variableTwo is inside the function";
    console.log(variableTwo);
    // console.log(variableOne);
}

console.log(variableOne);

 myAwesomeFunction();
 console.log(variableTwo);
 //
  // Variable scope in JavaScript
  // Write your code here
let myFavouriteNumber = 7;

function updateFavouriteNumber() {
    myFavouriteNumber = 42;
    const successMessage = "You have updated your favourite number.";
    console.log(successMessage);
}

// Write your code here
// select a meal and drink
function whatsForDinner(){
    const mealOptions = [
        "takeaway",
        "sphagetti bolognese",
        "pizza"
        ];
        
        const chosenMeal = chooseOption(mealOptions);
        
    const drinkOptions = [
            "coke",
            "tea",
            "lemonade"
            ];
    const chosenDrink = chooseOption(drinkOptions);
        
        const message = `Enjoy your ${chosenMeal} and ${chosenDrink}!`;
        console.log(message);
}

whatsForDinner();

function chooseOption(options){
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Write your code here
let oldPassword = "myPassword";
let newPassword = "HelloWorld";
let code = "5678";

// operator and flow control practice
code = Number(code);
console.log(code === 5678);
console.log(oldPassword !== newPassword);
// Write your code here
let myString = "";

if (myString === "JavaScript is powerful!") {
    console.log("Understanding JavaScript unlocks so many possibilities.");
}

console.log("Code Ends");
// Write your code here
let studentName = "Jo Heyndels";

// Write your code here
if (studentName === "Jo Heyndels") {
    console.log(`Welcome, ${studentName}!`);
}

console.log("Student check complete.");
//truthy and falsy values

let participants = 100;

if (participants) {
    console.log("Let's get the party started!");
}
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(112));
//
console.log(Boolean("    ")); 
 console.log(Boolean(-42.247));
 console.log(Boolean([])); 
 console.log(Boolean({
     firstName: "Aml",
     lastName: "Ameen",
 }));
 console.log(Boolean(undefined));
 // if... else statements 
 let password = 1234;

if (password === 1234) {
    console.log("Well done! You entered the correct password");
} else {
    console.log("Please enter your password");
}

console.log("Code Ends");

let productsInStock = true;

if (productsInStock) {
    console.log("Product in stock!");
} else {
    console.log("Product out of stock.");
}

 // Comparison operators

 console.log(21 > 34);
// console.log(21 < 34);
// console.log(21 >= 21);
//Comparison operators
function canRideRollercoaster(heightInCm) {
    let message = "Sorry, you are not tall enough to ride this rollercoaster.";

    // Write your code below
    if (heightInCm > 120) {
        message = "Enjoy the ride!";
    }
// Do not change the code below this line
    console.log(message);
}

canRideRollercoaster(173); // Change the argument to test your code
//Determining truth with logical operators
console.log(true && false);
console.log(true || false);
console.log(!false);

// Determining truth with logical operators
function whatToDo(isWeekend, haveFreeTime) {
    if (isWeekend || haveFreeTime) {
        return "Time for some JavaScript!";
    } else {
        return "Back to the grind.";
    }
}
console.log(whatToDo(true, false));
//Checking another condition with else if
function dressCode(weather) {
    if (weather === "rainy") {
        return "Take an umbrella!";
    } else if (weather === "sunny") {
        return "Wear sunglasses!";
    } else {
        return "Check the weather forecast again!";
    }
}

let clothesChoice = dressCode("sunny");
console.log(clothesChoice);
//Checking another condition with else if
function greeting(time) {
    let greetingMessage = "Time must be a positive integer between 0 and 23 (inclusive).";

    if (0 <= time & time <= 6) {
        greetingMessage = "Good Night!";
    } else if (7 <= time & time <= 11) {
        greetingMessage = "Good Morning!";
    } else if (12 <= time & time <= 18) {
        greetingMessage = "Good Afternoon!";
    } else if (19 <= time & time <= 23) {
        greetingMessage = "Good Evening!";
    }

    return greetingMessage;
}

console.log(greeting(22));
// Nested if… else statements
let user = "Johann";
let emailVerified = false;

if (user === "Johann"){
    if (emailVerified) {
        console.log("Welcome to our website");
    } else {
        console.log("Please verify your email");
    }
} else {
    console.log("You need to be a user to visit this page");
}
// Nested if… else statements
// Write your code here
function whatShouldIDo(weekend, raining) {
    let result = "";
    
    if (weekend) {
        if (raining) {
            result = "Watch a movie.";
        } else {
            result = "Go for a hike.";
        }
    } else {
        result = "Do your homework!";
    }
    
    return result;
}

let toDo = whatShouldIDo(false, true);
console.log(toDo);
// Variable scope in JavaScript - part 2
function checkScope(){
    if (false) {
        var myVar = 10;
        let myLet = 2;
        // console.log("myLet inside the if statement:", myLet);
    }
    
    console.log(myVar);
    console.log(myLet);
}

checkScope();
console.log(myVar);
// switch statements
// Write your code here
function findMonthOfYear(monthNum){
    let month = "";
    switch (monthNum) {
        case 1:
            month = 'January';
            break;
        case 2:
            month = 'February';
            break;
        case 3:
            month = 'March';
            break;
        case 4:
            month = 'April';
            break;
        case 5:
            month = 'May';
            break;
        case 6:
            month = 'June';
            break;
        case 7:
            month = 'July';
            break;
        case 8:
            month = 'August';
            break;
        case 9:
            month = 'September';
            break;
        case 10:
            month = 'October';
            break;
        case 11:
            month = 'November';
            break;
        case 12:
            month = 'December';
            break;
        default:
            month = 'Invalid month number';
    }
    return month;
}

let month = findMonthOfYear(3);
console.log(month);  // March

//Incrementing & decrementing operators
let myNum1 = 5;
let myNum2 = 10;

// prefix
console.log("myNum1", myNum1);
console.log("prefix", ++myNum1);
console.log("myNum1", myNum1);

console.log(); // logs a blank line

// postfix
 console.log("myNum2", myNum2);
 console.log("postfix", myNum2++);
 console.log("myNum2", myNum2);
//Incrementing & decrementing operators

let currentScore = 0;
console.log(currentScore)

// Adjust the current score values below by prefixing or postfixing the increment or decrement operators. 
// The first example has been completed for you.
console.log(++currentScore);
console.log(++currentScore);
console.log(currentScore++);
console.log(currentScore++);
console.log(++currentScore);
console.log(--currentScore);
console.log(currentScore--);
console.log(++currentScore);
// The first example has been completed for you.
console.log(++currentScore);
// console.log(currentScore);
// console.log(currentScore);
// console.log(currentScore);
// console.log(currentScore);
// console.log(currentScore);
// console.log(currentScore);
// console.log(currentScore);

//while loops
let myNumber = 10;

while (myNumber >= 0) {
    console.log(myNumber);
    myNumber--;
}

console.log("And we have lift-off!");
//while loops
let fruits = ['apples', 'oranges', 'bananas', 'lychees', 'cherries'];
let index = 0;

// Write your code here
while (fruits[index] !== 'lychees') {
    console.log(`I love ${fruits[index]}`);
    index++;
}

console.log(`Yuck, I hate ${fruits[index]}!`);
//for loops
console.log('Code starts');

for (let i = 0; i < 4; i++) {
    console.log("i =", i);
}

console.log('Code Ends');
//for loops
// Write your code here
function runCountdown(numTurns) {
    console.log("Starting countdown");

    for (let i = numTurns; i >= 0; i--) {
        console.log(i);
    }

    console.log("And we have lift-off!");
}

runCountdown(10);
//Nested iteration
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let point = [i, j];
        console.log(point);
    }
    console.log("-----");
}
//Nested iteration
// Write your code here
function logTables() {
    for (let i = 1; i <= 3; i++) {
        console.log(`${i} times table`);
        for (let j = 1; j <= 4; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log("----");
    }
}

logTables();
//break & continue
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break;
        // continue;
    }
    console.log(i);
}

console.log("Code Ends");
//break & continue
let myArray = ['John',  7, 'Omar', 'Duc', true, 'Bill'];

for (let i = 0; i < myArray.length; i++) {
    if (typeof myArray[i] === "number") {
        continue;
    } else if (typeof myArray[i] === "boolean") {
        break;
    } else {
        console.log(myArray[i]);
    }
}

console.log("Code Ends");
//Iterating data structures: Arrays
let students = ["Nikita", "Sandeep", "Muammar", "Aaron", "Yoni", "Cliodna"];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
console.log();

 for (let student of students) {
     console.log(student);
 }
//Iterating data structures: Arrays
const numbers = [43, 2, 90, 12, 14];

// Write your code here
for (let number of numbers) {
    console.log(number * 2);
}


for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] / 2;   
}

console.log(numbers);
//Iterating data structures: Objects
const ringbearer = {
    name: "Frodo Baggins",
    age: 50,
    home: "Bag End",
    species: "Hobbit"
};

for (let key in ringbearer) {
    console.log(key);
    
    console.log("-----------");
}
//Iterating data structures: Objects
let players = {
    playerOne: "AECH",
    playerTwo: "Parzival",
    playerThree: "art3mis",
    playerFour: "iRock",
};


// Write your code here
for (let key in players) {
    console.log(key, players[key]);
    players[key] = players[key].toLowerCase() + "@theoasis.com";
}

console.log(players);

function add(a, b){
    return a + b;
}
add(a, b);

//
let ffruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i < ffruits.length; i++) {
    console.log(ffruits[i]);
}
//ternary operator expression
let weather = "raining";
let weatherStatus = weather === "raining" ? "Take an umbrella!" : "Enjoy the sunshine!";
console.log(weatherStatus);
//ternary operator expression
let numApples = 5;
// Write your code here
let appleText = numApples === 1 ? "apple" : "apples";
console.log(`You have ${numApples} ${appleText}.`);
// Arrow functions
const addTwoNums = (numOne, numTwo) => numOne + numTwo;

let result = addTwoNums(5, 6);
console.log(result);

// Write your function here
const introduceMe = (firstName, lastName, age) => `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
console.log(introduceMe("Jane", "Doe", 28));
const circleCircumference = radius => 2 * Math.PI * radius;
console.log(circleCircumference(5));

const multilingualGoodbye = () => {
    let goodbyes = { "auf Wiedersehen": "German", "adiós": "Spanish", "au revoir": "French", "arrivederci": "Italian" };
    let randomIndex = Math.floor(Math.random() * Object.keys(goodbyes).length);
    return goodbyes[randomIndex];
};

const createPersonObject = (firstName, lastName, age) => ({firstName: firstName, lastName: lastName, age: age});
let finn = createPersonObject("Finn", "Mertens", 16);
console.log(finn);
//
const add = (x, y) => {return x + y;};
//which arrow function returns the square of a number using concise syntax?
const square = x => x * x;
//which of the following uses a ternary expression in javascript?
score > 50 ? "pass" : "fail";
//what is the output of the following code snippet?
let age = 18;
let message = age >= 18 ? "Adult." : "Minor.";
console.log(message); // "Adult."
//which statement is true about using ternary expressions in javascript?
//ternary expressions must be used instead of if...else statements.
/* You don't need to understand this code yet
for this challenge just focus on what happens in the preview */
//JavaScript and the browser
function updateButton() {
    let button = document.getElementById("button");
    button.innerText = "You clicked me!";
}

function growCircle() {
    let circle = document.getElementById("circle");
    circle.style.width = "70px";
    circle.style.height = "70px";
    circle.style.backgroundColor = "blue";
}

function addSquare() {
    let squaresParent = document.getElementById("squaresParent");
    let newSquare = document.createElement("div");
    newSquare.className = "square";
    squaresParent.appendChild(newSquare);
}

//JavaScript and the browser
function moveCircleRight() {
    let circle = document.getElementById("circle");
    circle.style.marginLeft = "80px";
}

function showAuthor() {
    let author = document.getElementById("author");
    author.innerText = "- Albert Einstein";
}
//get element by id
// Part 1: The challenge

let headingElement = document.getElementById("page-title");
console.log(headingElement);

let paragraphElement = document.getElementById("my-paragraph");
console.log(paragraphElement);
//Changing HTML content
let myParagraph = document.getElementById('my-paragraph');

 myParagraph.innerText = '<strong>This is my new paragraph</strong>';

 myParagraph.innerHTML = '<strong>This is my newest paragraph</strong>';
//Changing HTML content
function openGift() {
    // Write your code here
    let giftbox = document.getElementById('giftbox');

    giftbox.innerHTML = `<img src="https://codeinstitute.s3.eu-west-1.amazonaws.com/assets/felt-mouse-with-laptop.jpg"
        alt="Gift Image: a small mouse holding a laptop">
    <p>We hope you like it!</p>`;
}
//Changing styling
function changeStyle() {
  const divElement = document.getElementById("my-div");
  divElement.style.backgroundColor = "lightblue";
}
function changeStyles() {
    // Write your code here:
    let divElement = document.getElementById("my-div");
    divElement.style.backgroundColor = "purple";
    divElement.style.color = "white";
    divElement.style.fontSize = "24px";
    divElement.style.fontWeight = "bold";
}
//Accessing and changing the classes of an element
let divElement = document.getElementById("content");

console.log(divElement.classList);
console.log(divElement.classList[1]);

 divElement.classList.add("red-text");
 divElement.classList.remove("larger-text");
 console.log(divElement.classList.value);

 console.log(divElement.classList.contains("active"));
//  Making queries with selectors
let specialItem = document.querySelector(".special-item");
console.log(specialItem);

//Navigating DOM relationships
let listItem = document.getElementById("special-item");

let parentList = listItem.parentElement;
console.log(parentList);
// Adding and removing elements
function addListItem() {
    let list = document.getElementById("my-list");
    let newItem = document.createElement("li");
    newItem.innerText = "New List Item";
    list.appendChild(newItem);
}
//
let facts = [
    {
        title: "Hello World",
        content: "The 'Hello World' program, often the first example in programming tutorials, dates back to the 1970s.",
        imageURL: "https://codeinstitute.s3.eu-west-1.amazonaws.com/assets/EOL-1-hello-world.jpg",
        imageAlt: "Hello World program"
    },
    {
        title: "Python's Naming",
        content: "Python, a popular programming language, was named after 'Monty Python's Flying Circus', a British comedy series, not the snake.",
        imageURL: "https://codeinstitute.s3.eu-west-1.amazonaws.com/assets/EOL-2-python-logo.jpg",
        imageAlt: "Python logo"
    },
    {
        title: "Java and Coffee",
        content: "Java, another famous language, got its name from Java coffee, reflecting the developers' love for coffee.",
        imageURL: "https://codeinstitute.s3.eu-west-1.amazonaws.com/assets/EOL-3-java-logo.jpg",
        imageAlt: "Java logo"
    },
    {
        title: "Bug Origin",
        content: "The first computer 'bug' was an actual moth found in a computer by Grace Hopper in 1947, leading to the use of the term 'bug' in computing.",
        imageURL: "https://codeinstitute.s3.eu-west-1.amazonaws.com/assets/EOL-4-first-bug.jpg",
        imageAlt: "First computer bug"
    },
    {
        title: "First Programmer",
        content: "Ada Lovelace is considered the first programmer for her work on Charles Babbage's Analytical Engine in the mid-1800s.",
        imageURL: "https://codeinstitute.s3.eu-west-1.amazonaws.com/assets/EOL-5-ada-lovelace.jpg",
        imageAlt: "Ada Lovelace"
    },
    {
        title: "Y2K Bug",
        content: "The Y2K bug in 2000 was a major event where computers might have misinterpreted the year 2000 due to date storage formats.",
        imageURL: "https://codeinstitute.s3.eu-west-1.amazonaws.com/assets/EOL-6-y2k-bug.jpg",
        imageAlt: "Y2K bug representation"
    }
];

function addFact() {
    
}

function clearAllFacts() {
    
}
//debugging with devtools
/*
At the start, both the orange and lemon buttons show they have 10 fruits each.
On first clicking, the count goes down by one, and the button shows how many
are left. This keeps going until there are none left; the button then says
"Out of Stock" to let the user know there are no more pieces of that fruit.
At the same time, another button to add more stock becomes visible. Pressing
this restock button brings the count back up to 10, updates the display,
and hides the restock button again.
*/

// Initial counts for the buttons
let orangeCount = 10;
let lemonCount = 10;


/**
 * Function to handle clicking on the orange button
 * Decreases the orange count
 * Updates the button text and visibility of the restock button
 */
function takeAnOrange() {
    if (orangeCount > 0) {
        orangeCount--;
        updateOrangeButtonText();
        toggleRestockButtonVisibility('restock-orange', orangeCount);
    }
}

/**
 * Updates the text displayed on the orange button
 * Shows the current count of oranges or 'Out of Stock' if none are left
 */
function updateOrangeButtonText() {
    let button = document.getElementById('orange');
    if (orangeCount > 0) {
        button.innerText = `${orangeCount} Oranges Left`;
    } else {
        button.innerText = 'Out of Stock';
    }
}

function restockOranges() {
    orangeCount = 10;
    toggleRestockButtonVisibility('restock-orange', orangeCount);
}

/**
 * Function to handle clicking on the lemon button
 * Decreases the lemon count and updates the button text and visibility of the restock button
 */
function takeALemon() {
    if (lemonCount > 0) {
        lemonCount--;
        updateLemonButtonText();
        toggleRestockButtonVisibility('restock-lemon', lemonCount);
    }
}

/**
 * Updates the text displayed on the lemon button
 * Shows the current count of lemons or 'Out of Stock' if none are left
 */
function updateLemonButtonText() {
    let button = document.getElementById('lemon');
    if (lemonCount > 0) {
        button.innerText = `${lemonCount} Lemons Left`;
    } else {
        button.innerText = 'Out of Stock';
    }
}

function restockLemons() {
    lemonCount = 10;
    updateLemonButtonText();
    toggleRestockButtonVisibility('restock-lemon', lemonCount);
}

/**
 * Toggles the visibility of the restock button based on the fruit count
 * The restock button is only shown when the count is 0 (out of stock)
 */
function toggleRestockButtonVisibility(buttonId, count) {
    let button = document.getElementById(buttonId);
    if (count === 0) {
        button.classList.add('hidden');
    } else {
        button.classList.remove('hidden');
    }
}


toggleRestockButtonVisibility('restock-orange', orangeCount);
toggleRestockButtonVisibility('restock-lemon', lemonCount);

