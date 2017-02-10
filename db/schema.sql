CREATE DATABASE carwash_db;
USE carwash_db;


CREATE TABLE `carwash_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC),
  UNIQUE INDEX `password_UNIQUE` (`password` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC));

CREATE TABLE `carwash_db`.`services` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `serviceName` VARCHAR(225) NOT NULL,
  `price` DECIMAL(4,2) NOT NULL,
  `serviceCode` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`));
