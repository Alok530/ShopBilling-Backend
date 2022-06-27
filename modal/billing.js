const mongoose = require('mongoose');

const BillingSchema = new mongoose.Schema({
    shopid: {
        type: String,
        required: true,
    },
    buyer: {
        type: Object,
        required: true,
    },
    items: [
        {
            productid: {
                type: String,
                required: true,
            },
            rate: {
                type: Number,
                required: true
            },
            quantity: {
                type: Number,
                default: 1,
            },
        },
    ],
    total: {
        type: Number,
        required: true,
    }
});

const Billing = mongoose.model('billing', BillingSchema);
module.exports = Billing;