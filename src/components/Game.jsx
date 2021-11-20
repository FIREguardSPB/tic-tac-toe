import React, {useEffect, useState} from 'react'
import Board from './Board'
import {calculateWinner} from '../helper'
import styled from "styled-components";
import {autoGo} from "../autoGo";
import WinnerBoard from "./WinnerBoard";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-repeat: no-repeat;
`
const StartBtn = styled.button`
  width: 200px;
  height: 35px;
  margin-bottom: 25px;
  cursor: pointer;
  color: white;
  outline: none;
  background: deeppink;
  border: 1px solid white;

  :hover {
    background: #fff;
    color: #222222;
    transition: .3s all ease;
  }

`
const GameInfo = styled.span`
  margin-top: 25px;
  font-size: 36px;
  color: white;
`


const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const winner = calculateWinner(board)
  const [visibleWinner, setVisibleWinner] = useState(false)
  const handleClickWinner = () => {
    setVisibleWinner(false)
  }

  useEffect(() => {
  }, [board, xIsNext])
  if (!xIsNext) {
    autoGo(board, setBoard, setXIsNext, xIsNext, winner, setVisibleWinner)
  }
  const handleClick = (index) => {
    const boardCopy = [...board]
    // Определить был ли клик по ячейке или игра законченна
    if (winner) {setVisibleWinner(true)}
    if (boardCopy[index]) return
    // Определить чей ход Х ? О
    if (xIsNext) {
      boardCopy[index] = "o"
    }
    // Обновить наш стейт
    setBoard(boardCopy)
    setXIsNext(!xIsNext)
  }

  const startNewGame = () => {
    return (
      <StartBtn onClick={() => setBoard(Array(9).fill(null))}> Очистить поле </StartBtn>
    )
  }


  return (
    <Wrapper>
      {startNewGame()}
      <Board squares={board} click={handleClick}/>
      {/*<GameInfo>*/}
      {visibleWinner ? <WinnerBoard winnerClick={handleClickWinner} winner={winner}/> : null}
      {!winner ? 'Сейчас ходит ' + (xIsNext ? "КСЮША" : "ПАПА") : null}
    </Wrapper>
  )
}

export default Game
