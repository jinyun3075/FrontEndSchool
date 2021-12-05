# 2021.12.03 dom&lotto
## lotto
```js
function randomNum(min,max) {
    return Math.floor(Math.random()*(max-min)+min);
}
let count = new Set();
while(count.size<6){
    count.add(randomNum(1,45));
}
console.log([...count].sort((a,b) => a-b));

//------------------
   
function randomFunc(min, max) {
    let result = Math.fllor(Math.random() * (max-min) +min) ;
    return result;
}
let lottoArr=[];
function lottoGenerator() {
    // while (lottoArr.length < 6) {
    //     let result = randomFunc(1, 46);
    //     let isGot = false;
    //     lottoArr.forEach(element => {
    //         if (element=== result){
    //             isGot =true;
    //         }
    //     });
    //     if(!isGot) {
    //         lottoArr.push(result)
    //     }
    if(!lottoArr.includes(result)) {
        lottoArr.push(result)
    }
}

lottoGenerator();
 
```

## DOM
- id, tag, class 지정하는법
```html
<ul>
    <li id="first-item">one</li>
    <li>two</li>
    <li class="item-last">three</li>
</ul>
<script>
    let item = document.getElementById('first-item');
    let item2 = document.getElementsByClassName('item-last');
    let item2 = document.getElementsByTagName('item-last');
    console.log(item2);
</script>
```

- 연습

```html
<body>
    점심 식단
    <article id="container">
        <ul>
            <li>탕수육</li>
            <li class="item-second">유산슬</li>
            <li>짜장면</li>
        </ul>
    </article>
    저녁 식단
    <article>
        <ul>
            <li>된장국</li>
            <li class="item-second">김치찌게</li>
            <li>해장국</li>
        </ul>
    </article>
    <script>
        let item = document.getElementById('container').getElementsByClassName('item-second');
        let item2 = document.getElementById('container').getElementsByTagName('li');
        let item3 = document.getElementsByTagName('article')[1].getElementsByClassName('item-second');
        console.log(item[0]);
        console.log(item2[0]);
        console.log(item3[0]);
    
    </script>
</body>
</html>
```
- querySelctior(), addEventListner()
```html
<body>
    <button>hello</button>
    <script>
        let btn = document.querySelector('button');
        btn.addEventListener('click', function() {
            btn.classList.toggle("blue");// 클래스를 토글합니다
            btn.classList.remove('blue');// 클래스를 제거합니다.
            btn.classList.contains("blue"); //해당 클래스가 있는지 확인합니다.
        })
    </script>
</body>
</html>
```   
- 사용 예
```html

<style>
    .box {
        margin-top: 50px;
        margin-left: 50px;
        width: 300px;
        height: 300px;
        border: 1px solid black;
    }
    button {
        margin-left: 68px;
    }
    .red {
        background-color: red;
    }
    .green {
        background-color: green;
    }
    .blue {
        background-color: blue;
    }
</style>
<body>
    <div class="box"></div>
    <button id="btn1">red</button>
    <button id="btn2">blue</button>
    <button id="btn3">green</button>
    <script>

        let box = document.querySelector('.box');
        let btn1 = document.querySelector('#btn1');
        let btn2 = document.querySelector('#btn2');
        let btn3 = document.querySelector('#btn3');

        let btnArr = [btn1, btn2, btn3];

        btnArr.forEach((item) => {
            // btn1.addEventListener('click', function(){
            //     box.classList.remove('blue','green');
            //     box.classList.toggle('red');
            // })
            // btn2.addEventListener('click', function(){
            //     box.classList.remove('red');
            //     box.classList.remove('green');
            //     box.classList.toggle('blue');
            // })
            item.addEventListener('click', function(){
                box.classList.remove('blue', 'green', 'red');
                if(item.id === 'btn1') {
                box.classList.toggle('red');
                }else if (item.id === 'btn2'){
                    box.classList.toggle('blue');
                } else {
                    box.classList.toggle('green');
                }
            })
        })

    </script>
</body>
</html>
```
