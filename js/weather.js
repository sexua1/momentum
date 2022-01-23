'use strict';
const API_KEY = 'bf7db2b19cf1fcae388bcf441a80b4be';

function onGeoSuccess(position) {
  const lat = position.coords.latitude; // 위도
  const lon = position.coords.longitude; // 경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url) //
    .then((response) => response.json())
    .then((data) => {
      const cityName = document.querySelector('#weather span:first-child');
      const weather = document.querySelector('#weather span:last-child');
      cityName.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
