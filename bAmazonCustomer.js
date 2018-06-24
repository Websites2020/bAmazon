var mysql = require("mysql");
var inquirer = require("inquirer");

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
    connection.query("select * from products", function (error, results) {
        if (error) {console.log(error)};
        console.log(results)
        askQuestions()
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

            connection.query("select * from products", function (error, results) {
                if (error) {console.log(error)};
                

                if (results[answers.itemChoice-1].stock_quantity < answers.itemQuantity) {
                    console.log(`Insufficient quantity!`);
                    askQuestions();
                }
                if (results[answers.itemChoice-1].stock_quantity > answers.itemQuantity) {
                    
                    showProducts();
                    function showProducts() {
                        connection.query('UPDATE products SET stock_quantity=stock_quantity - ? WHERE item_id = ?',
                        [
                            answers.itemQuantity, answers.itemChoice
                        
                        ], function (error, results, fields) {
                            if (error) {console.log(error)};
                           
                            showUpdate()
                            function showUpdate() {
                                connection.query("select * from products WHERE item_id = ?", [answers.itemChoice], function (error, results) {
                                    if (error) {console.log(error)};
                                    var value = results[0].price * answers.itemQuantity;
                                    console.log(value);
                                    connection.end()
                                  });
                              }
                          });
                      }
                    
                }
            })
            
    });
  }
  
  