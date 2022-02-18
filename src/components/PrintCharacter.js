import React from 'react';
import styled from 'styled-components';

const StyledPrintCharacter = styled.div`
    border: 2px solid green;
    margin: 20px;
    width: 60%;
    display: flex;
    flex-direction: none;
    justify-content: space-between;
    align-items: center;

    color: #9889f2;
    background-color: #141B41;

    h3 {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 1%;
        font-size: 20px;
        font-weight: normal;
        letter-spacing: .2rem;
        color: white;
    }
    p {
        color: purple;
        border: 1px solid white;
        margin-right: 1%;
        padding: 10px;
        text-shadow: 1px 1px black;
        border-top-right-radius: 10px;
        border-top-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 10px;
        background-color: white;
        opacity: 50%;
    }
`

const PrintCharacter = (props) => {
    return (
        <StyledPrintCharacter>
            <h3>{props.character.name}</h3>
            <p>{props.character.birth_year}</p>
        </StyledPrintCharacter>
    )
}

export default PrintCharacter;