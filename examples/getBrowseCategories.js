var spotify = require('spotifyapi_web_nodejs');

spotify.accessToken = 'access_token';

spotify.browse.browseCategories((err, res) => {
    if(err) {
        console.log(err);
    }else {
        console.log(res);
    }
})
