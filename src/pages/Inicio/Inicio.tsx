import Cabecalho from "../../Components/Cabecalho"
import Rodape from "../../Components/Rodape"
import Populares from "../../Components/Populares/Populares"

import styled from "styled-components"

import imgTopo from "./assets/restaurante-mesa.jpg"

import { RiEmotionHappyLine } from "react-icons/ri";
import { TfiThought } from "react-icons/tfi";
import { FaTruck } from "react-icons/fa";


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
    gap: 5rem;
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
    gap: 5rem;
    position: absolute;
    bottom: 0;
`
const SecaoTopoTituloPrincipal = styled.div`
    width: 50%;
`
const SecaoTopoTituloPrincipalDentro = styled.h1`
    font-size: 5rem;
    color: #fff;
`

const SecaoTopoFormulario = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #00000079;
    padding: 3rem 2rem;
    color: #fff;
    border-top: 15px solid #ec920bff;
    gap: .7rem;
    width: fit-content;
`
const SecaoTopoFormularioTitulo = styled.h2`
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
`
const SecaoTopoFormularioLabel = styled.label`
    font-size: 1.2rem;
`
const SecaoTopoFormularioInput = styled.input`
    padding: .7rem 2rem;
`
const SecaoTopoFormularioLink = styled.a`
    padding: .7rem 2rem;
    background-color: #ec920bff;
    text-align: center;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.2rem;
    border-radius: 5px;
`
const SecaoTopoFormularioSelect = styled.select`
    padding: .7rem 2rem .7rem .5rem;
`

// INICIO SEÇÃO NOSSOS SERVIÇOS
const SecaoServicos = styled.section`
    background-color: #ec920bff;
    color: #fff;
    padding: 9% 0;
`
const SecaoServicosTitulos = styled.div`
    display: grid;
    justify-content: center;
    text-align: center;
    margin-bottom: 5rem; 
`
const SecaoServicosTitulosTitulo = styled.h1`
    font-weight: 100;
    font-size: 3rem;
    margin-bottom: 1rem;
`
const SecaoServicosTitulosParagrafo = styled.p`
    font-size: 1.3rem;
`
const SecaoServicosCaixas = styled.div`
    display: flex;
    justify-content: center;
    gap: 4rem;
`

const SecaoServicosCaixasCaixa = styled.div`
    width: 20%;
    text-align: center;
    
`
const SecaoServicosCaixasCaixaTitulo = styled.h1`
    margin: 1.3rem 0;
`

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
`
// INICIO SEÇÃO CURIOSISDADES
const SecaoCuriosidades = styled.section`
    text-align: center;
    padding: 7rem 0 5rem;
    height: 100vh;
`
const SecaoCuriosidadesTitulos = styled.div`
    width: 55%;
    margin: 0 auto;
`

const SecaoCuriosidadesTitulosTitulo = styled.h1`
    font-size: 3rem;
    color: #ec920bff; 
`
const SecaoCuriosidadesTitulosParagrafo = styled.p`
    font-size: 1.2rem;
    margin: 1.7rem 0;
    color: #595959;
`
const SecaoCuriosidadesCaixas = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 6.5rem;
`
const SecaoCuriosidadesCaixa = styled.div`
    width: 20%; 
`
const SecaoCuriosidadesCaixaParagrafoUm = styled.p`
    font-size: 4rem;
    color: #ec920bff; 
    font-weight: 100;
`
const SecaoCuriosidadesCaixaParagrafoDois = styled.p`
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #595959;
    margin-top: 1.2rem;
`
// INICIO SEÇÃO INSCREVER-SE
const SecaoInscricao = styled.section`
    text-align: center;
    background-color: #0099ff;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
`
const SecaoInscricaoTitulo = styled.h1`
    font-size: 3rem;
    color: #fff;
`
const SecaoInscricaoParagrafo = styled.p`
    font-size: 1.3rem;
    color: #d9d9d9;
`
const SecaoInscricaoAncora = styled.a`
    color: #fff;
    background-color: #ec920bff;
    text-decoration: none;
    padding: 0.7rem 5.5rem;
    border: none;
    text-transform: uppercase;
`
const SecaoInscricaoInput = styled.input`
    padding: 0.7rem 1rem;
    border: #fff;
    margin-right: 1.5rem;
    width: 25%;
`

