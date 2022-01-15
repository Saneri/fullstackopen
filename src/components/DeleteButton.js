import React from "react";

const deletePerson = (personToDelete, deletePerson, persons, setPersons) => {
  if (!window.confirm(`Delete ${personToDelete.name} ?`)) {
    return;
  }

  deletePerson(personToDelete.id)
    .then(() => {
      setPersons(persons.filter((person) => person.id !== personToDelete.id));
    })
    .catch(() => {
      window.alert(`Error deleting ${JSON.stringify(personToDelete)}`);
    });
};

const DeleteButton = (props) => {
  return (
    <button
      onClick={() =>
        deletePerson(
          props.person,
          props.deletePerson,
          props.persons,
          props.setPersons
        )
      }
    >
      delete
    </button>
  );
};

export default DeleteButton;
