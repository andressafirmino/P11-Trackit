import styled from "styled-components";

export default function Top() {
    return (
        <ContainerTop>
            <p>TrackIt</p>
            <img src='data:image/jpeg;base64,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' />
        </ContainerTop>
    )
}


const ContainerTop = styled.div`
    height: 70px;
    background-color: #126BA5;
    position: fixed;
    top: 0;
    left: 0;
    position: relative;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    p {
        font-size: 49px;
        font-weight: 400;
        color: #FFFFFF;
        position: absolute;
        left: 18px;
        top: 10px;
    }
    img {
        width: 51px;
        height: 51px;
        position: absolute;
        top: 9px;
        right: 18px;
        border-radius: 98.5px;
    }
`
