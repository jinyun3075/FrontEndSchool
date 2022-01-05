```
SELECT DISTINCT Country FROM Cu;
SELECT * FROM Cu ORDER BY CustomerID DESC;
SELECT * FROM Cu ORDER BY CustomerName ASC;
SELECT CustomerID AS 회원이름, Country AS 나라 FROM Cu;
SELECT * FROM Customers WHERE CustomerID LIKE '1%' AND City = 'London';

같지 않다 : !=, <>

SELECT CustomerID FROM Cu WHERE CustomerID BETWEEN 30 AND 50;
SELECT CustomerID FROM Cu WHERE CustomerID IN (10, 20, 30);
SELECT CustomerName FROM Customers WHERE CustomerName LIKE 'Paul%';

LIKE 'Paul%', LIKE 'Paul___', '%Paul%'

SELECT CustomerID, CustomerName FROM Cu WHERE CustomerID IS NULL;
UPDATE Cu SET CustomerName='하르방', City='한라산', Country='선계' WHERE CustomerID = 1;
DELETE FROM Cu WHERE CustomerName='hojun';

SELECT * FROM Customers LIMIT 3;


SELECT CustomerID, CustomerName,
       LENGTH(CustomerName) AS 이름길이,
       SUBSTR(CustomerName, 6) AS 자른이름,
       REPLACE(CustomerName, SUBSTR(CustomerName, 0, 6), '******') AS 별표채운이름
FROM Customers;


SELECT CustomerID, City,
CASE
    WHEN CustomerID > 50 THEN '50번을 넘음!'
    WHEN City='London' THEN '도시가 런던!'
    ELSE '50번 이하임!'
END AS '출력 문구'
FROM Customers;


-- OrderID는 Orders라는 table에 있습니다.
-- CustomerName는 Customers라는 table에 있습니다.
-- OrderDate는 Orders라는 table에 있습니다.
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
-- 기준 table은 Orders입니다.
FROM Orders
-- INNER JOIN을 할 table은 Customers입니다.
INNER JOIN Customers
-- INNER JOIN의 기준은 두 table 모두 있는 CustomerID입니다.
ON Orders.CustomerID=Customers.CustomerID;


SELECT City FROM Customers
UNION
SELECT City FROM Suppliers
ORDER BY City;


SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;


SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5;
```