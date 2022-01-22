export default class UI {
    static showUserInformation(user) {
        document.querySelector('.information').innerHTML = `
            <span class="badge bg-primary">Repos: ${user.repos}</span>
            <span class="badge bg-success">Gists: ${user.gists}</span>
            <span class="badge bg-info">Followers: ${user.followers}</span>
            <span class="badge bg-secondary">Following: ${user.following}</span>
            <hr>
            <p><strong>Name:</strong> ${user.name}</p>
            <hr>
            <p><strong>Location:</strong> ${user.location}</p>
            <hr>
            <p><strong>Bio:</strong> ${user.bio}</p>
            <hr>
            <p><strong>Company:</strong> ${user.company}</p>
            <hr>
            <p><strong>Email:</strong> ${user.email}</p>
        `
    }

    static showUserAvatar(user) {
        document.querySelector('.avatar').innerHTML = `<img src="${user.avatarUrl}"></img>`
    }
}