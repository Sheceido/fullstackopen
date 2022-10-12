const CapitalWeather = ({capital, weatherQueryBtn, showCapWeather, currCapitalWeather, weatherQueried}) => {

    const weatherPanel = {
        border: "1px solid lightgrey",
        boxShadow: "3px solid grey",
        padding: "10px",
        width: "300px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }
    const imgStyle = {
        border: "1px solid lightgrey",
        width: "100px",
        height: "100px"
    }
    
    if (showCapWeather) {
        return (
            <>
                <br />
                { capital.map(cap =>
                        <button
                            key={cap}
                            onClick={() => weatherQueryBtn(cap)}>Show Weather for {cap}
                        </button>
                )}
                <div style={weatherPanel}>
                    <h3>Showing weather for: {currCapitalWeather}</h3>
                    <p>Temperature: {Math.round(weatherQueried.temp -273.15)}°C</p>
                    <img src={weatherQueried.icon} style={imgStyle} alt=""></img>
                    <p>{weatherQueried.weather}</p>
                    <p>Wind Speed: {weatherQueried.wind} m/s</p>
                </div>
            </>
        );

    } else {
        return (
            <>
                <br />
                { capital.map(cap =>
                        <button
                            key={cap}
                            onClick={() => weatherQueryBtn(cap)}>Show Weather for {cap}
                        </button>
                )}
                <div style={weatherPanel}>
                </div>
            </>
        );
    }

}

export default CapitalWeather;