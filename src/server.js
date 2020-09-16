/* jshint browser: true */
/* jshint node: true */
/* jshint -W004 */

/* ********************************************************************************
 * A simple web server that generates dyanmic content based on responses from Redis
 * In console, run:
 * node src/server.js
 * 
 * You should see output:
 * PS C:\source_all\github\nodejs-redis-memurai> node src/server.js
 * 
 * Web server is running on the port: 8080
 * Open your brower, type: http://localhost:8080/
 *
 ******************************************************************************** */

'use strict';

const http = require('http');
const redis_client = require('redis').createClient(); // default to 127.0.0.1, port 6379

const SERVER_PORT = 8080;

const server = http.createServer(function (request, response) { // The server
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    var redis_info, total_requests;

    redis_client.info(function (err, reply) {
        redis_info = reply; // stash response in outer scope
    });
    redis_client.incr('requests', function (err, reply) {
        total_requests = reply; // stash response in outer scope
    });

    var key_types = {};
    // build a map of all keys and their types
    redis_client.keys('*', function (err, all_keys) {
        all_keys.forEach(function (key, pos) { // use second arg of forEach to get pos
            redis_client.type(key, function (err, type) {
                key_types[key] = type;
                if (pos === all_keys.length - 1) { // callbacks all run in order
                    console.dir(key_types,  { depth: null });
                    //console.log(key_types);
                }
            });
        });
    });

    redis_client.hincrby('ip', request.connection.remoteAddress, 1);
    redis_client.hgetall('ip', function (err, reply) {
        // This is the last reply, so all of the previous replies must have completed already
        response.write('This page was generated after talking to redis.\n\n' +
            'Redis info:\n' + redis_info + '\n' +
            '*************************************\n' +
            'Key types map ...\n'                         +
            '*************************************\n' +
            JSON.stringify(key_types, null, 2) + '\n' +
            '*************************************\n' +
            'Following is the data you added ...\n' +
            '*************************************\n' +
            'Total requests: ' + total_requests + '\n\n' +
            'IP count: \n');
        Object.keys(reply).forEach(function (ip) {
            response.write('    ' + ip + ': ' + reply[ip] + '\n');
        });
        response.end();
    });
});
server.listen(SERVER_PORT);

console.log('Web server is running on the port:', SERVER_PORT);
console.log('Open your brower, type: http://localhost:8080/');