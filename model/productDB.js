const knex = require('../connection.js');

let insert_data = (data) => {
    return knex("products").insert(data)
}

module.exports = {insert_data}
