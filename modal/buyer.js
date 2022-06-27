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
    shopid:{
        type: String,
        required: true,
    },
    address:{
        type: String
    }
})

const Buyer = mongoose.model('buyer',BuyerSchema);
module.exports = Buyer;