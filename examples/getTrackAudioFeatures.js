var spotify = require('spotifyapi_web_nodejs');

spotify.accessToken = 'access_token';

spotify.track.trackAudioFeatures({ trackID: '4JpKVNYnVcJ8tuMKjAj50A' }, (err, res) => {
    if(err) {
        console.log(err);
    }else {
        console.log(res);
    }
})
