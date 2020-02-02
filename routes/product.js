const express = require('express');
const app = express.Router();
const appDB  = require("../model/productDB")

// post data in frist tbl
app.post("/api",(req,res)=>{
    data = {
        product_name : req.body.product_name,
        imported : req.body.imported,
        category : req.body.category,
        price : req.body.price,
        quantity : req.body.quantity
    }
    appDB.insert_data(data)
    .then(()=>{
        res.send("insert data")
    }).catch((err)=>{ 
        console.log(err)
    })
})

// i inserted data in sec tbl
app.get("/getapi/:id",(req,res)=>{
    let id = req.params.id
    var data1 = appDB.get_by_id(id)
    data1.then((res_data)=>{
        let product_name = res_data[0]["product_name"]
        let imported = res_data[0]["imported"]
        let category = res_data[0]["category"]
        let price = res_data[0]["price"]
        let quantity = res_data[0]["quantity"]
    let data = {
        "quantity" : quantity,
        "product_name" : product_name,
        "imported" : imported,
        "category" : category,
        "price" : price,
        "quantity_prise" : quantity * price
    } 
    appDB.insert_data_cart(data)
    .then(()=>{
        res.send("insert data")
    }).catch((err)=>{ 
        console.log(err)
        })
    })
})

module.exports = app;