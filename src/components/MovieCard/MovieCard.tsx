import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

import { imageurl } from "../../api";
import { LinkButton, Text, Title, CardContainer, Image } from "./styled";

export const MovieCard = ({movie, showLink = true}) => {

    return (
        <CardContainer>
            <Image src={imageurl + movie.poster_path} alt={movie.title} />
            <Title>{movie.title}</Title>
            <Text>
                <FaStar style={{color: "yellow"}}/> {movie.vote_average}
            </Text>
            {showLink && <LinkButton><Link to={`/movie/${movie.id}`}>Detalhes</Link></LinkButton>}
        </CardContainer>
    )
}