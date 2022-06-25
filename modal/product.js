const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    shopid:{
        type:String,
        required: true
    },
    productid:{
        type:Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    productname:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        default: true
    }
});

const Product = mongoose.model('products',productSchema);
module.exports = Product;