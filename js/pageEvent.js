(function(){

    const wrapEl = document.querySelector('.wrap');
    const gageEl = document.querySelector('.gage');
    const hEl = document.querySelector('h1');
    const boxEl = document.querySelector('.box');

    const handleGage = () => {
        const sct = window.pageYOffset;
        // gageEl.style.width = sct + "px"
        // console.log("페이지 전체 높이값: ", wrapEl.offsetHeight)
        // console.log('브라우저의 높이: ', window.innerHeight)
        // console.log('실제 사용할수 있는값: ', wrapEl.offsetHeight - window.innerHeight)

        const useScroll = wrapEl.offsetHeight - window.innerHeight;
        const per = sct / useScroll * 100;
        const deg = sct / useScroll * 360;
        
        gageEl.style.width = per + "%"

        // *공식
        // =>사용할 스크롤값 : 문서의 높이값 - 브라우저의 높이값
        //         (선택자.offetHeight - window.innerHeight)
        // =>사용할 스크롤 퍼센트 처리 : 사용할 스크롤 / 사용할수 있는 스크롤값 * 100 + '%'
        //         (pageYoffset / 계산해둔 사용할 스크롤값 * 100)

        hEl.style.left = -per + "%"

        boxEl.style.transform = `rotateZ(${deg}deg)`
    }

    window.addEventListener('scroll', handleGage)

})();//end