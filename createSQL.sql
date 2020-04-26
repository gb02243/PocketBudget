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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `budget` (
	`budget_id`			int(11)						NOT NULL	AUTO_INCREMENT,
    `user_id`			int(11)						NOT NULL,
	`amount_total`		double(11, 2)	DEFAULT 0	NOT NULL,
    `bills_percent`		double(5, 1)	DEFAULT 0	NOT NULL,
    `food_percent`		double(5, 1)	DEFAULT 0	NOT NULL,
    `gas_percent`		double(5, 1)	DEFAULT 0	NOT NULL,
    `savings_percent`	double(5, 1)	DEFAULT 0	NOT NULL,
    `fun_percent`		double(5, 1)	DEFAULT 0	NOT NULL,
    PRIMARY KEY (`budget_id`),
    FOREIGN KEY (`user_id`) REFERENCES users(`user_id`)
);


insert into `users` (fullname, email, password, city, state, zip) values
('Brandon Derricho', 'bderricho@pocketbudget.com', 'derricho', 'Statesboro', 'GA', 30458),
('Griffin Bryant', 'gbryant@pocketbudget.com', 'bryant', 'Statesboro', 'GA', 30458),
('Dallas Martin', 'dmartin@pocketbudget.com', 'martin', 'Statesboro', 'GA', 30458),
('Toby Burkey', 'tburkey@pocketbudget.com', 'burkey', 'Statesboro', 'GA', 30458);

insert into `budget` (user_id, amount_total, bills_percent, food_percent, gas_percent, savings_percent, fun_percent) values
(1, 100, 20, 20, 20, 20, 20),
(2, 100, 20, 20, 20, 20, 20),
(3, 100, 20, 20, 20, 20, 20),
(4, 100, 20, 20, 20, 20, 20);
