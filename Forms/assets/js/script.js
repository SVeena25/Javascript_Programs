document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("my-form");
    form.addEventListener("submit", handleSubmit);

    function handleSubmit(e) {
        e.preventDefault();
        let myForm = e.target;
        console.log(myForm.usernameField.value);

    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Write your code here

    document.querySelectorAll('form').addEventListener('submit', showData);

    function showData(event) {
        event.preventDefault();
        const formData = event.target;
        const message = document.getElementById("message");
        message.innerText = `First Name: ${formData["first-name"].value}, Email: ${formData.email.value}.`;


    }

});
//Prepopulating form fields
document.addEventListener("DOMContentLoaded", function () {
    const user = {
        isLoggedIn: false,
        firstName: 'Alex',
        email: 'alex@example.com'
    };

    if (user.isLoggedIn) {
        form = document.querySelector("form");
        form.fName.value = user.firstName;

    }
});
//runnable2
document.addEventListener("DOMContentLoaded", function () {
    const user = {
        isLoggedIn: true,
        fullName: 'Bilbo Baggins',
        street: 'Bag End, Bagshot Row',
        city: 'Hobbiton',
        county: 'The Shire',
    };

    // write your code here
    if (user.isLoggedIn) {
        const form = document.querySelector("form");
        form.fullName.value = user.fullName;
        form.street.value = user.street;
        form.city.value = user.city;
        form.county.value = user.county;
    }
});
// Validating form data
document.addEventListener("DOMContentLoaded", function () {
    let formElement = document.getElementById('createAccountForm');
    formElement.addEventListener('submit', handleSubmit);

    function handleSubmit(e) {
        e.preventDefault();
        let formData = e.target;
        let firstName = formData.firstNameField.value;
        let age = formData.ageField.value;
        let feedback = document.getElementById("feedback");

        if (age < 16) {
            feedback.innerText = `Sorry ${firstName}, you have to be at least 16 to see this movie`;
        } else {
            feedback.innerText = `You are old enough to watch this movie ${firstName}!`;
        }

        // console.log(typeof(age));
    }
});
// runnable2
document.addEventListener("DOMContentLoaded", function () {
    const validDiscountCode = "DISCOUNT25"

    const form = document.getElementById("discountForm");
    form.addEventListener("submit", handleSubmit);


    function handleSubmit(e) {
        e.preventDefault();
        const formData = e.target;
        const discountCode = formData.discountCode.value;
        const messageElement = document.getElementById('message');
        let total = parseInt(document.getElementById('price').innerText);

        // Write your code here
        if (discountCode) {
            if (discountCode === validDiscountCode) {
                messageElement.innerText = "25% discount applied!";
                total = total * 0.75;
            } else {
                messageElement.innerText = discountCode + " is not a valid discount code";
            }
        }

        document.getElementById("total").innerText = total.toFixed(2);
    }
});
// Form submission
document.addEventListener("DOMContentLoaded", function () {
    let formElement = document.getElementById("name-form");
    formElement.addEventListener('submit', validateFullName);

    function validateFullName(e) {
        e.preventDefault();
        let fullName = e.target.fullName.value;
        let feedbackMessage = document.getElementById("feedback-message");

        if (!fullName.trim().includes(" ")) {
            feedbackMessage.innerText = "Full name must contain at least 2 words. Please try again.";
        } else {
            e.target.submit();
        }
    }
});
// runnable2
document.addEventListener("DOMContentLoaded", function () {
    let formElement = document.getElementById("ticket-form");
    formElement.addEventListener('submit', validateTickets);

    function validateTickets(e) {
        // Complete the function

        let formData = e.target;
        let adultTickets = formData.adultTickets.value;
        let feedbackMessage = document.getElementById("feedback-message");


    }
});
// runnable2
document.addEventListener("DOMContentLoaded", function () {
    let formElement = document.getElementById("ticket-form");
    formElement.addEventListener('submit', validateTickets);

    function validateTickets(e) {
        // Complete the function
        e.preventDefault();
        let formData = e.target;
        let adultTickets = formData.adultTickets.value;
        let feedbackMessage = document.getElementById("feedback-message");

        if (parseInt(adultTickets) === 0) {
            let message = "You must select at least one adult ticket";
            feedbackMessage.innerText = message;
        } else {
            formData.submit();
        }
    }
});
// challenge
document.addEventListener("DOMContentLoaded", function () {
    const user = {
        isLoggedIn: true,
        username: "PARZIVAL",
        password: "oldpassword",
    };


    // Write your code here
    const form = document.getElementById("update-form");

    // Prepopulating the form
    if (user.isLoggedIn) {
        form.username.value = user.username;
    }

    // Creating the Event Listener
    form.addEventListener("submit", handleSubmit);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = e.target;

        const username = formData.username.value;
        const newPassword = formData.newPassword.value;

        const feedback = document.getElementById('feedback');
        let errorMessages = "";

        // form validation
        if (username !== user.username) {
            errorMessages += "<p>You cannot change your username</p>";
        }

        if (user.password === newPassword) {
            errorMessages += "<p>New password cannot be your old password.</p>";
        }

        if (newPassword.length <= 8) {
            errorMessages += "<p>Password must be more than 8 characters long.</p>";
        }

        // Submitting the form
        if (errorMessages.length > 0) {
            // Display any applicable error messages
            feedback.innerHTML = errorMessages;
        } else {
            // Submit the form if all validation checks pass
            formData.submit();
        }
    }
});

//select an element by its id in javascript
document.getElementById("header");
//get value of a text input field with the id of email
document.getElementById("email").value;
//add a click event listener to a button.
document.addEventListener("click", () => {
    console
});
// what does the code below do?
document.getElementById("title").innerHTML = "Welcome to my site!";
//which of the following correctly changes the text of an element with the ID greeting to welcome!
document.getElementById("greeting").innerHTML = "Welcome!";
// output of the following code snippet
let isMember = true;
let price = isMember ? 5 : 10;
console.log(price);
//what will be logged to the console when the following code is executed?
let message = "Hello";

function greet() {
    let message = "Hi";
    console.log(message);
}
greet();
console.log(message);
//which arrow function correctly returns the square of a number x?
const square = x => x * x;
//how would you attach a click event listener to a button element stored in a variable named myButton?
myButton.addEventListener("click", () => {
    // event handler code here
});     
