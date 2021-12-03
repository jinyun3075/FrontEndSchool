function aboutThis() {
    console.log(this);
}

aboutThis();

let myObj = {
    val1: 100,
    func1: function () {
        console.log(this);
    }
}

myObj.func1();