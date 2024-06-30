import styled from "styled-components";

const Container = styled.div`
    color: #FFF;
    background-color: black;
    font-size: 2.5rem;
    text-align: center;
    padding-top: 2rem;
`;

const Title = styled.h2`
    color: #FFF;
    font-size: 2.5rem;
    text-align: center;
    margin: 2rem 0 1rem;
`;

const MovieContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
`;

export {Container, Title, MovieContainer}