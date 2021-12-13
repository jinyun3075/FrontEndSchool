function ViewManager(textManager, options) {
    if(!textManager || !options.btnEl || !options.viewerEl || !options.inpTxt){
        // throw 사용자 정의 예외를 만들고 프로그램을 종료합니다.
        throw Error('전달인자중에 빈값이 존재합니다.');
    }
}