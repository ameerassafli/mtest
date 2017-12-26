var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
let items = [{
      imgurl:'https://www.nutella.com/nutella-gl-theme/images/custom/Nutella.png',
      name : 'Nutella' ,
      price : 3750
    }];
    app.get('/', function (req, res) {

res.status(200).send(items);
  
})
app.post ('/api/items' , (req , res)=>{
	items.push({imgurl :req.body.imgurl,
		name : req.body.name,
		price: req.body.price});
		res.status(200).send('\n A new item has been added');
})
io.on('connection', function(socket) {
    
    // socket.emit('news', {
    //     hello: 'world'
    // });

    socket.on('my other event', function(data) {
        console.log(data);
    });
});


let listener = server.listen(process.env.PORT || 3100, function() {
    console.log(`listeing on port ${listener.address().port}`)
});