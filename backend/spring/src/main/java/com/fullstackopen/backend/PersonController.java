package com.fullstackopen.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PersonController {

	private final PersonService personService = new PersonService();

    @GetMapping("/persons")
	public List<Person> getAllPersons() {
		return personService.getAllPersons();
	}
}
