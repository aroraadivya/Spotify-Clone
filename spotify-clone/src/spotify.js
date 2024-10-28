export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "039e89525ab4401486d3c31237f6373b";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-speed",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl = '${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}';