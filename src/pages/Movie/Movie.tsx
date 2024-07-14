import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { 
    BsGraphUp, 
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from "react-icons/bs";

import { api } from "../../api";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { FavContext } from "../../contexts/MovieList";
import { MoviePage, TagLine, Info, Description, Title, Text, Grid } from "./styled";
import { MovieType } from "../../types";

const Movie = () => {
    
    const {id} = useParams();
    const [movie, setMovie] = useState<MovieType>();
    const {favorites} = useContext(FavContext);

    useEffect(() => {
        api.getMovie(id)
            .then((res) => {
                setMovie(res)
            })
            console.log(favorites)
    }, [])

    const formatCurrency = (num: number) => {
        return num.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }

    return (
        <MoviePage>
            {movie && (
                <>                
                <MovieCard click={() => {}} movie={movie.props} showLink={false}/>
                <TagLine>{movie.title}</TagLine>
                <Grid>
                  <Info>
                    <Title>
                        <BsWallet2 style={{fontSize: "1.5rem", color: "#F7D354"}}/> Orçamento:
                    </Title>
                    <Text>{formatCurrency(movie.budget)}</Text>
                  </Info>

                  <Info>
                    <Title>
                        <BsGraphUp style={{fontSize: "1.5rem", color: "#F7D354"}}/> Receita:
                    </Title>
                    <Text>{formatCurrency(movie.revenue)}</Text>
                  </Info>
                
                  <Info>
                    <Title>
                        <BsHourglassSplit style={{fontSize: "1.5rem", color: "#F7D354"}}/> Duração:
                    </Title>
                    <Text>{movie.runtime} minutos</Text>
                  </Info>
                  </Grid>
                  
                  <Description>
                    <Title>
                        <BsFillFileEarmarkTextFill style={{fontSize: "1.5rem", color: "#F7D354"}}/> Descrição:
                    </Title>
                    <Text>{movie.overview}</Text>
                  </Description>  
                </>
            )}
        </MoviePage>
    )
}

export default Movie;