import styled from "styled-components"
import Top from "../../component/Top/Top"
import Footer from "../../component/Footer/Footer"
import Days from "./Days"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { AuthContext } from "../../contexts/auth"
import Lixeira from "../../Image/Lixeira.png"
import { ThreeDots } from "react-loader-spinner";


export default function Habits() {

    const { token, URL } = useContext(AuthContext);
    const [print, setPrint] = useState([]);
    const [days, setDays] = useState(["D", "S", "T", "Q", "Q", "S", "S"]);
    const [select, setSelect] = useState([]);
    const [name, setName] = useState('');
    const [habits, setHabits] = useState(0);
    const [update, setUpdate] = useState(false);
    const [create, setCreate] = useState(false);
    const [del, setDel] = useState(false);
    const [id, setId] = useState(0);
    const [disabled, setDisabled] = useState(false);
    console.log(select);
    console.log(habits);







    useEffect(() => {
        const url = `${URL}/habits`;
        const settings = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get(url, settings);
        promise.then(response => {
            setUpdate(false)
            let habits_length = response.data.length;
            setPrint(response.data)
            setHabits(habits_length)
            console.log(response.data);
        });
        promise.catch(erro => console.log('não foi'));
    }, [update]);

    function send(e) {
        e.preventDefault();
        console.log('foi');
        console.log(select);

        const create = {
            name: name,
            days: select
        }
        const url = `${URL}/habits`;
        const settings = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.post(url, create, settings);
        promise.then(() => setCreate(false), setUpdate(true));
        promise.catch(() => console.log('não foi'));


    }

    function clear() {
        const conf = window.confirm('Desejar deletar hábito?');
        if (conf) {
            const url = `${URL}/habits/${id}`
            const settings = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const promise = axios.delete(url, settings);
            setDisabled(true);
            promise.then(() => setUpdate(true), setDel(false), setDisabled(false));
            promise.catch(erro => alert(erro.response), setDisabled(false));
        }


    }


    // if (select.includes(i)) {
    //     let newArray = select.filter((item) => item !== i);
    //     setSelect(newArray);
    // } else {
    //     let newArray = [...select, i];
    //     setSelect(newArray);
    // }
    //  if(select.includes(i)) {
    //      let newArray = [...select];
    //      let position = newArray.indexOf(i);
    //      let remove = newArray.splice(position, 1);
    //      setSelect(newArray);
    //  } else {
    //      let newArray = [...select, i];
    //      setSelect(newArray);
    //  }
    // if (!select.includes(i)) {
    //     return setSelect((prevSelect) => [...prevSelect, i]);
    // }

    // function unclick(i) {
    //     console.log(i);
    //     return setSelect( ( prevSelect )  =>  prevSelect.filter( ( item )  =>  item  !==  i ) ) ;
    //     //setSelect((prevSelect) => prevSelect.filter((item) => item !== i));
    // }
    function click(i) {
        console.log(i);
        //   setSelect((prevdiasclicados) => ({
        //     ...prevdiasclicados,
        //     [i]: !prevdiasclicados[i],
        // }));
        if (!select.includes(i)) {
            return setSelect((prevSelect) => [...prevSelect, i]);
        } else {
            return setSelect((prevSelect) => prevSelect.filter((item) => item !== i));
        }
    }
    //    if(select.includes(i) === false) {
    //     return (
    //         <Day type="button" onClick={() => click(i)} >
    //             <p>{day}</p>
    //         </Day> 
    //     )
    //    } else if (select.includes(i)) {
    //     return (
    //         <Day type="button" onClick={() => unclick(i)} >
    //             <p>{day}</p>
    //         </Day> 
    //     )
    //    }



    console.log(id);

    return (



        <>

            <Top />
            <ContainerHabits>
                <AddHabits>
                    <Title>Meus hábitos</Title>
                    <ButtonAdd onClick={() => setCreate(true)} data-test="habit-create-btn"><p>+</p></ButtonAdd>
                </AddHabits>
                {del && (
                    <Delete>
                        <div>
                            <p>Deseja prosseguir? </p>
                            <div>
                                <Red onClick={() => setDel(false)}><p>Cancelar</p></Red>
                                <Green onClick={() => clear()}><p>Deletar</p></Green>
                            </div>
                        </div>
                    </Delete>
                )}
                {create && (
                    <BoxAdd onSubmit={send} data-test="habit-create-container">
                        <input type="text" placeholder="nome do hábito" value={name}
                            onChange={(e) => setName(e.target.value)} disabled={disabled} required
                            data-test="habit-name-input" />
                        <Word>
                            {days.map((day, i) =>
                                <DayStyled type="button" key={i} onClick={() => click(i)}
                                    select={select} disabled={disabled} data-test="habit-day">
                                    {day}
                                </DayStyled>
                            )}
                        </Word>
                        <Click>
                            <CancelButton type="button" data-test="habit-create-cancel-btn">Cancelar</CancelButton>
                            <SaveButton type="submit" disabled={disabled} data-test="habit-create-save-btn">
                                {disabled ? (
                                    <ThreeDots width={32} height={21}
                                        border-radius={4.5} background-color="#52B6FF"
                                        color="#FFFFFF" font-size={9} />
                                ) : (
                                    <p>Salvar</p>
                                )}

                            </SaveButton>
                        </Click>
                    </BoxAdd>
                )}
                {habits === 0 && (
                    <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
                )}
                {/**
                     * Fazer uma condicional aonde se habits for maior que zero, deve mostrar a lista dos hábitos
                     * Quando clicar em salvar, chamar função aonde eu atualizo a variavel que stiver dentro do estado
                     * 
                     */}
                {habits > 0 && (
                    <ContainerHab>
                        {print.map((hab) =>
                            <HabitStyled key={hab.id} data-test="habit-container" >
                                <p data-test="habit-name">{hab.name}</p>
                                <div>
                                    {days.map((day, i) =>
                                        <div key={i} select={select} data-test="habit-day">
                                            {day}
                                        </div>
                                    )}
                                </div>
                                <img src={Lixeira} onClick={(() => (
                                    clear(),
                                    setId(hab.id)
                                ))} data-test="habit-delete-btn" />
                            </HabitStyled>)}
                    </ContainerHab>
                )}

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
    }
    .selected {
        background-color: #CFCFCF;
        color: #FFFFFF;
    }
`
const IsSelect = styled.button`
    background-color: #CFCFCF;
    color: #FFFFFF;
`
const DayStyled = styled.button`
    background-color: #FFFFFF;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 4px;
            font-size: 20px;
            font-weight: 400;
            color:#DBDBDB;
`
const ContainerHab = styled.div`
    width: calc(100vw - 80px);
    margin: 0 auto 70px;
`
const HabitStyled = styled.div`
    width: calc(100vw - 80px);
    height: 91px;
    background-color: #FFFFFF;
    margin: 0 auto 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 15px;
    p {
        font-size: 20px;
        font-weight: 400;
        color: #666666;
        margin-bottom: 10px;
    }
    div {
        width: calc(100vw - 80px);
        height: 30px;
        display: flex;
        div {
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            border: 1px solid #D4D4D4;
            margin-right: 4px;
            color: #DBDBDB;
        }
    }
    img {
        width: 13px;
        height: 15px;
        position: absolute;
        top: 11px;
        right: 10px;
    }
`
const Delete = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    div {
        width: 300px;
        height: 150px;
        background-color: #126BA5;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-radius: 5px;
        div {
            width: 250px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            button {
                width: 100px;
                height: 40px;
                margin: 0 5px;
                border-radius: 5px;
                border: none;
    }
        }
        p {
        font-size: 23px;
        font-weight: 400;
        color: #FFFFFF;
    }
    
    }
    
`
const Red = styled.button`
    background-color: red;
`
const Green = styled.button`
    background-color: green;
`