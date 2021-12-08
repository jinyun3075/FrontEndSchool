//try catch
try {
    alert('try 블록 시작');  // (1) <--
  
    lalala; // 에러, 변수가 정의되지 않음!
  
    alert('try 블록 끝(절대 도달하지 않음)');  // (2)
  
} catch(err) {

alert(`에러가 발생했습니다!`); // (3) <--

}

let json = "{ bad json }";

try {

  let user = JSON.parse(json); // <-- 여기서 에러가 발생하므로
  alert( user.name ); // 이 코드는 동작하지 않습니다.

} catch (e) {
  // 에러가 발생하면 제어 흐름이 catch 문으로 넘어옵니다.
  alert( "데이터에 에러가 있어 재요청을 시도합니다." );
  alert( e.name );
  alert( e.message );
}

try {
    alert( 'try 블록 시작' );
    if (confirm('에러를 만드시겠습니까?')) 이상한_코드();
  } catch (e) {
    alert( 'catch' );
  } finally {
    alert( 'finally' );
  }