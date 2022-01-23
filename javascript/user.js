export default class User {
    // Sort out irrelevant information.
    constructor(userJson) {
        this.name = userJson.name;
        this.company = userJson.company;
        this.bio = userJson.bio;
        this.email = userJson.email;
        this.location = userJson.location;
        this.avatarUrl = userJson.avatar_url;
        this.metadata = {
            repos: userJson.public_repos,
            gists: userJson.public_gists,
            followers: userJson.followers,
            following: userJson.following
        }
    }
}