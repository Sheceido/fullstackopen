const Personel = ({person, deletePerson}) => {
    
    return (
        <p>
            {person.name} : {person.number}
            <button onClick={() => deletePerson(person)}>Delete</button>
        </p>
    );
}

export default Personel;