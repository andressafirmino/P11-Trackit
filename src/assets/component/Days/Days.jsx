import styled from "styled-components";

export default function Days(props) {
   const {day, select } = props;
    return (
        <Day select={select}>
            <p>{day}</p>
        </Day> 
    )
}

const Day = styled.button `
   
`
