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

  let animal = {
    eats: true
  };
  
  let rabbit = {
    jumps: true,
    proto: animal
  };
  
  // Object.keys는 객체 자신의 키만 반환합니다.
  alert(Object.keys(rabbit)); // jumps
  
  // for..in은 객체 자신의 키와 상속 프로퍼티의 키 모두를 순회합니다.
  for(let prop in rabbit) alert(prop); // jumps, eats

  let animal = {
    eats: true
  };
  
  // 프로토타입이 animal인 새로운 객체를 생성합니다.
  let rabbit = Object.create(animal);