import styled from "styled-components";
import Circle from "../../Image/Ellipse.png"
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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
            <CircleProgress to='/hoje' data-test="today-link">
            <CircularProgressbar
                    value={counter}
                    text="Hoje"
                    strokeWidth={10}
                    styles={{
                        path: { stroke: '#FFFFFF' },
                        trail: { stroke: '#52B6FF',
                        marginBottom: '50px' },
                        text: { fill: '#FFFFFF',
                         fontSize: '18px',
                         fontWeight: 400, 
                         lineHeight: '22px',
                         fontFamily: 'Lexend Deca' },
                    }}
                />
            </CircleProgress>
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
const CircleProgress = styled(Link)`
    width: 91px;
    height: 91px;
    background-color: #52B6FF;
    border-radius: 98px;
    margin-bottom : 50px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px;
`
