const mongoose = require('mongoose');

const BuyerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobile:{
        type: Number,
        required: true,
    },
    email:{
        type: String
    },
    address:{
        type: String
    }
})

const Buyer = mongoose.model('buyer',BuyerSchema);
module.exports = Buyer;