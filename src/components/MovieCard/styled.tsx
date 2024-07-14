import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    width: 30%;
    color: #FFF;
    margin-bottom: 2.5rem;
    flex-direction: column;
    justify-content: space-between;
    background-color: #111;
    padding: 1rem;
    text-align: center;
`;

const LinkButton = styled.a`
    width: 75%;
    margin-right: 0.5rem;
    background-color: #F7D354;
    border: 2px solid #F7D354;
    border-radius: 4px;
    color: #000;
    padding: 1rem 0.5rem;
    text-align: center;
    font-weight: bold;
    transition: .4s;
    &:hover {
        background-color: transparent;
        color: #F7D354;
    }
`;

const Image = styled.img`
    max-width: 100%;
    margin-bottom: 1rem;
`;

const Title = styled.h4`
    margin-bottom: 1rem;
`

const Text = styled.p`
    display flex;
    margin: 0 0.5rem 1rem 0;
`;

const IconsContainer= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LikeButton = styled.a`
    width: 25%;
    color: #e84227;
    cursor: pointer;
`;
    
export { LinkButton, Title, Text, CardContainer, Image, IconsContainer, LikeButton }