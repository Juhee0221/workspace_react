package com.example.ReactCarManager.service;

import com.example.ReactCarManager.VO.CarVO;
import com.example.ReactCarManager.VO.SalesVO;

import java.util.List;

public interface CarService {
    void insertCar(CarVO carVO);

    List<CarVO> selectCarInfo();

    void carInsert(SalesVO salesVO);

    List<SalesVO> carAllSelect();
}
