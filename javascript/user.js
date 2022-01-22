export default class User {
    // Sort out irrelevant information.
    constructor(userJson) {
        this.name = userJson.name;
        this.company = userJson.company;
        this.bio = userJson.bio;
        this.email = userJson.email;
        this.location = userJson.location;
        this.avatarUrl = userJson.avatar_url;
        this.repos = userJson.public_repos;
        this.gists = userJson.public_gists;
        this.followers = userJson.followers;
        this.following = userJson.following;
    }
}