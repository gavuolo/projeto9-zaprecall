import React, { useState } from "react";
import styled from "styled-components";
import play from "./assets/img/seta_play.png"
import reset from "./assets/img/seta_virar.png"

export default function Flashcards({ pergunta, num, resposta, finalizar, setFinalizar, abriu, setAbriu }) {
    const [fase, setFase] = useState(0)

    function FasePergunta(){
        setFase(1)
    }
    function FaseResposta(){
        setFase(2)

    }

    return (
        <>      
        {fase === 0 ?     
            <PerguntaFechada data-identifier="flashcard">
                <p>Pergunta {num}</p>
                <img data-identifier="flashcard-show-btn" src={play} alt={play} onClick={FasePergunta} />
            </PerguntaFechada>
        :
            <PerguntaAberta data-identifier="flashcard-index-item">
                {fase === 2? 
                <p data-identifier="flashcard-answer">{resposta}</p>
                :
                <>
                <p data-identifier="flashcard-question">{pergunta}</p> 
                <img data-identifier="flashcard-turn-btn" src={reset} alt={reset} onClick={FaseResposta} />
                </>}
            </PerguntaAberta>
        }
        </>
    )


}
const PerguntaFechada = styled.div`
    width: 300px;                
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: default;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
      }
    img{
        cursor: pointer;
    }
`

const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    display: ;
    flex-direction: column;
    justify-content: space-between;
    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
        cursor: pointer
    }
`