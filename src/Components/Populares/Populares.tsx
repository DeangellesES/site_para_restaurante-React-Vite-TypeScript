import styled from "styled-components"

import cogumelo from "./assets/cogumelo.jpg"
import torrada from "./assets/torrada.jpg"
import saladaFrango from "./assets/salada-frango.jpg"
import ovo from "./assets/ovo-organico.jpg"
import sopaTomate from "./assets/sopa-tomate.jpg"
import saladaCrocante from "./assets/salada-frango-crocante.jpg"

import { FaPlus } from "react-icons/fa";

// INICIO SECAO PRATOS POPULARES
const SecaoPopulares = styled.section`
    display: grid;
    justify-content: center;
    text-align: center;
    padding: 7% 0 9% 0;
`
const SecaoPopularesTitulos = styled.div`
    display: grid;
    gap: 1.5rem;
`
const SecaoPopularesTitulosTitulo = styled.h1`
    font-size: 3rem;
    color: #ec920bff;
    font-family: "Pacifico", sans-serif;
    font-weight: 100;
`
const SecaoPopularesTitulosCaixaParagrafo = styled.div`
    width: 70%;
    margin: 0 auto;
`
const SecaoPopularesTitulosParagrafo = styled.p`
    font-size: 1.3rem;
    color: #595959;
    width: 75%;
    margin: 0 auto;
`
const SecaoPopularescontainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 6rem;
`
const SecaoPopularescontainercaixa = styled.div`
    width: 25%;
    display: grid;
    gap: 1rem;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3); 
    z-index: 10;
    // height: 200px;
    position: relative;
    cursor: pointer;
    &:hover {
        box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3); 
        overflow: hidden;

        

    }
`
const SecaoPopularescontainercaixaImg = styled.img`
    width: 100%;
    z-index: -1;
    &:hover {
        transform: scale(1.2);
        height: 95%;
        transition: .5s;
        
    }
`
const SecaoPopularescontainercaixaDentro = styled.div`
    width: 80%;
    margin: 0 auto;
`
const SecaoPopularescontainercaixaTitulo = styled.h2`
    color: #ec920bff;
    font-weight: 100;
`
const SecaoPopularescontainercaixaParagrafoSegundo = styled.p`
    color: #ec920bff;
    margin: .8rem 0 1.7rem 0;
    font-size: 1.8rem;
    font-weight: 600;
    font-family: "Story Script", sans-serif;
`
// const SecaoPopularescontainerBaixo = styled.div`
//     display: flex;
//     justify-content: center;
//     gap: 2rem;
// `

function Populares() {

    return (
        <SecaoPopulares>
            <SecaoPopularesTitulos>
                <SecaoPopularesTitulosTitulo>Pratos populares</SecaoPopularesTitulosTitulo>
                <SecaoPopularesTitulosCaixaParagrafo>
                    <SecaoPopularesTitulosParagrafo>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit magnam harum repudiandae optio veritatis ipsam quos autem placeat eum nobis molestias obcaecati tenetur.</SecaoPopularesTitulosParagrafo>
                </SecaoPopularesTitulosCaixaParagrafo>
            </SecaoPopularesTitulos>

            <SecaoPopularescontainer>
                <SecaoPopularescontainercaixa className="pratos">
                    <SecaoPopularescontainercaixaImg src={cogumelo} alt="" />
                    <FaPlus className="icone-pratos" />
                    <SecaoPopularescontainercaixaTitulo>Cogumelo Fresco</SecaoPopularescontainercaixaTitulo>
                    <SecaoPopularescontainercaixaDentro>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque voluptate liber.</p>
                        <SecaoPopularescontainercaixaParagrafoSegundo>R$19.15</SecaoPopularescontainercaixaParagrafoSegundo>
                    </SecaoPopularescontainercaixaDentro>

                </SecaoPopularescontainercaixa>

                <SecaoPopularescontainercaixa className="pratos">
                    <SecaoPopularescontainercaixaImg src={torrada} alt="" />
                    <FaPlus className="icone-pratos" />
                    <SecaoPopularescontainercaixaTitulo>Torrada de Queijo e Alho</SecaoPopularescontainercaixaTitulo>
                    <SecaoPopularescontainercaixaDentro>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque voluptate liber.</p>
                        <SecaoPopularescontainercaixaParagrafoSegundo>R$20.99</SecaoPopularescontainercaixaParagrafoSegundo>
                    </SecaoPopularescontainercaixaDentro>

                </SecaoPopularescontainercaixa>

                <SecaoPopularescontainercaixa className="pratos">
                    <SecaoPopularescontainercaixaImg src={saladaFrango} alt="" />
                    <FaPlus className="icone-pratos" />
                    <SecaoPopularescontainercaixaTitulo>Salada de Frango Grelhado</SecaoPopularescontainercaixaTitulo>
                    <SecaoPopularescontainercaixaDentro>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque voluptate liber.</p>
                        <SecaoPopularescontainercaixaParagrafoSegundo>R$8.99</SecaoPopularescontainercaixaParagrafoSegundo>
                    </SecaoPopularescontainercaixaDentro>

                </SecaoPopularescontainercaixa>


                <SecaoPopularescontainercaixa className="pratos">
                    <SecaoPopularescontainercaixaImg src={ovo} alt="" />
                    <FaPlus className="icone-pratos" />
                    <SecaoPopularescontainercaixaTitulo>Ovo Orgânico</SecaoPopularescontainercaixaTitulo>
                    <SecaoPopularescontainercaixaDentro>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque voluptate liber.</p>
                        <SecaoPopularescontainercaixaParagrafoSegundo>R$12.99</SecaoPopularescontainercaixaParagrafoSegundo>
                    </SecaoPopularescontainercaixaDentro>

                </SecaoPopularescontainercaixa>

                <SecaoPopularescontainercaixa className="pratos">
                    <SecaoPopularescontainercaixaImg src={sopaTomate} alt="" />
                    <FaPlus className="icone-pratos" />
                    <SecaoPopularescontainercaixaTitulo>Sopa de Tomate com Frango</SecaoPopularescontainercaixaTitulo>
                    <SecaoPopularescontainercaixaDentro>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque voluptate liber.</p>
                        <SecaoPopularescontainercaixaParagrafoSegundo>R$23.10</SecaoPopularescontainercaixaParagrafoSegundo>
                    </SecaoPopularescontainercaixaDentro>

                </SecaoPopularescontainercaixa>

                <SecaoPopularescontainercaixa className="pratos">
                    <SecaoPopularescontainercaixaImg src={saladaCrocante} alt="" />
                    <FaPlus className="icone-pratos" />
                    <SecaoPopularescontainercaixaTitulo>Salada com Frango Crocante</SecaoPopularescontainercaixaTitulo>
                    <SecaoPopularescontainercaixaDentro>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque neque voluptate liber.</p>
                        <SecaoPopularescontainercaixaParagrafoSegundo>R$5.59</SecaoPopularescontainercaixaParagrafoSegundo>
                    </SecaoPopularescontainercaixaDentro>

                </SecaoPopularescontainercaixa>


            </SecaoPopularescontainer>
        </SecaoPopulares>
    )
}

export default Populares