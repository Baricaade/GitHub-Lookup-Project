import UI from './ui.js';

const submit = document.querySelector('.submit');
const input = document.querySelector('input');
const alert = document.querySelector('.error-alert')

submit.addEventListener('click', event => {
    event.preventDefault();
    handleFormSubmission(input.value);
});

async function handleFormSubmission(username) {
    const apiResponse = await fetch(`https://api.github.com/users/${username}`);
    const data = await apiResponse.json();

    if(apiResponse.ok === true) {
        UI.updateUserInformation(data);
        UI.updateUserAvatar(data.avatar_url);
    } else {
        displayErrorAlert();
    }
}

function displayErrorAlert() {
    alert.hidden = false;
    setTimeout(() => alert.hidden = true, 3000);
}