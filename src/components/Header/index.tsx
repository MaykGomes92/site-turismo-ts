import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { RxDoubleArrowLeft } from "react-icons/rx";
const Header = () => {
 const imgVoltar = require('../assets/logo-area-1.png');
 return (
  <>
   <Link to="/">
    <img
     className="logoViagens"
     src={imgVoltar}
     alt="logo da empresa"
    />
   </Link>
   <Link className="voltar" to="/viagens">
    <RxDoubleArrowLeft />
   </Link>
  </>
 );
};

export default Header;
