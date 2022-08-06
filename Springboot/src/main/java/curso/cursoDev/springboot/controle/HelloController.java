package com.cursoDev.springboot.controle;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String hellomensage(){
        return "Hello, Vinicius F.";
    }
}