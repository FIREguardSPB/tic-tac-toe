import React from 'react';
import styled from "styled-components";
import Anton from '../images/anton.jpg'
const WrapperImg = styled.div`
  margin: 0;
  padding: 0;
background-image: url(${Anton});
  width: 100px;
  height: 100px;
  background-size: cover;
`

const AntonImg = () => {
  return (
   <>
     <WrapperImg/>
   </>
  );
};

export default AntonImg;