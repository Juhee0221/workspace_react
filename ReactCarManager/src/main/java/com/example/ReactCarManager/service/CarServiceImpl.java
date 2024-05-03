package com.example.ReactCarManager.service;

import com.example.ReactCarManager.VO.CarVO;
import com.example.ReactCarManager.VO.SalesVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("carService")
public class CarServiceImpl implements CarService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public void insertCar(CarVO carVO) {
        sqlSession.insert("carMapper.insertCar", carVO);
    }

    @Override
    public List<CarVO> selectCarInfo() {
        return sqlSession.selectList("carMapper.selectCarInfo");
    }

    @Override
    public void carInsert(SalesVO salesVO) {
        sqlSession.insert("carMapper.carInsert", salesVO);
    }

    @Override
    public List<SalesVO> carAllSelect() {
        return sqlSession.selectList("carMapper.carAllSelect");
    }
}
