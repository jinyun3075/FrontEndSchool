let record = [
    "Enter uid1234 Muzi", 
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
]

function solution(record) {
    let answer = [];
    let 유저정보 = {};
    let result = [];
    
    for (const iterator of record) {
        let [상태, 아이디, 닉네임] = iterator.split(' ');
        if(상태 === 'Enter') {
            유저정보[아이디] = 닉네임;
            result.push([아이디, '님이 들어왔습니다.']);
        } else if( 상태 === 'Leave') {
            result.push([아이디, '님이 나갔습니다.']);
        } else if (상태 === 'Change') {
            유저정보[아이디] = 닉네임;
        }
    }
    for (const iterator of result) {
        console.log(iterator);
        answer.push(유저정보[iterator[0]],iterator[1]);
    }
    return answer
}
solution(record);