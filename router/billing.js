const router = require('express').Router();
const Billing = require('../modal/billing');
const Buyer = require('../modal/buyer');

router.post('/sell', async (req, res) => {
    try {
        console.log(req.body);
        const isExist = await Buyer.find({ 'mobile': req.body.buyer.mobile, 'shopid': req.body.shopid })
        if (isExist.length==0) {
            req.body.buyer.shopid = req.body.shopid;
            console.log(req.body.buyer);
            await Buyer.create(req.body.buyer);
        }
        const newbill = new Billing({
            'shopid': req.body.shopid,
            'buyer': req.body.buyer,
            'items': req.body.items,
            'total': req.body.total
        })
        const temp = await newbill.save();
        return res.status(200).json({ 'success': true });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;