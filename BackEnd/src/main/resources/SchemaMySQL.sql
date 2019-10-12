---ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'xxxxxxx';

use presly; DROP TABLE IF EXISTS bank1;

CREATE TABLE bank1 (
id INT auto_increment PRIMARY KEY,         
name VARCHAR (50) NOT NULL,  
dept VARCHAR (50) NOT NULL,
post VARCHAR (50) NOT NULL, 
salary int default 8080 not null,
status VARCHAR (50) DEFAULT "Temporal" not null,
createdt DATETIME default now());

INSERT INTO bank1 ( name, dept, post, salary )
 VALUES
 ("KENNETH KAUNDA", "Enginering","Director", 21200 ),   ("Lorena Marvin", "Admin","Administrator", 18500 ),
 ("Nikolas Marvin", "Engineering","Manager", 18500 ),  ("JURIOUS NYERERE", "PRESIDENT","TANZANIA", 32500 );

select* from bank1