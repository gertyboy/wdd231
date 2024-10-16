const myTown = document.querySelector('#town');
const myDecription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');
const currentTemp = document.getElementById('current-temp')
// CREATE REQUIED VARIABLES FOR THE URL
const myKey = "c6ff61a3a0944fdbe6d03222dfec51d0";
const myLat = "49.75";
const myLong = "6.64";
//CONSTRUCT A FULL PATH USING TEMPLATE LITERALS
const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;
//I TRY TO GRAB THE CURRENT WEATHER DATA
async function apiFetch() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      let temperature = Math.round(data.main.temp);
      currentTemp.innerHTML = temperature
    }
    else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();