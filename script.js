let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = ""; // To store the result
let arr = Array.from(buttons); // To run forEach loop

// Function to handle button press
function handleButtonPress(buttonValue) {
    if (buttonValue === '=') {
        string = eval(string); // For evaluation of string
        input.value = string; // To show the value of the string in input box
    } else if (buttonValue === 'AC') {
        string = ""; // To clear the string
        input.value = string;
    } else if (buttonValue === 'C') {
        string = string.slice(0, -1); // To remove the last character from the string
        input.value = string;
    } else if (buttonValue === '%') {
        string = string + '/100';
        input.value = string;
    } else if (buttonValue === '00') {
        // If the string is empty or already "0", add only one "0"
        if (string === "" || string === "0") {
            string = "0";
        } else {
            string += "00"; // Otherwise, add "00"
        }
        input.value = string;
    } else {
        // If the button is not equal, add it to the string
        if (buttonValue === '0' && string === '0') {
            // Do nothing if the input is '0' and string is already '0'
            return;
        } else if (buttonValue >= '1' && buttonValue <= '9' && string === '0') {
            // Replace the initial '0' with the digit
            string = buttonValue;
        } else {
            string += buttonValue;
        }
        input.value = string;
    }
}

// Event listeners for button clicks
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        handleButtonPress(e.target.innerHTML);
    });
});

// Event listener for keyboard input
document.addEventListener('keydown', (e) => {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '=', 'Enter', 'Backspace', 'Delete', '.'];

    if (allowedKeys.includes(e.key)) {
        e.preventDefault(); // Prevent default actions (like scrolling for arrow keys)
        if (e.key === 'Enter' || e.key === '=') {
            handleButtonPress('=');
        } else if (e.key === 'Backspace') {
            handleButtonPress('C');
        } else if (e.key === 'Delete') {
            handleButtonPress('AC');
        } else {
            handleButtonPress(e.key);
        }
    }
});
