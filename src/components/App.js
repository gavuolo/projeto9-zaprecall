import React, { useState } from "react";
import Deck from "./Deck";

//imagens
import Logo from "./assets/img/logo.png";


export default function App(){

    return(
      <div className="screen-container"> 
        <div className="logo-container">
            <img src={Logo} alt="logo" />
            <h1>ZapRecall</h1>
        </div>
      </div>
       
    )
}