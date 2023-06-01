import Footer from "../../component/Footer/Footer";
import Top from "../../component/Top/Top";
import styled from "styled-components";
import Progression from "../../component/Progression/Progression";
import { useEffect } from "react";
import axios from "axios"


export default function Today() {

    const habitos = [
        { titulo: 'AAA', paragrafo1: 'aaaa', paragrafo2: 'aaaa' },
        { titulo: 'BBB', paragrafo1: 'bbbb', paragrafo2: 'bbbb' },
        { titulo: 'CCC', paragrafo1: 'cccc', paragrafo2: 'cccc' },
    ]

    useEffect ( () => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
        const settings = {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTI1MSwiaWF0IjoxNjg1NTg0MTE1fQ.JqrkGOuJYYxD8YbTafpybcKlLUfi58gYMBlKO1ddx5M'
            }
        }
        const promise = axios.get(URL, settings);
        promise.then(response => console.log(response.data));
        promise.catch(erro => alert(erro.response));
    } , []);
    return (
        <>
            <Top />
            <ContainerToday>
                <p className="first-paragraph">Dia da semana</p>
                <p className="second-paragraph">Nenhum hábito concluído</p>
                    {habitos.map(hab => 
                        <Progression key={hab.titulo} titulo={hab.titulo} paragrafo1={hab.paragrafo1} paragrafo2={hab.paragrafo2} />
                    )}
            </ContainerToday>

            <Footer />
        </>
    )
}

const ContainerToday = styled.div`
    width: 100%;
    height: 100%;  
    padding-left: 17px;
    margin: 28px auto;
    .first-paragraph {
        font-size: 23px;
        font-weight: 400;
        color: #126BA5;
    }
    .second-paragraph {
        font-size: 18px;
        font-weight: 400;
        color: #BABABA;
    }
    
`