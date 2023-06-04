import Footer from "../../component/Footer/Footer";
import Top from "../../component/Top/Top";
import styled from "styled-components";
import Progression from "./Progression";
import { useEffect, useState, useContext } from "react";
import axios from "axios"
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../contexts/auth";


export default function Today() {

    const {URL, token, update} = useContext(AuthContext);
    const [habs, setHabs] = useState([]);
    const [day, setDay] = useState(dayjs().locale('pt-br').format('dddd,DD/MM'));
    const [countCurrent, setCountCurrent] = useState('dia');
    const [countHighest, setCountHiguest] = useState('dia');
    const navigate = useNavigate();
    

    useEffect(() => {

        const url = `${URL}/habits/today`;
        const settings = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get(url, settings);
        promise.then(response => {
            console.log(response.data);
            let habToday = response.data;
            setHabs(habToday);
            navigate('/hoje');
        });
        promise.catch(erro => alert(erro.response));
    }, [update]);
        
    
    return (
        <>
            <Top />
            <ContainerToday>
                <p className="first-paragraph" data-test="today">{day}</p>
                <p className="second-paragraph">Nenhum hábito concluído</p>
                {habs.map(hab =>
                    <Box key={hab.id} data-test="today-habit-container">
                        <Progression 
                            name={hab.name}
                            currentSequence={hab.currentSequence}
                            highestSequence={hab.highestSequence}
                            done={hab.done}
                            id={hab.id}
                            countCurrent={countCurrent}
                            setCountCurrent={setCountCurrent}
                            countHighest={countHighest}
                            setCountHiguest={setCountHiguest}
                            />
                    </Box>
                )}
            </ContainerToday>

            <Footer  />
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
const Box = styled.div`
    width: 340px;
    height: 94px;
    background-color: #FFFFFF; 
    border-radius: 5px;
    padding: 15px;
    margin-top: 28px;
    position: relative;
    div {
        display: flex;
    }
`