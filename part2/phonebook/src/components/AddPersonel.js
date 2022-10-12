const AddPersonel = ({addPerson, newName, handleNameChange, newNumber, handleNumberChange}) => {

    return (
        <>
            <h3>Add a New Personel</h3>
            <form onSubmit={addPerson}>
                name:
                <input value={newName} onChange={handleNameChange} />
                <br></br>
                number:
                <input value={newNumber} onChange={handleNumberChange}></input>
                <br></br>
                <button type="submit">add</button>
            </form>
        </>
    );
}

export default AddPersonel;


