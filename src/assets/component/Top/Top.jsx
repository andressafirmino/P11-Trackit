import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

export default function Top() {

    const {image} = useContext(AuthContext);
    return (
        <ContainerTop data-test="header">
            <LinkHomePage to='/'><p>TrackIt</p></LinkHomePage>
            <img src={image} data-test="avatar"/>
        </ContainerTop>
    )
}


const ContainerTop = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    z-index: 10;
    
    p {
        font-family: 'Playball';
        font-size: 49px;
        font-weight: 400;
        color: #FFFFFF;
        left: 18px;
        top: 10px;
        text-decoration: none;
    }
    img {
        width: 51px;
        height: 51px;
        top: 9px;
        right: 18px;
        border-radius: 98.5px;
    }
`
const LinkHomePage = styled(Link) `
    text-decoration: none;
`