
import Logo from "../../Image/Logo.png";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import { ThreeDots } from "react-loader-spinner";

export default function HomePage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function login(e) {
        e.preventDefault();

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
        const login = {email, password};

        const promise = axios.post(URL, login);
        setDisabled(true);
        promise.then( response => {
            console.log(response.data);
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
                <input type='email' placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled}/>
                <input type='password' placeholder="senha" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={disabled}/>
                <button type='submit' disabled={disabled}>
                {disabled ? (
                        <ThreeDots width={32} height={21} border-radius={4.5} background-color= "#52B6FF" color="#FFFFFF" font-size={9}/>
                    ) : (
                        <p>Entrar</p>
                    )}
                    </button>
            </FormContainer>
            <LinkRegister to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></LinkRegister>
        </Container>
    )
}


const Container = styled.div`
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