// controller function:
function handleBtnSubmitClickEvent() {
    makeAlertBoxInvisible();

    let userInput = getUserInput();

    if (isEmpty(userInput)) {
        alert('Input cannot be empty, please try again.')
    } else {
        const revString = reverseString(userInput);
        displayString(revString);
    }
}

// logic functions:
// get user input from the page
function getUserInput() {
    return document.getElementById('userString').value;
}

// validate the string
function isEmpty(stringInput) {
    return stringInput.length === 0 ? true : false;
}

// reverse the string
function reverseString(stringInput) {
    const arr = Array.from(stringInput);
    arr.reverse();

    return arr.join('');
}

// view functions:
// display reversed string to the user
function displayString(stringToDisplay) {
    const alertMessage = document.getElementById('message');
    alertMessage.innerText = `Your reversed string is: ${stringToDisplay}`;

    makeAlertBoxVisible();
}

function makeAlertBoxInvisible() {
    document.getElementById('alert').classList.add('invisible');
}

function makeAlertBoxVisible() {
    document.getElementById('alert').classList.remove('invisible');
}