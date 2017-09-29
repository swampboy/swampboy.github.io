import React from 'react';
import styled from 'styled-components';
import { Image } from '../../Elements';
import about from '../../Assets/Images/about.png';
import { fetchAboutCopy } from '../../Redux/actions';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;    
    height: 75vh;
`;

const Wrapper = styled.section`
    text-transform: uppercase;
    display: flex;
    justify-content: center;
`;

const StyledImage = styled(Image)`
    max-width: 30%;
`;

const H1 = styled.h1`
    padding: 0px;
    font-weight: bold;

    @media (max-device-width: 320px)  {
    }
`;
    
const H2 = styled.h2`
    margin 0 0 2em 0;
    padding: 0;
    font-weight: bold;
`;

const P = styled.p`;
    margin: 0px;
    padding: 0;
    text-transform: none;    
`;

const Copy = styled.article`;
    align-self: flex-end;
    max-width: 363px;
`;

const enhance = compose(
    connect((state) => ({
        author: state.about.data.Author || {}
    }), null),
    lifecycle({
        componentDidMount() {
            const { dispatch } = this.props;
            dispatch(fetchAboutCopy());
        }
    }),
);

const About = enhance(({ author: { authorName, city, authorBibliography, authorImage } }) => (
    <Container>
        <StyledImage src={authorImage.url} alt={authorName} />
        <Wrapper>
            <Copy>
                <H1>{authorName}</H1>
                <H2>{city}</H2>
                <P>{authorBibliography}.</P>
            </Copy>
        </Wrapper>
    </Container>
));

export default About;