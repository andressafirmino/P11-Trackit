import styled from "styled-components"
import Top from "../../component/Top/Top"
import Footer from "../../component/Footer/Footer"
import Days from "../../component/Days/Days"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { AuthContext } from "../../contexts/auth"

export default function Habits() {

    const { token, URL } = useContext(AuthContext);
    const [print, setPrint] = useState(
        <BoxAdd>
            <Word>
                <button></button>
            </Word>
        </BoxAdd>
    )
    const [days, setDays] = useState(["D", "S", "T", "Q", "Q", "S", "S"]);
    const [select, setSelect] = useState([]);
    const [name, setName] = useState('');
    const [habits, setHabits] = useState(0);

    console.log(select);

    function unclick(index) {
        setSelect((prevSelect) => prevSelect.filter((item) => item !== index));
    }
    function click(i) {
        if (!select.includes(i)) {
            return setSelect((prevSelect) => [...prevSelect, i]);
        }

    }

    function render() {
        if (habits.length === 0) {
            return (setPrint(
                <>
                    <Top />
                    <ContainerHabits>
                        <AddHabits>
                            <Title>Meus hábitos</Title>
                            <ButtonAdd onClick={() => create()} data-test="habit-create-btn"><p>+</p></ButtonAdd>
                        </AddHabits>
                        <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
    
                    </ContainerHabits>
                    <Footer />
                </>
            ))
        }

        if(habits.length > 0) {
            return (setPrint(
                <>
                    <Top />
                    <ContainerHabits>
                        <AddHabits>
                            <Title>Meus hábitos</Title>
                            <ButtonAdd onClick={() => create()} data-test="habit-create-btn"><p>+</p></ButtonAdd>
                        </AddHabits>
                        <h1>é isso</h1>
                        </ContainerHabits>
                    <Footer />
                </>
            ))
        }
    }

    useEffect(() => {
        const url = `${URL}/habits`;
        const settings = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get(url, settings);
        promise.then(response => {
            let habits_length = response.data.length;
            setHabits(habits_length)
            console.log(response.data);
            render();
        });
        promise.catch(erro => console.log('não foi'));
    }, []);
    function send(e) {
        e.preventDefault();
        console.log('foi');
        console.log(select);
        const create = {
            name: name,
            days: select
        }
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const settings = {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTI1MSwiaWF0IjoxNjg1NTg0MTE1fQ.JqrkGOuJYYxD8YbTafpybcKlLUfi58gYMBlKO1ddx5M`
            }
        }

        const promise = axios.post(URL, create, settings);
        promise.then(() => console.log('foi'));
        promise.catch(() => console.log('não foi'));


    }

    
    



    // function create() {
    //     console.log(select);
    //     return (setPrint(
    //         <>

    //         </>
    //     ))
    // }
    return ( 

    
        <>
                <Top />
                <ContainerHabits>
                    <AddHabits>
                        <Title>Meus hábitos</Title>
                        <ButtonAdd onClick={() => create()} data-test="habit-create-btn"><p>+</p></ButtonAdd>
                    </AddHabits>
                    {print}

                </ContainerHabits>
                <Footer />
            </>
    )
}

const ContainerHabits = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 17px;
    margin-top: 28px;
`
const AddHabits = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`
export const Title = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: #126BA5;
    margin-bottom: 8px;
`
export const Text = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: #666666;
    margin-top: 2px;
`
const ButtonAdd = styled.div`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 4.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        text-align: center;
        font-size: 27px;
        font-weight: 400;
        color: #FFFFFF;
    }
    div {
        display: flex;
        justify-content: flex-start;
    }
`
const BoxAdd = styled.form`
    width: calc(100vw - 40px);
    height: 180px;
    border-radius: 5px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 18px;
    margin-bottom: 29px;
    input {
        width: calc(100vw - 80px);
        height: 45px;
        border-radius: 5px;
        border:1px solid #D4D4D4;
        margin: 0 auto 8px;
        padding: 9px;
        &::placeholder {
            font-size: 20px;
            font-weight: 400;
            color: #DBDBDB;
        }
    }
    div {
        width:  calc(100vw - 80px);
    }
`
const Click = styled.div`
    width: calc(100vw - 80px);
    height: 35px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 29px;
`
const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    border: none;
    border-radius: 4.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 23px;
    p {
        font-size: 16px;
        font-weight: 400;
        color: #FFFFFF;
    }
`
const CancelButton = styled.button`
    font-size: 16px;
    font-weight: 400;
    color: #52B6FF;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
`

const Word = styled.div`
    width: calc(100vw -80px);
    height: 30px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: flex-start;
    margin: 0 auto;
    button {
        width: 30px;
        height: 30px;
        background-color: #FFFFFF;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 4px;
            font-size: 20px;
            font-weight: 400;
            color: #DBDBDB;
        
    }
`
const IsSelect = styled.button`
    background-color: #CFCFCF;
    color: #FFFFFF;
`