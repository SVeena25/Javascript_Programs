// Data Structures and Methods in JavaScript
// Write your code here
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










