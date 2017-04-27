const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  Name:  String,
  firstName: String,
  email: String,
  password: String,
  googleId: String,
  googlePic: String,
  accessToken: String, 
});





const User = mongoose.model('User',userSchema);



module.exports = {User};