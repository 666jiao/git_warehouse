CREATE DATABASE huimaiche CHARSET=UTF8;

USE huimaiche;


SET NAMES GBK;

CREATE TABLE car(
 cid       INT PRIMARY KEY AUTO_INCREMENT,
 cname     VARCHAR(10),
 pic       VARCHAR(100),
 price     DECIMAL(10,2),
 pubtime   DATETIME,
 type      VARCHAR(10)
);


INSERT INTO car VALUES(null,'雪佛兰','1.jpg',400000,now(),'lt1');
INSERT INTO car VALUES(null,'卡宴','2.jpg',400000,now(),'lt2');
INSERT INTO car VALUES(null,'宾利','3.jpg',400000,now(),'lt3');
INSERT INTO car VALUES(null,'凯迪拉克','4.jpg',400000,now(),'lt4');
INSERT INTO car VALUES(null,'凯美瑞','5.jpg',400000,now(),'lt5');
INSERT INTO car VALUES(null,'斯柯达','6.jpg',400000,now(),'lt6');
INSERT INTO car VALUES(null,'玛莎拉蒂','7.jpg',400000,now(),'lt7');
INSERT INTO car VALUES(null,'法拉利','8.jpg',400000,now(),'suv');


CREATE TABLE user(
 uid       INT PRIMARY KEY AUTO_INCREMENT,
 uname     VARCHAR(20),
 upwd      VARCHAR(32)
);


INSERT INTO user VALUES(null,'小明','123.456');
INSERT INTO user VALUES(null,'小刚','123.456');
INSERT INTO user VALUES(null,'小花','123.456');
INSERT INTO user VALUES(null,'小红','123.456');
INSERT INTO user VALUES(null,'小丽','123.456');
INSERT INTO user VALUES(null,'小华','123.456');
INSERT INTO user VALUES(null,'小美','123.456');
INSERT INTO user VALUES(null,'小李','123.456');