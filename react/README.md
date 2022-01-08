# React
## 다운
- npx create-react-app {폴더이름}

## 모듈화
- 예
```js
import React from 'react';
import Header from './Header'; 
import Footer from './Footer';
import Main from './Main';
import Product from './Product';
function Body(props) {
    return(
        <div>
            <h1>body h1이다!</h1>
            <Header/>
            <Main/>
            <Product/>
            <Footer/>
        </div>
    )
}

export default Body; //밖에서 사용할 수 있도록 해줍니다!
```

## 변경된 데이터 적용법
```js
import React, { useState } from 'react'; // userState 갖고오기


function Resume(props) {
    const [like, setLike] = useState(""); // like값 초기설정 ""
    function clickLike() {
    if (like === "") {
        setLike("Like");
    } else {
        setLike("");
    }
    }
    const myColor = props.color;
    const styleColor = {color:myColor};
    return(
        <div style={{border:"solid 1px", width:"500px"}}>
            <h1>{props.name} 자기소개서</h1>
            <h1>{props.hello}</h1>
            <h2>취미 : {props.hobby}</h2>
            <h2>좋아하는 음식 : {props.food}</h2>
            <h2>좋아하는 색 : <span style={styleColor}>{myColor}</span></h2>
            <button onClick={clickLike}>!<span>{like}</span>!</button>
        </div>
    )
}

export default Resume;
```

## EventListner
``` js

const Greeting = () => {
    const onMouseEnter = () => {
        console.log("안녕하세요!");
    };

    const onMouseLeave = () => {
        console.log("안녕히가세요");
    };

    return (
    <div>
        <p onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            여기에 마우스를 올려보세요!
        </p>
    </div>
    );
};

const Login = () => {
    const LoginSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    };

    const LoginInput = (e) => {
    console.log("id", e.target.value);
    };

    const passwordInput = (e) => {
    console.log("pw", e.target.value);
    };

    return (
    <form onSubmit={LoginSubmit}>
        <label>
        아이디 : <input type="text" onChange={LoginInput} />
        </label>
        <label>
        비밀번호 :
        <input type="password" onChange={passwordInput} />
        </label>
        <button type="submit">로그인</button>
    </form>
    );
};

export default Greeting;
```