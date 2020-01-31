var knex = require("knex")({
    client: 'mysql',
    connection: {
        host: "localhost",
        user: "root",
        password: "Kajal@123",
        database: "SalesTax"
    },
});

module.exports = knex;
