import React from 'react'
import Square from './Square'
import styled from "styled-components";

const WrapperBoard = styled.div`
    width: 300px;
    height: 300px;
    background: red;
    display: flex;
    flex-wrap: wrap;
`

const Board = ({squares, click}) => {
    return (
        <WrapperBoard>
           {
               squares.map((square, i) => (
                   <Square key={i} value={square} onClick={() => click(i)} />
               ))
           }
        </WrapperBoard>
    );
}

export default Board
