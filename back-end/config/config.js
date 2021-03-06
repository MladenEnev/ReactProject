const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 8080,
        dbURL: 'mongodb://localhost:27017/money-tracker',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];