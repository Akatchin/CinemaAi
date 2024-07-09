import { useState, useEffect, useContext } from "react";
import { FaStar } from "react-icons/fa";

import { api, imageurl } from "../../api";
import { FavContext } from "../../contexts/MovieList";
import { CardContainer, Image, Title, Text, MoviesContainer } from "./styled";
import { Types } from "../../types";

const Favorites = () => {

    const {favorites} = useContext(FavContext);
    const [topMovies, setTopMovies] = useState([]);

    useEffect(() => {
        api.getTopRatedMovies() 
            .then((res) => {
                setTopMovies(res.results)
            })
            console.log(topMovies)
    },[]);

return (
    <MoviesContainer>
    {favorites.length === 0 && <p style={{color: 'white'}}>Sua lista está vázia</p>}
    {topMovies.map((movie: Types) => {
        if(favorites.includes(movie.id)) {
            return (
                <CardContainer>
                    <Image src={imageurl + movie.poster_path} alt={movie.title}/>
                    <Title>{movie.title}</Title>
                    <Text>
                        <FaStar style={{color: "yellow"}}/> {Math.round(movie.vote_average)}
                    </Text>
                </CardContainer>
            )
        } 
    })}
    </MoviesContainer>
)}

export default Favorites;