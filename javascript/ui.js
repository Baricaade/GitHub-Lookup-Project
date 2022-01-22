export default class UI {
    static updateUserInformation(information) {
        document.querySelector('.information').innerHTML = `
            <ul>
                <li>Name: ${information.name}</li>
                <li>Company: ${information.company}</li>
                <li>Blog: ${information.blog}</li>
                <li>Location: ${information.location}</li>
                <li>Email: ${information.email}</li>
                <li>Bio: ${information.bio}</li>
            </ul>
        `
    }

    static updateUserAvatar(avatarUrl) {
        document.querySelector('.avatar').innerHTML = `<img src="${avatarUrl}"></img>`
    }
}