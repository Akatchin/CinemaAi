import { useState, useEffect } from "react";

import { api } from "../../api";
import { Container, Title, MoviesContainer } from "./styled";
import { MovieCard } from "../../components/MovieCard/MovieCard";

const Home = () => {

    const [topMovies, setTopMovies] = useState([])

    useEffect(() => {
        api.getTopRatedMovies()
            .then((res) => {
                setTopMovies(res.results)
            })
    },[]);

    return (
        <Container>
            <Title>Melhores filmes</Title>
            <MoviesContainer>
                {topMovies.length > 0 && topMovies.map((movie) => {
                    return (
                    <>
                    <MovieCard movie={movie}/>
                    </>)
                })}
            </MoviesContainer>
        </Container>
    )
}

export default Home;
