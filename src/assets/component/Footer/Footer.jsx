import styled from "styled-components";
import Circle from "../../Image/Ellipse.png"
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

export default function Footer() {

    const { counter } = useContext(AuthContext);

    const fillStyles = {
        path: {
          stroke: '#FFFFFF', // cor de preenchimento da barra de progresso
          strokeLinecap: 'round',
        },
        trail: {
          stroke: '#52B6FF', // cor de fundo da barra de progresso
          strokeLinecap: 'round',
        },
      };

    return (
        <ContainerFooter data-test="menu">
            <LinkFooter to='/habitos' data-test="habit-link">Hábitos</LinkFooter>
            <Link to='/hoje' data-test="today-link">
                <div>
                    <StyledCircularProgressbar value={counter} styles={fillStyles}>
                        <Text>Hoje</Text>
                        </StyledCircularProgressbar>
                </div></Link>
            <LinkFooter to='/historico' data-test="history-link">Histórico</LinkFooter>
        </ContainerFooter>

    )
}

const ContainerFooter = styled.div`
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
    z-index: 10;
    
    link img {
        width: 91px;
        height: 91px;
        margin-bottom: 50px;
        text-decoration: none;
    }
`
const LinkFooter = styled(Link)`
    font-size: 18px;
    font-weight: 400;
    color: #52B6FF;
    text-decoration: none;
`
const StyledCircularProgressbar = styled(CircularProgressbar)`
    width: 91px;
    height: 91px;
    background-color: #52B6FF;
    border-radius: 50%;
    padding: 7px;
    transition: 0.5s;
    margin-bottom: 50px;
    position: relative;
    
`;
const Text = styled.text `
    font-size: 18px;
    font-weight: 400;
    color: #FFFFFF;
   
`