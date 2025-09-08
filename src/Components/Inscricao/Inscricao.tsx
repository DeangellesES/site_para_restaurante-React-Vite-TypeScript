import styled from "styled-components"

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
    font-family: 'Pacifico', sans-serif;
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
    border: 1px solid #b8b4b4;
    margin-right: 1.5rem;
    width: 25%;
    background-color: transparent;
    border-radius: 5px;

    &::placeholder {
        color: #fff;
        font-size: 1.1rem;
    }
`

// FUNCAO TRAZER DE BAIXO TITULO 
function mouseScrollTituloDois() {
    const scroll = document.querySelectorAll('.js-scroll-titulo-dois')
    const height = window.innerHeight * 0.6
    scroll[0].classList.add('ativo')
    scroll.forEach((section) => {
        const sectionTop = (section.getBoundingClientRect().top - height) < 0
        if (sectionTop) {
            section.classList.add('ativo')
        }
    })
}

window.addEventListener('scroll', mouseScrollTituloDois)


function Inscricao() {
    return (
        <SecaoInscricao>
            <div className="js-scroll-titulo-dois">
                <SecaoInscricaoTitulo>Inscreva-se</SecaoInscricaoTitulo>
                <SecaoInscricaoParagrafo>Seja o primeiro a saber sobre os novos modelos.</SecaoInscricaoParagrafo>
            </div>

            <form action="" className="js-scroll">
                <SecaoInscricaoInput type="email" placeholder="Your Email" />
                <SecaoInscricaoAncora href="">Inscreva-se</SecaoInscricaoAncora>
            </form>
        </SecaoInscricao>
    )
}

export default Inscricao