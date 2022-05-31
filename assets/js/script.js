let weather = {
    "apiKey": "72855eb2caa85cef62fe58ad9093eafc",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=72855eb2caa85cef62fe58ad9093eafc"
            ).then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind; 
        const { lon, lat } = data.coord;
        const newFetchUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon="+ lon + "&exclude=hourly,minutely,current,alerts&appid=72855eb2caa85cef62fe58ad9093eafc";
        
        console.log(newFetchUrl);
        // console.log(latitude);
        // console.log(name, icon, description, temp, humidity, speed, latitude, longitude);
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerHTML = temp + " °C";
        document.querySelector(".humidity").innerHTML = "humidity: " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind Speed: " + speed + " km/h";
        document.querySelector(".latitude").innerHTML = "latitude: " + lat;
        document.querySelector(".longitude").innerHTML = "latitude: " + lon;
    },
    search: function () {
       this.fetchWeather(document.querySelector(".search-bar").value);
    }
} ;

    document.querySelector(".search button").addEventListener("click", function() {
        weather.search();
});

    document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather

var weatherQueryString="https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minute,hourly&appid=3ee1d7a9f54e63abfc09f48b34de5548&units=metric";
    fetch(weatherQueryString)
    .then(function (response) {
      if (!response.ok) {
            throw response.json();
      }
      return response.json();
    })
    .then(function data){
        if (!data{
            generateContainerCityDiv(data);   // to Generate current weather
            generateCityForecastDiv(data);    //to Generate forecast weather
        }
    });

// var display5Day = function(weather){
//         forecastContainerEl.textContent = ""
//         forecastTitle.textContent = "5-Day Forecast:";
    
//         var forecast = weather.list;
//             for(var i=5; i < forecast.length; i=i+8){
//            var dailyForecast = forecast[i];
            
           
//            var forecastEl=document.createElement("div");
//            forecastEl.classList = "card bg-primary text-light m-2";
    
//            //console.log(dailyForecast)
    
//            //create date element
//            var forecastDate = document.createElement("h5")
//            forecastDate.textContent= moment.unix(dailyForecast.dt).format("DD MMM YYYY");
//            forecastDate.classList = "card-header text-center"
//            forecastEl.appendChild(forecastDate);


// let forecast = {
//     "apiKey": "72855eb2caa85cef62fe58ad9093eafc",
//     fetchForecast: function(city){
//         fetch(
//             "https://api.openweathermap.org/data/2.5/forecast?q=" + city +"&units=metric&appid=72855eb2caa85cef62fe58ad9093eafc"
//             fetch (http://api.openweathermap.org/geo/1.0/direct?q=city&limit=1&appid=72855eb2caa85cef62fe58ad9093eafc)
//             ).then((response) => lat = response.lat; lon = response.lon)
//         .then((data) => this.displayForecast(data))
//     },
//     displayForecast: function(data){
//         const { data } = data;
//         const { icon, description } = data.weather[0];
//         const { temp, humidity } = data.main;
//         const { speed } = data.wind; 
//         console.log(name, icon, description, temp, humidity, speed)
//     },



//     search: function () {
//        this.fetchForecast(document.querySelector(".search-bar").value);
//     }
// } ;

//     document.querySelector(".search button").addEventListener("click", function() {
//         weather.search();
// });

//     document.querySelector(".search-bar").addEventListener("keyup", function(event) {
//     if (event.key == "Enter") {
//         weather.search();
//     }
// });


// https://api.openweathermap.org/data/2.5/weather?q=sydney&units=metric&appid=72855eb2caa85cef62fe58ad9093eafc


// let name = prompt("Hello, What is your name?");
// alert("Hello, " + name + " Welcome to my weather dashboard!");





// const notificationElement = document.querySelector(".notification");
// const iconElement = document.querySelector(".weather-icon");
// const tempElement = document.querySelector(".temparature-value p");
// const descElement = document.querySelector(".temparature-description p");
// const locationElement = document.querySelector(".location p");
// const weather = {};

// weather.temparature = {
//     unit: "celcious"
// }

// // my api key
// const apiKey = "72855eb2caa85cef62fe58ad9093eafc"; 

