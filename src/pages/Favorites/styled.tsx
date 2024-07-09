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

const MoviesContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
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

 
export { Title, Text, CardContainer, MoviesContainer, Image }