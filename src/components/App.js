import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styled from "styled-components";
import Deck from "./Deck";


export default function App() {
    const [concluido, setConcluido] = useState(0)  //vai aparecer no footer
    const [abriu, setAbriu] = useState([])      //vai mudar o css
    const [finalizar, setFinalizar] = useState(false)  // vai mudar a cor de acordo com a resposta do footer

    return (
        <ScreenContainer>
            <Header />

            <Main
            deck={Deck}
            finalizar = {finalizar}
            setfinalizar = {setFinalizar}
            abriu = {abriu}
            setAbriu = {setAbriu}
            />

            <Footer 
            deck={Deck}
            finalizar = {finalizar}
            setfinalizar = {setFinalizar}
            concluido = {concluido} 
            setConcluido = {setConcluido}
            />

        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;

`