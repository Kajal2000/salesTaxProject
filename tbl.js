let knex = require('./connection.js')

// first table !!!!!

knex.schema.createTable('products', (table) => {
    table.string('product_name');
    table.string('imported')
    table.string('category');
    table.float('price')
    }).then(()=>{
        console.log("table has created")
    }).catch((err) => {
        console.log(err,"There is some err while writing the query")
    })

// second table !!!!!

