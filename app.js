// const apikey = "4112c7a38e28419eb39125832241102";
// const apiurl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");



// async function checkWeather(city) {
//     const response = await fetch(`${apiurl}${city}&key=${apikey}`);

//     if (response.status == 404) {
//         document.querySelector(".error").style.display = "block";
//         document.querySelector(".weather").style.display = "none";
//     } else {
//         let data = await response.json();
//         console.log(data);

//         if (data.current && data.current.temp_c !== undefined) {
//             document.querySelector(".city").innerHTML = data.location.name;
//             document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
//             document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
//             document.querySelector(".wind").innerHTML = data.current.wind_kph + "Km/h";
//         } else {
//             // If temperature data is missing or undefined, handle it here
//             console.error("Temperature data is missing or undefined");
//         }

//         if (data.weather[0].main == "Clouds") {
//             weatherIcon.src = "images/clouds.png";
//         }
//         else if (data.weather[0].main == "Clear") {
//             weatherIcon.src = "images/clear.png";
//         }
//         else if (data.weather[0].main == "Rain") {
//             weatherIcon.src = "images/rain.png";
//         }
//         else if (data.weather[0].main == "Drizzle") {
//             weatherIcon.src = "images/drizzle.png";
//         }
//         else if (data.weather[0].main == "Mist") {
//             weatherIcon.src = "images/mist.png";
//         }

//         document.querySelector(".weather").style.display = "block";
//         document.querySelector(".error").style.display = "none";

//     }

// }
// searchBtn.addEventListener("click", () => {
//     checkWeather(searchBox.value);
// })



const apikey = "4112c7a38e28419eb39125832241102";
const apiurl = "https://api.weatherapi.com/v1/current.json?key=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiurl + apikey + "&q=" + city); // corrected URL format
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
        document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
        document.querySelector(".wind").innerHTML = data.current.wind_kph + "km/h";

        const weatherCondition = data.current.condition.text.toLowerCase();
        if (weatherCondition.includes("cloud")) {
            weatherIcon.src = "images/clouds.png";
        } else if (weatherCondition.includes("clear")) {
            weatherIcon.src = "images/clear.png";
        } else if (weatherCondition.includes("rain")) {
            weatherIcon.src = "images/rain.png";
        } else if (weatherCondition.includes("drizzle")) {
            weatherIcon.src = "images/drizzle.png";
        } else if (weatherCondition.includes("mist")) {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

