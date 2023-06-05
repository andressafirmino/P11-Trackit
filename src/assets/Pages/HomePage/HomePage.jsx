
import Logo from "../../Image/Logo.png";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios"
import { ThreeDots } from "react-loader-spinner";
import { AuthContext } from "../../contexts/auth";

export default function HomePage() {

    const {setToken, setImage, URL} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function login(e) {
        e.preventDefault();

        const url = `${URL}/auth/login`;
        const login = {email, password};

        const promise = axios.post(url, login);
        setDisabled(true);
        promise.then( response => {
            setToken(response.data.token);
            console.log(response.data.token);
            setImage(response.data.image);
            navigate('/hoje');
        });
        
        promise.catch( erro => {
            alert(erro.response.data.message)
            setDisabled(false);
        });
    }

    return (
        <Container>
            <img src={Logo} />
            <FormContainer onSubmit={login}>
                <input type='email' placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled} data-test="email-input"/>
                <input type='password' placeholder="senha" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={disabled} data-test="password-input"/>
                <button type='submit' disabled={disabled} data-test="login-btn">
                {disabled ? (
                        <ThreeDots width={32} height={21} border-radius={4.5} background-color= "#52B6FF" color="#FFFFFF" font-size={9}/>
                    ) : (
                        <p>Entrar</p>
                    )}
                    </button>
            </FormContainer>
            <LinkRegister to="/cadastro" data-test="signup-link"><p>Não tem uma conta? Cadastre-se!</p></LinkRegister>
        </Container>
    )
}


const Container = styled.div`
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;

    img {
        width: 180px;
        height: 178px;
        margin: 68px auto 33px;
        }
    input {
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border:1px solid #D4D4D4;
        margin: 0 auto 6px;
        padding-left: 9px;
        &::placeholder {
            font-size: 20px;
            font-weight: 400;
            color: #DBDBDB;
        }
    }
    
`
const FormContainer = styled.form`
    width: 303px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    input {
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border:1px solid #D4D4D4;
        margin: 0 auto 6px;
        padding-left: 9px;
            &::placeholder {
            font-size: 20px;
            font-weight: 400;
            color: #DBDBDB;
        }
    }
    button {
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: none;
        background-color: #52B6FF;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 25px;
        p {
            font-size: 21px;
            font-weight: 400;
            color: #FFFFFF;
        }
    }
`
const LinkSignUp = styled(Link)`
    text-decoration: none;
    button {
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: none;
        background-color: #52B6FF;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 25px;
        text-decoration: none;
        p {
            font-size: 21px;
            font-weight: 400;
            color: #FFFFFF;
        }
    }
    
`
const LinkRegister = styled(Link)`
    color: #52B6FF;
    margin: 0 auto;
    p {
        font-size: 14px;
        font-weight: 400;
      }
` 