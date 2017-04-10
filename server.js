var express  = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var indexRouter = require("./routes/index");
var tasksRouter = require("./routes/tasks");
var port = process.env.PORT || 3000;


var app = express();
//View engine
app.set('views', path.join(__dirname , 'views')); // this is the folder which will have views
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile); // To render HTML files

//Set static folder to hold angular files
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Routes
 app.use('/', indexRouter);
// app.use('/api', tasksRouter);

 app.listen(port, function(){
     console.log('server started at the port ====' + port);
 })
