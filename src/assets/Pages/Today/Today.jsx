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

    const {URL, token, counter, setCounter} = useContext(AuthContext);
    const [habs, setHabs] = useState([]);
    const [day, setDay] = useState(dayjs().locale('pt-br').format('dddd, DD/MM'));
    const [countCurrent, setCountCurrent] = useState('dia');
    const [countHighest, setCountHiguest] = useState('dia');
    const navigate = useNavigate();
    const [update, setUpdate] = useState(false);
    const [total, setTotal] = useState(0);
    useEffect(() => {

        const url = `${URL}/habits/today`;
        const settings = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get(url, settings);
        promise.then(response => {
            setUpdate(false);
            let habToday = response.data;
            setHabs(habToday);
            navigate('/hoje');
            const porcentArray = response.data.map(item => item.done);
            const trueCount = porcentArray.filter(value => value === true).length;
            const integer = Math.ceil((trueCount / response.data.length) * 100);
            setCounter(integer);
            setTotal(response.data.length);
        });
        promise.catch(erro => alert(erro.response));
    }, [update]);
        
    
    return (
        <>
            <Top />
            <ContainerToday>
                <p className="first-paragraph" data-test="today">{day}</p>
                {total === 0 && (
                    <p className="second-paragraph" data-test="today-counter">Nenhum hábito concluído ainda</p>
                )}
                {counter === 0 && (
                    <p className="second-paragraph" data-test="today-counter">Nenhum hábito concluído ainda</p>
                )}
                {counter !== 0 && total !== 0 && (
                    <p className="third-paragraph" data-test="today-counter">{counter}% dos hábitos concluídos</p>
                )}
                
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
                            setUpdate={setUpdate}
                            total={total}
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
    margin: 100px auto 120px;
    .first-paragraph {
        font-family: 'Lexend Deca';
        font-size: 23px;
        font-weight: 400;
        color: #126BA5;
        margin-bottom: 4px;
    }
    .second-paragraph {
        font-family: 'Lexend Deca';
        font-size: 18px;
        font-weight: 400;
        color: #BABABA;
        margin-bottom: 28px;
    }
    .third-paragraph {
        font-family: 'Lexend Deca';
        font-size: 18px;
        font-weight: 400;
        color: #8FC549;
        margin-bottom: 28px;
    }
`
const Box = styled.div`
    width: 340px;
    height: 94px;
    background-color: #FFFFFF; 
    border-radius: 5px;
    padding: 15px;
    margin-top: 10px;
    position: relative;
    
    div {
        display: flex;
    }
`