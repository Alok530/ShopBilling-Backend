const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    shopname:{
        type:String,
        requried: true
    },
    address:{
        type:String,
        requried: true
    },
    mobile:{
        type:Number,
        requried: true
    },
    adminname:{
        type:String,
        requried: true
    },
    email:{
        type:String,
        requried: true
    },
    password:{
        type:String,
        requried: true
    }
});

const admin = mongoose.model('admin',adminSchema);
module.exports = admin;