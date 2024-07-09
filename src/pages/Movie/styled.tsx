import styled from "styled-components";

const MoviePage = styled.div`
    background-color: black;
    color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    margin: 2rem auto;
`;

const TagLine = styled.p`
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 2rem;
`;

const Info = styled.div`
    text-align: center;
    margin: 0 1.5rem 1.5rem 1.5rem;
`;

const Title = styled.h3`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
`;

const Description = styled.div`
    padding: 5rem 0 10rem 0;
`;

const Text = styled.p`
    line-height: 1.4rem;
`;

const Grid = styled.div`
    display: flex;
`;

export {MoviePage, TagLine, Info, Description, Title, Text, Grid}