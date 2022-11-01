'use strict';

const redis = require('redis');
// default to 127.0.0.1, port 6379
const client = redis.createClient();

client.on('connect', function() {
    console.log('Connected!');
});

client.set('framework', 'ReactJS', function(err, reply) {
    console.log(reply);
});

client.get('framework', function(err, reply) {
    console.log(reply);
});

client.hmset('frameworks_hash', 'javascript', 'ReactJS', 'css', 'TailwindCSS', 'node', 'Express');

client.hgetall('frameworks_hash', function(err, object) {
  console.log(object); // { javascript: 'ReactJS', css: 'TailwindCSS', node: 'Express' }
});