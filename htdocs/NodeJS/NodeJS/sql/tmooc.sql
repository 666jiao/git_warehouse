CREATE DATABASE tmooc CHARSET=UTF8;

USE tmooc;


CREATE TABLE stu(
 sid        INT PRIMARY KEY AUTO_INCREMENT,
 sname      VARCHAR(30),
 score      DOUBLE(10,2),
 schoolTime DATETIME
);

