import UI from "./ui.js"
import User from "./user.js"

const submit = document.querySelector('.submit');
const input = document.querySelector('.input');
const alert = document.querySelector('.error-alert');
const result = document.querySelector('.lookup-result');

submit.addEventListener('click', event => {
    event.preventDefault();
    handleFormSubmission(input.value);
})

async function handleFormSubmission(input) {
    const apiResponse = await fetch(`https://api.github.com/users/${input}`);
    const responseJson = await apiResponse.json();

    // Check to match sure the response went through,
    // otherwise show the error alert.
    if(apiResponse.ok === true) {
        // Create a new User with our obtained information.
        const user = new User(responseJson);

        // Show the result card to the user
        result.hidden = false;

        // Update the UI
        UI.showUserAvatar(user);
        UI.showUserInformation(user);
    } else {
        displayErrorAlert();
    }
}

function displayErrorAlert() {
    alert.hidden = false;
    setTimeout(() => alert.hidden = true, 3000);    
}
