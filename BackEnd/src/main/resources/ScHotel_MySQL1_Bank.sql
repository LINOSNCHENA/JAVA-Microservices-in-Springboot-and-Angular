--- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'xxxxxxx';

use presly; 
DROP TABLE IF EXISTS bank1;

CREATE TABLE bank1 (
id INT AUTO_INCREMENT PRIMARY KEY,         
name VARCHAR(99) NOT NULL,
dept VARCHAR(99) NOT NULL,
post VARCHAR(99) NOT NULL,
salary int NOT NULL default '1947',
status varchar(255) NOT NULL DEFAULT 'FIRST',
createdat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);

INSERT INTO bank1 ( name, dept, post)
 VALUES 
 ("Marvin Mwenda", "Management","Teacher" ),
 ("Engineer Brno", "Engineering"," Engineer" ),
 ("Lorena JACKSON", "Human Resource","Executive" ),
 ("Tanzania Marvin", "Management","Director" ),
 ("Linos Marvin", "PRESIDENT","Oxford" );

select* from bank1