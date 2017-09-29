import styled from 'styled-components';

const Loader = styled.div`
    width: 40px;
    height: 40px;
    background-color: rgb(114, 139, 41);

    margin: 100px auto;
    animation: sk-rotateplane 1.2s infinite ease-in-out;
    
    @-webkit-keyframes sk-rotateplane {
        0% { -webkit-transform: perspective(120px) }
        50% { -webkit-transform: perspective(120px) rotateY(180deg) }
        100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
    }
    
    @keyframes sk-rotateplane {
        0% { 
            transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        } 50% { 
            transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
        } 100% { 
            transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
        }
    }
`;

export default Loader;