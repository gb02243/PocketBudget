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
var currentUser = { user_id: null, fullname: null, email: null, city: null, state: null, zip: null };

//post for submit transaction
app.post('/submitTransaction', (req, res) => {
  transCategory = req.body.transCategory;
  transAmount = req.body.transAmount;
  transDesc = req.body.transDesc;

  var query = `INSERT INTO transaction (user_id, category, amount, description) VALUES (${currentUser.user_id}, '${transCategory}', ${transAmount}, '${transDesc}')`;
  conn.query(query, function(err, result) {
    if (err) console.log(err);
    res.redirect('dashboard');
  });
});

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

  var query = `INSERT INTO budget (user_id, amount_total, bills_percent, food_percent, gas_percent, savings_percent, fun_percent) VALUES (${currentUser.user_id}, ${totalBudget}, ${billAmt}, ${foodAmt}, ${gasAmt}, ${savingsAmt}, ${funAmt})`;
  conn.query(query, function(err, result) {
    if (err) console.log(err);
    res.redirect('dashboard');
  });
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
  var totalSpending = 0, spendingBillAmt = 0, spendingFoodAmt = 0, spendingGasAmt = 0, spendingSavingsAmt = 0, spendingFunAmt = 0;
  var query = `SELECT * FROM budget WHERE user_id = '${currentUser.user_id}'`;
  conn.query(query, function(err, result) {
    if(err) console.log(err);
    if(result.length > 0){
      billAmt = result[0].bills_percent;
      foodAmt = result[0].food_percent;
      gasAmt = result[0].gas_percent;
      savingsAmt = result[0].savings_percent;
      funAmt = result[0].fun_percent;
      var amount_total = result[0].amount_total;
    }
    var query2 = `SELECT * FROM transaction WHERE user_id = '${currentUser.user_id}'`;
    conn.query(query2, function(err, result) {
      if(err) console.log(err);
      if(result.length > 0){
        for(counter = 0; counter < result.length; counter++){
          if(result[counter].category == "Bills"){
            spendingBillAmt += result[counter].amount;
            totalSpending += result[counter].amount;
          }else if (result[counter].category == "Food") {
            spendingFoodAmt += result[counter].amount;
            totalSpending += result[counter].amount;
          }else if (result[counter].category == "Gas") {
            spendingGasAmt += result[counter].amount;
            totalSpending += result[counter].amount;
          }else if (result[counter].category == "Savings") {
            spendingSavingsAmt += result[counter].amount;
            totalSpending += result[counter].amount;
          }else if (result[counter].category == "Fun") {
            spendingFunAmt += result[counter].amount;
            totalSpending += result[counter].amount;
          }
        }
      }
      res.render('dashboard', {
        totalSpending:totalSpending,
        spendingBillAmt:spendingBillAmt,
        spendingFoodAmt:spendingFoodAmt,
        spendingGasAmt:spendingGasAmt,
        spendingSavingsAmt:spendingSavingsAmt,
        spendingFunAmt:spendingFunAmt,
        billAmt:billAmt,
        foodAmt:foodAmt,
        gasAmt:gasAmt,
        savingsAmt:savingsAmt,
        funAmt:funAmt,
        amount_total:amount_total,
        user_id: currentUser.user_id,
        fullname: currentUser.fullname,
        email: currentUser.email,
        city: currentUser.city,
        state: currentUser.state,
        zip: currentUser.zip
      });
    });
  });
});

// route for enter_transaction
app.get('/enter_transaction', (req, res) => {
  res.render('enter_transaction');
});

//route for transactions
app.get('/view_transactions',(req, res) => {
  var query = `SELECT * FROM transaction WHERE user_id = '${currentUser.user_id}'`;
  conn.query(query, (err, result) => {
    if (err) throw err;
    res.render("transaction", {
      result:result
    });
  });
});

app.post('/signup', (req, res) => {
  var user = {
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip
  };
  var query = `INSERT INTO users (fullname, email, password, city, state, zip) VALUES ('${user.fullname}', '${user.email}', '${user.password}', '${user.city}', '${user.state}', ${user.zip})`;
  conn.query(query, function(err, result) {
    if (err) console.log(err);
    var query2 = `SELECT * FROM users WHERE email = '${user.email}' AND password = '${user.password}'`;
    conn.query(query2, function(err, result) {
      if(err) console.log(err);
      if(result.length > 0){
        currentUser.user_id = result[0].user_id;
        currentUser.fullname = result[0].fullname;
        currentUser.email = result[0].email;
        currentUser.city = result[0].city;
        currentUser.state = result[0].state;
        currentUser.zip = result[0].zip;
        res.redirect('create_budget');
      }
    });
  });
});

app.post('/login', (req, res) => {
  var login = { email: req.body.email, password: req.body.password };
  if(login.email && login.password){
    var query = `SELECT * FROM users WHERE email = '${login.email}' AND password = '${login.password}'`;
    conn.query(query, function(err, result) {
      if(err) console.log(err);
      if(result.length > 0){
        currentUser.user_id = result[0].user_id;
        currentUser.fullname = result[0].fullname;
        currentUser.email = result[0].email;
        currentUser.city = result[0].city;
        currentUser.state = result[0].state;
        currentUser.zip = result[0].zip;
        res.redirect('dashboard');
      }
      else res.send('Invalid email and password!');
    });
  }else res.send('Please enter an email and password!');
});

function trailZero(x){
  return Number.parseFloat(x).toFixed(2);
}

//server listening
app.listen(8000, () => {
  console.log('Server is running at port 8000');
});
