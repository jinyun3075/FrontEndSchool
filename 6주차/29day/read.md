# 2021-12-08
## 구조분해할당
- 사용
```js
// 이름과 성을 요소로 가진 배열
let arr = [1000, ["Hojun", "Lee"]]

// 구조 분해 할당을 이용해
// firstName엔 arr[0]을
// surname엔 arr[1]을 할당하였습니다.
let [계좌잔고, [firstName, surname]] = arr;

console.log(계좌잔고);
console.log(firstName);
console.log(surname);


let a = [[1, 2], [3, 4], [5, 6]]

for (let [i, j] of a){
    console.log(i, j);
}
```

## try-catch
- 에러 잡는 함수
- 예시 1

```js
//try catch
try {
    alert('try 블록 시작');  // (1) <--
  
    lalala; // 에러, 변수가 정의되지 않음!
  
    alert('try 블록 끝(절대 도달하지 않음)');  // (2)
  
} catch(err) {

alert(`에러가 발생했습니다!`); // (3) <--

}

let json = "{ bad json }";

try {

  let user = JSON.parse(json); // <-- 여기서 에러가 발생하므로
  alert( user.name ); // 이 코드는 동작하지 않습니다.

} catch (e) {
  // 에러가 발생하면 제어 흐름이 catch 문으로 넘어옵니다.
  alert( "데이터에 에러가 있어 재요청을 시도합니다." );
  alert( e.name );
  alert( e.message );
}

try {
    alert( 'try 블록 시작' );
    if (confirm('에러를 만드시겠습니까?')) 이상한_코드();
  } catch (e) {
    alert( 'catch' );
  } finally {
    alert( 'finally' );
  }
```

- 예시2
```js
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  
  // 사용법
  function readUser(json) {
    let user = JSON.parse(json);
  
    if (!user.age) {
      throw new ValidationError("No field: age");
    }
    if (!user.name) {
      throw new ValidationError("No field: name");
    }
  
    return user;
  }
  
  // try..catch와 readUser를 함께 사용한 예시
  
  try {
    let user = readUser('{ "age": 25 }');
  } catch (err) {
    if (err instanceof ValidationError) {
      alert("Invalid data: " + err.message); // Invalid data: No field: name
    } else if (err instanceof SyntaxError) { // (*)
      alert("JSON Syntax Error: " + err.message);
    } else {
      throw err; // 알려지지 않은 에러는 재던지기 합니다. (**)
    }
  }
```

## promise && setTimeout(()=>~~) && 체이닝

```js
// 모던자바스크립트 예제
let promise = new Promise(function(resolve, reject) {
    // 프라미스가 만들어지면 executor 함수는 자동으로 실행됩니다.
  
    // 1초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 'done'이 됩니다.
    setTimeout(() => resolve("끝남!"), 1000);
  });
  console.log('hello world');



  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("끝남!"), 3000);
  });
  
  console.log('hello world');
  promise.then(v => console.log(v));
  console.log('hello world2');
  
  
  // hello world
  // hello world2
  // 끝남!

  // 모던자바스크립트 예제 체이닝
new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)
  
  }).then(function(result) { // (**)
  
    alert(result); // 1
    return result * 2;
  
  }).then(function(result) { // (***)
  
    alert(result); // 2
    return result * 2;
  
  }).then(function(result) {
  
    alert(result); // 4
    return result * 2;
  
  });

  // 모던자바스크립트 예제 체이닝
let p = new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 10000); // (*)
  
  });
  console.log('hello world');
  let p2 = p.then(function(result) { // (**)
  
    console.log(result); // 1
    return result * 2;
  
  });
  console.log('hello world2');
  let p3 = p2.then(function(result) { // (***)
  
    console.log(result); // 2
    return result * 2;
  
  });
  console.log('hello world3');
  let p4 = p3.then(function(result) {
  
    console.log(result); // 4
    return result * 2;
  
  });

// 모던자바스크립트 예제
// 다음 예제는 프라미스 체이닝이 아님!
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  });
  
  promise.then(function(result) {
    alert(result); // 1
    return result * 2;
  });
  
  promise.then(function(result) {
    alert(result); // 1
    return result * 2;
  });
  
  promise.then(function(result) {
    alert(result); // 1
    return result * 2;
  });
```
## 헬콜백
```js
// 정리 전

loadScript('1.js', function(error, script) {

    if (error) {
      handleError(error);
    } else {
      // ...
      loadScript('2.js', function(error, script) {
        if (error) {
          handleError(error);
        } else {
          // ...
          loadScript('3.js', function(error, script) {
            if (error) {
              handleError(error);
            } else {
              // 모든 스크립트가 로딩된 후, 실행 흐름이 이어집니다. (*)
            }
          });
  
        }
      })
    }
  });

  // 정리 후
loadScript("/article/promise-chaining/one.js")
  .then(script => loadScript("/article/promise-chaining/two.js"))
  .then(script => loadScript("/article/promise-chaining/three.js"))
  .then(script => {
    // 스크립트를 정상적으로 불러왔기 때문에 스크립트 내의 함수를 호출할 수 있습니다.
    one();
    two();
    three();
  });
```

## fetch
```js
fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        return json
    })
console.log(1);
console.log(2);

fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(function(json) {
        console.log(2);
        console.log(json);
        return json
    })
    .then(function(json) {
        console.log(3);
        console.log(json.filter(s => s['시·도별(1)'] === '전국'));
        return
    })
```

## 비동기
- async, await
- await은 promiss 끝나고 실행가능
```js
async function f() {
  return 100;
}

f().then(alert);


// 모던 자바스크립트 예제 (살짝 수정)
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 3000)
  });

  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

  alert(result); // "완료!"
    return 100
}

f().then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

});
```

## 이벤트루프
- ~