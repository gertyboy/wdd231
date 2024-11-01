const myTown = document.querySelector('#town');
const myDecription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#weather-icon');
const currentTemp = document.getElementById('current-temp')
// CREATE REQUIED VARIABLES FOR THE URL
const myKey = "c6ff61a3a0944fdbe6d03222dfec51d0";
const myLat = "40.11";
const myLong = "-111.66";
//CONSTRUCT A FULL PATH USING TEMPLATE LITERALS
const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`
//I TRY TO GRAB THE CURRENT WEATHER DATA
async function apiFetch() {
  try {
    const response = await fetch(myURL);
    const forecast = await fetch(forecastURL);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
      const forecastData = await forecast.json();
      displayForecast(forecastData);
    }
    else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayForecast(forecastData) {
 // console.log(forecastData.list)
  const dayone = document.getElementById("tomorrow-temp");
  const daytwo = document.getElementById("twoday-temp");
  const daythree = document.getElementById("threeday-temp");
  dayone.innerHTML = `${Math.round(forecastData.list[11].main.temp_min)}&deg;F ${forecastData.list[11].weather[0].description}`;
  daytwo.innerHTML = `${Math.round(forecastData.list[19].main.temp_min)}&deg;F ${forecastData.list[19].weather[0].description}`;
  daythree.innerHTML = `${Math.round(forecastData.list[27].main.temp_min)}&deg;F ${forecastData.list[27].weather[0].description}`;
}


function displayResults(data) {
  let temperature = Math.round(data.main.temp);
  currentTemp.innerHTML = `${temperature}&deg;F ${data.weather[0].description}`;
}

apiFetch();