//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
//use mysql database
const mysql = require('mysql');
// create express app
const app = express();
//create router
const router = express.Router();

//register partials
hbs.registerPartials(__dirname + '/views/partials');

//create connection
const conn = mysql.createConnection({
  host: '24.125.109.20',
  user: 'hci',
  password: 'hci2020',
  database: 'pocketbudget'
});

//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});

//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//set public folder as static folder for static file
app.use('/assets',express.static(__dirname + '/public'));
app.use('/', router);

var billAmt, foodAmt, gasAmt, savingsAmt, funAmt, totalBudget, remainingFunds;

//post for submit budget
app.post('/submitBudget', (req, res) => {
  inputBillsAmt = req.body.inputBillsAmount;
  inputFoodAmt = req.body.inputFoodAmount;
  inputGasAmt = req.body.inputGasAmount;
  inputSavingsAmt = req.body.inputSavingsAmount;
  inputFunAmt = req.body.inputFunAmount;
  inputBudgetAmt = req.body.inputBudgetAmt;
  totalBudget = inputBudgetAmt;

  billAmt = (inputBillsAmt*0.01)*inputBudgetAmt;
  foodAmt = (inputFoodAmt*0.01)*inputBudgetAmt;
  gasAmt = (inputGasAmt*0.01)*inputBudgetAmt;
  savingsAmt = (inputSavingsAmt*0.01)*inputBudgetAmt;
  funAmt = (inputFunAmt*0.01)*inputBudgetAmt;

  res.redirect('dashboard');
});

//route for homepage
app.get('/',(req, res) => {
  res.render('homepage');
});

//route for homepage
app.get('/homepage',(req, res) => {
  res.render('homepage');
});

//route for onboarding
app.get('/create_budget',(req, res) => {
  res.render('create_budget');
});

//route for dashboard
app.get('/dashboard',(req, res) => {
  res.render('dashboard', {
    billAmt:billAmt,
    foodAmt:foodAmt,
    gasAmt:gasAmt,
    savingsAmt:savingsAmt,
    funAmt:funAmt,
    totalBudget:totalBudget
  });
});

//server listening
app.listen(8000, () => {
  console.log('Server is running at port 8000');
});
