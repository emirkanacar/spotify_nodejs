'use strict';

const request = require('./request');

module.exports = {
    albumDetails: (data, callback) => {
        if(!data.albumID) {
            return callback('albumID required');
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/albums/' + data.albumID;

        request('GET', options, callback);
    },

    albumTracks: (data, callback) => {
        if(!data.albumID) {
            return callback('albumID required')
        }

        if(data.offset == null || data.offset == undefined)
        {
            data.offset = 5;
        }

        if(data.limit == null || data.limit == undefined)
        {
            data.limit = 10;
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/albums/' + data.albumID + '/tracks?limit=' + data.limit + '&offset=' + data.offset;

        request('GET', options, callback);
    },

    severalAlbums: (data, callback) => {
        if(!data.albumIDs)
        {
            return callback('albumIDs required')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/albums?ids=' + data.albumIDs;

        request('GET', options, callback);
    }
}