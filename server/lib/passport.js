const passport = require('passport');
const User = require('../models/User');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;

const localOptions = {
    usernameField: 'email', 
    passwordField: 'password'
};

const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
    User.findOne({email}, function (err, user) {
        if (err) {
            return done(err)
        }

        if (!user) {
            // No user with that email address... Cannot proceed
            done(null, null, {
                code: 'GLOBAL_ERROR',
                message: 'Your login details could not verified. Please try again.'
            })
            return;
        }

        // Proceed with validation
        user.comparePassword(password, function(err, isMatch) {
            if (err) {
                done(err);
            }

            if (!isMatch) {
                done(null, null, {
                    code: 'GLOBAL_ERROR',
                    message: 'Your login details could not verified. Please try again.'
                })
    
                return;
            }

            done(null, user);
            return;

        })

    })
})

const jwtOpts = {}
// jwtOpts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

jwtOpts.jwtFromRequest = (req) => {
    const cookies = req.cookies;
    const token = cookies.token;

    if (token) {
        return token;
    }

    const headers = req.headers || {};
    const authHeader = headers.authorization || '';
    const headerToken = authHeader.split(' ')[1];

    if (headerToken) {
        return headerToken;
    }

    console.log('authHeader', headerToken)

    return null;
}

jwtOpts.secretOrKey = process.env.JWT_SECRET || 'TEMP_JWT_SECRET',

passport.use(new JwtStrategy(jwtOpts, function(jwt_Payload, done) {
    const userId = jwt_Payload._id;

    User.findOne({ _id: userId }, function(err, user){
        if (err) {
            return done(err, false)
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false, {
                code: 'GLOBAL_ERROR',
                message: 'Email not associated with any account'
            })
        }
    })
}))

passport.use(localLogin);