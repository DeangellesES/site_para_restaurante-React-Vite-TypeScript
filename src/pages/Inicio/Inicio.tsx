import Cabecalho from "../../Components/Cabecalho"
import Rodape from "../../Components/Rodape"
import Populares from "../../Components/Populares/Populares"
import Qualidade from "../../Components/Qualidade/Qualidade"
import Inscricao from "../../Components/Inscricao/Inscricao"
import NossosServicos from "../../Components/NossosServicos/NossosServicos"

import styled from "styled-components"

import imgTopo from "./assets/restaurante-mesa.jpg"

import React, { useState, useEffect } from 'react';

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
    width: 100%;
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
    font-family: "Pacifico", sans-serif;
    font-weight: 100;
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
    font-family: "Pacifico", sans-serif;
    font-weight: 100;
`
const SecaoTopoFormularioLabel = styled.label`
    font-size: 1.2rem;  
`
const SecaoTopoFormularioInput = styled.input`
    padding: .7rem 2rem;
    background-color: transparent;
    border: 1px solid #d3d1d1;
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
    background-color: trasnparent !important;
    border: 1px solid #d3d1d1;
    background-color: transparent;
    border: 1px solid #d3d1d1;
    color: #fff;
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
    font-family: 'Pacifico', sans-serif;
    font-weight: 100;
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

// FUNCAO TRAZER DE BAIXO TITULO 
function mouseScroll() {
    const scroll = document.querySelectorAll('.js-scroll')
    const height = window.innerHeight * 0.6
    scroll[0].classList.add('ativo')
    scroll.forEach((section) => {
        const sectionTop = (section.getBoundingClientRect().top - height) < 0
        if (sectionTop) {
            section.classList.add('ativo')
        }
    })
}

window.addEventListener('scroll', mouseScroll)

// FUNCAO TRAZER DA DIREITA PRA ESQUERDA FORMULÁRIO 
function mouseScrollLado() {
    const scroll = document.querySelectorAll('.js-scroll-direita')
    const height = window.innerHeight * 0.6
    scroll[0].classList.add('ativo')
    scroll.forEach((section) => {
        const sectionTop = (section.getBoundingClientRect().top - height) < 0
        if (sectionTop) {
            section.classList.add('ativo')
        }
    })
}

window.addEventListener('scroll', mouseScrollLado)

// FUNCAO TRAZER DE BAIXO PRA CIMA CAIXAS EM CURIOSIDADE CAIXA 1 
function mouseScrollPraCima() {
    const scroll = document.querySelectorAll('.js-scroll-pracima')
    const height = window.innerHeight * 0.6
    scroll[0].classList.add('ativo')
    scroll.forEach((section) => {
        const sectionTop = (section.getBoundingClientRect().top - height) < 0
        if (sectionTop) {
            section.classList.add('ativo')
        }
    })
}

window.addEventListener('scroll', mouseScrollPraCima)

// FUNCAO TRAZER DE BAIXO PRA CIMA CAIXAS EM CURIOSIDADE CAIXA 2
function mouseScrollPraCimaUm() {
    const scroll = document.querySelectorAll('.js-scroll-pracimaUm')
    const height = window.innerHeight * 0.6
    scroll[0].classList.add('ativo')
    scroll.forEach((section) => {
        const sectionTop = (section.getBoundingClientRect().top - height) < 0
        if (sectionTop) {
            section.classList.add('ativo')
        }
    })
}

window.addEventListener('scroll', mouseScrollPraCimaUm)

// FUNCAO TRAZER DE BAIXO PRA CIMA CAIXAS EM CURIOSIDADE CAIXA 3
function mouseScrollPraCimaDois() {
    const scroll = document.querySelectorAll('.js-scroll-pracimaDois')
    const height = window.innerHeight * 0.6
    scroll[0].classList.add('ativo')
    scroll.forEach((section) => {
        const sectionTop = (section.getBoundingClientRect().top - height) < 0
        if (sectionTop) {
            section.classList.add('ativo')
        }
    })
}

window.addEventListener('scroll', mouseScrollPraCimaDois)

// FUNCAO TRAZER DE BAIXO PRA CIMA CAIXAS EM CURIOSIDADE CAIXA 4
function mouseScrollPraCimaTres() {
    const scroll = document.querySelectorAll('.js-scroll-pracimaTres')
    const height = window.innerHeight * 0.6
    scroll[0].classList.add('ativo')
    scroll.forEach((section) => {
        const sectionTop = (section.getBoundingClientRect().top - height) < 0
        if (sectionTop) {
            section.classList.add('ativo')
        }
    })
}

window.addEventListener('scroll', mouseScrollPraCimaTres)


