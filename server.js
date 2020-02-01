const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())

const sales_tax = require("./routes/product")
app.use("/apis",sales_tax)

app.listen(5000,()=>{
    console.log("server is listening..............)")
});