const quotes = [
  { quote: '삶이 있는 한 희망은 있다.', author: '키케로' },
  { quote: '하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.', author: '사무엘존슨' },
  { quote: '언제나 현재에 집중할수 있다면 행복할것이다.', author: '파울로 코엘료' },
  { quote: '먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에.', author: '엘사 맥스웰' },
  { quote: '한번의 실패와 영원한 실패를 혼동하지 마라', author: 'F.스콧 핏제랄드' },
  { quote: '행복은 습관이다,그것을 몸에 지니라', author: '허버드' },
  { quote: '성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.', author: '톰 모나건' },
  { quote: '꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.', author: '이소룡' },
  { quote: '마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.', author: '이소룡' },
  { quote: '사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.', author: '괴테' },
];
const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;