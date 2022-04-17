package com.fullstackopen.backend;

import java.util.Date;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InfoController {

    private final PersonService personService = new PersonService();

    @CrossOrigin
    @GetMapping("/info")
    public String info() {

        return String.format(
                "<div>Phonebook has info for %d people<div><div>%s</div>",
                personService.getPersonCount(), new Date());
    }
}
