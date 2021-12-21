//aabbaccc -> 2a2ba3c
//aabbaccc -> aa, bb, ac, cc ->

'aabbaccc'.match(/[a-z]{1}/g);

function solution(s) {
    let answer = s.length;
    let len = s.length;

    for (let i = 1; i < len/2; i++) {
        const re = new RegExp(`[a-z]{${i}}`, 'g');
        console.log(re);
        let 잘린문자열 = s.match(re);
        console.log(잘린문자열);
    }
    return answer
}

solution('aabbaccc')
// step 3
function solution(s) {
    var answer = s.length;
    let len = s.length;

    if (len === 1) return 1;
    
    for(let i = 1; i <= len/2 + 1; i++){ //자르는 크기
        const re = new RegExp(`[a-z]{${i}}`, 'g');
        // console.log(re)
        let 잘린문자열 = s.match(re);
        // console.log(잘린문자열)
        압축문자열 = ''
        let count = 1 //2a2b3c 여기서 앞에 나오는 숫자
        for (j = 0 ; j < 잘린문자열.length; j++) {
            if (잘린문자열[j] === 잘린문자열[j+1]) {
                //aa -> 2a // 뒤에 값을 봐서 같은지!
                count += 1;
            } else if (count === 1) {
                압축문자열 += `${잘린문자열[j]}`;
            } else if (count > 1) {
                // 왜 1보다 크냐면 aa가 1a1a가 아니기 때문!
                압축문자열 += `${count}${잘린문자열[j]}`;
                // 앞 문자열과 뒤 문자열이 다른 경우는
                count = 1;
            }
            // console.log(압축문자열);
        }
        if (len % i !== 0){
            압축문자열 += s.slice(-len % i)
        }
        // console.log(압축문자열);
        answer = Math.min(answer, 압축문자열.length)
    }
    return answer;
}

solution("aabbaccc")
solution("aabbaabbaccc") // accc를 추가하지 못하는 문제 발생


// 번외
// 입력 예시: aaabbcccccca
// 출력 예시: a3b2c6a1

let s = 'aaabbcccccca';
let 압축 = '';
let count = 1

for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]){
                count += 1
    } else if (count >= 1) {
        압축 += `${s[i]}${count}`;
        count = 1;
    }
}

console.log(압축);