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
    &.title {color: red;}
`;

const LinkButton = styled.a`
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
    margin-bottom: 1rem;
`;
    
export { LinkButton, Title, Text, CardContainer, Image }