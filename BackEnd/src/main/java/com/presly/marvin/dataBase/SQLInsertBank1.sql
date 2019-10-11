USE  presly;
GO -- Insert rows into table 'Clients' ################################### 1
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
GO -- Insert rows into table 'Transactions' ################################ 2

