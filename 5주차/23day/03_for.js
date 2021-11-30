for (let i = 0; i < 10; i++) {
    if(i==3){
        continue;
    }
    console.log(i);
}

let a = [10, 20, 30, 40];
for (let i of a) {
    console.log(i);
}

let a = [10, 20, 30, 40];
for (let i in a) {
    console.log(i);
}

a.forEach(e => console.log(e));

//기명 함수
//익명 함수