function Inicio() {
    // CONTADOR UM
    const [contador, setContador] = useState(1);
    const limite = 5;

    useEffect(() => {
        // Só cria o intervalo se contador for menor ou igual ao limite
        if (contador <= limite) {
            const intervalo = setInterval(() => {
                setContador((prev) => prev + 1);
            }, 100);

            // Limpa o intervalo quando o componente for desmontado ou contador mudar
            return () => clearInterval(intervalo);
        }
    }, [contador]);

    // CONTADOR DOIS
    const [contadorUm, setContadorUm] = useState(1);
    const limiteUm = 43;

    useEffect(() => {
        // Só cria o intervalo se contador for menor ou igual ao limite
        if (contadorUm <= limiteUm) {
            const intervalo = setInterval(() => {
                setContadorUm((prev) => prev + 1);
            }, 50);

            // Limpa o intervalo quando o componente for desmontado ou contador mudar
            return () => clearInterval(intervalo);
        }
    }, [contadorUm]);

    // CONTADOR TRES
    const [contadorDois, setContadorDois] = useState(1);
    const limiteDois = 32;

    useEffect(() => {
        // Só cria o intervalo se contador for menor ou igual ao limite
        if (contadorDois <= limiteDois) {
            const intervalo = setInterval(() => {
                setContadorDois((prev) => prev + 1);
            }, 50);

            // Limpa o intervalo quando o componente for desmontado ou contador mudar
            return () => clearInterval(intervalo);
        }
    }, [contadorDois]);

    // CONTADOR QUATRO
    const [contadorTres, setContadorTres] = useState(1);
    const limiteTres = 1985;

    useEffect(() => {
        // Só cria o intervalo se contador for menor ou igual ao limite
        if (contadorTres <= limiteTres) {
            const intervalo = setInterval(() => {
                setContadorTres((prev) => prev + 1);
            }, .3);

            // Limpa o intervalo quando o componente for desmontado ou contador mudar
            return () => clearInterval(intervalo);
        }
    }, [contadorTres]);

    return (
        <>
            <Cabecalho></Cabecalho>

            {/* INICIO SECAO PARTE DE CIMA */}
            <SecaoTopo >
                <SecaoTopoFundo>
                    <SecaoTopoTituloPrincipal className="js-scroll">
                        <SecaoTopoTituloPrincipalDentro>Tudo de bom gosto!</SecaoTopoTituloPrincipalDentro>
                    </SecaoTopoTituloPrincipal>

                    <div className="js-scroll-direita">
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
            <NossosServicos></NossosServicos>
            {/* FIM SECAO NOSSOS SERVICOS */}

            {/* INICIO QUALIDADE */}
            <Qualidade></Qualidade>
            {/* FIM QUALIDADE */}

            {/* INICIO SEÇÃO CURIOSIDADES */}
            <SecaoCuriosidades>
                <SecaoCuriosidadesTitulos className="js-scrollBaixo">
                    <SecaoCuriosidadesTitulosTitulo>Curiosidades</SecaoCuriosidadesTitulosTitulo>
                    <SecaoCuriosidadesTitulosParagrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum totam cum maxime illum ex sit soluta doloribus, temporibus perspiciatis!</SecaoCuriosidadesTitulosParagrafo>
                </SecaoCuriosidadesTitulos>

                <SecaoCuriosidadesCaixas>
                    <SecaoCuriosidadesCaixa className="js-scroll-pracima">
                        <SecaoCuriosidadesCaixaParagrafoUm>{contador <= limite ? contador : limite}</SecaoCuriosidadesCaixaParagrafoUm>
                        <SecaoCuriosidadesCaixaParagrafoDois>Classificação média</SecaoCuriosidadesCaixaParagrafoDois>
                    </SecaoCuriosidadesCaixa>
                    <SecaoCuriosidadesCaixa className="js-scroll-pracimaUm">
                        <SecaoCuriosidadesCaixaParagrafoUm>{contadorUm <= limiteUm ? contadorUm : limiteUm}</SecaoCuriosidadesCaixaParagrafoUm>
                        <SecaoCuriosidadesCaixaParagrafoDois>Tipos de alimentos</SecaoCuriosidadesCaixaParagrafoDois>
                    </SecaoCuriosidadesCaixa>
                    <SecaoCuriosidadesCaixa className="js-scroll-pracimaDois">
                        <SecaoCuriosidadesCaixaParagrafoUm>{contadorDois <= limiteDois ? contadorDois : limiteDois}</SecaoCuriosidadesCaixaParagrafoUm>
                        <SecaoCuriosidadesCaixaParagrafoDois>Chef de cozinha</SecaoCuriosidadesCaixaParagrafoDois>
                    </SecaoCuriosidadesCaixa>
                    <SecaoCuriosidadesCaixa className="js-scroll-pracimaTres">
                        <SecaoCuriosidadesCaixaParagrafoUm>{contadorTres <= limiteTres ? contadorTres : limiteTres}</SecaoCuriosidadesCaixaParagrafoUm>
                        <SecaoCuriosidadesCaixaParagrafoDois>Ano de início</SecaoCuriosidadesCaixaParagrafoDois>
                    </SecaoCuriosidadesCaixa>
                </SecaoCuriosidadesCaixas>

            </SecaoCuriosidades >
            {/* FIM SEÇÃO CURIOSIDADES */}

            {/* INCIO SEÇÃO INSCRVER-SE */}
            <Inscricao></Inscricao>
            {/* FIM SEÇÃO INSCRVER-SE */}

            <Rodape></Rodape >
        </>
    )
}

export default Inicio