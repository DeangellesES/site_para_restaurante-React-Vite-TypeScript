import Cabecalho from "../../Components/Cabecalho"
import Rodape from "../../Components/Rodape"
import NossosServicos from "../../Components/NossosServicos/NossosServicos"
import Qualidade from "../../Components/Qualidade/Qualidade"

import styled from "styled-components"

import imgTopo from "./assets/restaurante-mesa.jpg"
import Inscricao from "../../Components/Inscricao/Inscricao"

const SecaoTopo = styled.section`
    background-image: url(${imgTopo});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    height: 120vh;
    align-items: center;
    justify-content: center;
    margin-top: -4.6rem;
    z-index: -1;
    position: relative;
`

const SecaoTopoFundo = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #0e0b188f;
    width: 100%;
    position: absolute;
    bottom: 0;
`
const SecaoTopotitulo = styled.h1`
    color: #fff;
    font-size: 4rem;
    font-family: 'Pacifico', sans-serif;
    font-weight: 100;
`

function Servicos() {
    return(
        <>
            <Cabecalho></Cabecalho>
            {/* INICIO SECAO TOPO */}
            <SecaoTopo>
                <SecaoTopoFundo>
                    <SecaoTopotitulo className="js-scroll">É um prazer atendê-lo!</SecaoTopotitulo>
                </SecaoTopoFundo>       
            </SecaoTopo>
            {/* FIM SECAO TOPO */}

            {/* INICIO SECAO NOSSOS SERVICOS */}
            <NossosServicos></NossosServicos>
            {/* FIM SECAO NOSSOS SERVICOS */}

            {/* INICIO QUALIDADE */}
            <Qualidade></Qualidade>
            {/* FIM QUALIDADE */}
            
            {/* INCIO SEÇÃO INSCRVER-SE */}
            <Inscricao></Inscricao>
            {/* FIM SEÇÃO INSCRVER-SE */}

            <Rodape></Rodape>
        </>
    )
}

export default Servicos