DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    item_id INT(10) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(1000) NOT NULL,
    department_name VARCHAR(1000) NOT NULL,
    price DECIMAL(5,2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    PRIMARY KEY(item_id)
);

USE bamazonDB;

SELECT * FROM products;
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Intex King Kool Inflatable Lounge", "toys and games", 4.67, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Mattel Games UNO Card Game", "toys and games", 4.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Fire TV Stick with Alexa Voice Remote | Streaming Media Player", "electronics", 39.99, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Echo Dot (2nd Generation) - Smart speaker with Alexa - Black", "electronics", 49.99, 0);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("$60 PlayStation Store Gift Card - PS4/ PS3/ PS Vita [Digital Code]", "video games", 59.99, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Super Smash Bros. Ultimate - Nintendo Switch", "video games", 59.99, 70);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Mario Tennis Aces - Nintendo Switch", "video games", 59.88, 40);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Things That Matter: Three Decades of Passions, Pastimes and Politics - Paperback", "books", 12.67, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("The Plant Paradox: The Hidden Dangers in Healthy Foods That Cause Disease and Weight Gain - Hardcover", "books", 17.88, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Haggar Men's Stretch Comfort Twill Expandable Waist 5-Pocket Relaxed Fit ", "clothing, shoes & jewelry", 25.37, 60);