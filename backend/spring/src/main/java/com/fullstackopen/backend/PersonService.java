package com.fullstackopen.backend;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class PersonService {

    private final List<Person> persons = new ArrayList<>();

    public PersonService() {
        persons.add(new Person("Arto Hellas", "040-123456"));
        persons.add(new Person("Ada Lovelace", "39-44-5323523"));
        persons.add(new Person("Dan Abramov", "12-43-234345"));
        persons.add(new Person("Mary Poppendieck", "39-23-6423122"));
    }

    public List<Person> getAllPersons() {
        return persons;
    }

    public Integer getPersonCount() {
        return persons.size();
    }

    public Person findById(String id) {
        return persons.stream()
                .filter(person -> person.getId().toString().equals(id))
                .findAny()
                .orElse(null);
    }

    public boolean add(String name, String number) {
        if (persons.stream().anyMatch(person -> person.getName().equals(name))) {
            return false;
        }
        persons.add(new Person(name, number));
        return true;
    }

    public boolean deleteById(String id) {
        return persons.removeIf(person -> person.getId().toString().equals(id));
    }
}
