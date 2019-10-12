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

GO -- Insert rows into table 'Clients' 
INSERT INTO dbo.bank1
   ([id],[names],[post],[dept],[salary],[status],[createdt])
VALUES
   (4, N'Wendy Nchena','Chelstone','x1',55,'dd','9/9/9'),
   (3,N'Linos Presly','Pembahotmail','x2',55,'dd','6/6/6' ),
   (2,N'Catherine Nikolas','MoscowYandex','x3',66,'xx','2/2/2'),
   (1,N'Lorena Leon','Prahagmail','x4',66,'zm','4/4/4')
GO
SELECT * FROM dbo.bank1
ORDER BY id DESC;
GO -- Insert rows into table 'Transactions' 

