const express = require("express");
const newError= require("http-errors");
console.log(__dirname);
const database = require("./database.json");
const cookieParser = require("cookie-parser");
var path = require('path');
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


const app = express();
// app.use(express.urlencoded);
app.set('views', path.resolve(__dirname, '../views'));
app.set('view engine', 'twig');
// TODO: posts
// TODO: albums
// TODO: todos

// TODO: comments
// TODO: users
app.get("/",(req,res)=>{
const vars=[];
for(param in database){
	vars.push({link:param,title:param.charAt(0).toUpperCase()+param.substr(1)});
}
	res.render('index', { title: 'Database' ,props:vars});
})
// Example of endpoints
app.get("/:section", (req, res) => {
	const section= req.params.section;
	const sectionTittle = section.charAt(0).toUpperCase()+section.substr(1);
	const sectionData = database[section];
	console.log(sectionData);
 res.render('list'+section,{title:sectionTittle, data:sectionData})
});

app.get("/:section/:id", (req, res) => {
	const section= req.params.section;
	const sectionId=req.params.id;
	const sectionData = database[section][sectionId];
	const sectionTittle = section.charAt(0).toUpperCase()+section.substr(1);
	res.render('view'+section,{title:sectionTittle, data:sectionData})
});

app.post("/:section", (req, res) => {
	const section= req.params.section;
	const data= req.data;
	 data.id = database[section][database[section].length-1] +1;
	 database[section].push(data);
});

app.patch("/user/:id", (req, res) => {
  // Update user field by id
});

app.delete("/user/:id", (req, res) => {
  // Delete user by id
});
app.use(function (req,resp,next) {
	next(newError(404));
})
module.exports = app;
