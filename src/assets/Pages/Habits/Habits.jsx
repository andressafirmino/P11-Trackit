import styled from "styled-components"
import Top from "../../component/Top/Top"
import Footer from "../../component/Footer/Footer"
import Days from "../../component/Days/Days"
import { useEffect, useState } from "react"

export default function Habits() {
 
    const [select, setSelect] = useState([
        { day: 'D', id: 1, status: false},
        { day: 'S', id: 2, status: false },
        { day: 'T', id: 3, status: false },
        { day: 'Q', id: 4, status: false },
        { day: 'Q', id: 5, status: false },
        { day: 'S', id: 6, status: false },
        { day: "S", id: 7, status: false }
    ]);

    
    const [print, setPrint] = useState(
        <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
    )

 

    function unclick(id) {
        console.log('até aqui foi');
        const updatedSelect = select.filter(item => item.id !== id);
        setSelect(updatedSelect);
       
    }
    function click(id) {
        const updatedSelect = select.map((item) => {
            if (item.id === id) {
              return { ...item, status: !item.status};
            }
            return item;
        });
        setSelect(updatedSelect);
    }
      
    console.log(select);
    function create() {

        
        setPrint(
            <>
                <BoxAdd>
                    <input type="text" placeholder="nome do hábito" />
                    <Word>
                        {select.map(day => {
                            if ( day.status === false) {
                                return (
                                    <WordUnclick key={day.id} onClick={() => click(day.id)} >
                                        <p>{day.day}</p>
                                    </WordUnclick>
                                    
                                )
                            } else {
                                return (
                                    <WordClick key={day.id} onClick={() => unclick(day.id)} >
                                       <p>{day.day}</p>
                                    </WordClick>
                                )
                            }
                        })}
                    </Word>
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

const Word = styled.div `
    width: calc(100vw -80px);
    height: 30px;
    display: flex;
    justify-content: flex-start;
    margin: 0 auto;
    button {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-right: 4px;
        p {
            font-size: 20px;
            font-weight: 400;
        }
    }
`
const WordClick = styled.button`
    background-color: #CFCFCF;
    border: 1px solid #CFCFCF;
    p {
        color: #FFFFFF;
    }
`
const WordUnclick = styled.button`
    background-color: #FFFFFF;
    border: 1px solid #D4D4D4;
    p {
        color: #DBDBDB;
    }
`