document.addEventListener(
    "DOMContentLoaded",
    function() {
        $("#city-info").hide();
        $("#error").hide();
        showCity(city);
    },
    false
);
var result;

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
        console.log("url?:", result);
    return result;
}

findGetParameter(result);

console.log(result);

var city = "berlin";

function search(ele) {
    if (event.keyCode == 13) {
        city = ele.value;
        ele.value = "";
        showCity();
    }
}

function showCity() {
    var cityData = "https://restcountries.eu/rest/v2/capital/" + city;
    var weatherData =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=2a89476975659f19c3df8b6c72e7dfa0";

    var cityInfo = document.getElementById("city-info");
    var cityCity = document.getElementById("city-city");
    var cityCur = document.getElementById("city-cur");
    var cityCurrency = document.getElementById("city-currency");
    var cityCountry = document.getElementById("city-country");
    var cityDeg = document.getElementById("city-deg");
    var cityDesc = document.getElementById("city-desc");
    var cityWeather = document.getElementById("city-weather");
    var error = document.getElementById("error");

    fetch(cityData)
        .then(response => {
            return response.json();
        })
        .then(data => {
            $(error).hide();
            $(cityCity).empty();
            $(cityCountry).empty();
            $(cityCur).empty();
            cityCity.innerHTML += "<p><h1>" + data[0].capital + ", </h1></p>";
            cityCountry.innerHTML += "<p><h2>" + data[0].name + "</h2></p>";
            cityCur.innerHTML +=
                "<p><h2> " + data[0].currencies[0].code + "</h2></p>";
            $(cityInfo).show();
            $(cityWeather).show();
            $(cityDeg).show();
            $(cityCurrency).show();
        })
        .catch(err => {
            $(cityInfo).hide();
            $(cityWeather).hide();
            $(cityDeg).hide();
            $(cityCurrency).hide();
            $(error)
                .empty()
                .show();
            error.innerHTML += '<p><h2>Could not find any capital with the name:</h2><h1>"' + city + '"</h1><h2>' + '</h2></p>';
            console.log("city info error", error);
        });

    fetch(weatherData)
        .then(response => {
            return response.json();
        })
        .then(data => {
            weatherType = data.weather[0].main;
            weatherDesc = data.weather[0].description;
            weather = weatherType.toLowerCase();
            deg = Math.round(data.main.temp);
            $(cityDeg).empty();
            $(cityWeather).empty();
            $(cityDesc).empty();
            cityDeg.innerHTML += "<p><h1>" + deg + "°" + "</h1></p>";
            cityWeather.innerHTML +=
                '<svg class="icon icon-cloud-' +
                weather +
                '"><use xlink:href="#icon-cloud-' +
                weather +
                '"></use></svg>';
            cityDesc.innerHTML += "<p><h2>" + weatherDesc + "</h2></p>";
            console.log("description", data.weather[0].main);
        })
        .catch(err => {
            console.log("weather error:", error);
        });
}