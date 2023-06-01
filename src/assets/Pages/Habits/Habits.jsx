import styled from "styled-components"
import Top from "../../component/Top/Top"
import Footer from "../../component/Footer/Footer"
import Days from "../../component/Days/Days"
import { useState } from "react"

export default function Habits() {
    const days = [
        { day: 'D', id: 1 },
        { day: 'S', id: 2 },
        { day: 'T', id: 3 },
        { day: 'Q', id: 4 },
        { day: 'Q', id: 5 },
        { day: 'S', id: 6 },
        { day: "S", id: 7 }
    ]
    const [disabled, setDisabled] = useState(false);
    const [print, setPrint] = useState(
        <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
    )

    function unclick() {
        setDisabled(false);
    }
    function click() {
        setDisabled(true);
    }
    function create() {
        setPrint(
            <>
                <BoxAdd>
                    <input type="text" placeholder="nome do hábito" />

                    {days.map(d => {
                        {
                            disabled ? (
                                <Gray>
                                    <Days key={d.id} day={d.day} onClick={unclick} disabled={disabled} />
                                </Gray>
                            ) : (
                                <White>
                                    <Days key={d.id} day={d.day} onClick={click} disabled={disabled} />
                                </White>
                            )
                        }
                    })}

                    <Click>
                        <CancelButton>Cancelar</CancelButton>
                        <SaveButton><p>Salvar</p></SaveButton>
                    </Click>
                </BoxAdd>
                <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
            </>
        )
    }
    return (
        <>
            <Top />
            <ContainerHabits>
                <AddHabits>
                    <Title>Meus hábitos</Title>
                    <ButtonAdd onClick={create}><p>+</p></ButtonAdd>
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
const BoxAdd = styled.div`
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
        width: calc(100vw - 80px);
        display: flex;
        justify-content: flex-start;
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
const White = styled.div`
    background-color: #FFFFFF;
    color: #D4D4D4;
`
const Gray = styled.div`
    background-color: #D4D4D4;
    color: #FFFFFF;
`