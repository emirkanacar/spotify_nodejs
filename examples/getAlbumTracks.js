var spotify = require('spotifyapi_web_nodejs');

spotify.accessToken = 'access_token';

spotify.album.albumTracks({ albumID: '4aawyAB9vmqN3uQ7FjRGTy', limit:20, offset:5 }, (err, res) => {
    if(err) {
        console.log(err);
    }else {
        console.log(res);
    }
})
