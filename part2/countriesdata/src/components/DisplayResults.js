import CapitalWeather from "./CapitalWeather";
import DisplayCountries from "./DisplayCountries";
import DisplaySingleCountry from "./DisplaySingleCountry";

const DisplayResults = ({searchResults,
    setCapital, capital, setCapWeather,
    showCapWeather, weatherQueryBtn,
    currCapitalWeather, weatherQueried,
    handleShowCountryBtn }) => {
    
    if (searchResults.length < 1) {
        return (
            <p>No country found by filter, please specify another.</p>
        );

    } else if (searchResults.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        );

    } else if (searchResults.length === 1) {

        setCapital(searchResults[0].capital);

        return(
            <>
                <DisplaySingleCountry
                    country={searchResults[0]}
                />
                <CapitalWeather
                    capital={capital}
                    weatherQueryBtn={weatherQueryBtn}
                    showCapWeather={showCapWeather}
                    currCapitalWeather={currCapitalWeather}
                    weatherQueried={weatherQueried}
                />
            </>
        );

    } else {
        return(
            <>
                <DisplayCountries
                    searchResults={searchResults}
                    handleShowCountryBtn={handleShowCountryBtn}
                />
            </>
        );
    }
}

export default DisplayResults;