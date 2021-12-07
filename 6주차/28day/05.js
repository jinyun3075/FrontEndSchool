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