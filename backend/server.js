import express from 'express';
import products from './data/product';
const app = express();

app.get('/', (req,res)=>{ //
    res.send("API is running...")
})

app.get('/api/products', (req,res)=>{ //get all products
    res.json(products)
})

app.get('/api/products/:id', (req,res)=>{ // get single product
    const product = products.find(p=>p?._id === req.params.id)
    res.json(product)
})

app.listen(5000, console.log("Server running on prot 5000"));