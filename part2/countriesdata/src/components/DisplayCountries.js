import DisplayName from './DisplayName';

const DisplayCountries = ({searchResults, handleShowCountryBtn}) => {
    return (
        <>
            {searchResults.map((result) =>
                <>
                    <DisplayName key={result.area} name={result.name.common} />
                    <button key={result.area + 100} onClick={() => handleShowCountryBtn(result.name.common)}>show</button>
                    <br />
                    <br />
                </>
            )}
        </>
    );
}

export default DisplayCountries;