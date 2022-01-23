'use strict'
const hellos = document.getElementsByClassName('hello');
let h1 = document.querySelector('.hello h1');
console.log(h1);
//querySelector : element를 CSS 방식으로 검색할 수 있게해준다
//같은 조건의 element가 여러개일 경우 첫번째 하나의 값만을 리턴한다
//querySelectorAll : 같은 조건의 모든 element를 리턴받고 싶을 경우 사용한다

function h1ClickHandler() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === 'blue') {
    newColor = 'tomato';
  } else {
    newColor = 'blue';
  }
  h1.style.color = newColor;
}
h1.addEventListener('click', h1ClickHandler); //h1.onclick
// function 뒤의 () 기호는 function의 실행을 의미한다 
// h1.addEventListener('click', h1ClickHandler); 에서는 click 이벤트 발생시 
// addEventListener가 사용자 대신 자동으로 function 뒤에 ()를 붙여주는(실행해주는) 역할을 한다
function mouseEnterHandler() {
  h1.innerText = 'Mouse is here!';
}
function mouseLeaveHandler() {
  h1.innerText = 'Mouse is leave!';
}
h1.addEventListener('mouseenter', mouseEnterHandler); //h1.onmouseenter
h1.addEventListener('mouseleave', mouseLeaveHandler); //h1.onmouseleave
//addEventListener(): 사용자의 이벤트를 읽고 실행할 함수를 설정할 수 있게 해준다

function windowResizeHandler() {
  document.body.style.backgroundColor = 'grey';
  //head, body, title은  document 뒤에 작성하는 것으로 부를 수 있다
}
function windowCopyHandler() {
  alert('copier');
}
function windowOnlineHandler() {
  alert('yes WIFI');
}
function windowOfflineHandler() {
  alert('no WIFI');
}
window.addEventListener('resize', windowResizeHandler);
window.addEventListener('copy', windowCopyHandler);
window.addEventListener('online', windowOnlineHandler);
window.addEventListener('offline', windowOfflineHandler);