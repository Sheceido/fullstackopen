import axios from 'axios';

const locateCapital = (capital, API_KEY) => {
    return axios
        .get(`https://api.openweathermap.org/geo/1.0/direct?q=${capital}&appid=${API_KEY}`)
        .then(response => response.data[0])
}

const getWeather = (geoLocation, API_KEY) => {
    return axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${geoLocation.lat}&lon=${geoLocation.lon}&appid=${API_KEY}`)
        .then(response => response.data)
}

const weatherAPI = {locateCapital, getWeather}
export default weatherAPI;