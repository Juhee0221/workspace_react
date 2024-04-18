package com.green.reactBoard.controller;

import com.green.reactBoard.vo.BoardVO;
import org.springframework.web.bind.annotation.*;

import javax.naming.Name;
import javax.xml.transform.Source;
import java.util.Map;

@RestController
@RequestMapping("/exam")
public class AxiosController {

    @PostMapping("/post1")
    public void post1(@RequestBody BoardVO boardVO){
        System.out.println(boardVO);
        System.out.println("!!!!!!!!!!!!!!!!!!!!!!");
    }

    @PostMapping("/post2")
    public void post2(@RequestBody Map<String, String> data){
        System.out.println(data);
        System.out.println("!!!!!!!!!!!!!!!!!!!!!!");
    }


    @GetMapping("/get1")
    public void get1(@RequestParam(name = "name") String name
                     ,@RequestParam(name = "age") int age){
        System.out.println(name);
    }

    @GetMapping("/get2")
    public void get2(@RequestParam(name = "name") String name
            ,@RequestParam(name = "age") int age){
        System.out.println(name);
    }
    @GetMapping("/get3/{id}")
    // @PathVariable : 경로에 있는 데이터
    public void get3(@PathVariable(name = "id") int id){
        System.out.println("get3 메소드 실행");
        System.out.println("id = " + id);
    }
}
