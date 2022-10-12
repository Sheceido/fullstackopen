import Personel from "./Personel";

const DisplayPersonels = ({persons, deletePerson}) => {
    
    return(
        <>
            <h3>Numbers</h3>
            {persons.map((person) => <Personel key={person.id} person={person} deletePerson={deletePerson}/>)}
        </>
    );
}

export default DisplayPersonels;