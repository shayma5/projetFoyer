package com.example.foyer.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;
@RestControllerAdvice
public class ExceptionHandler {
    @org.springframework.web.bind.annotation.ExceptionHandler (Exception.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String,String> HandelException(Exception exception)
    {
        Map map = new HashMap();
        map.put("error",exception.getMessage());
        return map;
    }
}
