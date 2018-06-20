'use strict';

const request = require('./request');

module.exports = {
    availableDevices: (callback) => {

        let options = {};
        options.url = 'https://api.spotify.com/v1/me/player/devices';

        request('GET', options, callback)
    },

    currentPlayback: (callback) => {
        
        let options = {};
        options.url = 'https://api.spotify.com/v1/me/player';

        request('GET', options, callback)
    },

    recentlyPlayed: (callback) => {
        
        let options = {};
        options.url = 'https://api.spotify.com/v1/me/player/recently-played';

        request('GET', options, callback)
    },

    currentlyPlaying: (callback) => {

        let options = {};
        options.url = 'https://api.spotify.com/v1/me/player/currently-playing';

        request('GET', options, callback)
    },

    playerPause: (data, callback) => {
        if(!data.device_id) {
            callback('device_id required!')
        }

        let options = {};

        if(data.device_id == 'null') {
            options.url = 'https://api.spotify.com/v1/me/player/pause';
        }else {
            options.url = 'https://api.spotify.com/v1/me/player/pause?device_id=' + data.device_id;
        }

        console.log(options.url)

        request('PUT', options, callback)
    },

    playerSeekPosition: (data, callback) => {
        if(data.position_ms)
        {
            callback('position_ms required!')
        }

        let options = {};

        if(data.device_id == 'null') {
            options.url = 'https://api.spotify.com/v1/me/player/seek?position_ms' + data.position_ms;
        }else {
            options.url = 'https://api.spotify.com/v1/me/player/pause?position_ms' + data.position_ms + '&device_id=' + data.device_id;
        }

        request('PUT', options, callback)
    },

    playerRepeatMode: (data, callback) => {
        if(!data.state)
        {
            callback('state required!')
        }

        let options = {};

        if(data.device_id == 'null') {
            options.url = 'https://api.spotify.com/v1/me/player/repeat?state' + data.state;
        }else {
            options.url = 'https://api.spotify.com/v1/me/player/repeat?state' + data.state + '&device_id=' + data.device_id;
        }

        request('PUT', options, callback)
    },

    playerSetVolume: (data, callback) => {
        if(!data.volume_percent)
        {
            callback('volume_percent required!')
        }

        let options = {};

        if(data.device_id == 'null') {
            options.url = 'https://api.spotify.com/v1/me/player/volume?volume_percent' + data.volume_percent;
        }else {
            options.url = 'https://api.spotify.com/v1/me/player/volume?volume_percent' + data.volume_percent + '&device_id=' + data.device_id;
        }

        request('PUT', options, callback)
    },

    playerNextTrack: (data, callback) => {

        let options = {};

        if(data.device_id == 'null') {
            options.url = 'https://api.spotify.com/v1/me/player/next';
        }else {
            options.url = 'https://api.spotify.com/v1/me/player/next?device_id=' + data.device_id;
        }

        request('POST', options, callback)
    },

    playerPreviousTrack: (data, callback) => {

        let options = {};

        if(data.device_id == 'null') {
            options.url = 'https://api.spotify.com/v1/me/player/previous';
        }else {
            options.url = 'https://api.spotify.com/v1/me/player/previous?device_id=' + data.device_id;
        }

        request('POST', options, callback)
    },

    playerPlayTrack: (data, callback) => {

        let options = {};

        if(data.device_id == 'null') {
            options.url = 'https://api.spotify.com/v1/me/player/play';
        }else {
            options.url = 'https://api.spotify.com/v1/me/player/play?device_id=' + data.device_id;
        }

        request('PUT', options, callback)
    },

    playerChangeShuffleSettings: (data, callback) => {

        if(!data.state)
        {
            callback('state required!')
        }

        let options = {};

        if(data.device_id == 'null') {
            options.url = 'https://api.spotify.com/v1/me/player/shuffle?state=' + data.state;
        }else {
            options.url = 'https://api.spotify.com/v1/me/player/shuffle?state=' + data.state + '&device_id=' + data.device_id;
        }

        request('PUT', options, callback)
    },

    playerPlayback: (data, callback) => {

        if(!data.device_ids)
        {
            callback('device_ids required!')
        }

        if(!data.play)
        {
            callback('play required!')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/me/player?device_ids=' + data.device_ids + '&play=' + data.play;

        request('PUT', options, callback)
    }

}