import styled from "styled-components";
import Deck from "./Deck";
import React, { useState } from "react";

export default function Footer({resposta, setResposta, abriu, setAbriu, concluido, setConcluido}){
    //estados
    
    const colorNaoSei = '#FF3030'
    const colorQuase ='#FF922E'
    const colorZap ='#2FBE34'
    return(
        <>
        <ContainerBot>
        <ContainderBotoes>
            <Botao data-identifier="forgot-btn" cor={colorNaoSei} onClick={(() => console.log("naosei"))}>Não sei</Botao>
            <Botao  data-identifier="almost-forgot-btn" cor={colorQuase} onClick={(() => console.log("Quase"))}>Quase não lembrei</Botao>
            <Botao  data-identifier="zap-btn" cor={colorZap} onClick={(() => console.log("Zap"))}>Zap!</Botao>
        </ContainderBotoes>{concluido}/{Deck.length} Concluídos</ContainerBot>
        </>
    )
}

const ContainerBot = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`
const Botao = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${props => props.cor};
    border-radius: 5px;
    border: 1px solid ${props => props.cor};
    padding:5px;
    cursor: pointer;
`

const ContainderBotoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
`
