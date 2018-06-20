var spotify = require('./src/index');

spotify.accessToken = 'access_token';

spotify.player.currentlyPlaying((err, res) => {
    if(err) {
        console.log(err);
    }else {
        console.log(res);
    }
})

// if status code 204 = currently no song playing