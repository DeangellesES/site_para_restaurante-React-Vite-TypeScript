import Cabecalho from "../../Components/Cabecalho"
import Rodape from "../../Components/Rodape"
import Populares from "../../Components/Populares/Populares"

import styled from "styled-components"

import imgTopo from "./assets/restaurante-mesa.jpg"
import Qualidade from "../../Components/Qualidade/Qualidade"
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
    height: 108vh;
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

function Menu () {
    return(
        <>
            <Cabecalho></Cabecalho>
            {/* INICIO SECAO TOPO */}
            <SecaoTopo>
                <SecaoTopoFundo>
                    <SecaoTopotitulo className="js-scroll">Experimente todo o nosso menu!</SecaoTopotitulo>
                </SecaoTopoFundo>       
            </SecaoTopo>
            {/* FIM SECAO TOPO */}
            {/* INICIO SECAO PRATOS POPULARES */}
            <Populares></Populares>
            {/* FIM SECAO PRATOS POPULARES */}

            {/* INCIO SECAO QUALIDADE */}
            <Qualidade></Qualidade>
            {/* FIM SECAO QUALIDADE */}

            {/* INCIO SECAO INSCRICAO */}
            <Inscricao></Inscricao>
            {/* FIM SECAO INSCRICAO */}
            <Rodape></Rodape>
        </>
    )
}

export default Menu