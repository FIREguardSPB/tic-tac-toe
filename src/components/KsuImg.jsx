import Ksu from '../images/ksu.jpg'
import React from 'react';
import styled from "styled-components";

const WrapperImg = styled.div`
background-image: url(${Ksu});
  width: 100px;
  height: 100px;
  background-size: cover;
`

const KsuImg = () => {
  return (
   <>
   <WrapperImg/>
   </>
  );
};

export default KsuImg;