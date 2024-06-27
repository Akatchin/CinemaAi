import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

import { api, imageurl } from "../../api";
import { Card } from "./styled";

export const MovieCard = ({movie, showLink}) => {

    return (
        <Card>
            <img src={imageurl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar/> {movie.vote_average}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </Card>
    )
}