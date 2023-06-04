import styled from "styled-components";
import Circle from "../../Image/Ellipse.png"
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <ContainerFooter data-test="menu">
            <LinkFooter to='/habitos' data-test="habit-link">Hábitos</LinkFooter>
            <Link to='/hoje' data-test="today-link"><img src={Circle} /></Link>
            <LinkFooter to='/historico' data-test="history-link">Histórico</LinkFooter>
        </ContainerFooter>
        
    )
}

const ContainerFooter = styled.div `
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0 36px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    link img {
        width: 91px;
        height: 91px;
        margin-bottom: 50px;
        text-decoration: none;
    }
`
const LinkFooter = styled(Link) `
    font-size: 18px;
    font-weight: 400;
    color: #52B6FF;
    text-decoration: none;
`