package com.fullstackopen.backend;

import java.util.UUID;

public class Person {

    private final UUID id;
    private final String name;
    private final String number;

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
