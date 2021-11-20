import React from 'react';
import styled from "styled-components";
import Anton from "../images/anton.jpg";
import Ksu from "../images/ksu.jpg";

const antonBackground = {backgroundSize: 'cover', width: '400px', height: '400px', backgroundImage: `url(${Anton})`}
const ksuBackground = {backgroundSize: 'cover', width: '400px', height: '400px', backgroundImage: `url(${Ksu})`}

const WrapperWinnerBoard = styled.div`
  display: flex;
  z-index: 2;
  position: fixed;
  margin: 0 auto;
  width: 400px;
  height: 400px;
  background: greenyellow;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 40px;
  color: white;
  border-radius: 10px;
`
const OkButton = styled.div`
  width: 200px;
  height: 50px;
  background: deeppink;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`

const WinnerBoard = ({winner, winnerClick}) => {
  return (
    <>
      <WrapperWinnerBoard style={winner === 'x' ? antonBackground : ksuBackground}>
        {winner === 'o' ? 'ПОБЕДИТЕЛЬ - КСЮША!!!' : 'ПОБЕДИТЕЛЬ - ПАПА!!!'}
<OkButton onClick={winnerClick}>УРА!!!</OkButton>
      </WrapperWinnerBoard>
    </>
  );
};

export default WinnerBoard;