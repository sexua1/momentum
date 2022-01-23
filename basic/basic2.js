'use strict';
//CSS와 JS를 용도에 맞게 사용하는 것이 중요하다
//JS를 이용하여 HTML문서를 변경하고, HTML에 연결된 CSS로 스타일을 바꿔주는 것이 용도에 맞다
const h1 = document.querySelector('.hello h1');

// function h1ClickHandler() {
//   const currentColor = h1.className;
//   const clickedClass = 'clicked'
//   if (currentColor === clickedClass) {
//     h1.className = '';
//   } else {
//     h1.className = clickedClass;
//   }
// }
//
// className을 사용하게 되면 class를 통째로 바꿔버리기 때문에 다수의 class를 사용할때 적합하지 못하다
// ex) <h1 class= "sexy-font clicked"></h1> (기본으로 적용이 되길 원하는 sexy-font가 사라진다)
// classList를 사용하면 원하는 class존재의 참,거짓을 알 수 있다
// 또한 원하는 class명만 추가, 제거 할 수 있다
//
// function h1ClickHandler() {
//   const currentColor = h1.classList;
//   const clickedClass = 'clicked'; //개발자가 정하는 row value의 경우 편의성과 오류를 줄이기위해 변수에 저장하여 사용하는 것이 적합하다
//   if (currentColor.contains(clickedClass)) {  //h1.classList.contains('클래스 명') / 지정한 클래스명이 h1안에 있는지 확인한다(boolean)
//     currentColor.remove(clickedClass);  //h1.classList.remove('클래스 명') / 지정한 클래스 명만을 지운다
//   } else {
//     currentColor.add(clickedClass); //h1.classList.add('클래스 명') / 지정한 클래스 명만을 추가한다
//   }
// }
// h1.classList.toggle('클래스명')은 h1안에 지정한 클래스가 있는지 확인후, 
// 없으면 지정 클래스를 추가해주고, 
// 있으면 지정 클래스를 제거해 준다. 
// 한마디로 위의 기능을 한줄로 정리해준 function이다
function h1ClickHandler() {
  h1.classList.toggle('clicked');
}
h1.addEventListener('click', h1ClickHandler);
