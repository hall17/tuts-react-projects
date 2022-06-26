const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const AUTH_URL =
    `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

export {
    AUTH_URL,
    CLIENT_ID
}
