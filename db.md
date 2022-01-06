# SQL
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

# mongoDB (noSQL)
```
(중요) - insertOne : 하나의 문서만 삽입할 수 있습니다. (블로그 글 작성)
- insertMany : 여러 가지의 문서를 삽입할 수 있습니다.
- insert : 하나 또는 여러가지의 문서를 삽입할 수 있습니다.


(중요) - db.user_info.find() : 모든 데이터 찾기
(중요) - db.user_info.find({}) : 모든 데이터 찾기
- db.user_info.find().pretty()
- db.user_info.find().forEach(printjson)

(중요) - db.user_info.find( { ABO: "B" } ) : 조건만 있는 경우
(중요) - db.user_info.findOne( {"gender":"F"} ) : 조건만 있는 경우
(중요) - db.user_info.findOne({userid : 'licat'})
(중요) - db.user_info.find( {"gender":"F"}, {"name":1} ) : 조건과 보여질 데이터가 함께
(중요) - db.user_info.find( {"gender":"M"}, {"name":1} )
(중요) - db.user_info.find( {}, {"gender":1} )
db.user_info.find( {}, {_id:0, "name":1, "gender":1} ) 
db.user_info.find( {}, {"name":0,"age":0} )
db.user_info.find( {}, {"gender":1,"size.h":1} )
db.user_info.find( {}, {"gender":1,"size.w":1} )
db.user_info.find( {}, {"gender":1,"size.hello":1} )
db.user_info.find({},{"gender":1, "coupon":{"$slice":1}})
db.user_info.find( {}, {"coupon" : {"$slice":1}} )
db.user_info.find( {}, {"coupon":1} )

db.user_info.find({"name.last_name":"mina"}).pretty()
(중요) - db.user_info.update({"name.last_name":"mina"}, {$set:{"size.h":160,"size.w":50}})
db.snacks.update({item:"pepero"}, {$set:{"taste.1":"yogurt", "taste.2":"choco_cookie"}})
(중요) - db.user_info.save({_id : 106, "name.first_name" : "lee", "name.last_name" : "hojun", "age":25})
db.user_info.save({_id:ObjectId(617657d8560fd4aaef69d1a1),"name":"jini", "age":25})

db.user_info.remove({"ABO":"A",1})
db.user_info.deleteOne({"status":"x"})

(회원 탈퇴시 데이터는 삭제하지 않고 이관(필드명 조정), 약관에 해당 사항을 명시)
{
_id : 106, 
"name.first_name" : "lee", 
"name.last_name" : "hojun", 
"age" : 25
"회원탈퇴일" : 2022-10-10
}

db.snacks.find({company:{$eq:"lotte"}})
db.snacks.find({company:"lotte"})
db.snacks.find({"Date.MPD":{$eq : ISODate("2019-12-25")}})
db.snacks.find({"Date.MPD" : ISODate("2019-12-25")})

$lt : lt(Less Than) : 미만
$lte : lte(Less Than Equals) : 이하
$gt : gt(Greater Than) : 초과
$gte : gte(Greater Than Equals) : 이상
$in : in(Valuse in an array) : 값을 포함
$ne : ne(Not Equals)

(중요) - db.snacks.find().sort({price:1})
db.snacks.find().sort({price:-1})
```