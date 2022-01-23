const information = document.querySelector('.information');
const avatar = document.querySelector('.avatar');

export default class UI {
    static showUserInformation(user) {
        // Clear any existing content
        information.innerHTML = '';

        // Display the user's metadata
        for(let property in user.metadata) {
            const element = document.createElement('span')
            const text = document.createTextNode(`${property}: ${user.metadata[property]}`);
            element.classList.add('badge', 'bg-primary');
            element.appendChild(text);
            information.appendChild(element);
        }

        // Add an HR tag below our metadata
        const hr = document.createElement('hr');
        information.appendChild(hr);

        // Display the user's information
        for(let property in user) {
            if(property === 'metadata' || property === 'avatarUrl') {
                continue; // ignore user's metadata & avatar
            }

            const element = document.createElement('p');
            const hrElement = document.createElement('hr');
            const text = document.createTextNode(`${property}: ${user[property]}`);
            element.appendChild(text);
            information.appendChild(element);
            information.appendChild(hrElement);
        }
    }

    static showUserAvatar(user) {
        // Clear any existing content
        avatar.innerHTML = ''

        // Add the image
        const img = document.createElement('img');
        img.src = user.avatarUrl;
        avatar.appendChild(img);
    }
}