import styled from "styled-components";

export default function Progression(props) {
    const {titulo, paragrafo1, paragrafo2} = props;
    return (
        <Box>
            <Title>{titulo}</Title>
            <Text>{paragrafo1}</Text>
            <Text>{paragrafo2}</Text>
            <Check></Check>
        </Box>
    )
}

const Box = styled.div `
    width: 340px;
    height: 94px;
    background-color: red;  
    padding: 15px;
    margin-top: 28px;
    position: relative;
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
`
const Check = styled.div `
    width: 69px;
    height: 69px;
    background-color: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    position: absolute;
    right: 10px;
    top: 12.5px;
`