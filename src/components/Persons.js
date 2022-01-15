import React from "react";

import DeleteButton from "./DeleteButton";

const Persons = (props) => {
  return (
    <ul>
      {props.persons
        .filter((person) =>
          person.name.toLowerCase().includes(props.filter.toLowerCase())
        )
        .map((person) => (
          <li key={person.name}>
            {person.name} {person.number}{" "}
            <DeleteButton
              person={person}
              deletePerson={props.deletePerson}
              persons={props.persons}
              setPersons={props.setPersons}
            />
          </li>
        ))}
    </ul>
  );
};

export default Persons;
