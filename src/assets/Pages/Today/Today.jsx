import Footer from "../../component/Footer/Footer";
import Top from "../../component/Top/Top";
import styled from "styled-components";
import Progression from "./Progression";
import { useEffect, useState } from "react";
import axios from "axios"
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';


export default function Today() {

    const [habs, setHabs] = useState([]);
    const [day, setDay] = useState(dayjs().locale('pt-br').format('dddd,DD/MM'));
    const [counter, setCounter] = useState(0);

    console.log(counter);

    useEffect ( () => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
        const settings = {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTI1MSwiaWF0IjoxNjg1NTg0MTE1fQ.JqrkGOuJYYxD8YbTafpybcKlLUfi58gYMBlKO1ddx5M'
            }
        }
        const promise = axios.get(URL, settings);
        promise.then(response => {
            console.log(response.data);
            let habToday = response.data;
            setHabs(habToday);
        });
        promise.catch(erro => alert(erro.response));
    } , []);
    return (
        <>
            <Top data-test="header"/>
            <ContainerToday>
                <p className="first-paragraph" data-test="today">{day}</p>
                <p className="second-paragraph">Nenhum hábito concluído</p>
                    {habs.map(hab => 
                        <Progression key={hab.id} 
                        name={hab.name} 
                        currentSequence={hab.currentSequence} 
                        highestSequence={hab.highestSequence} 
                        done={hab.done} 
                        id={hab.id} 
                        counter={counter} 
                        setCounter={setCounter}/>
                    )}
            </ContainerToday>

            <Footer data-test="menu"/>
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