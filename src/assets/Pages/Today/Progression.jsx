import axios from "axios";
import styled from "styled-components";
import vector from "../../Image/Vector.png";
import { useContext} from "react";
import {AuthContext} from "../../contexts/auth";
import { useNavigate } from "react-router-dom";



export default function Progression(props) {
                            
    const { name, currentSequence, highestSequence, done, id, 
        counter, setCounter, countCurrent, setCountCurrent,
        countHighest, setCountHiguest, setUpdate} = props;
    const {URL, token} = useContext(AuthContext);
    const navigate = useNavigate();
    if (countCurrent <= 1) {
        setCountCurrent('dias');
    }
    if (countHighest > 1) {
        setCountHiguest('dias');
    }
    function uncheck() {
        const url = `${URL}/habits/${id}/uncheck`;
        const settings = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.post(url, id, settings);
        promise.then(() => {
            setUpdate(true);
            navigate('/hoje')});
        promise.catch(() => alert(erro.response.data.message));
        
    }
    function check() {
        const url = `${URL}/habits/${id}/check`;
        const settings = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.post(url, id, settings);
        promise.then(() => {
            setUpdate(true);
            navigate('/hoje')});
        promise.catch(() => alert(erro.response.data.message));
    }

    if (done === true && currentSequence === highestSequence && currentSequence > 0) {
        return (
            <>
                <Title data-test="today-habit-name">{name}</Title>
                <div data-test="today-habit-sequence"><Text>Sequência atual: </Text><TextCheckIn>{currentSequence} {countCurrent}</TextCheckIn></div>
                <div data-test="today-habit-record"><Text>Seu recorde: </Text><TextCheckIn>{highestSequence} {countHighest}</TextCheckIn></div>
                <CheckIn onClick={uncheck} data-test="today-habit-check-btn">
                    <img src={vector} />
                </CheckIn>
            </>
        )
    } else if(done === false && currentSequence === highestSequence && currentSequence > 0) {
        return (
            <>
                <Title data-test="today-habit-name">{name}</Title>
                <div data-test="today-habit-sequence"><Text>Sequência atual: {currentSequence} {countCurrent}</Text></div>
                <div data-test="today-habit-record"><Text>Seu recorde: {highestSequence} {countHighest}</Text></div>
                <Check onClick={check} data-test="today-habit-check-btn">
                    <img src={vector} />
                </Check>
            </>
        )
    }

    if (done === true && currentSequence < highestSequence && currentSequence > 0) {
        return (
            <>
                <Title data-test="today-habit-name">{name}</Title>
                <div data-test="today-habit-sequence"><Text>Sequência atual: </Text><TextCheckIn>{currentSequence} {countCurrent}</TextCheckIn></div>
                <Text data-test="today-habit-record">Seu recorde: {highestSequence} {countHighest}</Text>
                <CheckIn onClick={uncheck} data-test="today-habit-check-btn">
                    <img src={vector} />
                </CheckIn>
            </>
        )
    } else {
        return (
            <>
                <Title data-test="today-habit-name">{name}</Title>
                <Text data-test="today-habit-sequence">Sequência atual: {currentSequence} {countCurrent} </Text>
                <Text data-test="today-habit-record">Seu recorde: {highestSequence} {countHighest}</Text>
                <Check onClick={check} data-test="today-habit-check-btn">
                    <img src={vector} />
                </Check>
            </>
        )
    }

}


const Title = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: #666666;
    margin-bottom: 8px;
`
const Text = styled.p`
    font-size: 13px;
    font-weight: 400;
    color: #666666;
    margin-top: 2px;
    white-space: nowrap;
`
const TextCheckIn = styled.p`
    font-size: 13px;
    font-weight: 400;
    color: #8FC549;
    margin-top: 2px;
`
const Check = styled.button`
    width: 69px;
    height: 69px;
    background-color: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    position: absolute;
    right: 10px;
    top: 12.5px;
    img {
        width: 35px;
        height: 28px;
    }
`
const CheckIn = styled.button`
    width: 69px;
    height: 69px;
    background-color: #8FC549;
    border: none;
    border-radius: 5px;
    position: absolute;
    right: 10px;
    top: 12.5px;
    img {
        width: 35px;
        height: 28px;
    }
`
