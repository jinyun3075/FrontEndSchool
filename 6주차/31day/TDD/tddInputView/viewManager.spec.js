describe('클릭이벤처리 및 뷰를 담당하는 함수입니다.', ()=>{
    //dependency injection (의존 주입)
    it('viewmanager 에 인자가 잘 전달됐는지 확인합니다.',()=>{
        const textManager = null;
        const btnEl = null;
        const viewerEl = null;
        const inpTxt = null;
        const viewManager = new ViewManager(textManager, { btnEl, viewerEl, inpTxt });

        // 인자가 전달되는지 확인하는 함수
        const actual = viewManager();

        expect(actual).toThrowError();
    })
})