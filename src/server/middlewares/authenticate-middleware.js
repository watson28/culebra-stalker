const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
var { User } = require('./../models/user');

passport.use(new BearerStrategy(
    function (token, done) {
        User.findByToken(token).then(function (user) {
            done(null, user || false)
        }).catch(function (e) {
            done(e)
        });
    }
));

module.exports = passport.authenticate('bearer', { session: false });