import React from 'react';
import { Image } from '../../Elements';
import swamp from '../../Assets/Images/swamp.png';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    max-width: 500px;
`;

const GatorButch = styled(Image)`
    padding: 
`;

const Swamp = props => {
    return (
        <Wrapper>
            <GatorButch src={swamp} />
        </Wrapper>
    );
};

export default Swamp;