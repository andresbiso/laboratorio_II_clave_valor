
/* jshint browser: true */
/* jshint node: true */
/* jshint -W004 */

'use strict';
const redis_client = require('redis').createClient(); // default to 127.0.0.1, port 6379

const myArgs = process.argv.slice(2);
if (myArgs.length <= 0) {
    console.log('Missing key to be removed');
    console.log('Usage: ');
    console.log('run: node src/hashkeyDel.js <hash-key>');
    console.log('Example: node src/hashkeyDel.js requests');
    process.exit(0);
}
console.log(myArgs);

const hkey = myArgs[0];

if (hkey !== undefined) {
    console.log('Start to delete: ', hkey);
    redis_client.del(hkey, function (err, reply) {
        if (err) {
            console.log('Caught an error: ', err);
            throw err;
        }
        else {
            console.log('Successfully delete hash key: ', hkey, reply);
        }
    });
}

redis_client.flushall( function (err, reply) {
    if (err) {
        console.log('Caught an error: ', err);
        throw err;
    }
    else {
        console.log('Successfully flush all', reply);
    }
});

process.exit(0);