'use strict';

const request = require('./request');

module.exports = {
    availableGenreSeeds: (callback) => {

        let options = {};
        options.url = 'https://api.spotify.com/v1/recommendations/available-genre-seeds';

        request('GET', options, callback)
    },

    newReleases: (data, callback) => {
        if(data.country == null || data.country == undefined)
        {
            data.country = 'ES';
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
        options.url = 'https://api.spotify.com/v1/browse/new-releases?country='+ data.country +'&limit='+ data.limit +'&offset=' + data.offset;

        request('GET', options, callback)
    },

    featuredPlaylists: (callback) => {

        let options = {};
        options.url = 'https://api.spotify.com/v1/browse/featured-playlists';

        request('GET', options, callback)
    },

    browseCategories: (callback) => {

        let options = {};
        options.url = 'https://api.spotify.com/v1/browse/categories';

        request('GET', options, callback)
    },

    singleBrowseCategory: (data, callback) => {
        if(!data.category_id)
        {
            callback('category_id required!')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/browse/categories/' + data.category_id;

        request('GET', options, callback)
    },

    categoryPlaylists: (data, callback) => {
        if(!data.category_id)
        {
            callback('category_id required!')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/browse/categories/' + data.category_id + '/playlists';

        request('GET', options, callback)
    }
}