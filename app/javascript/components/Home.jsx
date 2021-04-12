import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Background from "../../assets/images/background.jpg";
import StockPage from './common/StockPage';
import Header from './common/Header'

const HomePageStyle = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  a {
    color: black;
    font-size: 40px;
    text-decoration: none;
    position: relative;
  }
  a:hover {
    color: black;
  }
  a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 15px;
  bottom: 0;
  left: 0;
  background-color: yellow;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
  }
  a:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`

export default () => (
  <StockPage>
    <HomePageStyle>
      <Link to="/stocks">Enter</Link>
    </HomePageStyle>
  </StockPage>
)