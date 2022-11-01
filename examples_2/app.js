'use strict';

const redis = require('redis');
// default to 127.0.0.1, port 6379
const client = redis.createClient();

client.on('connect', function() {
    console.log('Connected!');
});