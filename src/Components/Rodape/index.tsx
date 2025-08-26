import styled from "styled-components"

import imgRodape from "./assets/img/mesa-restaurante.jpg"

import { FaPhone, FaTwitter, FaFacebookSquare, FaLinkedinIn   } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";

const EmBaixo = styled.footer`
    background-image: url(${imgRodape});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    height: 100vh;
`


const EmBaixoFundo = styled.div`
    height: 100vh;
    background-color: #0e0b188f;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const EmBaixoCaixaCima = styled.div`
    display: flex;
    color: #fff;
    flex-direction: column;
    border-bottom: 2px solid #6e6c6cff;
    width: 80%;
`

const EmBaixoCaixaCimaDentro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .8rem;
`
const EmBaixoCaixaCimaDentroContato = styled.div`
    display: flex;
    color: #ec920bff;
    gap: 1.5rem;
`

const EmBaixoCaixaCimaDentroContatoIcone = styled.div`
    display: flex;
    gap: .7rem;
    font-size: 1.1rem;
`

const EmBaixoCaixaBaixo = styled.div`
    text-align: center;
    margin-top: 3rem;
`
const EmBaixoCaixaBaixoDentro = styled.div`
    color: #ec920bff;
    margin: 1rem 0 4rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    font-size: 1.4rem;
`
const EmBaixoCaixaBaixoDireitos = styled.div`
    color: #a5a0a0ff;
    font-weight: 600;
    margin-top: 3rem;
`

function Rodape() {
    return (
        <EmBaixo>
            <EmBaixoFundo>
                <EmBaixoCaixaCima>
                    <EmBaixoCaixaCimaDentro>
                        <h2>Entre em contato</h2>
                        <EmBaixoCaixaCimaDentroContato>

                            <EmBaixoCaixaCimaDentroContatoIcone>
                                <FaPhone />
                                <p>+1 634 567 890</p>
                            </EmBaixoCaixaCimaDentroContatoIcone>
                            <EmBaixoCaixaCimaDentroContatoIcone>
                                <MdEmail />
                                <p>email1@email.com</p>
                            </EmBaixoCaixaCimaDentroContatoIcone>
                            <EmBaixoCaixaCimaDentroContatoIcone>
                                <IoMdChatbubbles />
                                <p>bate-papo ao vivo</p>
                            </EmBaixoCaixaCimaDentroContatoIcone>

                        </EmBaixoCaixaCimaDentroContato>
                    </EmBaixoCaixaCimaDentro>

                    <EmBaixoCaixaBaixo>
                        <h2>Redes Sociais</h2>
                        <EmBaixoCaixaBaixoDentro>
                            <FaTwitter />
                            <FaFacebookSquare />
                            <FaLinkedinIn />
                        </EmBaixoCaixaBaixoDentro>
                    </EmBaixoCaixaBaixo>
                </EmBaixoCaixaCima>

                <EmBaixoCaixaBaixoDireitos>
                    <p>&copy;2025 Todos os Direitos Reservados</p>
                </EmBaixoCaixaBaixoDireitos>

            </EmBaixoFundo>

        </EmBaixo>
    )

}

export default Rodape