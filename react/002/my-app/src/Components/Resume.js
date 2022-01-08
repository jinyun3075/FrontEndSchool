import React from "react";

function resume(props) {
    const back = {border:"solid 1px black",width:"500px"};
    return (
        <div style={back}>
            <h1>{props.name} 자기소개서</h1>
            <h1>{props.hello}</h1>
            <h2>취미 : {props.hobby}</h2>
            <h2>좋아하는 음식 : {props.food}</h2>
            <h2>좋아하는 색 : <span style={{color:props.color}}>{props.color}</span></h2>
        </div>
    )
}

export default resume;