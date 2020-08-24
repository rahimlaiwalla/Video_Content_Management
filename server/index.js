require('dotenv').config();
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
let username_vcm;


passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.SERVER_API_URL}/auth/google/callback`
  },
  function(accessToken, refreshToken, profile, done) {
    // console.log('PROFILE: ', profile);
  
    //this user object is just a test.
      //in reality, the profile data should be inserted into a db
      //or profile should be checked if it already exists
      //then certain information should be sent back from the db
      //and that user data will be sent into the done method
  
    let user = {
      username: profile.displayName,
      id: profile.id
    };

    console.log('USER IN PASSPORT.USE', user);
    //this done callback needs to be called and will send a user object
      //to passport.serializeUser, which is necessary to complete
      //the authorization process
    // document.cookie = `username_vcm=${profile.displayName}`
    // console.log('COOKIES IN PASSPORT.USE: ', document.cookie);
    username_vcm = profile.displayName;
    return done(null, user);
  
  }
  ));

passport.serializeUser((user, done) => {
  //creates and sends a cookie (key = user_id), needs to be unique
  console.log('USERNAME_VCM IN SERIALIZE USER: ', username_vcm);
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
  //search for specific cookie, if it exists, calls done with user data
  //to send to passport.authenticate in callback route

  //user data gets sent to callback passport.authenticate, and
    //if correct data exits, passport will authenticate and user will be authorized

  //this user object is a test.
    //in reality, the cookie id (user_id), which was 
    //sent to the browser via the serializerUser method
    //is looked for by passport and sent to the deserializer function.
    //That cookie needs to be used to ask the db if the user exists.
    //if the user exists, the user information will be received in this method
    //that user data will place into the done method.
  let user = {
    username: username_vcm,
    id: id
  };

  //this done called the passport.authenticate in the callback route
  done(null, user);
})

const verify = (req, res, next) => {
  console.log('VERIFY COOKIES: ', req.cookies);
  console.log('VERIFY COOKIE HEADERS: ', req.headers.cookie)
  if(!req.cookies.video_content_manager) {
    console.log('REDIRECTING');
    res.redirect('/login');
  } else {
    console.log('VERIFY SUCCESS')
    next();
  }
}
  

const PORT = 3006;

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(express.static(__dirname + '/../dist'));




app.get('/login', (req, res) => {
  res.clearCookie('video_content_manager');
  res.clearCookie('video_content_manager_username');

  res.render('login')
})

app.get('/api/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);

app.get('/api/auth/google/callback', 
  //if user data is present, from the done method in the deserialize function
  //passport will authenticate, otherwise will not authenticate
  passport.authenticate('google', { failureRedirect: '/login'}),
  function(req, res) {
    console.log('Successful authentication, redirect home.');
    console.log('REQUEST SESSION: ', req.session);
    // console.log('REQUEST USER: ', req.user);
    // console.log('TYPEOF SESSION ID ', typeof(`${req.session.passport.user}`));
    res.cookie('video_content_manager', `${req.session.passport.user}`);
    res.cookie('video_content_manager_username', username_vcm)
    // console.log('REQUEST HEADER COOKIES: ', req.headers.cookie);
    
    res.redirect('/dashboard');
  });

  app.get('/getUserName', (req, res) => {
    res.send(req.cookies.video_content_manager_username);
  })

  app.get('/*', verify, (req, res) => {
    console.log('REQ.COOKIES: ', req.cookies);
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  })

app.listen(PORT, () => console.log('Express server started on ', PORT));
