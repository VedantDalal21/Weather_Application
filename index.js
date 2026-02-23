// 1.
let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_date_time");
let w_forcast = document.querySelector(".weather_forcast");
let w_icon = document.querySelector(".weather_icon");
let w_temprature = document.querySelector(".weather_temperature");
let w_minTem = document.querySelector(".weather_min");
let w_maxTem = document.querySelector(".weather_max");

let w_feelsLike = document.querySelector(".weather_feelsLike");
let w_humidity = document.querySelector(".weather_humidity");
let w_wind = document.querySelector(".weather.wind");
let w_pressure = document.querySelector(".weather_pressure");

// to get the actual country name 
// 4
const getCountryName = (code) =>{
   return new Intl.DisplayNames([code], {type: "region"}).of(code)
}

// to get date and time 
// 5
const getDateTime = (dt) =>{
   const curDate = new Date(dt*1000);
   console.log(curDate);

   const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    mintue: "numeric",
   }

   const formatter = new Intl.DateTimeFormat("en-US", options);
   console.log(formatter)
   return formatter.format(curDate);


}

// 2
const getWeatherData = async ()=>{
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=19.07&lon=72.87&appid=17da0c9d91ab9592fee5a927f9497ec5`;
    try {
        const res = await fetch(weatherUrl);
        const data = await res.json();
        // 3. 
        // console.log(data)

        const {main, name, weather, wind, sys, dt} = data;

        // 4.
        cityName.innerHTML = `${name}, ${getCountryName(sys.country)}`;

        // 5.
        dateTime.innerHTML = getDateTime(dt);

        // 6.
        w_temprature.innerHTML = `${main.temp}&#176`;
        w_minTem.innerHTML = `Min: ${main.temp_min.toFixed()}&#176`
        w_maxTem.innerHTML = `Max: ${main.temp_max.toFixed()}&#176`

        w_feelsLike = `${main.feels_like}&#176`
    } catch (error) {
        console.log(error);
    }
}
document.body.addEventListener('load',getWeatherData());



