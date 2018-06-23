var Mysql = require("mysql");
var Inquirer = requrie("inquirer");

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'bamazonDB'
  });
   
  connection.connect();
   
  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
    showProducts()
  });

  function showProducts() {
    connection.query('SELECT * FROM `products`', function (error, results, fields) {
        if (error) {console.log(error)};
        console.log(results);
        askQuestion()
      });
  }

  function askQuestions() {
    inquirer.prompt([{
        type: "input",
        name: "itemChoice",
        message: "What is the item_id # of the item you want to purchase?"
    },
    {
        type: "input",
        name: "itemQuantity",
        message: "How many items do you want to purchase?"
    }
        ]).then(answers => {
        if (quantity < answers.itemQuantity) {
            console.log(`Insufficient quantity!`);
            askQuestion();
        }
        if (quantity > answers.itemQuantity) {
            console.log(`good selection!`);
            
        }
    });
  }
  
  connection.end();
  