const { name } = require('./package');
module.exports = {
    devServer: {
        port: 3004,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    }
}