// 연습문제 1번
let arr = [10, 20, 30, 10, 20, 30, 40 ,10];
let result =0;
let result2 =0;
let avg =0;
for(let i of arr) {
    result += i;
}
avg = result / arr.length;
for(let i of arr) {
    result2 += (i-avg)**2;
}
console.log(result);
console.log(result2/arr.length);

// 연습문제 2번
let str = '5, 4, 10, 2, 5';
str = str.split(', ');
let result =0;
for(let i of str) {
    result+=parseInt(i);
}
console.log(result/str.length);

// 연습문제 3번
let result =0;
let arr = [11, 22, 33, 111, 2]
let str =[];
for(let i of arr) {
    str = (i+'').split('');
    for(let v of str) {
        result += parseInt(v);
    }
}
console.log(result);