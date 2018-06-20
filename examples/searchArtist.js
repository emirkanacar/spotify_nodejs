var spotify = require('./src/index');

spotify.accessToken = '';

spotify.search.Search({ query: 'Aleyna Tilki', type: 'artist', limit: 10, offset:0 }, (err, res) => {
    if(err) {
        console.log(err);
    }else {
        console.log(res);
    }
})