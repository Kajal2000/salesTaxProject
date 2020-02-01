const knex = require('../connection.js');

let insert_data = (data) => {
    return knex("products_tbl").insert(data)
}


var get_by_id = (id) =>{
    return knex("carproducts_tblt")
    .select("*")
    .where("products_tbl.id",id)
}

let insert_data_cart = (data) => {
    return knex("cart").insert(data)

}
var cart_get_by_id = (cart_id) =>{
    return knex("cart")
    .select("*")
    .where("cart.cart_id",cart_id)
}
module.exports = {insert_data,get_by_id,insert_data_cart,cart_get_by_id}
