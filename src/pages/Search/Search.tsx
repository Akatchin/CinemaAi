import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { api } from "../../api";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Container, Title, MovieContainer } from "./styled";
import { Types } from "../../types";



const Search = () => {

    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");

    useEffect(() => {
        api.search(query)
        .then((data) => {
            setMovies(data.results);
        });
    },[query]);


    return (
    <Container>
        <Title>Resultados para: {query} </Title>
        <MovieContainer>
            {movies.length === 0 && <p>Carregando...</p>}
            {movies.length > 0 && movies.map((movie: Types) => {
                return (
                <>
                <MovieCard click={undefined} key={movie.id} movie={movie}/>
                </>)
            })}
        </MovieContainer>
    </Container>
    )
}
export default Search;