// // check if the brower supports geolocation
// if("geolocation" in navigator){
//     navigator.geolocation.getCurrentPosition( setPosition, showError);
// } else{
//     notificationElement.style.display = "block";
//     notificationElement.innerHTML = "<p>We couldn't find the Geolocation.</p>"
// }

 
// // define users location
// function setPosition(){
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude; 
//     getWeather(latitude, longitude);
// }
// // show error if users location is not found
// function showError(error){
//     notificationElement.style.display = "block";
//     notificationElement.innerHTML = `<p> ${error.message} </p>`
// }



// displayWeather();{
//  iconElement.innerHTML = 
//     `<img src="icons/${weather.iconID}.png"/>`

//     tempElement.innerHTML = 
//         `${weather.temperature.value} ° <span> C </span>`
//     descElement.innerHTML = 
//         weather.description; 
//     locationElement.innerHTML = 
//         `${weather.city}, ${weather.country}`
// }

// function fahrenheitToCelcious (temparature) {
//     return ((temparature - 30)/2);
// }

// tempElement.addEventListener("click", function(){
//     if(weather.temparature.value === undefined) return;
//     if(weather.temparature.unit === "fahrenheit") {
//         let celcious = fahrenheitToCelcious(weather.temparature.value);
//         celcious = Math.floor(celcious);
//         tempElement.innerHTML = `${weather.temparature.value}° <span> C </span>`;
//         weather.temparature.unit = "celcious";
//     } else{
//         tempElement.innerHTML = `${fahrenheit}° <span> F</span>`; 
//         weather.temparature.unit = "fahrenheit"; 
//     }
// })


   
    
    

//     function getWeather(latitude, longitude){
//         let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitudue}&lon=${longitude}&appid=${apiKey}`;



//         fetch(apiURL) .then( function(response){
//             let data = response.json();
//             return data;
//         })

//         .then( function(data){
//             weather.temparature.value = Math.floor(data.main.temp);
//             weather.description = data.weather[0].description;
//             weather.iconId = data.weather[0].icon;
//             weather.city = data.name;
//             weather.country = data.sys.country;
//         })
    
//         .then( function(){
//             displayWeather();
//         });
    
    
//     }




// var cities = [];

// var cityFormEl=document.querySelector("#city-search-form");
// var citySearchEl=document.querySelector("#city");
// var weatherContainerEl=document.querySelector("#current-weather-container");
// var citySearchInputEl = document.querySelector("#searched-city");
// var forecastTitle = document.querySelector("#forecast");
// var forecastContainerEl = document.querySelector("#fiveday-container");
// var pastSearchButtonEl = document.querySelector("#past-search-buttons");

// var formSumbitHandler = function(event){
//     event.preventDefault();
//     var city = citySearchEl.value.trim();
//     if(city){
//         getCityWeather(city);
//         get5Day(city);
//         cities.unshift({city});
//         citySearchEl.value = "";
//     } else{
//         return false;
//     }
//     saveSearch();
//     pastSearch(city);
// }

// var saveSearch = function(){
//     localStorage.setItem("cities", JSON.stringify(cities));
// };

// var getCityWeather = function(city){
//     var apiKey = "72855eb2caa85cef62fe58ad9093eafc"
//     var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

//     fetch(apiURL)
//     .then(function(response){
//         response.json().then(function(data){
//             displayWeather(data, city);
//         });
//     });
// };

// var displayWeather = function(weather, searchCity){
//    //clear old content
//    weatherContainerEl.textContent= "";  
//    citySearchInputEl.textContent=searchCity;

//    //console.log(weather);

//    //create date element
//    var currentDate = document.createElement("span")
//    currentDate.textContent=" (" + moment(weather.dt.value).format("MMM D, YYYY") + ") ";
//    citySearchInputEl.appendChild(currentDate);

//    //create an image element
//    var weatherIcon = document.createElement("img")
//    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
//    citySearchInputEl.appendChild(weatherIcon);

//    var temperatureEl = document.createElement("span");
//    temperatureEl.textContent = "Temperature: " + weather.main.temp + " °C";
//    temperatureEl.classList = "list-group-item"
  
//    //create a span element to hold Humidity data
//    var humidityEl = document.createElement("span");
//    humidityEl.textContent = "Humidity: " + weather.main.humidity + " %";
//    humidityEl.classList = "list-group-item"

//    //create a span element to hold Wind data
//    var windSpeedEl = document.createElement("span");
//    windSpeedEl.textContent = "Wind Speed: " + weather.wind.speed + " MPH";
//    windSpeedEl.classList = "list-group-item"

