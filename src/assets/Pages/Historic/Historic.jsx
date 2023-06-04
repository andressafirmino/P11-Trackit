import styled from "styled-components";
import Top from "../../component/Top/Top";
import Footer from "../../component/Footer/Footer";

export default function Historic() {
    return (
        <>
            <Top data-test="header"/>
            <ContainerHistoric>
                <Title>Histórico</Title>
                <Text>Em breve você poderá ver o histórico dos seus hábitos aqui!</Text>
            </ContainerHistoric>
            <Footer data-test="menu"/>
        </>
    );
}

export const ContainerHistoric = styled.div`
    margin-top: 28px;
    margin-left: 17px;
    margin-right: 19px;
`
export const Title = styled.p `
    font-size: 20px;
    font-weight: 400;
    color: #126BA5;
    margin-bottom: 8px;
`
export const Text = styled.p `
    font-size: 18px;
    font-weight: 400;
    color: #666666;
    margin-top: 2px;
`