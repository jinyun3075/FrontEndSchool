# 2021-12-06
## JSON
- .stringify() : jsontype의 문자열
- .parse() : jsontype의 number

## 내장함수

- .repeat()
```js
let s = 'abcde'
s.repeat(2) // abcdeabcde
```

- array.from()
    - 문자열 배열로 만들기 ? 배열일 경우에는 새로운 배열 생성
- array.fill('요소')
    - 요소 채우기

- 새로운 배열 생성방법
    - .split
    - .from
    - [...v]
    - concat()

## sort
```js
//data = [20, 10, 1, 2, 3, 6, 4, 22, 33, 11]
(10) [20, 10, 1, 2, 3, 6, 4, 22, 33, 11]
data.sort(function (a, b) {
  if (a > b) {
      return 1;
  }
  if (a < b) {
     return -1;
  }
  return 0;
});  // or sort((a,b)=>a-b) : 1, 0, -1
//(10) [1, 2, 3, 4, 6, 10, 11, 20, 22, 33]
data
//(10) [1, 2, 3, 4, 6, 10, 11, 20, 22, 33]
data.sort(function (a, b) {
  if (a < b) {
      return 1;
  }
  if (a > b) {
     return -1;
  }
  return 0;
});
//(10) [33, 22, 20, 11, 10, 6, 4, 3, 2, 1]
data
//(10) [33, 22, 20, 11, 10, 6, 4, 3, 2, 1]
```

## call, bind, apply

- scope 변경? 지정되는 this 변경
```js
function sayName(){
  console.log(this.name);
}

var bruce4 = {
  name: 'bruce',
  sayName : sayName
}

var peter4 = {
  name : 'peter',
  sayName : sayName.bind(bruce)
}

peter4.sayName();//Bruce Wayne
bruce4.sayName();//bruce

```

## [data 이동 예시](003.html)
