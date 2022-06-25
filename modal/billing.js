const mongoose = require('mongoose');

const BillingSchema = new mongoose.Schema({
    buyer:{
        type: Object,
        required: true,
    },
    items:[
        {
            productId: {
                type: String,
                required: true,
            },
            price:{
                type: Number,
                required: true
            },
            quantity:{
                type: Number,
                default: 1,
            },
        },
    ],
    total:{
        type: Number,
        required: true,
    }
});

const Billing = mongoose.model('billing',BillingSchema);
module.exports = Billing;