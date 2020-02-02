const express = require('express');
const app = express.Router();
const appDB  = require("../model/productDB")

// thid code

app.get("/apidata/:cart_id",(req,res)=>{
    let cart_id = req.params.cart_id
    let datastore = appDB.cart_get_by_id(cart_id)
    datastore.then((resp_data)=>{
        let not_india_tax = 10
        let indian_tax = 5
        let imported = resp_data[0]["imported"]
        let category = resp_data[0]["category"]
        let price = resp_data[0]["price"]
        if (imported == "not_indian"){
            var tax_data = price * not_india_tax/100
            var price_tax = price + tax_data
            let data_dic = {
                "cart_id" : resp_data[0]["cart_id"],
                "quantity" : resp_data[0]["quantity"],
                "product_name" : resp_data[0]["product_name"],
                "imported" : resp_data[0]["imported"],
                "category" : resp_data[0]["category"],
                "price" : resp_data[0]["price"],
                "quantity_prise" : resp_data[0]["quantity_prise"],
                "price_tax" : tax_data,
                "price_with_tax " : price_tax
            }
            res.send(data_dic)
            }
        else if(imported == "indian"){
            if (category == "general"){
                var tax_amount = price * indian_tax/100
                var price_with_tax = price + tax_amount
            let data_dic = {
                "cart_id" : resp_data[0]["cart_id"],
                "quantity" : resp_data[0]["quantity"],
                "product_name" : resp_data[0]["product_name"],
                "imported" : resp_data[0]["imported"],
                "category" : resp_data[0]["category"],
                "price" : resp_data[0]["price"],
                "quantity_prise" : resp_data[0]["quantity_prise"],
                "tax_data" : tax_amount,
                "price_with_tax_ind" : price_with_tax
            }
            res.send(data_dic)
        }
        else{
            let data_dic = {
                "cart_id" : resp_data[0]["cart_id"],
                "quantity" : resp_data[0]["quantity"],
                "product_name" : resp_data[0]["product_name"],
                "imported" : resp_data[0]["imported"],
                "category" : resp_data[0]["category"],
                "price" : resp_data[0]["price"],
                "quantity_prise" : resp_data[0]["quantity_prise"]
            }
            res.send(data_dic)
        } 
       }
   
    })
});
