const path = require('path');
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL || 'mongodb://sim:iosapp@ds119081.mlab.com:19081/iosapp';

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const {User} = require('./models');
const app = express();
app.use(bodyParser.json())







app.get('/api/user', (req, res) => {
  User
  .find()
  .exec()
  .then(data => res.json(data)
  .catch(console.error)
)}
);

app.post('/api/user', (req, res) => {
  console.log(req.body);
  User
  .create({
    Name: req.body.Name,
    firstName: req.body.firstName,
    email: req.body.email,
    password: req.body.password,
    googleId: req.body.googleId,
    googlePic: req.body.googlePic,
    accessToken: req.body.accessToken,
  })
  .then(newPost =>{
    res.status(201).json(newPost)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({message:'internal server error'});
  })

});


passport.use(
    new GoogleStrategy({
        clientID:  '718326753852-vd914mpritcinsa68jhv7suhidn1of6k.apps.googleusercontent.com',
        clientSecret: 'ZNh14uxUPuKh71QX0vOVDZfk',
        callbackURL: `/api/auth/google/callback`
    },
    (accessToken, refreshToken, profile, cb) => {
        User
        .findOne({googleId: profile.id})
        .exec()
        .then(data => {
            if (data == null){
                User
                .create({
                    displayName: profile.displayName,
                    googlePic: profile.photos[0].value,
                    googleId: profile.id,
                    accessToken: accessToken
                })
                .then(newPost =>{
                   
                    return cb(null, newPost);
                })
            }
            else {
                    User
                    .findOneAndUpdate(
                    {googleId: profile.id},
                    {$set: {accessToken: accessToken}},
                    {safe: true, new:true},
                    function(err, user) {
                        if(err){
                    }
                    return cb(null, user);
                }
            )          
            }  
        }) 
    }
));

app.get('/api/auth/google',
    passport.authenticate('google', {
        scope: ['profile']
    })
    
);

app.get('/api/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/',
        session: false
    }),
    (req, res) => {
      console.log('made it to server')
        // res.cookie('accessToken', req.user.accessToken, {expires: 0});
        // res.cookie('displayName', req.user.displayName, {expires: 0});
        // res.redirect('/');
    }
);



























runServer(process.env.PORT || 8080);


let server;
function runServer(port=8080) {
    return new Promise((resolve, reject) => {
         mongoose.connect(DATABASE_URL, err => {
            if(err) {
              return reject(err);
        }
            console.log('Db connected');
            server = app.listen(port, () => {
                resolve();
            }).on('error', reject);
        });
    });
}
