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
const TopoTitulo = styled.h1`
    text-decoration: none;
    color: #fff;
`
const TopoNavegacao = styled.nav`
    display: flex;
    gap: 2rem;
    align-items: center;
`
const TopoNavegacaoLinkBtn = styled.a`
    text-decoration: none;
    font-size: 1.2rem;
    border: 1px solid #d3d1d1;
    padding: .5rem 1.7rem;
    color: #fff;
    border-radius: 4px;

    &:hover {
        color: #ec920bff;
        background-color: #fff;
    }
`
const TopoNavegacaoHoverLinks = styled.div`
    display: none;

    &:hover {
        display: block;
    }
`

const TopoNavegacaoHoverLinksDentro = styled.ul`
    background-color: #fff;
`
const ListaServicos = styled.li`
    color: #000;
    list-style: none;
`

function Cabecalho() {
    return (
        <Topo>
            <TopoFundo>
                <Link to="/" className="titulo"><TopoTitulo>Novo Sabor</TopoTitulo></Link>

                <TopoNavegacao>
                    <Link to="/menu" className="links">Menu</Link>
                    <Link to="/servicos" className="link-servico">Serviços</Link>
                    <TopoNavegacaoHoverLinks className="link-servico-links">
                        <TopoNavegacaoHoverLinksDentro>
                            <ListaServicos>Serviço de Buffet</ListaServicos>
                            <ListaServicos>Celebração de Casamento</ListaServicos>
                            <ListaServicos>Comemoração de Aniversário</ListaServicos>
                        </TopoNavegacaoHoverLinksDentro>
                    </TopoNavegacaoHoverLinks>
                    <Link to="/contato" className="links">Contato</Link>
                    <TopoNavegacaoLinkBtn href="">Reserva</TopoNavegacaoLinkBtn>
                </TopoNavegacao>
            </TopoFundo>

        </Topo>
    )
}

export default Cabecalho