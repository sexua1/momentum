const imgs = ['0.jpg', '1.jpg'];
const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];
const bgImg = document.createElement('img');
// createElement를 사용하면 JS에서 HTML을 생성할 수 있다
bgImg.src = `img/${chosenImg}`;

document.body.appendChild(bgImg);
// append: body 안의 마지막에 지정한 태그를 추가한다
// prepend를 사용하면 가장 위에 추가하게 된다