//    //append to container
//    weatherContainerEl.appendChild(temperatureEl);

//    //append to container
//    weatherContainerEl.appendChild(humidityEl);

//    //append to container
//    weatherContainerEl.appendChild(windSpeedEl);

//    var lat = weather.coord.lat;
//    var lon = weather.coord.lon;
//    getUvIndex(lat,lon)
// }

// var getUvIndex = function(lat,lon){
//     var apiKey = "72855eb2caa85cef62fe58ad9093eafc"
//     var apiURL = `https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=${lon}`
//     fetch(apiURL)
//     .then(function(response){
//         response.json().then(function(data){
//             displayUvIndex(data)
//            // console.log(data)
//         });
//     });
//     //console.log(lat);
//     //console.log(lon);
// }
 
// var displayUvIndex = function(index){
//     var uvIndexEl = document.createElement("div");
//     uvIndexEl.textContent = "UV Index: "
//     uvIndexEl.classList = "list-group-item"

//     uvIndexValue = document.createElement("span")
//     uvIndexValue.textContent = index.value

//     if(index.value <=2){
//         uvIndexValue.classList = "favorable"
//     }else if(index.value >2 && index.value<=8){
//         uvIndexValue.classList = "moderate "
//     }
//     else if(index.value >8){
//         uvIndexValue.classList = "severe"
//     };

//     uvIndexEl.appendChild(uvIndexValue);

//     //append index to current weather
//     weatherContainerEl.appendChild(uvIndexEl);
// }

// var get5Day = function(city){
//     var apiKey = "72855eb2caa85cef62fe58ad9093eafc"
//     var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`

//     fetch(apiURL)
//     .then(function(response){
//         response.json().then(function(data){
//            display5Day(data);
//         });
//     });
// };

// var display5Day = function(weather){
//     forecastContainerEl.textContent = ""
//     forecastTitle.textContent = "5-Day Forecast:";

//     var forecast = weather.list;
//         for(var i=5; i < forecast.length; i=i+8){
//        var dailyForecast = forecast[i];
        
       
//        var forecastEl=document.createElement("div");
//        forecastEl.classList = "card bg-primary text-light m-2";

//        //console.log(dailyForecast)

//        //create date element
//        var forecastDate = document.createElement("h5")
//        forecastDate.textContent= moment.unix(dailyForecast.dt).format("DD MMM YYYY");
//        forecastDate.classList = "card-header text-center"
//        forecastEl.appendChild(forecastDate);

       
//        //create an image element
//        var weatherIcon = document.createElement("img")
//        weatherIcon.classList = "card-body text-center";
//        weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${dailyForecast.weather[0].icon}@2x.png`);  

//        //append to forecast card
//        forecastEl.appendChild(weatherIcon);
       
       

//        var forecastTempEl= document.createElement("span");
//        forecastTempEl.classList = "card-body text-center";
//        forecastTempEl.textContent = dailyForecast.main.temp + " °C";

//         //append to forecast card
//         forecastEl.appendChild(forecastTempEl);

//        var forecastHumEl=document.createElement("span");
//        forecastHumEl.classList = "card-body text-center";
//        forecastHumEl.textContent = dailyForecast.main.humidity + "  %";

//        //append to forecast card
//        forecastEl.appendChild(forecastHumEl);

//         // console.log(forecastEl);
//        //append to five day container
//         forecastContainerEl.appendChild(forecastEl);
//     }

// }

// var pastSearch = function(pastSearch){
 
//     // console.log(pastSearch)

//     pastSearchEl = document.createElement("button");
//     pastSearchEl.textContent = pastSearch;
//     pastSearchEl.classList = "d-flex w-100 btn-light border p-2";
//     pastSearchEl.setAttribute("data-city",pastSearch)
//     pastSearchEl.setAttribute("type", "submit");

//     pastSearchButtonEl.prepend(pastSearchEl);
// }


// var pastSearchHandler = function(event){
//     var city = event.target.getAttribute("data-city")
//     if(city){
//         getCityWeather(city);
//         get5Day(city);
//     }
// }

// // pastSearch();

// cityFormEl.addEventListener("submit", formSumbitHandler);
// pastSearchButtonEl.addEventListener("click", pastSearchHandler);