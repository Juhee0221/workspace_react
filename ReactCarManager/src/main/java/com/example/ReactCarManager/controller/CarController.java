package com.example.ReactCarManager.controller;

import com.example.ReactCarManager.VO.CarVO;
import com.example.ReactCarManager.VO.SalesVO;
import com.example.ReactCarManager.service.CarService;
import jakarta.annotation.Resource;
import org.apache.ibatis.session.SqlSession;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CarController {
    @Resource(name = "carService")
    private CarService carService;

    @PostMapping("/insertCar")
    public List<CarVO> insertCar(@RequestBody CarVO carVO){
        System.out.println(carVO);
        carService.insertCar(carVO);

        return carService.selectCarInfo();
    }

    @GetMapping("/selectCar")
    public List<CarVO> selectCar(){
        return carService.selectCarInfo();
    }

    @GetMapping("/carInsert")
    public List<CarVO> carInsert(){
        return carService.selectCarInfo();
    }
    @PostMapping("/salesInsert")
    public void salesInsert(@RequestBody SalesVO salesVO){
        System.out.println("!!!!!!!!!!" + salesVO);
        carService.carInsert(salesVO);
    }

    @GetMapping("/carSalInfo")
    public List<SalesVO> carAllSelect(){
        return carService.carAllSelect();
    }
}
