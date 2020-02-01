const express = require('express');
const app = express.Router();
const appDB  = require("../model/productDB")

app.post("/api",(req,res)=>{
    data = {
        product_name : req.body.product_name,
        imported : req.body.imported,
        category : req.body.category,
        price : req.body.price
    }
    appDB.insert_data(data)
    .then(()=>{
        res.send("insert data")
    }).catch((err)=>{ 
        console.log(err)
    })
})

module.exports = app;