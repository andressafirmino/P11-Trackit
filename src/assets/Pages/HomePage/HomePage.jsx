
import Logo from "../../Image/Logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function HomePage() {

    return (
        <Container>
            <img src={Logo} />
            <input placeholder="email" />
            <input placeholder="senha" />
            <button><Link to='/hoje'><p>Entrar</p></Link></button>
            <LinkRegister to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></LinkRegister>
        </Container>
    )
}


const Container = styled.div `
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;

    img {
        width: 180px;
        height: 178px;
        margin: 68px auto 33px;
        }
    input {
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border:1px solid #D4D4D4;
        margin: 0 auto 6px;
        padding-left: 9px;
        &::placeholder {
            font-size: 20px;
            font-weight: 400;
            color: #DBDBDB;
        }
    }
    button {
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: none;
        background-color: #52B6FF;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 25px;
        p {
            font-size: 21px;
            font-weight: 400;
            color: #FFFFFF;
        }
    }
    
`
const LinkRegister = styled(Link) `
    color: #52B6FF;
    margin: 0 auto;
    p {
        font-size: 14px;
        font-weight: 400;
      }
` 