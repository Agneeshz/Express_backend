const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

app.use(express.static(__dirname + '/public_final'));

router.get("/", function (req, res) {
  res.send("Hello world");
//   res.render(path.join(__dirname + "/index.html"));
  // _dirname : It will resolve to your project folder.
});

router.get("/1", function (req, res) {
  res.sendFile(path.join(__dirname + "/index_99.html"));
//   res.render(path.join(__dirname + "/index.html"));
  // _dirname : It will resolve to your project folder.
});

router.get("/2", function(req,res){
  // app.use(express.static(__dirname + '/public2')); 
  res.sendFile(path.join(__dirname + "/index_100.html"))
})

router.get("/3", function(req,res){
  // app.use(express.static(__dirname + '/public2')); 
  res.sendFile(path.join(__dirname + "/index_101.html"))
})

router.get("/4", function(req,res){
  // app.use(express.static(__dirname + '/public2')); 
  res.sendFile(path.join(__dirname + "/index_102.html"))
})

// add the router
app.use('/',router);
app.listen(process.env.PORT || 8080);

console.log('Running at port 8080')