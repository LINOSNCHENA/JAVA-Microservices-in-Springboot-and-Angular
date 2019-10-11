-- Create a new table called 'Banking' in schema 'dbo'
IF OBJECT_ID('dbo.bank1', 'U') IS NOT NULL
DROP TABLE dbo.bank1
GO
-- Create the table in the specified schema
CREATE TABLE dbo.bank1
(
   id  INT PRIMARY KEY, -- primary key column
   names  [NVARCHAR](60) NOT NULL,
   post  [NVARCHAR](60) NOT NULL, 
   dept  [NVARCHAR](60) NOT NULL,
   salary  INT DEFAULT '989' not null,  
   status  [NVARCHAR](60) DEFAULT "PembaX" not NULL, 
   createdT DATETIME default GETDATE() not null
);
GO
-- Create the table in the specified schema

