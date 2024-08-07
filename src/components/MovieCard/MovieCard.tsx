import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

import { imageurl } from "../../api";
import { CardType } from "../../types";
import { LinkButton, Text, Title, CardContainer, Image, IconsContainer, LikeButton } from "./styled";


export const MovieCard = ({click, movie, showLink = true}: CardType) => {

    return (
        <CardContainer>
            <Image src={imageurl + movie.poster_path} alt={movie.title} />
            <Title>{movie.title}</Title>
            <Text>
                <FaStar style={{color: "yellow"}}/> {Math.round(movie.vote_average)}
            </Text>
            <IconsContainer>
                {showLink && <LinkButton><Link to={`/movie/${movie.id}`}>Detalhes</Link></LinkButton>}
            <LikeButton onClick={() => click(movie.id)}>
                    <FaHeart style={{width: '40px', height: '40px'}} />
            </LikeButton>
            </IconsContainer>
        </CardContainer>
    )
}