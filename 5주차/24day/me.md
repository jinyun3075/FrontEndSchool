# 2021-12-01

## 함수
- 장점
    - 재사용성
    - 아키텍처 파악
    - 유지보수
- 함수 선언식, 함수 표현식
```js
//선언식
function logic(a,b) {
    return a+b;
}
//표현식
let logic = function(a,b) {
    return a+b;
}
```

- 용어
```js
function login(파라미터) {
    논리 식;
    return;
}
logic(아규먼트)
```

## 호이스팅 
- 대략 순서 (함수 > 변수 ... 외)
```js
console.log(add1(10, 20));
        console.log(add2(10, 20));
        // 호이스팅 되어서 위로 올라갑니다!
        function add1(x, y) {
            return x + y;
        }

        console.log(mul(10, 20));
        let mul = function (a, b) {
            return a * b;
        }

        function add2(x, y) {
            return x + y;
        }
```

## reverse()
- 뒤집기
## sort() 
- 정렬
- 인자
    - (a,b) => a-b ASC 오름차순
    - (a,b) => a-b DESC 내림차순

## Scope
- 블록
```js
if(true) {
    나는 블록
    var a =1;
}
console.log(a); // 1출력
```
- 함수
```js
function logic(a,b) {
    let a = 3;
    let b = 2;
}
logic(10,20)
console.log(a);
console.log(b);// 실패 : 함수 지역에 변수를 사용할 수 없다.

```
## Object()
- Object.Keys(함수1) : 함수1의 key값을 다 가져온다.
- Object.Values(함수2) : 함수2의 value 값을 다 가져온다.
- Object entries(함수3) : 함수3의 Key, Value값을 다 가져온다.
- 사용 예
```js
let person = {
    //key: value
    name: '삼겹살',
    age: 10,
    height : 30,
    weight : 40,
    이력 : {'첫번째직장' : '하나', '두번째직장' : '둘'}
  }
  
  Object.keys(person); // name,age,height,weight,이력{}
  Object.values(person); // '삼겹살', 10, 30, 40 ,{...}


for (let i of Object.entries(person)) {
    console.log(i[0], i[1]); // 0: Key, 1: Value
}

for (let [[i, j], k] of [[[1, 2], 2], [[1, 2], 4]]) {
    console.log(i, j, k); // {1,2,2} {1,2,4}
}
```
## new Date()
```js
let date = new Date();
date.getDate(); // 날짜 0 = 1월, 1 = 2월 
date.getMonth(); // 달 1 = 1
date.getDay(); // 요일 0 = 일, 1 = 월 ..... 6 = 금
date.getSeconds(); //초
```
