CREATE DATABASE security_db;
USE security_db;

CREATE TABLE devices
(
	id int NOT NULL AUTO_INCREMENT,
	device_name varchar(50) NOT NULL,
	device_status varchar(50) NOT NULL,
	PRIMARY KEY (id)
);
