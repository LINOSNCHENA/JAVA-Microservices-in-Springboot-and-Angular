DROP TABLE IF EXISTS zanaco ; 

CREATE TABLE zanaco (
  id serial PRIMARY KEY,   name VARCHAR(90) NOT NULL,
  post VARCHAR(90), dept VARCHAR(90) default 'HUMAN-RESOURCE',
  salary int default 62005,  status VARCHAR(90) default 'PART-TIME', 
  createdt TIMESTAMP DEFAULT CURRENT_TIMESTAMP );

INSERT INTO zanaco ( name, dept, post, salary )
 VALUES
 ('KENNETH KAUNDA', 'Enginering','Director', 21200 ),   
 ('Lorena Marvin', 'Admin','Administrator', 18500 ),
 ('Nikolas Marvin', 'Engineering','Manager', 18500 ),  
 ( 'JURIOUS NYERERE', 'PRESIDENT','TANZANIA', 32500 );
 
select * from zanaco