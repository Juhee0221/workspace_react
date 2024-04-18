package controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//restController : 해당 클래스의 모든 메소드는 전부 비동기
@RestController
public class TestController {

    @GetMapping("/test1")
    public String test1(){

        return "java";
    }
}
