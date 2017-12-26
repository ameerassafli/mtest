const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


// define a schema
let itemsSchema = mongoose.Schema({
	imgurl: String,
	name: String,
	price: Number
})

// define a model
let items = mongoose.model('items', itemsSchema)

// get all books
router.get('/api/items', (req, res)=>{//using a seperate auth fun=>>> router.get('/api/books', auth, (req , res)=>{})=============================<<<<<<<<<<<<<<
	 items.find({} , (err , result) =>{

		if (err) throw err;
		res.status(200).json(result);
	})}
	
)


// get a specific book



// insert a new book
router.post('/api/items', (req, res)=>{

	let item = new items({
		imgurl: req.body.imgurl,
		name: req.body.name,
		price: req.body.price
	})

	item.save((err, result)=>{
		if (err) throw err;
		res.status(200).json(result)	
	})

		
})



// delete a specific book





module.exports = router;