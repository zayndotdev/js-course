const API_KEY = "";
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

// DOM Elements
const form = document.querySelector(".weather-form");
const input = document.querySelector(".input");
const resultSection = document.querySelector(".weather-result");
const cityElem = document.querySelector(".city");
const tempElem = document.querySelector(".temperature");
const iconElem = document.querySelector(".icon");

// Fetch Weather Data
const getWeatherData = async (city) => {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=no`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return await response.json();
};

// Update UI
const updateUI = (data) => {
  const { name, region, country } = data.location;
  const { temp_c, condition } = data.current;

  cityElem.innerText = `${name}, ${region}, ${country}`;
  tempElem.innerText = `${temp_c}°C`;
  iconElem.src = `https:${condition.icon}`;

  resultSection.classList.remove("hidden");
};

// Handle Form Submit
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = input.value.trim();

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  try {
    const data = await getWeatherData(city);
    updateUI(data);
  } catch (err) {
    alert("Could not fetch weather data. Try another city.");
    console.error(err);
  }
});
