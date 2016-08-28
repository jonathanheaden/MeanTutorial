var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.user(new localStrategy({
        usernameField: 'email'
    },
    function(username, password, done) {

    }
))