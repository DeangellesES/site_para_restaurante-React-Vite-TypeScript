import Cabecalho from "../../Components/Cabecalho"
import Rodape from "../../Components/Rodape"

import styled from "styled-components"

import imgTopo from "./assets/restaurante-mesa.jpg"

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
    width: 100vw;
    position: absolute;
    bottom: 0;
`
const SecaoTopotitulo = styled.h1`
    color: #fff;
    font-size: 4rem;
`

function Menu () {
    return(
        <>
            <Cabecalho></Cabecalho>

            {/* INICIO SECAO TOPO */}
            <SecaoTopo>
                <SecaoTopoFundo>
                    <SecaoTopotitulo>Experimente todo o nosso menu!</SecaoTopotitulo>
                </SecaoTopoFundo>       
            </SecaoTopo>
            {/* FIM SECAO TOPO */}
            {/* INICIO SECAO PRATOS POPULARES */}
            
            {/* FIM SECAO PRATOS POPULARES */}
            <Rodape></Rodape>
        </>
    )
}

export default Menu