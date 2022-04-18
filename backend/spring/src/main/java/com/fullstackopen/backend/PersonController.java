package com.fullstackopen.backend;

import java.util.List;
import javax.servlet.http.HttpServletResponse;
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
        if (removed) {
            res.setStatus(204);
        } else {
            res.setStatus(404);
        }
    }
}
