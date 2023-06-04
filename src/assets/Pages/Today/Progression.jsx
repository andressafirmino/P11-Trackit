import axios from "axios";
import styled from "styled-components";
import vector from "../../Image/Vector.png";
import { useState } from "react";


export default function Progression(props) {
    const {name, currentSequence, highestSequence, done, id} = props;
    const [countCurrent, setCountCurrent] = useState('dia');
    const [countHighest, setCountHiguest] = useState('dia');
    if(countCurrent > 1) {
        setCountCurrent('dias');
    }
    if(countHighest > 1) {
        setCountHiguest('dias');
    }
    function uncheck() {
        console.log('foi');
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
        const settings = {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTI1MSwiaWF0IjoxNjg1NTg0MTE1fQ.JqrkGOuJYYxD8YbTafpybcKlLUfi58gYMBlKO1ddx5M`
            }
        }
        const promise = axios.post(URL, null, settings);
        promise.then(response => console.log(response));
        promise.catch(() => alert(erro.response.data.message));
    }
    function check() {
        console.log('foi');
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
        const settings = {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTI1MSwiaWF0IjoxNjg1NTg0MTE1fQ.JqrkGOuJYYxD8YbTafpybcKlLUfi58gYMBlKO1ddx5M`
            }
        }
        const promise = axios.post(URL, null, settings);
        promise.then(response => console.log(response));
        promise.catch(() => alert(erro.response.data.message));
    }

   




    if(done) {
        return (
            <Box>
                <Title>{name}</Title>
                <div><Text>Sequência atual: </Text><TextCheckIn>{currentSequence} {countCurrent}</TextCheckIn></div>
                <Text>Seu recorde: {highestSequence} {countHighest}</Text>
                <CheckIn onClick={uncheck}>
                    <img src={vector} />
                </CheckIn>
            </Box>
        )
    } else {
        return (
            <Box>
                <Title>{name}</Title>
                <Text>Sequência atual: {currentSequence} {countCurrent} </Text>
                <Text>Seu recorde: {highestSequence} {countHighest}</Text>
                <Check onClick={check}>
                    <img src={vector} />
                </Check>
            </Box>
        )
    }
    
}

const Box = styled.div `
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
const Title = styled.p `
    font-size: 20px;
    font-weight: 400;
    color: #666666;
    margin-bottom: 8px;
`
const Text = styled.p `
    font-size: 13px;
    font-weight: 400;
    color: #666666;
    margin-top: 2px;
    white-space: nowrap;
`
const TextCheckIn = styled.p `
    font-size: 13px;
    font-weight: 400;
    color: #8FC549;
    margin-top: 2px;
`
const Check = styled.button `
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
const CheckIn = styled.button `
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