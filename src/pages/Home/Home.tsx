import { useState, useEffect, useContext } from "react";

import { api } from "../../api";
import { FavContext } from "../../contexts/MovieList";
import { Container, Title, MoviesContainer } from "./styled";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Types } from "../../types";
import { Link } from "react-router-dom";

const Home = () => {

    const [topMovies, setTopMovies] = useState([]);
    const {addFavorites} = useContext(FavContext);
    const [favorites, setFavorites] = useState(Array<Number>)

    useEffect(() => {
        api.getTopRatedMovies() 
            .then((res) => {
                setTopMovies(res.results)
            })
            
    },[]);


    const addFavList = (favId: number) => {
        if(!favorites.includes(favId)){
            setFavorites(Array.of(...favorites, favId));
            addFavorites(favorites);
        } else {
            console.log("valor repetido")
            return
        }
    }

    return (
        <Container>
            <Title>Melhores filmes</Title>
            <MoviesContainer>
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie: Types) => {
                    return (
                    <>
                    <MovieCard click={addFavList} key={movie.id} movie={movie}/>
                    
                    </>)
                })}
            </MoviesContainer>
            <Link style={{color: 'white'}} to={"/favorites"}>Click</Link>
        </Container>
    )
}

export default Home;
