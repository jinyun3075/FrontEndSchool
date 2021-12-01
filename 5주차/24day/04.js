let person = {
    //key: value
    name: '삼겹살',
    age: 10,
    height : 30,
    weight : 40,
    이력 : {'첫번째직장' : '하나', '두번째직장' : '둘'}
  }

for (let i of data) {
    console.log(i[0], i[1]);
}

for (let i of Object.entries(person)) {
    console.log(i[0], i[1]);
}

for (let [[i, j], k] of [[[1, 2], 2], [[1, 2], 4]]) {
    console.log(i, j, k);
}


console.log(Object.getOwnPropertyDescriptor(person, 'name'));

// value: '삼겹살',
// writable: true, // 변경 가능 여부, 기본값 false
// enumerable: true, // 열거(for) 가능 여부, 기본값 false
// configurable: true // 재정의 가능 여부, 기본값 false