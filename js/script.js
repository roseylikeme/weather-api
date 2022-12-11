"use strict";

// init vars here
let cityDropdown = document.getElementById("cityDropdown");
let cityNamePlaceholder = document.getElementById("city");
let cityTemp = document.getElementById("temp");
let cityDescription = document.getElementById("description");
let cityWinds = document.getElementById("winds");
let cityHumidity = document.querySelector('.humidity');

window.onload = function () {
    initCityDropdown(); // Load list of cities when loading is finished
    cityDropdown.onchange = getWeather; // When a City is Selected ... run get weather
};

function initCityDropdown() {
    let option = new Option("Select a City", "select");
    cityDropdown.appendChild(option);
    // Grab cities from cities.js and put them in a dropdown list
    for (let city of cities) {
        let option = new Option(city.name, city.name);
        cityDropdown.appendChild(option);
    }
}

// Grab the latitude and longitude from selected city 
function getWeather() {
    for (let city of cities) {
        if (city.name == cityDropdown.value) {
            fetch(`https://api.weather.gov/points/${city.latitude},${city.longitude}`)
                .then((response) => response.json())
                .then(data => {
                    fetch(data.properties.forecast)
                    .then(response => response.json())
                    .then((newData) => {
                        displayWeather(newData);
                        console.log(newData)
                    });
                })
                //TODO: If data could not be fetched, display on screen to try a different city
        }
    }
}

function displayWeather(data) {
    for (let city of cities){
        if (city.name == cityDropdown.value) {
            cityNamePlaceholder.innerHTML = city.name;
        }
    }

    for (let period of data.properties.periods) {
        // ONLY GRAB THE FIRST PERIOD
        if (period.number == 1){
            cityTemp.innerHTML = `${period.temperature} ${period.temperatureUnit}`
            //TODO: If there is no detailed forecast, then return shortForecast
            cityDescription.innerHTML = `Forecast: ${period.detailedForecast} <br><br>`
            cityWinds.innerHTML = `Winds: ${period.windSpeed}`
        }
    }
    
}