create database dangdang charset=utf8;


use dangdang;

CREATE TABLE dd_book(
 bid     INT PRIMARY KEY AUTO_INCREMENT,
 bname   VARCHAR(20),
 pic     VARCHAR(32),
 price   DECIMAL(10,2),
 pubdate DATETIME
);


INSERT INTO dd_book VALUES(null,'红楼梦','images/f6.png',51.34,now());
INSERT INTO dd_book VALUES(null,'三国演义','images/f7.png',52.34,now());
INSERT INTO dd_book VALUES(null,'西游记','images/f8.png',53.34,now());
INSERT INTO dd_book VALUES(null,'水浒传','images/f1.png',54.34,now());
INSERT INTO dd_book VALUES(null,'百年孤独','images/f2.png',60.34,now());
INSERT INTO dd_book VALUES(null,'少年维特之烦恼','images/f3.png',20.84,now());
INSERT INTO dd_book VALUES(null,'变形金刚','images/f4.png',26.34,now());
INSERT INTO dd_book VALUES(null,'千与千寻','images/f5.png',29.34,now());
INSERT INTO dd_book VALUES(null,'天空之城','images/f61.png',80.34,now());
INSERT INTO dd_book VALUES(null,'龙猫','images/f62.png',123.34,now());
INSERT INTO dd_book VALUES(null,'速度与激情','images/f16.png',120.34,now());
INSERT INTO dd_book VALUES(null,'武动乾坤','images/f26.png',220.34,now());
INSERT INTO dd_book VALUES(null,'斗破苍穹','images/f46.png',203.34,now());
INSERT INTO dd_book VALUES(null,'尸兄','images/f46.png',23.34,now());
INSERT INTO dd_book VALUES(null,'css大全','images/f6.png',57.34,now());
INSERT INTO dd_book VALUES(null,'css指南','images/f6.png',52.34,now());
INSERT INTO dd_book VALUES(null,'js大全','images/f6.png',53.34,now());
INSERT INTO dd_book VALUES(null,'js指南','images/f6.png',54.34,now());
INSERT INTO dd_book VALUES(null,'js高级','images/f6.png',55.34,now());

