import React from "react";

const deletePerson = (
  personToDelete,
  deletePerson,
  persons,
  setPersons,
  showNotification,
  showError
) => {
  if (!window.confirm(`Delete ${personToDelete.name} ?`)) {
    return;
  }

  deletePerson(personToDelete.id)
    .then(() => {
      setPersons(persons.filter((person) => person.id !== personToDelete.id));
      showNotification(`Deleted ${personToDelete.name}`);
    })
    .catch(() => {
      showError(`Error deleting ${JSON.stringify(personToDelete)}`);
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
          props.setPersons,
          props.showNotification,
          props.showError
        )
      }
    >
      delete
    </button>
  );
};

export default DeleteButton;
