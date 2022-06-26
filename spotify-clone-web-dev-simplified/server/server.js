// load env variables
require("dotenv").config()

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const SpotifyWebApi = require('spotify-web-api-node')
const lyricsFinder = require('lyrics-finder')


const app = express();


app.use(cors())
app.use(bodyParser.json())

// parse url parameters
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/refresh', async (req, res) => {
    const refreshToken = req.body.refreshToken
    console.log('refresh body', req.body)
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken
    })
    try {
        let data = await spotifyApi.refreshAccessToken()
        console.log(data.body)
        res.json({
            accessToken: data.body.access_token,
            expiresIn: data.body.expires_in
        })
    } catch (error) {
        console.log('Could not refresh access token', error)
        res.sendStatus(400)
    }
})

app.post('/login', async (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    })
    try {
        let data = await spotifyApi.authorizationCodeGrant(code)
        console.log(data)
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }

})

app.get('/lyrics', async (req, res) => {
    const { artist, track } = req.query

    try {
        const lyrics = await lyricsFinder(artist, track)

        res.json({ lyrics })
    } catch (error) {
        res.sendStatus(400)
    }
})



app.listen(3001, () => console.log("Listening on port 3001"))