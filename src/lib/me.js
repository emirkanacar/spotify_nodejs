'use strict';

const request = require('./request');

module.exports = {
    checkUserFollows: (data, callback) => {
        if(!data.type)
        {
            callback('Type required!')
        }

        if(!data.ids)
        {
            callback('IDs required')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/me/following/contains?type=' + data.type + '&ids=' + data.ids;

        request('GET', options, callback)
    },

    followUser: (data, callback) => {
        if(!data.type)
        {
            callback('Type required!')
        }

        if(!data.ids)
        {
            callback('IDs required')
        }
        
        let options = {};
        options.url = 'https://api.spotify.com/v1/me/following?type=' + data.type + '&ids=' + data.ids;

        request('PUT', options, callback)
    },

    followingList: (data, callback) => {
        if(!data.type)
        {
            callback('Type required!')
        }

        if(data.limit == null || data.limit == undefined)
        {
            data.limit = 10;
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/me/following?type=' + data.type + '&limit=' + data.limit;

        request('GET', options, callback)
    },

    unfollowUser: (data, callback) => {
        if(!data.type)
        {
            callback('Type required!')
        }

        if(!data.ids)
        {
            callback('IDs required')
        }
        
        let options = {};
        options.url = 'https://api.spotify.com/v1/me/following?type=' + data.type + '&ids=' + data.ids;

        request('DELETE', options, callback)
    },

    unfollowPlaylist: (data, callback) => {
        if(!data.owner_id)
        {
            callback('owner_id required!')
        }

        if(!data.playlist_id)
        {
            callback('playlist_id required!')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/users/' + data.owner_id + '/playlists/' + data.playlist_id + '/followers';

        request('DELETE', options, callback)
    },

    checkSavedAlbums: (data, callback) => {
        if(!data.ids)
        {
            callback('ids required')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/me/albums/contains?ids=' + data.ids;

        request('GET', options, callback)
    },

    checkSavedTracks: (data, callback) => {
        if(!data.ids)
        {
            callback('ids required')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/me/tracks/contains?ids=' + data.ids;

        request('GET', options, callback)   
    },

    savedAlbums: (data, callback) => {
        if(!data.limit)
        {
            callback('limit required!')
        }

        if(!data.offset)
        {
            callback('offset required!')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/me/albums?limit=' + data.limit + '&offset=' + data.offset;

        request('GET', options, callback)
    },

    savedTracks: (data, callback) => {
        if(!data.limit)
        {
            callback('limit required!')
        }

        if(!data.offset)
        {
            callback('offset required!')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/me/tracks?limit=' + data.limit + '&offset=' + data.offset;

        request('GET', options, callback)
    },

    removeSavedAlbums: (data, callback) => {
        if(!data.ids)
        {
            callback('ids required')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/me/albums?ids=' + data.ids;

        request('DELETE', options, callback)   
    },

    removeSavedTracks: (data, callback) => {
        if(!data.ids)
        {
            callback('ids required')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/me/tracks?ids=' + data.ids;

        request('DELETE', options, callback)   
    },

    addSavedTracks: (data, callback) => {
        if(!data.ids)
        {
            callback('ids required')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/me/tracks?ids=' + data.ids;

        request('PUT', options, callback)   
    },

    addSavedAlbums: (data, callback) => {
        if(!data.ids)
        {
            callback('ids required')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/me/albums?ids=' + data.ids;

        request('PUT', options, callback)   
    },

    topArtistsAndTopTracks: (data, callback) => {
        if(!data.type)
        {
            callback('Type required')
        }

        if(!data.limit)
        {
            callback('limit required!')
        }

        if(!data.offset)
        {
            callback('offset required!')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/me/top/' + data.type + '?limit=' + data.limit + '&offset=' + data.offset;

        request('GET', options, callback)   
    },

    myPlaylists: (data,callback) => {
        if(!data.limit)
        {
            callback('limit required!')
        }

        if(!data.offset)
        {
            callback('offset required!')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/me/playlists?limit=' + data.limit + '&offset=' + data.offset;

        request('GET', options, callback)   
    },

    myProfile: (callback) => {
        let options = {};
        options.url = 'https://api.spotify.com/v1/me';

        request('GET', options, callback)
    },

    followPlaylist: (data, callback) => {
        if(!data.user_id)
        {
            callback('user_id required')
        }

        if(!data.playlist_id)
        {
            callback('playlist_id required')
        }

        let options = {};
        options.url = 'https://api.spotify.com/v1/users/' + data.user_id + '/playlists/' + data.playlist_id + '/followers';

        request('PUT', options, callback)
    }
}