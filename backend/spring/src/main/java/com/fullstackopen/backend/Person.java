package com.fullstackopen.backend;

import java.util.UUID;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class Person {

    final private UUID id;

    @NotBlank
    @Size(min = 3, max = 30, message = "Name must be between 3 and 30 characters")
    final private String name;

    @NotBlank
    @Size(min = 6, max = 15, message = "Phone number must be between 6 and 15 numbers")
    final private String number;

    public Person(String name, String number) {
        this.id = UUID.randomUUID();
        this.name = name;
        this.number = number;
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getNumber() {
        return number;
    }

    @Override
    public String toString() {
        return id + ", " + name + ", " + number;
    }
}
