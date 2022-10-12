import { useState, useEffect } from 'react';
import countryAPI from './services/countryAPI';
import weatherAPI from './services/weatherAPI';
import DisplayResults from './components/DisplayResults';


function App() {
  
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  // States
  const [allResults, setAllResults] = useState([]);

  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  const [capital, setCapital] = useState([]);
  const [geoLocation, setGeoLocation] = useState([]);
  const [showCapWeather, setCapWeather] = useState(false);
  const [currCapitalWeather, setCurrCapWeather] = useState("");
  const [weatherQueried, setWeatherQueried] = useState([]);

  useEffect(() => {
    countryAPI
      .getAll()
      .then(allCountries => setAllResults(allCountries));
  }, []);

  useEffect(() => {
    setCapWeather(false);
  }, [capital]);

  // Event-Handlers
  const handleSearchChange = (event) => {
    setSearchString(event.target.value);

    if (event.target.value === "") {
      setSearchResults([]);
      return;
    }
    const matchingCountries = allResults.filter((country) => {
        return country.name.common.toUpperCase().includes(event.target.value.toUpperCase())
        ? country : null;
    });
    setSearchResults(matchingCountries);
  }

  const handleShowCountryBtn = (countryName) => {
    setSearchString(countryName);

    const matchingCountry = allResults.filter((country) => {
      return country.name.common.toUpperCase().includes(countryName.toUpperCase())
      ? country : null;
    });
    setSearchResults(matchingCountry);
  }

  const weatherQueryBtn = (capital) => {
    weatherAPI
      .locateCapital(capital, API_KEY)
      .then(capitalInfo => setGeoLocation({lat: capitalInfo.lat, lon: capitalInfo.lon}))
      .catch(error => console.log(error));
    
    setCapWeather(true);
    setCurrCapWeather(capital);
  }

  useEffect(() => {
    weatherAPI
      .getWeather(geoLocation, API_KEY)
      .then(capitalWeather => {
        setWeatherQueried({
          temp: capitalWeather.main.temp,
          weather: capitalWeather.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${capitalWeather.weather[0].icon}.png`,
          wind: capitalWeather.wind.speed
        });
      })
      .catch(error => console.log(error));
  }, [geoLocation, API_KEY]);

  // JSX
  return (
    <>
      <div>
        <h2>Find a Country:</h2>
        <input
          value={searchString}
          onChange={handleSearchChange}
        ></input>
      </div>
      <div>
        <h2>Results:</h2>
          <DisplayResults
            searchResults={searchResults}
            setCapital={setCapital}
            capital={capital}
            setCapWeather={setCapWeather}
            showCapWeather={showCapWeather}
            weatherQueryBtn={weatherQueryBtn}
            currCapitalWeather={currCapitalWeather}
            weatherQueried={weatherQueried}
            handleShowCountryBtn={handleShowCountryBtn}
          />
      </div>
    </>
  );
}

export default App;