// holaaaaaa.....

let a = $('#news');
let b = $('#newsbtn');
let c = $('#newsbtn-less');
showHandler();
$(window).resize(()=> {showHandler();});

b.click(() => {
    b.css('display','none');
    a.css('max-height','');
});
c.click(() => {
    b.css('display','');
    a.css('max-height',b.offset().top-a.offset().top+b.height()+10);
});


var swiper = new Swiper('.swiper-container', {
  speed:1000,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
  },
  pagination: {
      el: '.swiper-pagination',
  },
  autoplay: {
      delay: 5000,
      disableOnInteraction: false
  },
});

setInterval(function(){ 
  $('.sponsors img').each(function(i) {
    let left = $(this).width() * -1; 
    if($(this).offset().left <= $(window).width())
      left = $(this).offset().left+1; 
    $(this).offset({left}) ;
  }); 
}, 1);


function showHandler(){
	a.css('max-height',b.offset().top-a.offset().top+b.height()+10);
  // if ($(window).width() < 560) {
  //   $(".img-clip-block").replaceWith("<img src='./res/img/svg/awards.svg'>");
  // }
}
