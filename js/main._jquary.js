
$(document).ready(function(){




   
         /* header_gnb */

         $('.gnb>li').on('mouseenter', function(e){
            e.preventDefault();
            if(win_w > 768){
               $('.submenu_bg').stop().slideDown();
               $('.submenu').stop().slideDown();
               $('.bar').addClass('on');
            }else{
               $('.gnb>li>a').off('click'); /* 꼭 있어야함! 훨씬 부드럽게 잘됨 */
               $('.gnb>li>a').on('click',function(){
                  $('.submenu').stop().slideUp();
                  $(this).next('.submenu').stop().slideToggle(); /* 자손이 아닌 그다음 관계 next */
               })
            }
         });
         $('header').on('mouseleave', function(){
            if(win_w > 768){
               $('.submenu').stop().slideUp();
               $('.submenu_bg').stop().slideUp();
               $('.bar').removeClass('on');
            }
         });


         
         /* 768버전 gnb button */
         $('.toggle').on('click', function(){
               $('.gnb_wrap').fadeToggle();
         });



        /* gnb bar */

         let bar_offset = [];
        $('.gnb > li').each(function(){
          let num = $(this).offset().left - $('.gnb').offset().left
          bar_offset.push(num);
        });
        console.log(bar_offset);
        
        $('.gnb > li').on('mouseenter',function(){
         let this_w = $(this).width(); 
         let i = $(this).index();
         console.log(this_w)

          $('.bar').width(this_w).css('left',bar_offset[i]);
          
        })


        /* new_in tab_button */

        $('.tab_btn a').click(function(e){
        e.preventDefault(); 

        $('.tab_btn a').removeClass('active');
        $('.tab_btn a').addClass('active');

        var index = $(this).parent().index(); 

        $('.new_in .tab_contents > div').removeClass('active');
        $('.new_in .tab_contents > div').eq(index).addClass('active');
        });



         /* our_best tab_button */

        $('.our_best .tab li').click(function(e) {
        e.preventDefault(); 

        var index = $(this).index();
        console.log(index)

        var activeTab = $(this).attr('data-tab');
        
        $(this).removeClass('on');
        $('.swiper').removeClass('on');

        $(this).addClass('on');
        $('.' + activeTab).addClass('on');
        })



      /* main_con */
      var swiper = new Swiper(".main_con .swiper", { /* 기본 / 모바일 */
      slidesPerView: 'auto',
      loop : true,
      centeredSlides: true,
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
         },
      navigation: {
          nextEl: ".main_con .swiper-button-next",
          prevEl: ".main_con .swiper-button-prev",
      }
    });


       /* our_best */
       var swiper = new Swiper(".our_best .swiper", { 
         slidesPerView: 5, 
         spaceBetween: 30,
         navigation: {
            nextEl: ".our_best .swiper-button-next",
            prevEl: ".our_best .swiper-button-prev",
         },
         autoplay: {
         delay: 1800,
         },
         breakpoints: {
         0:{
            slidesPerView: 3,
         },
         640: { 
            slidesPerView: 3,
         },
         768: { 
            slidesPerView: 4,
         },
         1024: { 
            slidesPerView: 5,
         },
         },
      }); 

 

      /* sns */
      var swiper = new Swiper(".sns .swiper", { 
         slidesPerView: 5,
         spaceBetween:20,
         loop : true,
         autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            },
         navigation: {
            nextEl: ".sns .swiper-button-next",
            prevEl: ".sns .swiper-button-prev",
         },
         breakpoints: {
        0:{
            slidesPerView: 2,
        },
         640: { 
            slidesPerView: 2,
         },
         768: { 
            slidesPerView: 4,
         },
         1024: { 
            slidesPerView: 5,
         },
        },
      }); 
   

 
   });
  
  
  