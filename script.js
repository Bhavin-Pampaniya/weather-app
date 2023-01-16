const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const weatherType = document.getElementById("weather-type")
// const minTemp = document.getElementById("min-temp");
// const maxTemp = document.getElementById("max-temp");
const windSpeed = document.getElementById("wind-speed");
const uv = document.getElementById("uv");
const temp = document.getElementById("temp");

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '2b06be47c4msha72ed02b1d13ccfp1c0223jsn78232a7489cb',
//         'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
//     }
// };
// let URL = `https://community-open-weather-map.p.rapidapi.com/weather?q=london&units=imperial`
// let URL = `https://weatherapi-com.p.rapidapi.com/current.json?q=london`

const getData = async (url, headers) => {
    try {
        const response = await fetch(url, headers);
        const data = await response.json();
        return data
    } catch (error) {
        return error
    }
}




const searchCity = () => {
    const getCityName = cityInput.value;
    //   const options = {
    //     method: 'GET',
    //     headers: {
    //       'X-RapidAPI-Key': '2b06be47c4msha72ed02b1d13ccfp1c0223jsn78232a7489cb',
    //       'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
    //     }
    //   };
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2b06be47c4msha72ed02b1d13ccfp1c0223jsn78232a7489cb',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    //   let URL = `https://community-open-weather-map.p.rapidapi.com/weather?q=${getCityName}&units=imperial`
    // const weatherData = getData(URL, options);
    // const weatherCond = weatherData
    //     .then(data => {
    //         // cityName.innerHTML = data.name
    //         weatherType.innerHTML = data.weather[0].main;
    //         temp.innerHTML = data.main.temp;
    //         minTemp.innerHTML = data.main.temp_min;
    //         maxTemp.innerHTML = data.main.temp_max;
    //     })
    //     .catch(err => Error("someting went wrong", err));

    let URL = `https://weatherapi-com.p.rapidapi.com/current.json?q=${getCityName}`;
    const weatherData = getData(URL, options);
    const weatherCond = weatherData
        .then(data => {
            cityName.innerHTML = data.location.name
            weatherType.innerHTML = data.current.condition.text;
            temp.innerHTML = data.current.temp_f;
            windSpeed.innerHTML = data.current.wind_kph;
            uv.innerHTML = data.current.uv;
        })
        .catch(err => Error("someting went wrong", err)); 
    // console.log(weatherCond)
    cityInput.value = "";

}