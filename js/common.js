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

//올해 몇년도인지 자동 출력
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();