import React, {useCallback} from 'react'

import styled from "styled-components";
import Anton from '../images/anton.jpg'
import Ksu from '../images/ksu.jpg'

const WrapperSquare = styled.button`
  width: 100px;
  height: 100px;
  background: pink;
  border: 1px solid #222222;
  cursor: pointer;
  outline: none;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0;

  :hover {
    background: #f0f0f0;
    transition: .3s all ease;
  }
`
const antonBackground = {backgroundSize: 'cover', width: '100px', height: '100px', backgroundImage: `url(${Anton})`}
const ksuBackground = {backgroundSize: 'cover', width: '100px', height: '100px', backgroundImage: `url(${Ksu})`}

const Square = (props) => {
  return (
    <WrapperSquare onClick={props.onClick}
                   style={props.value === 'x' ? antonBackground : null || props.value === 'o' ? ksuBackground : null}>{props.value}</WrapperSquare>
  )
}

export default Square
