'use strict';

const request = require('./request');

module.exports = {
    trackAudioAnalysis: (data, callback) => {
        if(!data.id)
        {
            callback('id required')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/audio-analysis/' + data.id;

        request('GET', options, callback)
    },

    tracksAudioFeatures: (data, callback) => {
        if(!data.ids)
        {
            callback('ids required')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/audio-features?ids=' + data.ids;

        request('GET', options, callback)
    },

    trackAudioFeatures: (data, callback) => {
        if(!data.id)
        {
            callback('id required')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/audio-features/' + data.id;

        request('GET', options, callback)
    },

    severalTracks: (data, callback) => {
        if(!data.id)
        {
            callback('id required')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/tracks/' + data.id;

        request('GET', options, callback)
    }
}
