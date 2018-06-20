'use strict';

const request = require('./request');

module.exports = {
    Search: (data, callback) => {
        if(!data.query)
        {
            callback('query required')
        }

        if(!data.type)
        {
            callback('query required')
        }

        if(data.limit == null || data.limit == undefined)
        {
            data.limit = 20;
        }

        if(data.offset == null || data.offset == undefined)
        {
            data.offset = 0;
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/search?q=' + data.query + '&type=' + data.type + '&limit=' + data.limit + '&offset=' + data.offset;

        request('GET', options, callback)

    }
}