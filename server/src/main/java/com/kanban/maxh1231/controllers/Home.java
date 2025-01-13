package com.kanban.maxh1231.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Home {

    @RequestMapping("/")
    public String root() {
        return "Welcome to the homepage!";
    }

    @RequestMapping("/hello")
    public String hello() {
        return "Hello World!";
    }
}
