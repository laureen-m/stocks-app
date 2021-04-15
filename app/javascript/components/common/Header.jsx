import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../assets/images/logo.jpg";

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 12px;
  color: black;
  height: 10%;
  a {
    color: black;
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
  height: 5px;
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

function Header() {
  return (
    <HeaderStyle>
      <img
        src={Logo}
        alt="Stocks App"
        className="w4"
      />
      <div className="pt2">
        <NavLink activeStyle={{ backgroundImage: "linear-gradient(yellow, yellow)", backgroundPosition: "0 95%", backgroundRepeat: "no-repeat", backgroundSize: "100% 6px" }} className="mr2" to="/" exact>Home</NavLink>
        <NavLink activeStyle={{ backgroundImage: "linear-gradient(yellow, yellow)", backgroundPosition: "0 95%", backgroundRepeat: "no-repeat", backgroundSize: "100% 6px" }} className="ml2" to="/stocks" exact>Select stocks</NavLink>
      </div>  
    </HeaderStyle>
  );
}

export default Header;
