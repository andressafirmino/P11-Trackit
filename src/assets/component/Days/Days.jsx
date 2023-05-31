import styled from "styled-components";

export default function Days(props) {
    const {day} = props;
    return (
        <Day>
            <p>{day}</p>
        </Day> 
    )
}

const Day = styled.button `
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #FFFFFF;
    margin-right: 4px;
    p {
        font-size: 20px;
        font-weight: 400;
        color: #DBDBDB;
    }
`