import styled from "styled-components"

import { RiEmotionHappyLine } from "react-icons/ri";
import { TfiThought } from "react-icons/tfi";
import { FaTruck } from "react-icons/fa";

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
    font-family: 'Pacifico', sans-serif;
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

// FUNCAO TRAZER DE BAIXO PRA CIMA SEÇÃO NOSSOS SERVIÇOS 
function mouseScrollBaixo() {
    const scroll = document.querySelectorAll('.js-scrollBaixo')
    const height = window.innerHeight * 0.6
    scroll[0].classList.add('ativo')
    scroll.forEach((section) => {
        const sectionTop = (section.getBoundingClientRect().top - height) < 0
        if (sectionTop) {
            section.classList.add('ativo')
        }
    })
}
 
window.addEventListener('mouseover', mouseScrollBaixo)

function NossosServicos() {
    return (
        <SecaoServicos>
            <SecaoServicosTitulos className="js-scrollBaixo">
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
                    <SecaoServicosCaixasCaixaTitulo>Culinária Criativa</SecaoServicosCaixasCaixaTitulo>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque voluptate liber.</p>
                </SecaoServicosCaixasCaixa>

                <SecaoServicosCaixasCaixa>
                    <FaTruck className="servicos-icones" />
                    <SecaoServicosCaixasCaixaTitulo>Entrega de Comida</SecaoServicosCaixasCaixaTitulo>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque voluptate liber.</p>
                </SecaoServicosCaixasCaixa>
            </SecaoServicosCaixas>
        </SecaoServicos>
    )
}

export default NossosServicos