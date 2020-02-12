--- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'xxxxxxx';

use presly; 
DROP TABLE IF EXISTS bank3;

CREATE TABLE bank3 (
id INT AUTO_INCREMENT PRIMARY KEY,         
name VARCHAR(99) NOT NULL,
dept VARCHAR(99) NOT NULL,
post VARCHAR(99) NOT NULL,
salary int NOT NULL default '1947',
status varchar(255) NOT NULL DEFAULT 'THIRD',
createdat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);

INSERT INTO bank3 ( name, dept, post)
 VALUES
 ("MORISS Wendy", "Enginering","Director"),   
 ("Lorena Marvin", "Boss","Administrator"),
 ("Nikolas Marvin", "Business","Manager"),  
 ("Marvin Mwenda", "Management","Teacher" ),
 ("Linos Marvin", "PRESIDENT","Oxford" );

select* from bank3