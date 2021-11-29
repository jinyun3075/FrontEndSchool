// 논리연산
// and, or, not
// &&(and) = 논리곱
// ||(or) = 논리합
// !(not) = 부정
// true = 1
// false = 0

let result =0;
for(let i = 0; i < 101 ; i++) {
    // console.log(i);
    if (i % 3 == 0 || i % 5 ==0) {
        result += i;
        console.log(i);
    }
}

// 1. false || true = true
// 2. true && false =false
// 3. !true = false
// 4. !((true && false)||(true && false))=true
// 5. let x =10
//     !((x % 5 ==0 && x % 2 ==0) || (x / 2 == 5 && false)) =false
// 6. let y =10
//     (false && y % 2 == 0) && (y / 2 == 5 && false) =false

// 7. let z= 3
//     (true && z % 3 == 0) || (z / 2 !== 5 && false)=true

// 도모르간 법칙
// !(x || y) === (!x && !y)
// !(x && y) === (!x || !y)

//3항연산자 대체 용법
// true && '완료' || '미완료';

123 + ''
'123'
!!true
true
!!'hojun'
true
!!''
false
!!1
true
!!0
false
!!undefined
false
!!NaN
false

'0' == 0
true
0 == ''
true
0 == '0'
true
false == 'false'
false
false == '0'
true
false == null
false
false == undefined
false
false == NaN
false
!!null
false
!!undefined
false
!!NaN
false

// 형변환
let x
-x
+x   //num
!!x  //boolean
1+'' //String