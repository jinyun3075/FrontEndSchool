# 2021.12.02 js

## 구현
- 팩토리얼

```js
function factorial(n){
    if(n <= 1) {
        return n
    }
    return n * factorial(n-1)
}

// sigma(5) == 5 * sigma(4) == 5 * 10
// sigma(4) == 4 * sigma(3) == 4 * 6
// sigma(3) == 3 * sigma(2) == 3 * 3
// sigma(2) == 2 * sigma(1) == 2 * 1
// sigma(1) == 1
``` 

- 시그마
```js
function sigma(n){
    if(n <= 1) {
        return n
    }
    return n + sigma(n-1)
}

// sigma(5) == 5 + sigma(4) == 5 + 10
// sigma(4) == 4 + sigma(3) == 4 + 6
// sigma(3) == 3 + sigma(2) == 3 + 3
// sigma(2) == 2 + sigma(1) == 2 + 1
// sigma(1) == 1
```
- DP
```js
// 호출되는 것이 메모리를 차지하고 있으므로 아래 기법을 적절히 믹싱해서 사용할 필요가 있음
// 반복문, 다이나믹 프로그래밍(메모이제이션(하향식), 타뷸레이션(상향식))
let fibo_cache = []
function fibo(n){
  if (n in fibo_cache) {
    return fibo_cache[n]
  }
  fibo_cache[n] = n < 2 ? n : fibo(n-2) + fibo(n-1)
  return fibo_cache[n]
}

// fibo_cache = [0, 1, 1, 2, fibo(2) + fibo(3)]
// fibo(4) == fibo_cache[4] == fibo(2) + fibo(3)
// fibo(2) == fibo_cache[2] == fibo(0) + fibo(1)
// fibo(0) == fibo_cache[0] == 0
// fibo(1) == fibo_cache[1] == 1
// fibo(3) == fibo_cache[3] == fibo(1) + fibo(2)
// fibo(1) == 1
// fibo(2) == 1
```
- 피보나치
```js
function fib(n){
    if(n <= 2) {
        return n
    }
    return fib(n-1) + fib(n-2)
}

// 왼쪽 function만 따라갔으니
// fib(4) == fib(3) + fib(2)
// fib(3) == fib(2) + fib(1) == 3
// fib(2) == 2
// fib(1) == 1

// 오른쪽 값인 fib(2)를 다시 해야하는 상황!!
// fib(2) == 2
```

## 즉시 실행 함수
```
// 기명 즉시 실행 함수
(function foo() {
    var a = 3;
    var b = 5;
    return a * b;
  }());
  
  foo(); // ReferenceError: foo is not defined
  // 어차피 실행하지 못해서 의미가 없음.
  // 메모리 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리
  ```

## map메소드
- 배열 순회 
```js
// map
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// mdn 예제
let array = [1, 4, 9, 16];
let 값1 = array.map(x => x * 2);
```

## forEach
- 배열 순회
```js
let array = [1,2,3,4];
function add(a) {
    return a+1;
}
array.forEach(x => add(x));
//-------------------------------------
let array = [1,2,3,4];
function add(a) {
    return a+1;
}
let c=[] ;
array.map(add).forEach(x => c.push(x+'!'));
console.log(c);
```

## filter
- 조건에 맞는 요소만 가져온다.
```
--- 예시 1 ---
```
```js
let x= [2,6,5,4,8,5,4,3,2,9];
let result = x.filter(x=>x>5);
result;
// 출력 (3) [6, 8, 9]

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// mdn 예제
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// 출력 6글자 이상
const result = words.filter(word => word.length > 6);
console.log(result);

```
    --- 예시 2 ---
```js
//예시 2
let 회원정보 = [{
    아이디 : 'jjang',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '남',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun1@gmail.com',
    가입연도 : '2021-12-02',
    주접속위치 : '125.242.161.149'
}, {
    아이디 : 'jjang2',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '남',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun2@gmail.com',
    가입연도 : '2021-12-02',
    주접속위치 : '125.242.161.149'
}, {
    아이디 : 'jjang3',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '여',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun3@gmail.com',
    가입연도 : '2021-12-02',
    주접속위치 : '125.242.161.149'
}, {
    아이디 : 'jjang4',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '여',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun4@gmail.com',
    가입연도 : '2021-12-02',
    주접속위치 : '125.242.161.149'
}];

회원정보.filter(e1 => e1.성별 === '남');

회원정보.filter(e1 => e1.성별 === '남' && e1.가입연도.valueOf('2022%'));
회원정보.filter(e1 => e1.성별 === '남' && e1.가입연도.split('-')[0]=='2021');

회원정보.find(e1 => e1.아이디==='jjang');
```

    --- 예시 3 ---
```js
// 글이 100개
// 25개는 일상
// 50개는 개발관련 글
// 25개는 취미
let blogs = [{
    id : 1,
    title : 'title1',
    content : 'content1',
    section : 'section1'
}, {
    id : 2,
    title : 'title2',
    content : 'content2',
    section : 'section2'
}, {
    id : 3,
    title : 'title3',
    content : 'content3',
    section : 'section3'
}];

let section = 'section3'
let data = section? blogs.filter(x => x.section==section) 
: blogs.filter(x => x.section!=section);
```
## Map 객체
- 중복을 제거하며 key와 value를 한쌍으로 가지는 배열

```js
let m = new Map();
// Map에 값을 넣기
m.set('하나', '1');
m.set(1, '하나');
m.set(true, 1);
m.set(false, 0);

// Map의 값에 접근하기
console.log(m.get('하나'));
console.log(m.get(true));

// Map의 값이 있는지 확인하기
console.log(m.has('하나'));

// Map의 값을 제거하기
console.log(m.delete('하나'));
console.log(m.has('하나'));
console.log(m);

// Map의 크기를 확인하기
console.log(m.size);
```

## Set 객체
- 중복없이 무작위로 정렬되는 배열

```js
let s = new Set('abcscd');
//Set(5) {'a', 'b', 'c', 's', 'd'}
s.add('f')
//Set(6) {'a', 'b', 'c', 's', 'd', …}
s.delete('a')
//true
// Set(5) {'b', 'c', 's', 'd', 'f'}
s.has('c')
//true
s.forEach(i =>console.log(i));
//b,c,s,d,f
```

- 합집합 시켜버리기
```js
let a = [a,b,c]
let b = [c,d,e]
let c = new Set(a.concat(b));
//Set(5) {'a', 'b', 'c', 'd', 'e'}
```

## Call By
- value : 입력되는 인자를 그대로 프로퍼티로 가져온다.
- reference : 함수 프로퍼티에 전달되는 인자의 주소 그대로를 가져옴
- JavaScript에서는 Call By Value로만 동작한다. Object일때는 reference처럼 동작하지만 Call ByValue로 사용된다.