import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { 
    BsGraphUp, 
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from "react-icons/bs";

import { api } from "../../api";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { MoviePage, TagLine, Info, Description, Title, Text, Grid } from "./styled";
import { MovieType } from "../../types";

const Movie = () => {
    
    const {id} = useParams();
    const [movies, setMovies] = useState<MovieType>();
    
    useEffect(() => {
        api.getMovie(id)
            .then((res) => {
                setMovies(res);
            })
            console.log(movies);
    }, []);

    const formatCurrency = (num: number) => {
        return num.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });
    };

    return (
        <MoviePage>
            {movies && (
                <>                
                <MovieCard click={() => {}} movie={movies} showLink={false}/>
                <TagLine>{movies.title}</TagLine>
                <Grid>
                  <Info>
                    <Title>
                        <BsWallet2 style={{fontSize: "1.5rem", color: "#F7D354"}}/> Orçamento:
                    </Title>
                    <Text>{formatCurrency(movies.budget)}</Text>
                  </Info>

                  <Info>
                    <Title>
                        <BsGraphUp style={{fontSize: "1.5rem", color: "#F7D354"}}/> Receita:
                    </Title>
                    <Text>{formatCurrency(movies.revenue)}</Text>
                  </Info>
                
                  <Info>
                    <Title>
                        <BsHourglassSplit style={{fontSize: "1.5rem", color: "#F7D354"}}/> Duração:
                    </Title>
                    <Text>{movies.runtime} minutos</Text>
                  </Info>
                  </Grid>
                  
                  <Description>
                    <Title>
                        <BsFillFileEarmarkTextFill style={{fontSize: "1.5rem", color: "#F7D354"}}/> Descrição:
                    </Title>
                    <Text>{movies.overview}</Text>
                  </Description>  
                </>
            )}
        </MoviePage>
    )
}

export default Movie;