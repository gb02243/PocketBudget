DROP DATABASE IF EXISTS `pocketbudget`;

CREATE DATABASE `pocketbudget`;

USE `pocketbudget`;

CREATE TABLE `users` (
	`user_id`	int(11)			NOT NULL	AUTO_INCREMENT,
    `username`	varchar(45)		NOT NULL,
    `password`	varchar(60)		NOT NULL,
    `name`		varchar(45)		NOT NULL,
    PRIMARY KEY (`user_id`)
);

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

insert into `users` (username, password, name) values
('bderricho', 'derricho', 'Brandon Derricho'),
('gbryant', 'bryant', 'Griffin Bryant'),
('dmartin', 'martin', 'Dallas Martin'),
('tburkey', 'burkey', 'Toby Burkey');

insert into `budget` (user_id, amount_total, bills_percent, food_percent, gas_percent, savings_percent, fun_percent) values
(1, 100, 20, 20, 20, 20, 20),
(2, 100, 20, 20, 20, 20, 20),
(3, 100, 20, 20, 20, 20, 20),
(4, 100, 20, 20, 20, 20, 20);
