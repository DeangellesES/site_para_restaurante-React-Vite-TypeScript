import styled from "styled-components"
import { Link } from "react-router-dom";

const Topo = styled.header`
    color: #fff;
    border-bottom: 1px solid #fff;
`
const TopoFundo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 8.5rem;
    background-color: #0e0b188f;
`
const TopoNavegacao = styled.nav`
    display: flex;
    gap: 2rem;
    align-items: center;
`

const TopoNavegacaoLink = styled.a`
    text-decoration: none;
    font-size: 1.2rem;
    color: #fff;
`

const TopoNavegacaoLinkBtn = styled.a`
    text-decoration: none;
    font-size: 1.2rem;
    border: 1px solid #fff;
    padding: .5rem 1.7rem;
    color: #fff;

`

function Cabecalho() {
    return (
        <Topo>
            <TopoFundo>
                <h1>Novo Sabor</h1>
                <TopoNavegacao>
                    <Link to="/menu" className="links">Menu</Link>
                    
                    <TopoNavegacaoLink href="">Serviços</TopoNavegacaoLink>
                    <TopoNavegacaoLink href="">Contato</TopoNavegacaoLink>
                    <TopoNavegacaoLinkBtn href="">Reserva</TopoNavegacaoLinkBtn>
                </TopoNavegacao>
            </TopoFundo>

            
        </Topo>
    )
}

export default Cabecalho