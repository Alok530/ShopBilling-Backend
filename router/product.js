const router = require('express').Router();
const Product = require('../modal/product');

router.get('/productquantity/:shopid', async (req, res) => {
    try {
        const products = await Product.find({ 'shopid': req.params.shopid });
        console.log(products);
        let qty = products == null ? 0 : products[products.length-1].productid;
        return res.status(200).json(qty);
    } catch (error) {
        console.log('error inside productquantity', error);
    }
})

router.post('/register', async (req, res) => {
    try {
        const itemadded = await Product.create(req.body);
        return res.status(200).json({ itemadded });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server error, wait!' });
    }
});

router.post('/sellnow/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const isExist = await Product.findOne({ 'productId': productId });
        if (!isExist) {
            return res.status(200).json('Product does not exist');
        }
        let qty = isExist.quantity - req.body.quantity;
        await Product.findOneAndUpdate({ 'productId': productId }, { 'quantity': qty });
        return res.status(200).json('sell successfully');
    } catch (error) {
        console.log(error);
    }
})

router.post('/update',async(req,res)=>{
    try {
        const updatedproduct = await Product.findOneAndUpdate({'productid':req.body.productid,'shopid':req.body.shopid},req.body);
        return res.status(200).json(updatedproduct);
    } catch (error) {
        console.log('error inside update',error);
    }
})


router.get('/:productid/:shopid', async (req, res) => {
    try {
        const productid = req.params.productid;
        const shopid = req.params.shopid;
        const isExist = await Product.findOne({ 'productid': productid,'shopid':shopid });
        if(isExist){
            return res.status(200).json({'success':true,'isExist':isExist})
        }
        return res.status(200).json({success:false});
    } catch (error) {
        console.log(error);
    }
});

router.get('/deleteproduct/:productid/:shopid', async (req, res) => {
    try {
        const productid = req.params.productid;
        const shopid = req.params.shopid;
        await Product.findOneAndDelete({ 'productid': productid,'shopid': shopid });
        return res.status(200).json('product deleted successfylly');
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;