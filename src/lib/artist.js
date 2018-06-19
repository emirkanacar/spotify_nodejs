'use strict';

const request = require('./request');

module.exports = {
    artistDetails: (data, callback) => {
        if(!data.artistID)
        {
            callback('artistID required!');
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/artists/' + data.artistID;

        request('GET', options, callback)
    },

    severalArtists: (data, callback) => {
        if(!data.artistIDs)
        {
            callback('artistIDs required');
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/artists?ids=' + data.artistIDs;

        request('GET', options, callback)
    },

    artistAlbums: (data, callback) => {
        if(!data.artistID) {
            return callback('artistID required')
        }

        if(data.offset == null || data.offset == undefined)
        {
            data.offset = 5;
        }

        if(data.limit == null || data.limit == undefined)
        {
            data.limit = 15;
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/artists/' + data.artistID + '/albums?limit=' + data.limit + '&offset=' + data.offset;

        request('GET', options, callback)
    },

    artistTopTracks: (data, callback) => {
        if(!data.artistID)
        {
            callback('artistID required');
        }

        if(data.country == null || data.country == undefined)
        {
            data.country = 'ES';
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/artists/' + data.artistID + '/top-tracks?country=' + data.country;

        request('GET', options, callback)
    },

    artistRelatedArtist: (data, callback) => {
        if(!data.artistID)
        {
            callback('artistID required');
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/artists/' + data.artistID + '/related-artists';
        
        request('GET', options, callback)
    }
}