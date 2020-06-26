const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy,
    ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("./models/user");

const cookieExtractor = (req) => {
    let token = null;
    if (req && req.headers.cookie) {
        token = req.headers.cookie;
    }
    return token;
};

// authorization
passport.use(
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme(
                "JWT"
            ),
            secretOrKey: "VeryCoolSecret",
        },
        (payload, done) => {
            console.log("hello");
            User.findById({ _id: payload.sub }, (err, user) => {
                if (err) return done(err, false);
                if (user) return done(null, user);
                else return done(null, false);
            });
        }
    )
);

// authenticated local strategy using username and password
passport.use(
    new LocalStrategy((username, password, done) => {
        User.findOne({ username }, (err, user) => {
            if (err) return done(err);
            if (!user) return done(null, false);
            user.comparePassword(password, done);
        });
    })
);
