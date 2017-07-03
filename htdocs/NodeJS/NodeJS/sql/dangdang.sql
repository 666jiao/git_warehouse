CREATE DATABASE dangdang CHARSET=UTF8;

USE dangdang;


CREATE TABLE book(
 bid        INT PRIMARY KEY AUTO_INCREMENT,
 title		VARCHAR(100),
 price      DECIMAL(10,2),
 pubdate    DATETIME,
 intro 		VARCHAR(1000)
);



INSERT INTO book VALUES(null,'js权威指南',23.56,'2011-2-25','js权威指南');
INSERT INTO book VALUES(null,'css权威指南',24.56,'2012-2-25','js大全');
INSERT INTO book VALUES(null,'php权威指南',25.56,'2013-2-25','犀牛书');
INSERT INTO book VALUES(null,'nodejs权威指南',26.56,'2014-2-25','精通js指南');