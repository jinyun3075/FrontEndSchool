function solution(스테이지수, stages) {
    let 실패율 = [];
    let 유저수 = stages.length;

    for (let i = 1; i <= 스테이지수; i++) {
        let 도달한사람수 = stages.filter((user) => user === i).length;
        let 확률 = 도달한사람수/유저수;
        유저수 -= 도달한사람수;
        실패율.push({stage : i, 확률 : 확률});
    }

    // sort의 내림차순
    // b - a
    // sort의 오름차순
    // a - b
    실패율.sort((a, b) => {
        if (a.확률 === b.확률){
            return a.stage - b.stage;
        } else {
            return b.확률 - a.확률;
        }
    });
    
    return 실패율;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);