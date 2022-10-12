const FilterPersonel = ({searchName, searchNameChange}) => {
    
    return(
        <>
            <h3>Search Phonebook:</h3>
            <input
                value={searchName}
                onChange={searchNameChange}
                placeholder="search is case-sensitive"
            ></input>
        </>
    );
}

export default FilterPersonel;