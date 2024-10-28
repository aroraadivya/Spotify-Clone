// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = encodeURIComponent("http://localhost:3000/");
const clientId = "039e89525ab4401486d3c31237f6373b";

const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-private",
    "user-top-read",
    "app-remote-control" 
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

console.log(loginUrl);
