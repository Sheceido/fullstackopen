const DisplaySingleCountry = ({country}) => {
    
    const languages = []
    for (const [key, value] of Object.entries(country.languages)) {
        languages.push(value);
    }   

    return (
        <>
            <h2>{country.name.common}</h2>
            {country.capital.map((cap, index) =>
                <p key={index}> Capital ({index + 1}): {cap}</p>
            )}
            <p>Population: {(country.population).toLocaleString()}</p>
            <p>Area: {country.area}</p>
            <p>Languages:</p>
            <ul>
                {languages.map( language =>
                    <li key={language}>{language}</li>
                )}
            </ul>
            <br></br>
            <img src={country.flags.png} alt="No Flag Available to Display." style={{border: "1px solid black"}}></img>
        </>
    );
}

export default DisplaySingleCountry;