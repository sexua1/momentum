const clock = document.querySelector('#clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  // padStart(원하는 문자열의 최소 길이, 부족한 문자열에 채워넣을 문자)
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);
// setInterval(실행하길 원하는 함수, 반복되길 원하는 간격으로) 원하는 간격으로 함수 반복실행
// setTimeout(sayHello, 5000);
// setTimeout(실행하길 원하는 함수, 원하는 지연시간) 원하는 시간 뒤에 함수실행
