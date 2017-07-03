CREATE DATABASE bbs CHARSET=UTF8;

USE bbs;


CREATE TABLE msg(
 mid        INT PRIMARY KEY AUTO_INCREMENT,
 uname      VARCHAR(30),
 content    VARCHAR(500),
 pubtime 	DATETIME
);

INSERT INTO msg VALUES(null,'js权威指南','小茗同学的前端修炼之路',now());
INSERT INTO msg VALUES(null,'php权威指南','小茗同学的前端修炼之路',now());
INSERT INTO msg VALUES(null,'java权威指南','小茗同学的前端修炼之路',now());
INSERT INTO msg VALUES(null,'nodejs权威指南','小茗同学的前端修炼之路',now());



UPDATE msg SET content=18 WHERE mid=1;