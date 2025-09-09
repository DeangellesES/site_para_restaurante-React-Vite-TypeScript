import Cabecalho from "../../Components/Cabecalho"
import Rodape from "../../Components/Rodape"

import styled from "styled-components"

import imgTopo from "./assets/mulher-telefone.jpg"

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
// SECAO CONTATOS
const SecaoContatos = styled.section`
    display: flex;
    justify-content: center;
    padding: 8rem 0;
`
const SecaoContatosFormulario = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    flex-wrap: wrap;
    gap: 1rem;
`
const SecaoContatosFormularioLabel = styled.label`
    font-size: 1.5rem;
`

const SecaoContatosFormularioInput = styled.input`
    width: 70%;
    padding: .7rem 2rem .7rem .5rem;
    border: 2px solid #d6d6c2;
`
const SecaoContatosFormularioTextArea = styled.textarea`
    padding: .7rem 2rem 10.5rem .5rem;
    width: 70%;
    border: 2px solid #d6d6c2;
`
const SecaoContatosFormularioAncora = styled.a`
    background-color: #ec920bff;
    width: 25%;
    padding: .7rem 1rem .7rem 1.5rem;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    border-radius: 5px;
`
const SecaoContatosInformação = styled.div`
    font-weight: 100;
`
const SecaoContatosInformaçãoTitulo = styled.h1`
    font-weight: 100;
`

const SecaoContatosInformaçãoIcones = styled.div`
    display: flex;
    margin: 2rem 0;
    gap: 1.5rem;
`
const SecaoContatosInformaçãoParagrafoUm = styled.p`
    color: #a5a0a0ff;
    font-size: 1.5rem;
`
const SecaoContatosInformaçãoParagrafo = styled.p`
    color: #ec920bff;
    font-size: 1.5rem;
`

function Contato() {
    return (
        <>
            <Cabecalho></Cabecalho>

            {/* INICIO SECAO TOPO */}
            <SecaoTopo>
                <SecaoTopoFundo>
                    <SecaoTopotitulo className="js-scroll">Diga olá!</SecaoTopotitulo>
                </SecaoTopoFundo>
            </SecaoTopo>
            {/* FIM SECAO TOPO */}

            {/* INCIO SEÇÃO CONTATO */}
            <SecaoContatos>

                <SecaoContatosFormulario className="js-scroll">
                    <SecaoContatosFormularioLabel htmlFor="">Entre em Contato</SecaoContatosFormularioLabel>
                    <SecaoContatosFormularioInput type="text" placeholder="Seu Primeiro Nome" />
                    <SecaoContatosFormularioInput type="text" placeholder="Seu Endereço" />
                    <SecaoContatosFormularioTextArea name="" id="" placeholder="Escreva-nos Algo"></SecaoContatosFormularioTextArea>
                    <SecaoContatosFormularioAncora href="">Envie Mensagem</SecaoContatosFormularioAncora>
                </SecaoContatosFormulario>

                <SecaoContatosInformação className="js-scroll-pracimaUm">
                    <SecaoContatosInformaçãoTitulo>Informação de Contato</SecaoContatosInformaçãoTitulo>
                    <SecaoContatosInformaçãoIcones>
                        <FaLocationDot className="contato-icone"/>
                        <SecaoContatosInformaçãoParagrafoUm>Endereco Ficticio, n° 1111</SecaoContatosInformaçãoParagrafoUm>
                    </SecaoContatosInformaçãoIcones>

                    <SecaoContatosInformaçãoIcones>
                        <FaPhone className="contato-icone"/>
                        <SecaoContatosInformaçãoParagrafo>+55911110000</SecaoContatosInformaçãoParagrafo>
                    </SecaoContatosInformaçãoIcones>
                    <SecaoContatosInformaçãoIcones>
                        <MdEmail className="contato-icone"/>
                        <SecaoContatosInformaçãoParagrafo>email@email.com</SecaoContatosInformaçãoParagrafo>
                    </SecaoContatosInformaçãoIcones>

                </SecaoContatosInformação>

            </SecaoContatos>
            {/* FIM SEÇÃO CONTATO */}

            <Rodape></Rodape>
        </>
    )
}

export default Contato