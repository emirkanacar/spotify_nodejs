'use strict';
var request = require('request');
var index = require('../index');

module.exports = (method, data, callback) =>
{
    var accessToken = index.accessToken;

    if(!accessToken || accessToken == "")
    {
        return callback('No access token specified!');
    }

    let options = {
        url: data.url,
        method: method,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    request(options, (err,res,body) => {
        if(err) {
            return callback(err);
        }
        try {
            if(body.length == 0) {
                if(res.statusCode == 204)
                {
                    return callback({
                        statusCode: res.statusCode,
                        message: 'No content'
                    })
                }else {
                    return callback({ statusCode: res.statusCode });
                }
                
            }
            callback(null, JSON.parse(body));
        } catch(err) {
            err.statusCode = res.statusCode;
            callback(err);
        }
    });
}