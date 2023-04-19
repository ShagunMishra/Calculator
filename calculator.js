
const express = require("express"); //importing express framework into a vaiable express
const bodyParser = require("body-parser"); // importing bodyParser that will parse the information that we get from the html document

const app = express();
app.use(bodyParser.urlencoded({extended: true})) //establishing the bodyParser for usage

app.use('/', express.static('/index.html'));

//get request is used get information form the server

app.get("/", function(req, res) {      // "/" is used for the home route
  res.sendFile(__dirname + "/index.html"); // __dirname gives the whole route the file from the initials
});

//post is used to post information on the server

app.post("/", function(req, res) { //in a function always two parameters whould be there one is request and response

  var n1 = Number(req.body.n1);  // we request the value of n1 from the body parser that user enter on the web page
  var n2 = Number(req.body.n2); //typecasting the number

  var result = n1 + n2; //result would be n1 + n2;

  res.send("The result of the calculation is " + result); // request send to the web site
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
}); //adding a new path to the server i.e /bmicalculator

//to get a post from the BMI calculator

app.post("/bmiCalculator", function(req,res){
  var weight = parseFloat(req.body.weight); // it will parse the variable and convert into float
  var height = parseFloat(req.body.height);

  var bmi = weight / (height * height);

  res.send("Your BMI is " + bmi);

})

app.listen(3000, function () {
  console.log("server start");
});