function Inicio() {

    return (
        <>
            <Cabecalho></Cabecalho>

            {/* INICIO SECAO PARTE DE CIMA */}
            <SecaoTopo>
                <SecaoTopoFundo>
                    <SecaoTopoTituloPrincipal>
                        <SecaoTopoTituloPrincipalDentro>Tudo de bom gosto!</SecaoTopoTituloPrincipalDentro>
                    </SecaoTopoTituloPrincipal>

                    <div>
                        <SecaoTopoFormulario action="">
                            <SecaoTopoFormularioTitulo>Reserva de mesa</SecaoTopoFormularioTitulo>

                            <SecaoTopoFormularioLabel htmlFor="">Pessoas</SecaoTopoFormularioLabel>
                            <SecaoTopoFormularioSelect name="select" id="meuSelect">
                                <option value="valor0">Pessoas</option>
                                <option value="valor1">1 pessoa</option>
                                <option value="valor2">2 pessoa</option>
                                <option value="valor3">3 pessoa</option>
                            </SecaoTopoFormularioSelect>

                            <SecaoTopoFormularioLabel htmlFor="">Data</SecaoTopoFormularioLabel>
                            <SecaoTopoFormularioInput type="text" />
                            <SecaoTopoFormularioLabel htmlFor="">Horário</SecaoTopoFormularioLabel>
                            <SecaoTopoFormularioInput type="text" />
                            <SecaoTopoFormularioLink href="">Reserve Agora</SecaoTopoFormularioLink>
                        </SecaoTopoFormulario>
                    </div>
                </SecaoTopoFundo>
            </SecaoTopo>
            {/* FIM SECAO PARTE DE CIMA */}

            {/* INICIO SECAO PRATOS POPULARES */}
            <Populares></Populares>
            {/* FIM SECAO PRATOS POPULARES */}

            {/* INICIO SECAO NOSSOS SERVICOS */}
            <SecaoServicos>
                <SecaoServicosTitulos>
                    <SecaoServicosTitulosTitulo>Nossos Serviços</SecaoServicosTitulosTitulo>
                    <SecaoServicosTitulosParagrafo>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque voluptate liber.</SecaoServicosTitulosParagrafo>
                </SecaoServicosTitulos>
                <SecaoServicosCaixas>
                    <SecaoServicosCaixasCaixa>
                        <RiEmotionHappyLine className="servicos-icones" />
                        <SecaoServicosCaixasCaixaTitulo>Pessoas Felizes</SecaoServicosCaixasCaixaTitulo>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque voluptate liber.</p>
                    </SecaoServicosCaixasCaixa>

                    <SecaoServicosCaixasCaixa>
                        <TfiThought className="servicos-icones" />
                        <SecaoServicosCaixasCaixaTitulo>Pessoas Felizes</SecaoServicosCaixasCaixaTitulo>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque voluptate liber.</p>
                    </SecaoServicosCaixasCaixa>

                    <SecaoServicosCaixasCaixa>
                        <FaTruck className="servicos-icones" />
                        <SecaoServicosCaixasCaixaTitulo>Pessoas Felizes</SecaoServicosCaixasCaixaTitulo>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque voluptate liber.</p>
                    </SecaoServicosCaixasCaixa>

                </SecaoServicosCaixas>

            </SecaoServicos>
            {/* FIM SECAO NOSSOS SERVICOS */}

            {/* INICIO QUALIDADE */}
            <SecaoQualidade>
                <SecaoQualidadeFundo>
                    <SecaoQualidadeTitulo>"A alta qualidade do serviço me faz voltar sempre!"</SecaoQualidadeTitulo>
                    <SecaoQualidadeParagrafo>— John Doe, CEO of Novo Sabor.</SecaoQualidadeParagrafo>
                </SecaoQualidadeFundo>
            </SecaoQualidade>
            {/* FIM QUALIDADE */}

            {/* INICIO SEÇÃO CURIOSIDADES */}
            <SecaoCuriosidades>
                <SecaoCuriosidadesTitulos>
                    <SecaoCuriosidadesTitulosTitulo>Curiosidades</SecaoCuriosidadesTitulosTitulo>
                    <SecaoCuriosidadesTitulosParagrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum totam cum maxime illum ex sit soluta doloribus, temporibus perspiciatis!</SecaoCuriosidadesTitulosParagrafo>
                </SecaoCuriosidadesTitulos>

                <SecaoCuriosidadesCaixas>
                    <SecaoCuriosidadesCaixa>
                        <SecaoCuriosidadesCaixaParagrafoUm>5</SecaoCuriosidadesCaixaParagrafoUm>
                        <SecaoCuriosidadesCaixaParagrafoDois>Classificação média</SecaoCuriosidadesCaixaParagrafoDois>
                    </SecaoCuriosidadesCaixa>
                    <SecaoCuriosidadesCaixa>
                        <SecaoCuriosidadesCaixaParagrafoUm>43</SecaoCuriosidadesCaixaParagrafoUm>
                        <SecaoCuriosidadesCaixaParagrafoDois>Tipos de alimentos</SecaoCuriosidadesCaixaParagrafoDois>
                    </SecaoCuriosidadesCaixa>
                    <SecaoCuriosidadesCaixa>
                        <SecaoCuriosidadesCaixaParagrafoUm>32</SecaoCuriosidadesCaixaParagrafoUm>
                        <SecaoCuriosidadesCaixaParagrafoDois>Chef de cozinha</SecaoCuriosidadesCaixaParagrafoDois>
                    </SecaoCuriosidadesCaixa>
                    <SecaoCuriosidadesCaixa>
                        <SecaoCuriosidadesCaixaParagrafoUm>1985</SecaoCuriosidadesCaixaParagrafoUm>
                        <SecaoCuriosidadesCaixaParagrafoDois>Ano de início</SecaoCuriosidadesCaixaParagrafoDois>
                    </SecaoCuriosidadesCaixa>
                </SecaoCuriosidadesCaixas>

            </SecaoCuriosidades >
            {/* FIM SEÇÃO CURIOSIDADES */}

            {/* INCIO SEÇÃO INSCRVER-SE */}
            <SecaoInscricao>
                <SecaoInscricaoTitulo>Inscreva-se</SecaoInscricaoTitulo>
                <SecaoInscricaoParagrafo>Seja o primeiro a saber sobre os novos modelos.</SecaoInscricaoParagrafo>
                <form action="">
                    <SecaoInscricaoInput type="email" placeholder="Your Email"/>
                    <SecaoInscricaoAncora href="">Inscreva-se</SecaoInscricaoAncora>
                </form>
            </SecaoInscricao>
            {/* FIM SEÇÃO INSCRVER-SE */}

            <Rodape></Rodape >
        </>
    )
}

export default Inicio