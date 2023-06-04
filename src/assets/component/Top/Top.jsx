import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

export default function Top() {

    const {image} = useContext(AuthContext);
    return (
        <ContainerTop data-test="header">
            <Link to='/'><p>TrackIt</p></Link>
            <img src={image} data-test="avatar"/>
        </ContainerTop>
    )
}


const ContainerTop = styled.div`
    width: 100%;
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
