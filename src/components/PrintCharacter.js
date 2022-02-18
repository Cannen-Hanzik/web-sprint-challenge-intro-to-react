import React from 'react';
import styled from 'styled-components';

const StyledPrintCharacter = styled.div`
    border: 2px solid emeraldgreen;
    margin: 20px;
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #9889f2;
    background-color: #141B41;

    h3 {
        font-size: 20px;
        opacity: 100%;
        font-weight: normal;
        letter-spacing: .2rem;
    }

    &::after {
        content: `${pr => pr.character.birth_year}`;
    }
`

const PrintCharacter = (props) => {
    return (
        <StyledPrintCharacter>
            <h3>{props.character.name} </h3>
        </StyledPrintCharacter>
    )
}

export default PrintCharacter;