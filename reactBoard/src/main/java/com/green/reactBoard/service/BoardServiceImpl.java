package com.green.reactBoard.service;

import com.green.reactBoard.vo.BoardVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("boardService")
public class BoardServiceImpl implements BoardService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public List<BoardVO> selectBoardList() {
        return sqlSession.selectList("boardMapper.selectBoardList");
    }

    @Override
    public void insertBoard(BoardVO boardVO) {
        sqlSession.selectList("boardMapper.insertBoard", boardVO);
    }

    @Override
    public BoardVO detailSelect(int boardNum) {
        return sqlSession.selectOne("boardMapper.detailSelect", boardNum);
    }

    @Override
    public int deleteList(int boardNum) {
        return sqlSession.delete("boardMapper.deleteList", boardNum);
    }
}
