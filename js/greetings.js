'use strict';
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
// 같은 String이 반복될 경우엔 대문자 변수안에 할당해주는 것이 효율적이다(오타방지, 편의)
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

// function loginBtnClickLog() {
//   const username = loginInput.value;
//   if (username === '') {
//     alert('please write your name');
//   } else if (username.length > 15) {
//     alert('Please enter it within 15 characters.');
//   } else {
//     alert('hello ' + username);
//   }
// }
// loginButton.addEventListener('click', loginBtnClickLog);
// JavaScript를 사용해 직접 검사로직을 짜도 되지만
// HTML에 내장되어있는 API들을 통해 편리하게 할 수 있다

function onLoginSubmit(event) {
  event.preventDefault();
  const wroteUsername = loginInput.value;
  localStorage.setItem(USERNAME_KEY, wroteUsername);
  // function에 대해 브라우저가 기본적으로 수행하는 동작이 있다.
  // .preventDefault()는 이러한 event의 기본행동을 발생되지 않도록 막는 역할을 한다
  // EventListener안에 속해있는 function이다
  loginForm.classList.add(HIDDEN_CLASSNAME);
  printGreetings();
}

function printGreetings() {
  const username = localStorage.getItem(USERNAME_KEY)
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}
// localStorage를 이용하여 브라우저에 있는 작은 DB를 사용할 수 있다

//localStorage check
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  //show the greeting
  printGreetings();
}

