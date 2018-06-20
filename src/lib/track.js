'use strict';

const request = require('./request');

module.exports = {
    trackAudioAnalysis: (data, callback) => {
        if(!data.trackID)
        {
            callback('trackID required')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/audio-analysis/' + data.trackID;

        request('GET', options, callback)
    },

    tracksAudioFeatures: (data, callback) => {
        if(!data.trackIDs)
        {
            callback('trackIDs required')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/audio-features?ids=' + data.trackIDs;

        request('GET', options, callback)
    },

    trackAudioFeatures: (data, callback) => {
        if(!data.trackID)
        {
            callback('trackID required')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/audio-features/' + data.trackID;

        request('GET', options, callback)
    },

    severalTracks: (data, callback) => {
        if(!data.trackID)
        {
            callback('trackID required')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/tracks/' + data.trackID;

        request('GET', options, callback)
    }
}
