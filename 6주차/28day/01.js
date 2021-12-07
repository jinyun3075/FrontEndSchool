//getter 값출력
let user = {
    name: "john",
    surname: "Smith",
    get fullName() {
        return `${this.name}${this.surname}`;
    }
};
alert(user.fullName);

//setter

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