package com.green.reactBoard.controller;

import com.green.reactBoard.service.BoardService;
import com.green.reactBoard.vo.BoardVO;
import jakarta.annotation.Resource;
import org.apache.ibatis.session.SqlSession;
import org.springframework.web.bind.annotation.*;

import javax.naming.Name;
import java.util.List;

//restController : 해당 클래스의 모든 메소드는 전부 비동기
@RestController
public class TestController {
    @Resource(name = "boardService")
    private BoardService boardService;

    @GetMapping("/test1")
    public String test1(){

        return "java";
    }

    @GetMapping("/list")
    public List<BoardVO> getList(){
        return boardService.selectBoardList();
    }

    @PostMapping("/insertBoard")
    public void insertBoard(@RequestBody BoardVO boardVO){
        boardService.insertBoard(boardVO);
    }
    @GetMapping("/detailSelect/{boardNum}")
    public BoardVO detailList(@PathVariable(name = "boardNum") int boardNum) {


        return boardService.detailSelect(boardNum);
    }

    @DeleteMapping("/delete/{boardNum}")
    public void delete(@PathVariable(name = "boardNum") int boardNum){
        System.out.println("@@@@@@@@" + boardNum);
        boardService.deleteList(boardNum);
    }
}
