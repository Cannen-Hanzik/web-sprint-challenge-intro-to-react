// Write your Character component here
import React from 'react';
import styled from 'styled-components';

// importing printcharacter
import PrintCharacter from './PrintCharacter';

const StyledChar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
`

const Character = (props) => {
    return (
        <StyledChar>
            { props.characters.map(char => (
                <PrintCharacter character={char} key={char.name} year={char.birth_year} />
            ))}
        </StyledChar>
    )
}

export default Character;