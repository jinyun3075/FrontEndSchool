# front_end_school_html


# 2021.11.30 JS
## 🔄*for문*
1. for
 - 기본 for문사용법
```js
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//출력 1, 2, 3, 4
```
2. for in
 - 배열 인덱스 출력
```js
let a = [10, 20, 30, 40];
for (let i in a) {
    console.log(i);
}
//출력 1, 2, 3, 4
```

3. for of
 - 배열 요소 출력
 ```js
 let a = [10, 20, 30, 40];
for (let i of a) {
    console.log(i);
}
//출력 10, 20, 30, 40
 ```

 4. forEach
  - 리스트에 각 요소를 e매개변수에 받아 심플하게 표현
```js
let a = [10, 20, 30, 40];
a.forEach(e => console.log(e));
//출력 10, 20, 30, 40
```


  ## 🌈*타입*
1. Array(배열)
2. String(문자열)
3. Number(숫자)
4. Boolean(논리값)
5. Object(객체)
6. undefine : undefind
7. null : object
8. NaN : number

##  📡*함수*
1. 함수
    - 전달인자(아규먼트, argument) : add(1,2)
    - 매개변수(파라미터, parameter) : function(a,b){return a+b}
    
2. 콜백함수
    - 함수에서 함수를 받아온다. : cal(add,mul)
```js
 function add(x, y) {
     return x + y;
}

 function mul(x, y) {
     return x * y;
 }

 function cal(a, b){
     return a(10, 10) + b(10, 10);
}

cal(add, mul);
```

3. 화살표 함수
    - 간단한 함수 표현
    - 화살표 기준
        - 왼쪽: 매개변수
        - 오른쪽: 로직
```
let add = (x,y) => x + y;
```

4. 익명함수, 기명함수

## 전개표현식
- ...x
```js
function add(...x){
     return x;
}
add(1, 2, 3, 4, 5);
```

## 선언
- let x : 변수로 사용
- var x : 전역에서 사용할 변수값, 실무X
- const x : 상수

## 전개표현식 사용
* 전개구문 사용 예제
    ```js
    function add(...x){
        return x;
    }

    add(1, 2, 3, 4, 5)
    ```

    ```js
    // 모던자바스크립트 예제(https://ko.javascript.info/rest-parameters-spread)
    let arr1 = [1, -2, 3, 4];
    let arr2 = [8, 3, -8, 1];
    Math.max(1, ...arr1, 2, ...arr2, 25); // 25
    ```

    ```js
    // 모던자바스크립트 예제(https://ko.javascript.info/rest-parameters-spread)
    let arr = [3, 5, 1];
    let arr2 = [8, 9, 15];

    let merged = [0, ...arr, 2, ...arr2];
    ```

## 블록스코프
* 아래 예제에서hojun이 not defined 되었다고 나옵니다.
* [참고 블로그](https://velog.io/@fromzoo/%ED%95%A8%EC%88%98%EC%8A%A4%EC%BD%94%ED%94%84-vs-%EB%B8%94%EB%A1%9D%EC%8A%A4%EC%BD%94%ED%94%84)
    ```js
    if (true){
        let hojun = 100;
    }

    console.log(hojun);
    ```

## 정규표현식
* 특정 패턴을 찾아낼 때 사용
* [연습사이트](https://regexr.com/5nvc2)

## 리터럴
* 리터럴은 코드에 보여지는 타입의 표현을 의미
* 예를 들어 원래 배열을 생성하려면
new Array(4,5,6); 이렇게 해야하지만 [4,5,6] 이렇게 만들수도 있는데요. 이렇게 배열을 의미하는 코드( [4,5,6] )를 배열의 리터럴 표현이라고 합니다.
* 마찬가지로 new Object() 의 리터럴 표현이 {}, new Number(5) 의 리터럴 표현이 5, new String("hello") 의 리터럴 표현이 "hello" 입니다.

## 사용자와 상호작용
* prompt('hello')
* comfirm('hello')
* alert('hello')


# 2021-12-01 js

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
