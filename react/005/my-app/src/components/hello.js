function Hello(props) {
    const name = props.name;
    if(name){
      <One name={name}/>
    } else {
      <Two/>
    }
}

function One(){
    return (
        <div>
          <h1>{props.name}</h1>
        </div>
      )
}
function Two(){
    <div>
          <h1>입력된것이 없습니다.</h1>
        </div>
}
export default Hello;