const express = require('express');
const app = express();
const PORT = 5000;


const cors = require('cors');
app.use(cors());

require('./connection/conn');

app.use(express.json());

const procuctrouter = require('./router/product');
const adminrouter = require('./router/admin');
const buyerrouter = require('./router/buyer');
const billingrouter = require('./router/billing');

app.use('/api/product',procuctrouter);
app.use('/api/admin',adminrouter);
app.use('/api/buyer',buyerrouter);
app.use('/api/billing',billingrouter);

app.get('/', (req, res) => {
    res.send('hello from backend');
})

app.listen(PORT,()=>{
    console.log('listning on port ',PORT);
})