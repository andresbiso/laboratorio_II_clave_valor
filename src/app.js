'use strict';

const redis = require('redis');
// default to 127.0.0.1, port 6379
const client = redis.createClient();

client.on('connect', function() {
    console.log('Connected!');
});

// Strings

client.set('framework', 'ReactJS', function(err, reply) {
    console.log(reply); // OK
});

client.get('framework', function(err, reply) {
    console.log(reply); // ReactJS
});

// Hash

client.hmset('frameworks_hash', 'javascript', 'ReactJS', 'css', 'TailwindCSS', 'node', 'Express');

client.hgetall('frameworks_hash', function(err, object) {
  console.log(object); // { javascript: 'ReactJS', css: 'TailwindCSS', node: 'Express' }
});

// List

client.rpush(['frameworks_list', 'ReactJS', 'Angular'], function(err, reply) {
    console.log(reply); // 2
});

client.lrange('frameworks_list', 0, -1, function(err, reply) {
    console.log(reply); // [ 'ReactJS', 'Angular' ]
});

// Sets
client.sadd(['frameworks_set', 'ReactJS', 'Angular', 'Svelte', 'VueJS', 'VueJS'], function(err, reply) {
    console.log(reply); // 4
});

client.smembers('frameworks_set', function(err, reply) {
    console.log(reply); // [ 'Angular', 'ReactJS', 'VueJS', 'Svelte' ]
});

/* ------ */

// Operations

// Checking the existence of keys

client.exists('framework', function(err, reply) {
    if (reply === 1) {
      console.log('Exists!');
    } else {
      console.log('Doesn\'t exist!');
    }
});

// Deleting and expiring keys
client.del('frameworks_list', function(err, reply) {
    console.log(reply); // 1
});

client.lrange('frameworks_list', 0, -1, function(err, reply) {
    console.log(reply); // []
});

// Set key expiration time
client.set('status', 'logged_in');
client.get('status', function(err, reply) {
    console.log(reply); // logged_in
});
client.expire('status', 300);

// Incrementing and decrementing
client.set('working_days', 5, function() {
    client.incr('working_days', function(err, reply) {
      console.log(reply); // 6
    });
});