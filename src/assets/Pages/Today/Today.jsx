import Footer from "../../component/Footer/Footer";
import Top from "../../component/Top/Top";
import styled from "styled-components";
import Progression from "../../component/Progression/Progression";


export default function Today() {

    const habitos = [
        { titulo: 'AAA', paragrafo1: 'aaaa', paragrafo2: 'aaaa' },
        { titulo: 'BBB', paragrafo1: 'bbbb', paragrafo2: 'bbbb' },
        { titulo: 'CCC', paragrafo1: 'cccc', paragrafo2: 'cccc' },
    ]
    return (
        <>
            <Top />
            <ContainerToday>
                <p className="first-paragraph">Dia da semana</p>
                <p className="second-paragraph">Nenhum hábito concluído</p>
                    {habitos.map(hab => 
                        <Progression key={hab.titulo} titulo={hab.titulo} paragrafo1={hab.paragrafo1} paragrafo2={hab.paragrafo2} />
                    )}
            </ContainerToday>

            <Footer />
        </>
    )
}

const ContainerToday = styled.div`
    width: 100%;
    height: 100%;  
    padding-left: 17px;
    margin: 28px auto;
    .first-paragraph {
        font-size: 23px;
        font-weight: 400;
        color: #126BA5;
    }
    .second-paragraph {
        font-size: 18px;
        font-weight: 400;
        color: #BABABA;
    }
    
`