import styled from "styled-components";
import React, { useState } from "react";
import play from "./assets/img/seta_play.png"
import reset from "./assets/img/seta_virar.png"
import Flashcards from "./Flashcards";


//pergunta fechada - pergunta aberta (utilizar props)
export default function Main({finalizar, setFinalizar, abriu, setAbriu, deck}) {
  
    return (
        <Conteudo>
            {deck.map((a, i) =>
            <Flashcards 
            data-identifier="flashcard-counter"
            key={i}

            num={a.num}
            pergunta={a.pergunta}
            resposta={a.resposta}

            finalizar={finalizar}
            setFinalizar={setFinalizar}

            abriu={abriu}
            setAbriu={setAbriu}

            />)} 
        </Conteudo>
              
        )
}


const Conteudo = styled.div`
    height: 100%;
`