let searchInputElement = document.querySelector("#search-input");
let cityElement = document.querySelector("#current-city");

function displayTemp(response) {
  let searchTemp = Math.round(response.data.temperature.current);
  let currentTemp = document.querySelector("#current-temperature");
  currentTemp.innerHTML = `${searchTemp}`;
}

function search(event) {
  event.preventDefault();
  let city = searchInputElement.value;
  let apiKey = "26e352304f7b0ef2f4f41oa10096ta71";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  cityElement.innerHTML = `${city}`;
  axios.get(apiUrl).then(displayTemp);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
let searchValue = searchInputElement.value;
let currentDateELement = document.querySelector("#current-date-time");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
