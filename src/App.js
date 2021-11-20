import React from 'react'
import Game from './components/Game'
import styled from "styled-components";
import backGround from './images/lols_background.jpg'

const WrapperBase = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  background-image: url(${backGround});
`

function App() {
  return (
    <WrapperBase>
      <Game/>
    </WrapperBase>
  )
}

export default App
