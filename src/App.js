import React, { useEffect, useState } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import phonebookService from "./services/phonebook";
import Notification from "./components/Notification";
import Error from "./components/Error";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [notification, setNotification] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    phonebookService.getAll().then((persons) => setPersons(persons));
  }, []);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const showError = (message) => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const existingPerson = persons.find((person) => person.name === newName);
    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        phonebookService
          .updateNumber(existingPerson.id, newNumber)
          .then((res) => {
            setPersons(
              persons.map((person) =>
                person.id === existingPerson.id
                  ? { ...person, number: newNumber }
                  : person
              )
            );
            showNotification(`Modified ${existingPerson.name}`);
          })
          .catch(
            showError(
              `failed updating person ${JSON.stringify(existingPerson)}`
            )
          );
      }
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    };
    phonebookService
      .addPerson(newPerson)
      .then((res) => {
        setPersons(persons.concat({ ...newPerson, id: res.data.id }));
        setNewName("");
        setNewNumber("");
        showNotification(`Added ${newPerson.name}`);
      })
      .catch(() => {
        showError(`failed adding person ${JSON.stringify(newPerson)}`);
      });
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <Error message={error} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filter={filter}
        deletePerson={phonebookService.deletePerson}
        setPersons={setPersons}
        showNotification={showNotification}
        showError={showError}
      />
    </div>
  );
};

export default App;
