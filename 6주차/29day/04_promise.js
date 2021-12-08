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