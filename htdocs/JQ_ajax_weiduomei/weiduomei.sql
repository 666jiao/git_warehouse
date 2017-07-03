CREATE DATABASE weiduomei CHARSET=UTF8;

USE weiduomei;



CREATE TABLE dm_cake_type(
 cid       INT PRIMARY KEY AUTO_INCREMENT,
 cname     VARCHAR(100),
 content   INT
);



INSERT INTO dm_cake_type VALUES(null,'巧克力',2);
INSERT INTO dm_cake_type VALUES(null,'芝士',2);
INSERT INTO dm_cake_type VALUES(null,'水果',4);


CREATE TABLE dm_cake(
 id        INT PRIMARY KEY AUTO_INCREMENT,
 name      VARCHAR(100),
 price     DECIMAL(10,2),
 pic       VARCHAR(100),
 cid       INT
);


INSERT INTO dm_cake VALUES(null,'黑巧克力',400000,'1.jpg',1);
INSERT INTO dm_cake VALUES(null,'白巧克力',400000,'2.jpg',1);
INSERT INTO dm_cake VALUES(null,'白芝士',400000,'3.jpg',2);
INSERT INTO dm_cake VALUES(null,'黑芝士',400000,'4.jpg',2);
INSERT INTO dm_cake VALUES(null,'水果1',400000,'5.jpg',3);
INSERT INTO dm_cake VALUES(null,'水果2',400000,'6.jpg',3);
INSERT INTO dm_cake VALUES(null,'草莓',400000,'7.jpg',3);
INSERT INTO dm_cake VALUES(null,'西瓜',400000,'8.jpg',3);
