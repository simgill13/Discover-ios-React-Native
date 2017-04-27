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




app.get('/api/user/:email', (req, res) => {
  User
  .findOne({email: req.params.email})
  .exec()
  .then(data => res.json(data))
  .catch(console.error)
}
);

app.post('/api/user', (req, res) => {
  console.log(req.body);
  User
  .create({
    Name: req.body.name,
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
