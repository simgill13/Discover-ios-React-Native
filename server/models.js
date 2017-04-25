const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  Name: {type: String},
  firstName: String,
  email: String,
  password: String,
  googleId: {type: String},
  googlePic: String,
  accessToken: String, 
});





const User = mongoose.model('User',userSchema);



module.exports = {User};