const SpotifyWebApi = require('spotify-web-api-node');
const express = require('express')
const app = express();
const clientId = "173559678a5e4f6d932efe0181148ee0";
const clientSecret = "a412acc3845941c08780f0b65d2a2ed6";
const callbackUrl = "http://localhost:3333/callback"
let token = "";
const scopes = ['user-read-private', 'user-read-email'];

var spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret,
    redirectUri: callbackUrl
});

app.listen(3333, () => {
    console.log('Porta 3333 Succeded')
})

app.get('/', (req, res) => {
    res.redirect(spotifyApi.createAuthorizeURL(scopes))
    //res.json({ url: spotifyApi.createAuthorizeURL(scopes) })
})

app.get('/callback', (req, res) => {
    token = req.query.code;
    spotifyApi.authorizationCodeGrant(token).then(
        function (data) {
            spotifyApi.setAccessToken(data.body['access_token']);
            spotifyApi.setRefreshToken(data.body['refresh_token']);
            res.json({ "Result": "success" })
        },
        function (err) {
            console.log('Something went wrong!', err);
        }
    );
})

app.get('/artist', (req, res) => {
    spotifyApi.searchArtists('Love')
        .then(function (data) {
            console.log('Search artists by "Love"', data.body);
            res.json({ data: data })
        }, function (err) {
            console.error(err);
        });
})