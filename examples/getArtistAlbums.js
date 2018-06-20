var spotify = require('spotifyapi_web_nodejs');

spotify.accessToken = 'access_token';

spotify.artist.artistAlbums({ artistID: '0TnOYISbd1XYRBk9myaseg', limit:20, offset:5 }, (err, res) => {
    if(err) {
        console.log(err);
    }else {
        console.log(res);
    }
})
