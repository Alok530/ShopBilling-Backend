const router = require('express').Router();
const Billing = require('../modal/billing');

router.post('/newbilling',async(req,res)=>{
    try {
        const newbill = await Billing.create(req.body);
        return res.status(200).json(newbill);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;