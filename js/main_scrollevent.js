let win_w = window.innerWidth;
let pos = [];
let base_line = -500;
let content = document.querySelectorAll('section');
let scroll_top = document.querySelector('aside');

    let save_offset = ()=>{
        pos = [];
        content.forEach(el =>{
            pos.push(el.offsetTop);
        });
        pos.push(document.getElementsByClassName('footer')[0].offsetTop);
    };
    save_offset();

    window.addEventListener('resize',()=>{
        save_offset();
    });

    window.addEventListener('scroll',()=>{
        let scroll = window.scrollY;



    /* header에 on효과주기 -스크롤시 menu 상단에 fiexed */
    if(scroll > 80){
        document.querySelector('header').classList.add('on');
    }else{
        document.querySelector('header').classList.remove('on');
    }


    /* scroll_top btn on효과주기 */
    if(scroll >= 0 && scroll <= 500){
        scroll_top.classList.remove('on');
    }else{
        scroll_top.classList.add('on');
    }



    /* 각 section 컨텐츠에 on효과 주기 */
    content.forEach((el,i) =>{
        console.log(pos[3]);
        if(scroll >= pos[i] + base_line){
            el.classList.add('on');
        }
    });
 

    scroll_top.addEventListener('click',()=>{
        window.scrollTo({top:0, behavior:"smooth"})
    });
    
    
});


