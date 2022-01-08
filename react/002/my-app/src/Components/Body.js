import React from 'react';
import '../App.css'; //파일의 위치가 달라졌으니 css의 주소도 바꿔줍니다.
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