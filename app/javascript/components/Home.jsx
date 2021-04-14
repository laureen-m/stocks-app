import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from './common/Header';
import Background from "../../assets/images/background.jpg";

const HomePageStyle = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  min-height: 100vh;
  .enter {
    color: black;
    font-size: 40px;
    text-decoration: none;
    position: relative;
  }
  .enter::before {
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
  .enter:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`

export default () => (
  <HomePageStyle>
    <Header />
    <Link className="enter" to="/stocks">Enter</Link> 
  </HomePageStyle>
);