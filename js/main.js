const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function(){
  searchEl.classList.add("focused");
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener("blur", function(){
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector("#to-top");

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY>500) {
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    gsap.to(toTopEl, .2, {
      x: 0
    });
  }
  else{
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display:'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
},300));
// _.throttle(함수, 시간) ->시간동안 함수가 한 번 실행됨


toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    //가장 위로 옮겨줌
    scrollTo: 0
  });
})

//gsap.to(요소, 지속시간, 옵션

const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index+1)*.7
  });
});
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container',{
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper(('.promotion .swiper-container'),{
  slidesPerView: 3, //한번에 보여줄 슬라이드 갯수
  spaceBetween: 10, //슬라이드 사이 여백 (px)
  centeredSlides: true, //주 컨텐츠 가운데
  loop: true,
  autoplay:{
    delay: 5000
  },
  speed: 2000, //전환 속도,
  pagination: {
    el: ".promotion .swiper-pagination", 
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper(('.awards .swiper-container'),{
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next"
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    promotionEl.classList.add('hide');
  }
  else{
    promotionEl.classList.remove('hide');
  }

});
// random
// function random(min,max){
//   return parseFloat((Math.random() *(max-min)+min).toFixed(2))
// }
function random(min,max){
  return parseFloat((Math.random() *(max-min)+min).toFixed(2))
}

function floatingObject(selector, delay, size){
  gsap.to(selector, random(1.5,2.5), {
    y: size,
    //자연스러운 애니메이션!
    repeat: -1,
    yoyo: true,
    // gsap easing
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating',.5, 15);
floatingObject('.floating',1.5,20);

// SCROLL MAGIC
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({  //Scene 특정 요소 감시하는 것 지정
      triggerElement: spyEl, //보여줌 여부를 감시할 요소를 지정
      triggerHook: .8 //뷰포트 맨 위 0, 맨 아래 1
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); 
});
//올해 몇년도인지 자동 출력
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();