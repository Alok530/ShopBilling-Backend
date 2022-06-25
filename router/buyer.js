const router = require('express').Router();
const Buyer = require('../modal/buyer');

// register buyer
router.post('/addbuyer',async(req,res)=>{
    try {
        const isExist = await Buyer.findOne({'mobile':req.body.mobile});
        if(isExist){
            return res.status(200).json(isExist);
        }
        const addedBuyer = await Buyer.create(req.body);
        return res.status(200).json(addedBuyer);
    } catch (error) {
        console.log(error);
    }
});

// get buyer
router.get('/getbuyer/:buyerId',async(req,res)=>{
    try {
        const isExist = await Buyer.findOne({'mobile':req.body.mobile});
        if(!isExist){
            return res.status(200).json('Buyer not found');
        }
        return res.status(200).json(isExist);
    } catch (error) {
        console.log(error);
    }
});

// delete buyer
router.delete('/deletebuyer',async(req,res)=>{
    try {
        const isExist = await Buyer.findOne({'mobile':req.body.mobile});
        if(!isExist){
            return res.status(200).json('Buyer not found');
        }
        await Buyer.findOneAndDelete({'mobile':req.body.mobile});
        return res.status(200).json('buyer deleted successfully');
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;