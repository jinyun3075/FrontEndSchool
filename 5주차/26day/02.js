function randomNum(min,max) {
    return Math.floor(Math.random()*(max-min)+min);
}
let count = new Set();
while(count.size<6){
    count.add(randomNum(1,45));
}
console.log([...count].sort((a,b) => a-b));
