package com.fullstackopen.backend.controllers;

import com.fullstackopen.backend.Person;
import com.fullstackopen.backend.PersonService;
import java.util.List;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class PersonController {

    private final PersonService personService = new PersonService();

    @GetMapping("/persons")
    public List<Person> getAllPersons() {
        return personService.getAllPersons();
    }

    @GetMapping("/persons/{id}")
    public Person getPerson(@PathVariable String id, HttpServletResponse res) {
        Person person = personService.findById(id);
        if (person == null) {
            res.setStatus(404);
        }
        return person;
    }

    @DeleteMapping("/persons/{id}")
    public void deletePerson(@PathVariable String id, HttpServletResponse res) {
        boolean removed = personService.deleteById(id);
        res.setStatus(removed ? 204 : 404);
    }

    @PostMapping("/persons")
    public void addPerson(@Valid @RequestBody Person person) {
        boolean added = personService.add(person.getName(), person.getNumber());
    }
}
