const router = require('express').Router();
const Admin = require('../modal/admin');

router.post('/register',async(req,res)=>{
    try {
        const adminregister = await Admin.create(req.body);
        return res.status(200).json(adminregister);
    } catch (error) {
        console.log(error);
    }
});

router.post('/login',async(req,res)=>{
    try {
        const adminlogin = await Admin.findOne({'email':req.body.email,'password':req.body.password});
        return res.status(200).json(adminlogin);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;