DROP DATABASE IF EXISTS `pocketbudget`;

CREATE DATABASE `pocketbudget`;

USE `pocketbudget`;

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(45) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL,
  `city` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `zip` int(5) NOT NULL,
  PRIMARY KEY (`user_id`)
);

CREATE TABLE `budget` (
  `budget_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `amount_total` double(11, 2)	DEFAULT 0	NOT NULL,
  `bills_percent` double(5, 1) DEFAULT 0 NOT NULL,
  `food_percent` double(5, 1)	DEFAULT 0	NOT NULL,
  `gas_percent` double(5, 1) DEFAULT 0 NOT NULL,
  `savings_percent` double(5, 1) DEFAULT 0 NOT NULL,
  `fun_percent` double(5, 1) DEFAULT 0 NOT NULL,
  PRIMARY KEY (`budget_id`)
);

CREATE TABLE `transaction` (
  `transaction_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `amount` decimal(50,2) NOT NULL,
  PRIMARY KEY (`transaction_id`)
);

ALTER TABLE `budget` ADD CONSTRAINT `budgetUserFK` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `transaction` ADD CONSTRAINT `transactionUserFK` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

insert into `users` (fullname, email, password, city, state, zip) values
  ('Brandon Derricho', 'bderricho@pocketbudget.com', 'derricho', 'Statesboro', 'GA', 30458),
  ('Griffin Bryant', 'gbryant@pocketbudget.com', 'bryant', 'Statesboro', 'GA', 30458),
  ('Dallas Martin', 'dmartin@pocketbudget.com', 'martin', 'Statesboro', 'GA', 30458),
  ('Toby Burkey', 'tburkey@pocketbudget.com', 'burkey', 'Statesboro', 'GA', 30458);

insert into `budget` (user_id, amount_total, bills_percent, food_percent, gas_percent, savings_percent, fun_percent) values
  (1, 1000, 200, 200, 200, 200, 200),
  (2, 1280, 576, 256, 256, 128, 64),
  (3, 1000, 200, 200, 200, 200, 200),
  (4, 1000, 200, 200, 200, 200, 200);

insert into `transaction` (user_id, category, amount, description) values
  (2, 'Bills', 1450, 'Rent'),
  (2, 'Bills', 450, 'Internet Bill'),
  (2, 'Bills', 380, 'Phone Bill'),
  (2, 'Bills', 120, 'Utilities'),
  (2, 'Fun', 300, 'Bowling Shoes'),
  (2, 'Food', 86, 'Walmart'),
  (2, 'Food', 2.50, 'McDonalds'),
  (2, 'Gas', 40, 'Gas'),
  (2, 'Food', 2.50, 'McDonalds'),
  (2, 'Savings', 250, 'Savings Deposit'),
  (2, 'Food', 2.50, 'McDonalds'),
  (2, 'Savings', 1, 'You never know when youre gonna need it'),
  (2, 'Food', 2.50, 'McDonalds'),
  (2, 'Food', 8.75, 'Panda Express'),
  (2, 'Food', 2.50, 'McDonalds');
