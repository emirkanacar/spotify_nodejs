'use strict';

const request = require('./request');
const index = require('../index');

module.exports = {
    tokenCheck: (data, callback) => {
        let options = {};
        options.url = "https://api.spotify.com/v1/";

        request('GET', options, callback);
    }
}