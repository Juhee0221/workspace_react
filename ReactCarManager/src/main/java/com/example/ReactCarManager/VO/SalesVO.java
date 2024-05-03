package com.example.ReactCarManager.VO;

import lombok.Data;

@Data
public class SalesVO {
    private int salesNum;
    private String buyetr;
    private String tel;
    private String salesDate;
    private String color;
    private int carNum;
    private CarVO carVO;
}
