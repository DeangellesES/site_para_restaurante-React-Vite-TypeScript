import styled from "styled-components"

import imgTopo from "./assets/restaurante-mesa.jpg"

// INICIO SEÇÃO QUALIDADE
const SecaoQualidade = styled.section`
    background-image: url(${imgTopo});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    height: 110vh;
`
const SecaoQualidadeFundo = styled.div`
    background-color: #0e0b188f;
    height: 110vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    color: #fff;
`
const SecaoQualidadeTitulo = styled.h1`
    font-size: 4.5rem;
    width: 70%;
    font-weight: 300;
`
const SecaoQualidadeParagrafo = styled.p`
    font-size: 1.5rem; 
    margin-top: 4rem;
    font-weight: 100;
`

function Qualidade() {
    return (
        <SecaoQualidade>
            <SecaoQualidadeFundo>
                <SecaoQualidadeTitulo>"A alta qualidade do serviço me faz voltar sempre!"</SecaoQualidadeTitulo>
                <SecaoQualidadeParagrafo>— John Doe, CEO of Novo Sabor.</SecaoQualidadeParagrafo>
            </SecaoQualidadeFundo>
        </SecaoQualidade>
    )
}

export default Qualidade