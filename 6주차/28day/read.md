# 2021.12.07 클래스, prototype
## 클래스
- 객체의 구조를 저장한다.
- constructor : 생성자
    - 변수를 만들지않아도 자동으로 생성된다.

- class안에는 콤마가 존재하지 않는다
```js
class person {
    x =10; // 변수선언
    constructor() { // 초기선언
        this.name='';
        this.age ='';
    }
    method1() {...}
    method2() {...}
}


```

## Prototype
- 객체의 원형
- array(), Number(), String()은 Object의 상속되어있다.
- 자식에서 선언되지 않은 프로퍼티는 부모클래스에서 찾고 끝에 없을 경우 null

```js
let animal = {
    eats: true,
    walk() {
      alert("동물이 걷습니다.");
    }
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  // 메서드 walk는 rabbit의 프로토타입인 animal에서 상속받았습니다.
  rabbit.walk(); // 동물이 걷습니다.

   // Object.keys는 객체 자신의 키만 반환합니다.
  alert(Object.keys(rabbit)); // jumps
  
  // for..in은 객체 자신의 키와 상속 프로퍼티의 키 모두를 순회합니다.
  for(let prop in rabbit) alert(prop); // jumps, eats

  let animal = {
    eats: true
  };
  
  // 프로토타입이 animal인 새로운 객체를 생성합니다.
  let rabbit = Object.create(animal);
```

## getter,setter
- 접근의 제약을 주어 로직을 갖고 변수에 접근하는 메소드
- 따로 변수를 만들필요가 없다.
```js
//getter 출력
let user = {
    name: "john",
    surname: "Smith",
    get fullName() {
        return `${this.name}${this.surname}`;
    }
};
alert(user.fullName);

//setter 입력

let user = {
    name: "john",
    surname: "Smith",
    get fullName() {
        return `${this.name}${this.surname}`;
    },
    set fullNameSet(value) {
        [this.name, this.surname] = value.split(" ");    
    }
};
user.fullNameSet = "hojun Lee";
console.log(user.name);
console.log(user.surname);
```

- 클래스, 인스턴스

## private
- 접근 제한

```js
class CoffeeMachine {

    #waterAmount = 0;
  
    get waterAmount() {
      return this.#waterAmount;
    }
  
    set waterAmount(value) {
      if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
      this.#waterAmount = value;
    }
  }
  
  let machine = new CoffeeMachine();
  
  machine.waterAmount = 100;
  alert(machine.waterAmount);
  alert(machine.#waterAmount); // Error

let arr = [1, 2, 3];
alert( arr instanceof Array ); // true
alert( arr instanceof Object ); // true
```

## static
- 전역 공간
```js
class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }
  
    static compare(articleA, articleB) {
      return articleA.date - articleB.date;
    }
  }
  
  // 사용법
  let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
  ];
  
  articles.sort(Article.compare);
  
  alert( articles[0].title ); // CSS
```

## 상속
- extends
```js
class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} 은/는 속도 ${this.speed}로 달립니다.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} 이/가 멈췄습니다.`);
    }
  }
  
  let animal = new Animal("동물");

  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} 이/가 숨었습니다!`);
    }
  }
  
  let rabbit = new Rabbit("흰 토끼");
  
  rabbit.run(5); // 흰 토끼 은/는 속도 5로 달립니다.
  rabbit.hide(); // 흰 토끼 이/가 숨었습니다!
```