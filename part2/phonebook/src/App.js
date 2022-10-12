import { useState, useEffect } from 'react';
import bookService from './services/bookService';
import AddPersonel from './components/AddPersonel';
import DisplayPersonels from './components/DisplayPersonels';
import FilterPersonel from './components/FilterPersonel';
import ErrorNotification from './components/ErrorNotif';
import SuccessNotification from './components/SuccessNotif';

const App = () => {
  
  const notifTimer = 4000;
  // States
  const [persons, setPersons] = useState([]);
  
  const [searchName, setSearchName] = useState("");
  const [displayedPersons, setDisplayedPersons] = useState(persons);
  
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Data Fetch
  useEffect(() => {
    bookService
      .getAll()
      .then(bookList => {
        setPersons(bookList);
        setDisplayedPersons(bookList);
      });
  }, []);

  // Event Handlers
  const searchNameChange = (event) => {
    
    setSearchName(event.target.value);

    if (event.target.value === "") {
      setDisplayedPersons(persons);
      return;
    }
    const matchingNames = displayedPersons.filter((personel) => {
      return personel.name.includes(event.target.value) ? personel : null;
    });
    setDisplayedPersons(matchingNames.length > 0 ? matchingNames : persons);
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const addPerson = (event) => {
  
    event.preventDefault();

    if (newName === "" || newNumber === "") {
      setErrorMessage("Not all relevant information fields have been filled in!");
      setTimeout(() => {
        setErrorMessage("");
      }, notifTimer);
      return;
    }

    const duplicates = persons.filter((person) => {
      return person.name === newName ? person : null;
    });
    
    if (duplicates.length > 0) {

      if (window.confirm(`${duplicates[0].name} is already added to the phonebook, replace the old number with this new one?`)) {
        const personToUpdate = persons.find(p => p.id === duplicates[0].id);
        const updatedObject = { ...personToUpdate, number: newNumber}

        bookService
          .updateNumber(duplicates[0].id, updatedObject)
          .then(updatedPerson => {
            setPersons(persons.map(p => p.id !== updatedPerson.id ? p : updatedPerson));
            setDisplayedPersons(persons.map(p => p.id !== updatedPerson.id ? p : updatedPerson));

            setSuccessMessage(`${updatedPerson.name}'s number has sucessfully been updated.`);
            setTimeout(() => {
              setSuccessMessage("");
            }, notifTimer);
          })
          .catch(error => {
            setErrorMessage(`${duplicates[0].name}'s info has already been removed from the server.`);
            setTimeout(() => {
              setErrorMessage("");
            }, notifTimer);

            setPersons(persons.filter(p => p.id !== duplicates[0].id));
            setDisplayedPersons(persons.filter(p => p.id !== duplicates[0].id));
          });
        setNewName("");
        setNewNumber("");
      }
    
    } else {
        const personObject = {
          name: newName,
          number: newNumber,
          id: persons.length + 1,
        }

        bookService
          .addPerson(personObject)
          .then(addedPerson => {
            setPersons(persons.concat(addedPerson));
            setDisplayedPersons(displayedPersons.concat(addedPerson));

            setSuccessMessage(`${addedPerson.name}'s number has sucessfully been added to the phonebook.`);
            setTimeout(() => {
              setSuccessMessage("");
            }, notifTimer);
          })
          .catch(error => {
            setErrorMessage(`error occurred while trying to process new personel "${newName}".`);
            setTimeout(() => {
              setErrorMessage("");
            }, notifTimer);
          });

        setNewName("");
        setNewNumber("");
    }
  }

  const deletePerson = (person) => {
    if (window.confirm(`Are you sure you want to delete ${person.name} from the phonebook?`)) {
      bookService
        .deletePerson(person.id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== person.id));
          setDisplayedPersons(persons.filter(p => p.id !== person.id));

          setSuccessMessage(`${person.name}'s information has successfully been deleted.`);
          setTimeout(() => {
            setSuccessMessage("");
          }, notifTimer);
        })
        .catch(error => {
          setErrorMessage(`error occurred while trying delete "${person.name}".`);
          setTimeout(() => {
            setErrorMessage("");
          }, notifTimer);
        });
    }
  }

  // JSX
  return (
    <div>
      <ErrorNotification message={errorMessage} />
      <SuccessNotification message={successMessage} />
      <h1>Phonebook</h1>

      <FilterPersonel
        searchName={searchName}
        searchNameChange={searchNameChange}
      />

      <AddPersonel
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <DisplayPersonels persons={displayedPersons} deletePerson={deletePerson}/>
    </div>
  )
}

export default App