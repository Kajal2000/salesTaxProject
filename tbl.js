let knex = require('./connection.js')

// first table !!!!! product tbl

knex.schema.createTable('products_tbl', (table) => {
    table.string('product_name');
    table.string('imported')
    table.string('category');
    table.float('price');
    table.increments('id');
    table.integer("quantity");
    }).then(()=>{
        console.log("table has created")
    }).catch((err) => {
        console.log(err,"There is some err while writing the query")
    })

// second table !!!!! cart tbl


// knex.schema.createTable('cart', (table) => {
//     table.increments('cart_id')
//     table.string('product_name');
//     table.string('imported')
//     table.string('category');
//     table.float('price')
//     table.integer('quantity')
//     table.integer('quantity_prise')
//     }).then(()=>{
//         console.log("table has created")
//     }).catch((err) => {
//         console.log(err,"There is some err while writing the query")
//     })
