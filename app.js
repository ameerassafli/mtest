const express = require ('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false }))
app.use( express.static(path.join(__dirname, 'public')))
let items = [{
      imgurl:'https://www.nutella.com/nutella-gl-theme/images/custom/Nutella.png',
      name : 'Nutella' ,
      price : 3750
    }];
    app.get('/', function (req, res) {

res.status(200).send(items);
  
})
app.post ('/api/items' , (req , res)=>{
	item.push({imgurl :req.body.imgurl,
		name : req.body.name,
		price: req.body.price});
		res.status(200).send('\n A new item has been added');
})
var listener = app.listen (process.env.PORT || 3000, function(){
console.log(`Example app listening on port ${listener.address().port}!`)})
