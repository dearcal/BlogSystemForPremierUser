const {argv} = require('yargs');
url=`mongodb://test:test@${argv.db_ip}/?authSource=test`

console.log(url)

exports.MONGODB = {
    uri:`mongodb://test:test@${argv.db_ip}/?authSource=test`
};