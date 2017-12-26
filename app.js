const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const items = require('./routes/items');




// connect my application to the database
let dbhost = "mongodb://sona:asdwasdw@ds133127.mlab.com:33127/sona"
mongoose.connect(dbhost, {useMongoClient:true})


// use needed middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', items)




let listner = app.listen(process.env.PORT || 3000, function () {
	console.log(`your app is running on port ${listner.address().port}`)
})