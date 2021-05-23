import {useState} from 'react';
import ccconvert from '../utility/ccconvert';
import styled from 'styled-components';

const initialValues = {
    input: "",
}

export default function Form(){
    const [state, setState] = useState(initialValues);

    const handleChange = e => {
        e.preventDefault();
        setState({...state, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        setState(initialValues)
    }
    const copyText = () => {
        let container = document.getElementById("input-container");
        let text = container.textContent;

        let newContainer = document.createElement("textarea")
        newContainer.value = text;
        document.body.appendChild(newContainer)

        newContainer.focus();
        newContainer.select();
        document.execCommand("copy");
        document.body.removeChild(newContainer);
        
        alert(`Copied ${text}`)
    }

    return(
        <MainContain>
            <h1>Input text to have it converted to CaMeLcAsE</h1>
            <h3>Click the text fields below to copy the converted text~!</h3>

            <form onSubmit={handleSubmit}>
                <input type="text" name="input" onChange={handleChange} value={state.input} placeholder="Enter text to convert here" size="90" />
                <button type="submit">Clear</button>
            </form><br />
            {
                (!state.input) ? "" :
                <Container onClick={copyText}>
                    <TextContain>
                        <h4>Input Text</h4>
                        <TextBox>{state.input}</TextBox>
                    </TextContain>
                    <TextContain>
                        <h4>Output Text</h4>
                        <TextBox id="input-container">{ccconvert(state.input)}</TextBox>
                    </TextContain>
                </Container>
            }
        </MainContain>
    )
}

const MainContain = styled.div`
width: 100%;
`

const Container = styled.div`
width: 80%;
max-width:80%;
margin: 10%;
overflow-wrap: break-word;
margin: auto;
background-image: linear-gradient(black, #282c34);
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`

const TextContain = styled.div`
width: 90%;
margin: 0 5%;
`

const TextBox = styled.p`
width: 100%;
max-width:100%;
overflow-wrap: anywhere;
`