const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    fullName:{
        type: 'string',
    },
    email:{
        type: 'string',
    },
    phoneNumber:{
        type: 'string',
    },
    password:{
        type: 'string',
    },
    confirmPassword:{
        type: 'string',
    },
    dob:{
        type: 'string',
    },
    gender:{
         type: 'string',
    }
})

const userModel = mongoose.model('Users',userSchema);
module.exports = userModel;