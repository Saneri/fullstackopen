package com.fullstackopen.backend;

import org.springframework.stereotype.Service;
import com.fullstackopen.backend.Person;
import java.util.List;
import java.util.ArrayList;

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
}
