const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/ShopBilling';

mongoose.connect(url,async()=>{
    try {
        console.log('connected to backend');
    } catch (error) {
        console.log('not connected to backend',error);
    }
});